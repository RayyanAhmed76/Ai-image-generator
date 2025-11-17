"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Nav from "../../components/Nav";

export default function SubscribePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false); 
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);

  // subscription state pulled from /api/check-usage
  const [checkingSub, setCheckingSub] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);
  const [subLoading, setSubLoading] = useState(false); 

  const PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO || "price_1SSxP4KsBi3XJI5aSUGGrEKz";

  // handle Stripe success/cancel query params
  useEffect(() => {
    const success = searchParams.get("success");
    const canceled = searchParams.get("canceled");
    const sessionId = searchParams.get("session_id");

    if (success === "true" && sessionId) {
      setMessage("Payment successful! Verifying subscription...");
      setMessageType("success");

      const verifyAndRedirect = async () => {
        let attempts = 0;
        const maxAttempts = 10; 

        const checkInterval = setInterval(async () => {
          attempts++;

          try {
            const res = await fetch(`/api/verify-session?session_id=${sessionId}`);
            const data = await res.json();

            if (data.verified && data.isSubscribed) {
              clearInterval(checkInterval);
              setMessage("Payment successful! Your subscription is now active.");
              setMessageType("success");
              // update local state to reflect subscription
              setIsSubscribed(true);
              // Redirect to homepage after short delay
              setTimeout(() => {
                router.push("/");
              }, 1000);
            } else if (attempts >= maxAttempts) {
              clearInterval(checkInterval);
              setMessage("Payment successful! If you see this page again, please refresh.");
              setMessageType("success");
              setTimeout(() => {
                router.push("/");
              }, 2000);
            }
          } catch (err) {
            console.error("Error verifying session:", err);
            if (attempts >= maxAttempts) {
              clearInterval(checkInterval);
              setMessage("Payment successful! Redirecting...");
              setMessageType("success");
              setTimeout(() => {
                router.push("/");
              }, 2000);
            }
          }
        }, 500);
      };

      verifyAndRedirect();
    } else if (canceled === "true") {
      setMessage("Payment was canceled. You can try again anytime.");
      setMessageType("error");
    }
  }, [searchParams, router]);

  // Fetch subscription state on mount
  useEffect(() => {
    let mounted = true;
    const fetchStatus = async () => {
      if (mounted) setCheckingSub(true);
      try {
        const res = await fetch("/api/check-usage");
        if (!res.ok) {
          // treat as not subscribed but show no crashing
          const txt = await res.text();
          console.warn("check-usage non-ok:", txt);
          if (mounted) setIsSubscribed(false);
        } else {
          const json = await res.json();
          if (mounted) setIsSubscribed(Boolean(json?.isSubscribed));
        }
      } catch (err) {
        console.error("Failed to fetch subscription status:", err);
        if (mounted) setIsSubscribed(false);
      } finally {
        if (mounted) setCheckingSub(false);
      }
    };

    fetchStatus();
    return () => {
      mounted = false;
    };
  }, []);

  // Opens Stripe checkout
  const handleCheckout = async () => {
    // Prevent starting checkout when already subscribed
    if (isSubscribed) return;

    // show loader first
    setLoading(true);
    setMessage(null);

    // give browser one frame to paint loader before starting network/navigation
    await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: PRICE_ID }),
      });

      const json = await res.json();

      if (json?.url) {
        // redirect to stripe checkout
        window.location.href = json.url;
      } else {
        setMessage("Checkout failed: " + (json?.error || "Unknown error"));
        setMessageType("error");
        setLoading(false);
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
      setMessageType("error");
      setLoading(false);
      console.error(err);
    }
  };

  // Opens the billing portal (manage)
  const openPortal = async () => {
    setSubLoading(true);
    // allow paint
    await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));

    try {
      const res = await fetch("/api/create-portal-session", { method: "POST" });
      const json = await res.json();
      if (json?.url) {
        window.location.href = json.url;
      } else {
        setMessage("Could not open billing portal.");
        setMessageType("error");
      }
    } catch (e) {
      console.error(e);
      setMessage("Could not open billing portal.");
      setMessageType("error");
    } finally {
      setSubLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 sm:pl-28 sm:pr-8 pt-20 sm:pt-24">
      <Nav />

      <div className="max-w-3xl mx-auto p-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-purple-100">Upgrade to Pro</h2>
          <p className="text-purple-200 text-lg">Unlock unlimited image transformations</p>
        </div>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              messageType === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {message}
          </div>
        )}

        <div className="bg-gray-800/40 backdrop-blur-sm border border-purple-700/30 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full text-sm font-semibold mb-4">
              PRO PLAN
            </div>
            <h3 className="text-3xl font-bold text-purple-100 mb-2">Unlimited Access</h3>
            <p className="text-purple-200">Transform as many images as you want</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-purple-200">Unlimited image generations</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-purple-200">Priority processing</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-purple-200">No usage limits</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-purple-200">Cancel anytime</span>
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-purple-100 mb-2">$9</div>
            <div className="text-purple-200">per month</div>
          </div>

          {/* If subscribed -> show disabled "Subscribed" button + Manage button
              Otherwise show checkout Subscribe button */}
          {isSubscribed ? (
            <div className="space-y-3">
              <button
                disabled
                className="w-full px-6 py-4 bg-gray-600/30 text-white rounded-xl font-semibold text-lg shadow-inner cursor-not-allowed"
                aria-disabled
              >
                Subscribed
              </button>

              <button
                onClick={openPortal}
                disabled={subLoading}
                className="w-full px-6 py-4 cursor-pointer bg-gray-700/60 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-102 transition-all duration-150 disabled:opacity-50 mt-2"
              >
                {subLoading ? "Opening billing portal..." : "Manage Subscription"}
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full px-6 py-4 cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? "Redirecting to checkout..." : "Subscribe Now"}
              </button>

              <p className="text-center text-sm text-purple-300 mt-4">
                Secure payment powered by Stripe
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Overlay shown while checking subscription (non-blocking) */}
      {checkingSub && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-none">
          <div className="pointer-events-auto bg-white/10 rounded-lg p-6 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" />
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
            </div>
            <div className="text-white">Checking subscription…</div>
          </div>
        </div>
      )}

      {/* Overlay while performing checkout or opening portal (blocks interaction) */}
      {(loading || subLoading) && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-400 rounded-full animate-spin mb-4" />
            <div className="text-white">{loading ? "Redirecting to checkout..." : "Opening billing portal..."}</div>
          </div>
        </div>
      )}
    </div>
  );
}
