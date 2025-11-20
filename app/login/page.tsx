"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    if (isSignup) {
      if (!email.trim() || !username.trim() || !password.trim()) {
        setError("Please enter email, username, and password.");
        return false;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return false;
      }
    } else {
      if (!username.trim() || !password.trim()) {
        setError("Please enter username and password.");
        return false;
      }
    }
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const endpoint = isSignup ? "/api/signup" : "/api/login";
      const body = isSignup
        ? { email, username, password }
        : { username, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });

      if (res.ok) {
        // login/signup succeeded; server set httpOnly cookie
        router.replace("/");
        return;
      }

      const data = await res.json().catch(() => null);
      setError(
        data?.error ||
          (isSignup ? "Signup failed." : "Login failed. Check credentials.")
      );
    } catch (err) {
      setError("Network error. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 p-6">
      <div className="w-full max-w-md bg-purple-500/15 backdrop-blur-sm border border-purple-400/20 rounded-2xl shadow-lg p-6">
        <div className="mb-2 flex justify-center items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-50 h-50 object-contain rounded-md"
          />
        </div>

        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={() => {
              setIsSignup(false);
              setError(null);
              setEmail("");
            }}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
              !isSignup
                ? "bg-gradient-to-r from-sky-500 to-indigo-500 cursor-pointer text-white shadow-md"
                : "bg-purple-700/30 text-purple-200 hover:bg-purple-700/50 cursor-pointer"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setIsSignup(true);
              setError(null);
            }}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
              isSignup
                ? "bg-gradient-to-r from-sky-500 to-indigo-500 cursor-pointer text-white shadow-md"
                : "bg-purple-700/30 text-purple-200 hover:bg-purple-700/50 cursor-pointer"
            }`}
          >
            Sign Up
          </button>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-purple-100">
          {isSignup ? "Create your account" : "Welcome back"}
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label className="block text-xs font-medium text-purple-200 mb-1">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full rounded-lg border border-purple-700/50 bg-purple-900/30 text-purple-100 placeholder-purple-400/50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-purple-200 mb-1">
              {isSignup ? "Username" : "Username or Email"}
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-purple-700/50 bg-purple-900/30 text-purple-100 placeholder-purple-400/50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder={isSignup ? "username" : "username or email"}
              autoComplete="username"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-purple-200 mb-1">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full rounded-lg border border-purple-700/50 bg-purple-900/30 text-purple-100 placeholder-purple-400/50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              autoComplete={isSignup ? "new-password" : "current-password"}
            />
          </div>

          {error && (
            <div className="text-sm text-red-300 bg-red-900/30 border border-red-700/50 p-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className={`w-full px-4 py-2 cursor-pointer rounded-lg text-white font-medium transition-all ${
              submitting
                ? "bg-purple-700/50 cursor-not-allowed"
                : "bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-[1.02] hover:shadow-lg"
            }`}
          >
            {submitting
              ? isSignup
                ? "Creating account..."
                : "Signing in..."
              : isSignup
              ? "Sign Up"
              : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
