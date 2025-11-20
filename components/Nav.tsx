"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const FREE_TRIES_LIMIT = 2;

type SubscriptionShape = {
  status?: string | null;
  current_period_end?: number | string | null;
  trial_end?: number | string | null;
  plan_name?: string | null;
};

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [username, setUsername] = useState<string>("User");
  const [userInitial, setUserInitial] = useState<string>("U");

  const [subscription, setSubscription] = useState<SubscriptionShape | null>(
    null
  );
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [usageCount, setUsageCount] = useState<number>(0);
  const [subLoading, setSubLoading] = useState(true);

  const mobileNavWidthRem = 11;

  function toDate(value?: number | string | null): Date | null {
    if (!value) return null;
    if (typeof value === "number") {
      return value > 1e12 ? new Date(value) : new Date(value * 1000);
    }
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
  }

  function daysLeft(until?: number | string | null) {
    const d = toDate(until);
    if (!d) return null;
    const now = new Date();
    const ms = d.getTime() - now.getTime();
    return Math.ceil(ms / (1000 * 60 * 60 * 24));
  }

  // Fetch user & subscription info
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await fetch("/api/check-usage");
        const data = await res.json();

        if (data?.authenticated && data?.username) {
          setUsername(data.username);
          setUserInitial(data.username.charAt(0).toUpperCase());
        }

        setSubscription(data.subscription || null);
        setIsSubscribed(!!data.isSubscribed);
        setUsageCount(data.usageCount ?? 0);
      } catch (err) {
        console.error("Error fetching user info:", err);
        setSubscription(null);
        setIsSubscribed(false);
        setUsageCount(0);
      } finally {
        setSubLoading(false);
      }
    };
    fetchUserInfo();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleDocumentClick(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Mobile nav styling
  useEffect(() => {
    const CLASS = "mobile-nav-open";
    const STYLE_ID = "mobile-nav-open-style";

    function addStyle() {
      if (document.getElementById(STYLE_ID)) return;
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.innerHTML = `
        body.${CLASS} #__next > * {
          margin-left: auto !important;
          margin-right: auto !important;
          max-width: calc(100% - ${mobileNavWidthRem}rem) !important;
        }
        @media (max-width: 420px) {
          body.${CLASS} #__next > * {
            max-width: calc(100% - ${mobileNavWidthRem - 0.5}rem) !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    if (mobileOpen) {
      document.body.classList.add(CLASS);
      addStyle();
    } else {
      document.body.classList.remove(CLASS);
    }

    return () => document.body.classList.remove(CLASS);
  }, [mobileOpen]);

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      window.dispatchEvent(
        new CustomEvent("app:notify", { detail: { message: "Logged out" } })
      );
      setTimeout(() => router.push("/login"), 600);
    } catch {
      window.dispatchEvent(
        new CustomEvent("app:notify", { detail: { message: "Logout failed" } })
      );
    }
  };

  const mobileClosedTransform = mobileOpen
    ? "translate-x-0"
    : "translate-x-full";
  const borderResponsive =
    "border-l border-purple-700/50 sm:border-r sm:border-l-0";

  // Render subscription / free prompt row
  const renderSubscriptionRow = () => {
    if (subLoading) {
      return (
        <div className="text-center py-2 text-xs text-purple-200">
          Loading subscription…
        </div>
      );
    }

    const s = subscription || { status: "none", plan_name: "Free" };
    const freeLeft = Math.max(FREE_TRIES_LIMIT - usageCount, 0);

    // Free prompts
    if (!isSubscribed && freeLeft > 0) {
      return (
        <div className="flex flex-col gap-2">
          <div className="text-sm font-medium text-purple-100">Free usage</div>
          <div className="text-xs text-purple-200">
            {freeLeft} free prompt{freeLeft > 1 ? "s" : ""} left
          </div>
          <div className="pt-2">
            <button
              onClick={() => router.push("/subscribe")}
              className="block w-full text-center px-2 py-1 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm font-medium"
              type="button"
            >
              Upgrade
            </button>
          </div>
        </div>
      );
    }

    // Subscribed
    if (isSubscribed) {
      const nextDate = toDate(s.current_period_end);
      const formatted = nextDate
        ? new Intl.DateTimeFormat(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
          }).format(nextDate)
        : "Next billing available";

      return (
        <div className="flex flex-col gap-2">
          <div className="text-sm font-medium text-purple-100">Subscribed</div>
          <div className="text-xs text-purple-200">Plan: {s.plan_name}</div>
          <div className="pt-2">
            <button
              onClick={() => router.push("/account")}
              className="block w-full text-center px-2 py-1 cursor-pointer rounded-md border hover:bg-purple-500 border-purple-600 text-purple-100 text-sm font-medium"
              type="button"
            >
              Manage
            </button>
          </div>
        </div>
      );
    }

    // Not subscribed and no free prompts
    return (
      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium text-purple-100">
          Not subscribed
        </div>
        <div className="text-xs text-purple-200">
          Start your subscription for unlimited prompts.
        </div>
        <div className="pt-2">
          <button
            onClick={() => router.push("/subscribe")}
            className="block w-full text-center px-2 py-1 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm font-medium"
            type="button"
          >
            Subscribe
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMobileOpen((s) => !s)}
        className={`${
          mobileOpen
            ? ""
            : "sm:hidden fixed top-4 right-4 z-50 bg-purple-800/90 text-white p-2 rounded-md shadow-lg focus:outline-none"
        }`}
      >
        {!mobileOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile overlay */}
      <div
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
        className={`sm:hidden fixed inset-0 bg-black/40 z-30 transition-opacity ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <nav
        className={`fixed top-0 h-full z-40 flex flex-col py-4 sm:py-6
          bg-gradient-to-b from-purple-900/90 via-purple-800/90 to-indigo-900/90 backdrop-blur-md
          transition-transform duration-300 ease-in-out transform
          ${mobileClosedTransform} sm:translate-x-0
          right-0 sm:left-0 sm:right-auto
          w-44 sm:w-16 ${borderResponsive}`}
        style={{ willChange: "transform" }}
      >
        {/* Logo */}
        <div className="mb-4 sm:mb-8 w-full flex items-center justify-center sm:justify-center px-3">
          <Link href="/" className="flex items-center gap-3 w-full">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl p-1.5 sm:p-2 flex items-center justify-center bg-zinc-300 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <span
              className={`${
                mobileOpen ? "inline-block" : "hidden"
              } sm:hidden text-white font-semibold text-lg ml-2 truncate`}
            >
              Bunyad
            </span>
          </Link>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-3 w-full px-2">
          <Link
            href="/"
            className={`flex items-center gap-3 p-2 rounded-lg transition-all w-full ${
              pathname === "/"
                ? "bg-purple-600/50 text-white shadow-lg"
                : "text-purple-200 hover:bg-purple-700/30 hover:text-white"
            } ${mobileOpen ? "justify-start pl-3" : "justify-center"}`}
            title="Dashboard"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span
              className={`${
                mobileOpen ? "inline-block" : "hidden"
              } sm:hidden text-sm font-medium`}
            >
              Dashboard
            </span>
          </Link>
          <button
            onClick={() => router.push("/subscribe")}
            className={`flex items-center gap-3 p-2 cursor-pointer rounded-lg transition-all w-full ${
              pathname === "/subscribe"
                ? "bg-purple-600/50 text-white shadow-lg"
                : "text-purple-200 hover:bg-purple-700/30 hover:text-white"
            } ${mobileOpen ? "justify-start pl-3" : "justify-center"}`}
            title="Plans"
            type="button"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span
              className={`${
                mobileOpen ? "inline-block" : "hidden"
              } sm:hidden text-sm font-medium`}
            >
              Plans
            </span>
          </button>
        </div>

        {/* Logout / avatar */}
        <div className="mt-auto w-full px-2 pb-4">
          <div ref={dropdownRef} className="relative w-full">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-haspopup="true"
              aria-expanded={open}
              className={`w-full flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer text-purple-200 hover:bg-purple-700/30 hover:text-white ${
                mobileOpen ? "justify-start pl-3" : "justify-center"
              }`}
              title={username}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-semibold text-white text-xs sm:text-sm shadow-lg flex-shrink-0">
                {userInitial}
              </div>
              <span
                className={`${
                  mobileOpen ? "inline-block" : "hidden"
                } sm:hidden ml-1 text-sm font-medium`}
              >
                {username}
              </span>
            </button>

            <div
              className={`absolute right-full mr-2 bottom-0 w-44 sm:w-48 bg-purple-800/95 backdrop-blur-md border border-purple-600/50 rounded-lg shadow-xl z-50 sm:left-full sm:ml-2 sm:right-auto ${
                open ? "block" : "hidden"
              }`}
            >
              <div className="p-3">
                <div className="px-2 py-1.5 text-sm text-purple-100 font-semibold">
                  {username}
                </div>
                <div className="mt-2">{renderSubscriptionRow()}</div>
                <div className="mt-3 border-t border-purple-700/50 pt-3">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-2 py-2 text-sm text-purple-200 hover:bg-purple-700/50 rounded cursor-pointer transition-colors"
                    aria-label="Logout"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
