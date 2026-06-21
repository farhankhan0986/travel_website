"use client";

import SearchBox from "@/components/ui/SearchBox";

interface HeroProps {
  activeTab: "flights" | "hotels";
  setActiveTab: (tab: "flights" | "hotels") => void;
}

const stats: { value: string; label: string | null }[] = [
  { value: "150K+", label: "Guests"  },
  { value: "22",    label: "Years"   },
  { value: "BBB A+", label: null     },
];

export default function Hero({ activeTab, setActiveTab }: HeroProps) {
  return (
    <section className="relative w-full h-screen bg-warm-dark">

      {/* ── Videos (overflow-hidden scoped here, not on section) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          id="video-flights"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[450ms]"
          style={{ opacity: activeTab === "flights" ? 1 : 0 }}
          autoPlay
          muted
          loop
          playsInline
          preload={activeTab === "flights" ? "auto" : "metadata"}
          src="/videos/flights.mp4"
          onLoadStart={(e) => { (e.currentTarget as HTMLVideoElement).style.display = "block"; }}
          onError={(e) => { (e.currentTarget as HTMLVideoElement).style.display = "none"; }}
        />
        <video
          id="video-hotel"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[450ms]"
          style={{ opacity: activeTab === "hotels" ? 1 : 0 }}
          autoPlay
          muted
          loop
          playsInline
          preload={activeTab === "hotels" ? "auto" : "metadata"}
          src="/videos/hotel.mp4"
          onError={(e) => { (e.currentTarget as HTMLVideoElement).style.display = "none"; }}
        />
      </div>

      {/* ── Dark scrim ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-10 bg-dark-scrim" />

      {/* ── Hero copy ──────────────────────────────────────── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center pl-20 pr-8">
        <p className="font-body text-label text-white/60 uppercase tracking-[0.12em] mb-7">
          Trusted by 150,000 American travelers
        </p>

        <h1 className="font-display font-semibold text-hero text-white tracking-[-0.02em] leading-[0.95] mb-6">
          Travel the world with
          <br />
          <span className="italic text-gold-accent">confidence.</span>
        </h1>

        <p className="font-body font-light text-body-lg text-white/80">
          Real agents, available by phone. No hidden fees.
        </p>
      </div>

      {/* ── Stat row — 20px above SearchBox top edge ──────── */}
      <div className="absolute left-20 bottom-[108px] z-20 flex items-baseline gap-5">
        {stats.map(({ value, label }, i) => (
          <span key={value} className="inline-flex items-baseline gap-1.5">
            <span className="font-display font-medium text-[20px] text-white">
              {value}
            </span>
            {label && (
              <span className="font-body text-label text-white/60">{label}</span>
            )}
            {i < stats.length - 1 && (
              <span className="font-body text-label text-white/50 ml-2">·</span>
            )}
          </span>
        ))}
      </div>

      {/* ── SearchBox ───────────────────────────────────────── */}
      <SearchBox activeTab={activeTab} setActiveTab={setActiveTab} />

    </section>
  );
}
