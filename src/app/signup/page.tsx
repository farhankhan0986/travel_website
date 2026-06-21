"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/Footer";

const inputClass =
  "font-body text-[16px] text-warm-dark bg-white border border-cream rounded-[8px] px-[16px] py-[13px] outline-none focus:border-warm-mid transition-colors w-full";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [phone, setPhone]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res  = await fetch("/api/auth/signup", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ name, email, password, phone }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    await signIn("credentials", { email, password, redirect: false });
    router.push("/");
  }

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <Nav />

      <main className="flex-1 flex items-center justify-center pt-[152px] pb-[80px]">
        <div className="w-full max-w-[440px] px-6">

          <h1 className="font-display font-medium text-[52px] text-warm-dark leading-[1.05] mb-[8px]">
            Create account
          </h1>
          <p className="font-body text-body text-warm-mid mb-[40px]">
            Join thousands of travelers who trust Tripile.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">

            <div className="flex flex-col gap-[6px]">
              <label className="font-body text-[11px] uppercase tracking-[0.10em] text-warm-mid">
                Full Name
              </label>
              <input
                type="text"
                required
                autoComplete="name"
                placeholder="Margaret Johnson"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>

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
                Phone (optional)
              </label>
              <input
                type="tel"
                autoComplete="tel"
                placeholder="(555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                minLength={8}
                autoComplete="new-password"
                placeholder="At least 8 characters"
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
              {loading ? "Creating account..." : "Create account"}
            </button>

          </form>

          <p className="font-body text-caption text-warm-mid mt-[28px] text-center">
            Already have an account?{" "}
            <a href="/login" className="text-burg-deep underline underline-offset-[3px]">
              Sign in
            </a>
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
}
