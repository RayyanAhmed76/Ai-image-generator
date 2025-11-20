"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "../components/Nav";

export default function Page(): JSX.Element {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [showLoader, setShowLoader] = useState(false);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const confettiRef = useRef<HTMLDivElement | null>(null);
  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // ----------------- TOAST -----------------
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const showToast = (text: string, ms = 3000) => {
    setToastMsg(text);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(
      () => setToastMsg(null),
      ms
    ) as unknown as number;
  };
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent)?.detail as any;
      showToast(detail?.message ?? "Notification");
    };
    window.addEventListener("app:notify", handler as EventListener);
    return () =>
      window.removeEventListener("app:notify", handler as EventListener);
  }, []);

  // ----------------- USAGE CHECK -----------------
  useEffect(() => {
    const checkUsage = async () => {
      try {
        const res = await fetch("/api/check-usage");
        const data = await res.json();
        if (data.limitReached && !data.isSubscribed)
          router.replace("/subscribe");
      } catch (err) {
        console.error("Error checking usage:", err);
      }
    };
    checkUsage();
  }, [router]);

  // ----------------- POLLING -----------------
  const clearPolling = () => {
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
      pollIntervalRef.current = null;
    }
  };
  useEffect(() => {
    return () => clearPolling();
  }, []);

  const startPolling = (pollingUrl: string) => {
    clearPolling();
    let pollAttempts = 0;
    const maxAttempts = 60;
    const intervalMs = 2000;

    const doPoll = async () => {
      pollAttempts++;
      try {
        const pollRes = await fetch("/api/fetch_result", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pollingUrl }),
        });

        const pollData = await pollRes.json().catch(() => null);

        if (!pollData) {
          if (pollAttempts >= maxAttempts) {
            clearPolling();
            setShowLoader(false);
            setLoading(false);
            showToast("Generation timeout. Please try again.");
          }
          return;
        }

        if (pollData?.imageUrl) {
          clearPolling();
          setResultUrl(pollData.imageUrl);
          setShowLoader(false);
          setLoading(false);
          showToast("Generated!");
          return;
        }

        if (pollData?.ready === true) {
          clearPolling();
          setShowLoader(false);
          setLoading(false);
          showToast(
            "Job completed but no image returned. Try again or contact support."
          );
          return;
        }

        if (pollAttempts >= maxAttempts) {
          clearPolling();
          setShowLoader(false);
          setLoading(false);
          showToast("Generation timeout. Please try again.");
        }
      } catch (err) {
        console.error("Polling error:", err);
        if (pollAttempts >= maxAttempts) {
          clearPolling();
          setShowLoader(false);
          setLoading(false);
          showToast("Error fetching result. Please try again.");
        }
      }
    };

    doPoll();
    pollIntervalRef.current = setInterval(doPoll, intervalMs);
  };

  // ----------------- IMAGE COMPRESSION -----------------
  const compressImage = (
    file: File,
    maxWidth: number,
    maxHeight: number,
    quality: number
  ): Promise<File> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        const aspectRatio = width / height;
        if (width > maxWidth) {
          width = maxWidth;
          height = width / aspectRatio;
        }
        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject("Cannot get canvas context");
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          (blob) => {
            if (!blob) return reject("Compression failed");
            resolve(new File([blob], file.name, { type: file.type }));
          },
          file.type,
          quality
        );
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  // ----------------- FILE SELECT -----------------
  const handleFileSelect = async (file: File | null) => {
    if (!file) return;

    const MAX_SIZE_MB = 20;
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const maxDim = isMobile ? 800 : 1024;
    const quality = isMobile ? 0.7 : 0.8;

    try {
      let processedFile = file;
      if (file.size / 1024 / 1024 > 5)
        processedFile = await compressImage(file, maxDim, maxDim, quality);
      if (processedFile.size / 1024 / 1024 > MAX_SIZE_MB) {
        showToast("Image too large even after compression (max 20MB).");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const r = reader.result as string | null;
        if (!r) return showToast("Failed to read file");
        setImagePreview(r);
        const comma = r.indexOf(",");
        const plain = comma >= 0 ? r.slice(comma + 1) : r;
        setBase64Image(plain);
        showToast("Image ready → now enter a prompt");
      };
      reader.readAsDataURL(processedFile);
    } catch (err) {
      console.error("Error processing image:", err);
      showToast("Failed to process image");
    }
  };

  const onDrop = (e: DragEvent | any) => {
    e.preventDefault();
    handleFileSelect(e.dataTransfer?.files?.[0] ?? null);
  };
  const onDragOver = (e: DragEvent | any) => e.preventDefault();

  // ----------------- GENERATE -----------------
  const handleGenerate = async () => {
    if (!base64Image) return showToast("Upload an image first");
    if (!prompt.trim()) return showToast("Enter a prompt");

    clearPolling();
    setShowLoader(true);
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, base64Image }),
      });

      const json = await res.json().catch(() => null);

      if (res.status === 403 && json?.limitReached) {
        setShowLoader(false);
        setLoading(false);
        showToast("Free trial limit reached. Redirecting to subscription...");
        setTimeout(() => (window.location.href = "/subscribe"), 2000);
        return;
      }
      if (res.status === 401) {
        setShowLoader(false);
        setLoading(false);
        showToast("Please log in to continue");
        setTimeout(() => (window.location.href = "/login"), 2000);
        return;
      }
      if (!json) {
        setShowLoader(false);
        setLoading(false);
        showToast("Unexpected response from server. Try again.");
        return;
      }
      if (json?.image) {
        setResultUrl(json.image);
        setShowLoader(false);
        setLoading(false);
        showToast("Generated!");
        return;
      }
      if (json?.polling_url) {
        showToast("Submitted => now processing...");
        startPolling(json.polling_url);
        return;
      }
      if (json?.error) {
        setShowLoader(false);
        setLoading(false);
        showToast(json.error);
        return;
      }

      setShowLoader(false);
      setLoading(false);
      showToast("Unexpected response. Please try again.");
    } catch (err) {
      console.error("Network / generate error:", err);
      setShowLoader(false);
      setLoading(false);
      showToast("Network error");
    }
  };

  // ----------------- DOWNLOAD -----------------
  const handleDownload = async () => {
    if (!resultUrl) return;

    try {
      let blob: Blob;
      if (resultUrl.startsWith("data:")) {
        const response = await fetch(resultUrl);
        blob = await response.blob();
      } else {
        showToast("Preparing download...");
        const response = await fetch("/api/fetch-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageUrl: resultUrl }),
        });

        const data = await response.json();
        if (!response.ok || data.error) {
          showToast(data.error || "Failed to prepare download");
          return;
        }

        const blobResponse = await fetch(data.dataUrl);
        blob = await blobResponse.blob();
      }

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `generated-image-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      showToast("Image downloaded!");
    } catch (err) {
      console.error("Error downloading image:", err);
      showToast("Failed to download image");
    }
  };

  // ----------------- CONFETTI -----------------
  useEffect(() => {
    if (!resultUrl) return;
    const container = confettiRef.current;
    if (!container) return;
    container.innerHTML = "";
    const colors = [
      "#60A5FA",
      "#F97316",
      "#34D399",
      "#F472B6",
      "#F59E0B",
      "#A78BFA",
    ];
    for (let i = 0; i < 14; i++) {
      const el = document.createElement("span");
      el.className = "confetti-piece absolute rounded-sm";
      el.style.left = `${20 + Math.random() * 60}%`;
      el.style.top = `${10 + Math.random() * 30}%`;
      el.style.width = `${6 + Math.random() * 8}px`;
      el.style.height = `${10 + Math.random() * 10}px`;
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.transform = `translateY(-10px) rotate(${
        Math.random() * 360
      }deg)`;
      el.style.opacity = "0";
      el.style.animation = `confetti ${
        900 + Math.random() * 400
      }ms cubic-bezier(.2,.8,.2,1) forwards ${Math.random() * 200}ms`;
      container.appendChild(el);
    }
    const t = setTimeout(() => (container.innerHTML = ""), 1600);
    return () => clearTimeout(t);
  }, [resultUrl]);

  // ----------------- SLIDER -----------------
  const handleSliderStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!imagePreview || !resultUrl) return;
      const sliderContainer = document.querySelector(
        "[data-slider-container]"
      ) as HTMLElement;
      if (!sliderContainer) return;
      const rect = sliderContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    };
    const handleMouseUp = () => setIsDragging(false);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, imagePreview, resultUrl]);

  const handleUseGeneratedImage = async () => {
    if (!resultUrl) return;
    try {
      if (resultUrl.startsWith("data:")) {
        const commaIndex = resultUrl.indexOf(",");
        const base64Data =
          commaIndex >= 0 ? resultUrl.slice(commaIndex + 1) : resultUrl;
        setImagePreview(resultUrl);
        setBase64Image(base64Data);
        showToast("Image loaded! Enter a new prompt to modify it.");
      } else {
        showToast("Loading image...");
        const response = await fetch("/api/fetch-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageUrl: resultUrl }),
        });
        const data = await response.json();
        if (!response.ok || data.error) {
          showToast(data.error || "Failed to load image");
          return;
        }
        setImagePreview(data.dataUrl);
        setBase64Image(data.base64);
        showToast("Image loaded! Enter a new prompt to modify it.");
      }
    } catch (err) {
      console.error("Error using generated image:", err);
      showToast("Failed to load image");
    }
  };

  // ----------------- RETURN JSX -----------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Nav />
      <div className="max-w-6xl mx-auto px-6 lg:pl-28 lg:pr-8 p-4 sm:p-6 pt-20 sm:pt-24">
        <div
          ref={confettiRef}
          className="pointer-events-none fixed inset-0 z-50"
        />

        {/* Toast */}
        <div
          aria-live="polite"
          className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:items-start z-50"
        >
          <div className="w-full flex flex-col items-center space-y-2 sm:items-end">
            {toastMsg && (
              <div className="pointer-events-auto max-w-md w-full bg-gray-800/95 backdrop-blur-md text-gray-100 border border-gray-600/50 rounded-lg shadow-lg overflow-hidden">
                <div className="p-3 text-sm">{toastMsg}</div>
              </div>
            )}
          </div>
        </div>

        <header className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-100 via-purple-200 to-indigo-200 bg-clip-text text-transparent pb-3 ">
            Imagine your Bunyad
          </h1>
          <p className="text-purple-300 text-base sm:text-lg font-medium mt-2 flex items-center gap-2 flex-wrap">
            <span className="text-purple-400">Upload</span>
            <span className="text-purple-500">→</span>
            <span className="text-purple-400">Prompt</span>
            <span className="text-purple-500">→</span>
            <span className="text-purple-400">Generate</span>
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 space-y-6">
            <div
              onDrop={onDrop}
              onDragOver={onDragOver}
              className="rounded-2xl p-4 sm:p-6 border border-purple-700/30 bg-gray-800/40 backdrop-blur-sm shadow-lg"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div
                  className="w-full sm:w-56 h-48 sm:h-56 bg-gray-700/60 hover:bg-gray-700/80 rounded-xl flex items-center justify-center cursor-pointer border border-gray-600/30"
                  onClick={() => {
                    const input = document.createElement("input");
                    input.type = "file";
                    input.accept = "image/*";
                    input.onchange = (e: any) =>
                      handleFileSelect(
                        (e.target as HTMLInputElement).files?.[0] ?? null
                      );
                    input.click();
                  }}
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="text-center transition-transform duration-200 hover:scale-110">
                      <svg
                        className="w-12 h-12 text-gray-400 mx-auto mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 4v8"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M20 12l-8-8-8 8"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <rect
                          x="3"
                          y="12"
                          width="18"
                          height="8"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <p className="text-sm text-gray-300">Upload Image</p>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <label className="text-sm font-medium text-purple-200">
                    Prompt
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full mt-2 p-3 border border-gray-600/30 rounded-xl min-h-[140px] bg-gray-700/60 text-gray-100 placeholder-gray-400/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g. Change background to Tokyo at night"
                  />

                  <div className="flex gap-2 sm:gap-3 mt-3">
                    <button
                      onClick={handleGenerate}
                      disabled={loading}
                      className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white rounded-lg shadow-lg text-xs sm:text-sm cursor-pointer font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Working..." : "Generate"}
                    </button>

                    <button
                      onClick={() => {
                        setImagePreview(null);
                        setBase64Image(null);
                        setPrompt("");
                        setResultUrl(null);
                        clearPolling(); // ensure no polling remains
                      }}
                      className="px-3 sm:px-4 py-2 border border-purple-700/50 rounded-lg hover:bg-purple-800/50 text-purple-200 text-xs sm:text-sm cursor-pointer transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-purple-700/30 p-4 sm:p-6 shadow-lg">
              {showLoader && (
                <div className="absolute inset-0 bg-purple-900/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl z-20">
                  <svg
                    className="w-12 h-12 text-purple-400 animate-spin mb-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="opacity-20"
                    />
                    <path
                      d="M22 12a10 10 0 0 0-10-10"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                  <p className="animate-pulse text-purple-200">Generating...</p>
                </div>
              )}

              <h3 className="font-semibold text-lg mb-4 text-purple-100">
                Result
              </h3>

              {resultUrl ? (
                <div className="flex flex-col items-center gap-4">
                  {/* Before/After Image Slider */}
                  {imagePreview && (
                    <div className="w-full max-w-[520px] relative rounded-xl overflow-hidden border border-purple-700/50 bg-purple-900/50">
                      <div
                        className="relative w-full"
                        style={{ aspectRatio: "1/1", maxHeight: "520px" }}
                        data-slider-container
                      >
                        {/* Original Image (Before) */}
                        <img
                          src={imagePreview}
                          className="absolute inset-0 w-full h-full object-contain"
                          alt="Original"
                        />
                        {/* Generated Image (After) */}
                        <div
                          className="absolute inset-0 overflow-hidden"
                          style={{
                            clipPath: `inset(0 ${
                              100 - (sliderPosition || 50)
                            }% 0 0)`,
                          }}
                        >
                          <img
                            src={resultUrl}
                            className="w-full h-full object-contain"
                            alt="Generated"
                          />
                        </div>
                        {/* Slider Handle */}
                        <div
                          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
                          style={{ left: `${sliderPosition || 50}%` }}
                          onMouseDown={handleSliderStart}
                          // also allow touch dragging
                          onTouchStart={() => setIsDragging(true)}
                        >
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-purple-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* Labels */}
                      <div className="absolute bottom-2 left-2 px-2 py-1 bg-purple-900/80 rounded text-xs text-purple-200">
                        After
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-purple-900/80 rounded text-xs text-purple-200">
                        Before
                      </div>
                    </div>
                  )}

                  {!imagePreview && (
                    <div className="w-full max-w-[520px] bg-purple-900/50 rounded-xl overflow-hidden border border-purple-700/50 flex justify-center">
                      <img
                        src={resultUrl}
                        className="w-full max-h-[520px] object-contain"
                        alt="Result"
                      />
                    </div>
                  )}

                  <div className="flex w-full max-w-[520px] gap-2 sm:gap-4 flex-wrap">
                    <button
                      onClick={() => window.open(resultUrl, "_blank")}
                      className="flex-1 min-w-[80px] px-2 sm:px-3 py-2 cursor-pointer border border-purple-700/50 rounded-lg hover:bg-purple-800/50 text-purple-200 text-xs sm:text-sm transition-colors"
                    >
                      Open
                    </button>
                    <button
                      onClick={handleDownload}
                      className="flex-1 min-w-[80px] px-2 sm:px-3 py-2 cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg hover:from-sky-600 hover:to-indigo-600 text-xs sm:text-sm font-medium shadow-lg transition-all"
                    >
                      Download
                    </button>
                    <button
                      onClick={handleUseGeneratedImage}
                      className="flex-1 min-w-[120px] px-2 sm:px-3 py-2 cursor-pointer border border-purple-700/50 rounded-lg hover:bg-purple-800/50 text-purple-200 text-xs sm:text-sm transition-colors"
                    >
                      Use Image
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-purple-400">No result yet</p>
              )}
            </div>
          </section>

          <aside className="space-y-4 sm:space-y-6">
            <div className="rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-purple-700/30 p-4 sm:p-5 shadow-lg">
              <h4 className="font-semibold mb-3 text-purple-100 text-sm sm:text-base">
                Quick Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setPrompt("remove background")}
                  className="px-3 py-2 cursor-pointer rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-white font-medium shadow-sm transform transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Remove BG
                </button>

                <button
                  onClick={() => setPrompt("enhance lighting and clarity")}
                  className="px-3 py-2 cursor-pointer rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-white font-medium shadow-sm transform transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Enhance
                </button>

                <button
                  onClick={() => setPrompt("turn into painting")}
                  className="px-3 py-2 cursor-pointer rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-white font-medium shadow-sm transform transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Painting
                </button>

                <button
                  onClick={() => setPrompt("remove watermark")}
                  className="px-3 py-2 cursor-pointer rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-white font-medium shadow-sm transform transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Remove Watermark
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-purple-700/30 p-4 sm:p-5 shadow-lg flex items-center justify-center h-[100px] sm:h-[120px]">
              <p className="text-xs sm:text-sm text-purple-400 text-center">
                {" "}
                More tools coming soon...
              </p>
            </div>
          </aside>
        </main>
      </div>

      <style>{`
        @keyframes confetti { 0% { transform: translateY(-10px) rotate(0deg); opacity: 1; } 100% { transform: translateY(220px) rotate(360deg); opacity: 0; } }
        .confetti-piece { will-change: transform, opacity; pointer-events:none; }
      `}</style>
    </div>
  );
}
