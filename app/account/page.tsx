"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav"; // adjust path
import { useRouter } from "next/navigation";

type Sub = {
  status?: string | null;
  current_period_end?: number | string | null;
  trial_end?: number | string | null;
  plan_name?: string | null;
};

export default function AccountPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [subLoading, setSubLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/check-usage");
        if (!res.ok) throw new Error("Failed");
        const json = await res.json();
        setData(json);
      } catch (e: any) {
        setErr("Failed to load account data.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function formatDate(val?: number | string | null) {
    if (!val) return "—";
    const d = typeof val === "number" ? new Date(val * 1000) : new Date(val);
    return d.toLocaleDateString();
  }

  async function openPortal() {
    setSubLoading(true);

    
    await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));

    try {
      const res = await fetch("/api/create-portal-session", { method: "POST" });
      const json = await res.json();
      if (json?.url) {
        window.location.href = json.url;
      } else {
        setErr("Could not open billing portal.");
      }
    } catch (e) {
      console.error(e);
      setErr("Could not open billing portal.");
    } finally {
      setSubLoading(false);
    }
  }

  const sub: Sub | null = data?.subscription ?? null;
  const username = data?.username ?? "User";
  const isSubscribed = data?.isSubscribed ?? false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Nav />

      
      <main className="max-w-3xl mx-auto px-6 lg:pl-28 lg:pr-8 p-6 pt-20 sm:pt-24">
        <h1 className="text-3xl font-bold text-purple-100 mb-2">Account & Billing</h1>
        <p className="text-purple-200 mb-6">Manage your subscription, payment methods and invoices.</p>

        {err && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-800 border border-red-200">
            {err}
          </div>
        )}

        <div className="bg-gray-800/40 border border-purple-700/30 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-purple-200">User</div>
              <div className="text-lg font-semibold text-purple-100">{username}</div>
            </div>

            <div className="text-right">
              <div className="text-sm text-purple-200">Status</div>
              <div className="text-lg font-semibold text-purple-100">
                {sub ? (sub.status ?? "Unknown") : isSubscribed ? "Active" : "Not subscribed"}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div>
              <div className="text-xs text-purple-200">Plan</div>
              <div className="text-sm text-purple-100">{sub?.plan_name ?? (isSubscribed ? "PRO" : "Free")}</div>
            </div>
            <div>
              <div className="text-xs text-purple-200">Next billing</div>
              <div className="text-sm text-purple-100">{formatDate(sub?.current_period_end)}</div>
            </div>
            <div>
              <div className="text-xs text-purple-200">Trial ends</div>
              <div className="text-sm text-purple-100">{formatDate(sub?.trial_end)}</div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={openPortal}
              disabled={subLoading}
              className="px-4 py-2 cursor-pointer rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold hover:brightness-105 disabled:opacity-50"
            >
              {subLoading ? "Opening portal…" : "Manage subscription"}
            </button>

            <button
              onClick={() => router.push("/subscribe")}
              className="px-4 py-2 cursor-pointer rounded-xl border border-purple-600 text-purple-100 hover:bg-purple-700/20"
            >
              View plans
            </button>
          </div>
        </div>


        <div className="bg-gray-800/30 border border-purple-700/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-purple-100 mb-3">Invoices & Payments</h3>
          <p className="text-sm text-purple-200">You can view your invoices and payment history in the Stripe Customer Portal.</p>
        </div>
      </main>


      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-none">
          <div className="pointer-events-auto bg-white/6 rounded-lg p-6 flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" />
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
            </div>
            <div className="text-white">Loading account…</div>
          </div>
        </div>
      )}

      
      {subLoading && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-400 rounded-full animate-spin mb-4" />
            <div className="text-white">Opening billing portal…</div>
          </div>
        </div>
      )}
    </div>
  );
}
