"use client";

import { useState, useEffect } from "react";
import SearchBox, { type SearchValues } from "@/components/ui/SearchBox";
import PhoneBar from "@/components/ui/PhoneBar";
import Button from "@/components/ui/Button";
import HotelResultCard, { type HotelResult } from "@/components/HotelResultCard";

function SkeletonCard() {
  return (
    <div className="bg-white border border-cream rounded-card flex overflow-hidden min-h-[160px] animate-pulse">
      <div className="w-[200px] shrink-0 bg-cream" />
      <div className="flex-1 p-[24px] flex flex-col justify-between">
        <div className="flex flex-col gap-[10px]">
          <div className="h-[20px] w-2/3 rounded bg-cream" />
          <div className="h-[12px] w-[80px] rounded bg-cream" />
          <div className="h-[12px] w-1/3 rounded bg-cream" />
        </div>
        <div className="h-[22px] w-[100px] rounded bg-cream" />
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-[20px] py-[64px] text-center">
      <p className="font-body text-body-lg text-warm-mid leading-[1.65]">
        No hotels found - call us and we will find one.
      </p>
      <Button variant="phone">Call 1-800-TRIPILE</Button>
    </div>
  );
}

export default function HotelsClient() {
  const [activeTab, setActiveTab] = useState<"flights" | "hotels">("hotels");
  const [results, setResults]     = useState<HotelResult[]>([]);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    handleSearch({ tab: "hotels", city: "", checkIn: "", checkOut: "" });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSearch(values: SearchValues) {
    setLoading(true);
    setError("");
    setHasSearched(true);
    try {
      const res = await fetch("/api/hotels/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`Search failed: ${res.status}`);
      const data = await res.json();
      setResults(data.results ?? []);
    } catch {
      setError("Something went wrong. Please try again or call us.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-ivory">

      {/* Compact hero strip */}
<div className="relative pt-[118px] pb-[52px] flex flex-col items-center gap-[14px] overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-warm-dark/75" />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center gap-[14px] w-full">
    <p className="font-body text-[11px] uppercase tracking-[0.12em] text-white/60">
      Search Hotels
    </p>

    <SearchBox
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      className="w-full max-w-4xl px-6"
      onSearch={handleSearch}
    />
  </div>

</div>

      <PhoneBar />

      {/* Results count band */}
      {!loading && results.length > 0 && (
        <div className="bg-white border-b border-cream">
          <div className="max-w-[1280px] mx-auto px-20 py-[16px] flex items-center justify-between">
            <div>
              <h2 className="font-display font-medium text-[22px] text-warm-dark leading-none">
                {results.length} hotel{results.length !== 1 ? "s" : ""} found
              </h2>
              <p className="font-body text-caption text-warm-mid mt-[4px]">
                Nightly rates, taxes may apply
              </p>
            </div>
            <p className="font-body text-caption text-warm-mid">Sorted by: Best value</p>
          </div>
        </div>
      )}

      {/* Results area */}
      <div className="py-[40px] flex-1">
        <div className="max-w-[1280px] mx-auto px-20">

          {loading && (
            <div className="flex flex-col gap-[16px]">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          )}

          {!loading && error && (
            <div className="flex flex-col items-center gap-[16px] py-[64px] text-center">
              <p className="font-body text-body text-burg-deep">{error}</p>
              <Button variant="phone">Call 1-800-TRIPILE</Button>
            </div>
          )}

          {!loading && !error && hasSearched && results.length === 0 && (
            <EmptyState />
          )}

          {!loading && !error && results.length > 0 && (
            <div className="flex flex-col gap-[16px]">
              {results.map((result) => (
                <HotelResultCard key={result.id} result={result} />
              ))}
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
