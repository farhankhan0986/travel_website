"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/Footer";

const inputClass =
  "font-body text-[16px] text-warm-dark bg-white border border-cream rounded-[8px] px-[16px] py-[13px] outline-none focus:border-warm-mid transition-colors w-full";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Incorrect email or password. Please try again.");
    } else {
      router.push("/");
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <Nav />

      <main className="flex-1 flex items-center justify-center pt-[152px] pb-[80px]">
        <div className="w-full max-w-[440px] px-6">

          <h1 className="font-display font-medium text-[52px] text-warm-dark leading-[1.05] mb-[8px]">
            Welcome back
          </h1>
          <p className="font-body text-body text-warm-mid mb-[40px]">
            Sign in to manage your trips.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">

            <div className="flex flex-col gap-[6px]">
              <label className="font-body text-[11px] uppercase tracking-[0.10em] text-warm-mid">
                Email
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="font-body text-[11px] uppercase tracking-[0.10em] text-warm-mid">
                Password
              </label>
              <input
                type="password"
                required
                autoComplete="current-password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
              />
            </div>

            {error && (
              <p className="font-body text-[16px] text-burg-deep">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-burg-deep text-white font-body font-medium text-[16px] px-[24px] py-[14px] rounded-btn border border-transparent hover:bg-burg-mid transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

          </form>

          <p className="font-body text-caption text-warm-mid mt-[28px] text-center">
            New to Tripile?{" "}
            <a href="/signup" className="text-burg-deep underline underline-offset-[3px]">
              Create an account
            </a>
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
}
