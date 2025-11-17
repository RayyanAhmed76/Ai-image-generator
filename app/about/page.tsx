"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const router = useRouter();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [limitReached, setLimitReached] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/check-usage");
        const data = await res.json();
        setIsAuthenticated(data.authenticated || false);
        setLimitReached(data.limitReached || false);
      } catch (err) {
        console.error("Error checking auth:", err);
      }
    };
    checkAuth();
  }, []);

  const handleGetStarted = () => {
    if (isAuthenticated) {
      if (limitReached) {
        router.push("/subscribe");
      } else {
        router.push("/");
      }
    } else {
      router.push("/login");
    }
  };

  const features = [
    {
      icon: "🎨",
      title: "Transform Any Image",
      description: "Upload any image and watch it transform according to your creative vision with AI-powered editing.",
    },
    {
      icon: "✨",
      title: "AI-Powered Magic",
      description: "Our advanced AI understands your prompts and makes precise changes to your images instantly.",
    },
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Get results in seconds, not minutes. Experience the speed of cutting-edge AI technology.",
    },
    {
      icon: "🎯",
      title: "Precise Control",
      description: "Add, remove, or modify elements with simple text prompts. Your imagination is the only limit.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 pt-20 sm:pt-24 relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-purple-100 mb-6">
              Transform Images with
              <span className="block bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                AI Magic
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-purple-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              Upload any image, write a prompt, and watch as AI transforms it according to your vision. 
              Add elements, remove objects, change styles all with simple text commands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleGetStarted}
                aria-label="Get started"
                className="z-20 pointer-events-auto px-8 py-4 cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get Started
              </button>
              <button
                onClick={handleGetStarted}
                aria-label="Try demo"
                className="z-20 pointer-events-auto px-8 py-4 bg-purple-800/50 cursor-pointer text-purple-100 border-2 border-purple-600/50 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg hover:bg-purple-800/70 transform hover:scale-105 transition-all duration-200"
              >
                Try Demo
              </button>
            </div>
          </div>
        </div>


        <div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-2xl opacity-20 blur-xl animate-pulse pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl opacity-20 blur-xl animate-pulse delay-1000 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl opacity-20 blur-xl animate-pulse delay-2000 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-purple-100 mb-16">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className={`bg-gray-800/40 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                hoveredFeature === index
                  ? "transform scale-105 shadow-2xl border-2 border-purple-500"
                  : "hover:shadow-xl"
              }`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-purple-100 mb-2">{feature.title}</h3>
              <p className="text-purple-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-gray-800/40 backdrop-blur-sm border border-purple-700/30 rounded-3xl mx-6 mb-20">
        <h2 className="text-4xl font-bold text-center text-purple-100 mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-2xl font-bold text-purple-100 mb-4">Upload Image</h3>
            <p className="text-purple-200">
              Simply drag and drop or select an image from your device. We support all common image formats.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-2xl font-bold text-purple-100 mb-4">Write Prompt</h3>
            <p className="text-purple-200">
              Describe what you want to change. Add a sunset, remove the background, or transform the style.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-2xl font-bold text-purple-100 mb-4">Get Results</h3>
            <p className="text-purple-200">
              Watch as AI transforms your image in seconds. Download, share, or edit again.
            </p>
          </div>
        </div>
      </div>


      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-purple-100 mb-6">
          Ready to Transform Your Images?
        </h2>
        <p className="text-xl text-purple-200 mb-10">
          Join thousands of creators using AI to bring their visions to life.
        </p>
        <button
          onClick={handleGetStarted}
          aria-label="Start creating now"
          className="z-20 pointer-events-auto px-10 py-5 cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Start Creating Now
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
