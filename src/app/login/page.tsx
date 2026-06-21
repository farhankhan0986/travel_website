"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Star } from "lucide-react";

const testimonial = {
  quote: "I called at 7pm on a Sunday when my connection was cancelled. Someone picked up in two rings.",
  name: "Robert K.",
  age: 71,
  city: "Tampa, FL",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [showPass, setShowPass]   = useState(false);
  const [error, setError]         = useState("");
  const [loading, setLoading]     = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (result?.error) {
      setError("Incorrect email or password. Please try again.");
    } else {
      router.push("/");
    }
  }

  return (
    <div className="flex min-h-screen" style={{ background: "#FAF7F2" }}>

      {/* ── Left  image panel ── */}
      <div className="hidden lg:flex lg:w-[52%] relative overflow-hidden shrink-0">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
          alt="Travel destination"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,6,4,0.35) 0%, rgba(92,24,40,0.55) 50%, rgba(15,6,4,0.85) 100%)" }}
        />

        {/* Brand mark top-left */}
        <div className="absolute top-[40px] left-[48px] z-10">
          <a href="/" className="font-display font-semibold text-[28px] text-white leading-none hover:text-gold-accent transition-colors duration-200">
            Tripile
          </a>
        </div>

        {/* Center tagline */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-[48px] z-10">
          <p className="font-body text-[11px] uppercase tracking-[0.12em] text-white/50 mb-[16px]">
            Welcome back
          </p>
          <h2 className="font-display font-semibold text-[52px] italic text-white leading-[1.02] mb-[20px]">
            Your next adventure<br />is waiting.
          </h2>
          <p className="font-body text-[16px] text-white/65 leading-[1.7] max-w-[380px]">
            Sign in to view your bookings, manage upcoming trips, and connect with your personal travel agent.
          </p>
        </div>

        {/* Bottom testimonial card */}
        <div
          className="absolute bottom-[40px] left-[48px] right-[48px] z-10 rounded-[18px] p-[24px]"
          style={{
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex gap-[2px] mb-[10px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} className="text-gold-accent" fill="currentColor" />
            ))}
          </div>
          <p className="font-display italic text-[17px] text-white leading-[1.55] mb-[14px]">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="flex items-center gap-[10px]">
            <img src={testimonial.avatar} alt={testimonial.name}
              className="w-[36px] h-[36px] rounded-full object-cover" style={{ border: "2px solid rgba(255,255,255,0.25)" }} />
            <p className="font-body text-[13px] text-white/70">
              {testimonial.name}, {testimonial.age} · {testimonial.city}
            </p>
          </div>
        </div>
      </div>

      {/* ── Right  form panel ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-[60px] lg:px-[64px]">

        {/* Mobile brand */}
        <div className="lg:hidden mb-[40px]">
          <a href="/" className="font-display font-semibold text-[28px] text-warm-dark">Tripile</a>
        </div>

        <div className="w-full max-w-[400px]">

          <h1 className="font-display font-semibold text-[44px] text-warm-dark leading-[1.02] mb-[8px]">
            Sign in
          </h1>
          <p className="font-body text-[15px] text-warm-mid mb-[36px]">
            New to Tripile?{" "}
            <a href="/signup" className="text-burg-deep font-medium hover:underline underline-offset-2">
              Create an account
            </a>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">

            {/* Email */}
            <div className="flex flex-col gap-[6px]">
              <label className="font-body text-[11px] uppercase tracking-[0.10em] text-warm-mid">
                Email address
              </label>
              <input
                type="email" required autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-body text-[15px] text-warm-dark bg-white rounded-[10px] px-[16px] py-[13px] outline-none transition-all duration-200 w-full"
                style={{ border: "1.5px solid #EDE0CC" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#5C1828"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "#EDE0CC"; }}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center justify-between">
                <label className="font-body text-[11px] uppercase tracking-[0.10em] text-warm-mid">
                  Password
                </label>
                <a href="#" className="font-body text-[12px] text-burg-deep hover:underline underline-offset-2">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"} required autoComplete="current-password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="font-body text-[15px] text-warm-dark bg-white rounded-[10px] px-[16px] py-[13px] pr-[48px] outline-none transition-all duration-200 w-full"
                  style={{ border: "1.5px solid #EDE0CC" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#5C1828"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#EDE0CC"; }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-[14px] top-1/2 -translate-y-1/2 text-warm-light hover:text-warm-mid transition-colors"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div
                className="rounded-[10px] px-[14px] py-[12px] font-body text-[13px]"
                style={{ background: "#F5EAED", color: "#5C1828", border: "1px solid rgba(92,24,40,0.15)" }}
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full font-body font-semibold text-[15px] text-white px-[24px] py-[14px] rounded-[10px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-[4px]"
              style={{ background: "linear-gradient(135deg, #5C1828, #8B2A3F)", boxShadow: "0 4px 16px rgba(92,24,40,0.30)" }}
            >
              {loading ? "Signing in…" : "Sign in →"}
            </button>

          </form>

          {/* Trust line */}
          <p className="font-body text-[12px] text-warm-mid/60 text-center mt-[28px]">
            🔒 Secure sign-in · Your data is never shared
          </p>

        </div>
      </div>

    </div>
  );
}
