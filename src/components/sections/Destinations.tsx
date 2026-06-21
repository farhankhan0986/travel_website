"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X, Phone } from "lucide-react";
import Button from "@/components/ui/Button";

type Destination = {
  city: string;
  region: string;
  country: string;
  price: number;
  hotelsFrom: number;
  bestTime: string;
  flightTime: string;
  image: string;
  description: string;
  highlights: string[];
};

const destinations: Destination[] = [
  {
    city: "Miami",
    region: "Florida",
    country: "USA",
    price: 189,
    hotelsFrom: 149,
    bestTime: "November to April",
    flightTime: "3h from New York",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description:
      "Miami dazzles with iconic South Beach, Art Deco architecture, and a culinary scene blending Caribbean and Latin flavors. Warm winters, world-class hotels, and gentle surf make it a top choice for a refined Florida escape.",
    highlights: ["South Beach", "Art Deco District", "Everglades Day Trip", "Little Havana", "Vizcaya Museum Gardens"],
  },
  {
    city: "Orlando",
    region: "Florida",
    country: "USA",
    price: 210,
    hotelsFrom: 129,
    bestTime: "January to March",
    flightTime: "2h 30m from New York",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    description:
      "Orlando is far more than theme parks. Championship golf courses, luxury resort spas, and beautiful lakeside dining make it an ideal destination for a relaxed, sun-filled Florida getaway at any pace.",
    highlights: ["Epcot Flower Festival", "Winter Park", "Lake Eola Park", "Kennedy Space Center", "Spa Resorts"],
  },
  {
    city: "Las Vegas",
    region: "Nevada",
    country: "USA",
    price: 245,
    hotelsFrom: 99,
    bestTime: "March to May",
    flightTime: "5h from New York",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
    description:
      "Las Vegas delivers unrivaled entertainment, celebrity chef dining, and world-famous shows. Day trips to the Grand Canyon and Hoover Dam add natural wonder to the neon glamour of the Strip.",
    highlights: ["Grand Canyon Day Trip", "Cirque du Soleil", "Fine Dining", "Hoover Dam", "The Strip at Night"],
  },
  {
    city: "Cancun",
    region: "Quintana Roo",
    country: "Mexico",
    price: 299,
    hotelsFrom: 179,
    bestTime: "December to April",
    flightTime: "4h from New York",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    description:
      "Cancun's turquoise Caribbean waters, all-inclusive resorts, and ancient Mayan ruins create the perfect blend of relaxation and discovery. Calm Hotel Zone waters are ideal for a gentle, unhurried vacation.",
    highlights: ["Chichen Itza", "Isla Mujeres", "Tulum Ruins", "Underwater Museum", "Holbox Island"],
  },
];

export default function Destinations() {
  const [selected, setSelected] = useState<Destination | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    if (selected) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <>
      <section className="bg-ivory py-20">
        <div className="max-w-[1280px] mx-auto px-20">

          <h2 className="font-display font-medium text-section text-warm-dark tracking-[-0.01em] leading-[1.1] mb-12">
            Popular destinations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <div
                key={dest.city}
                className="rounded-card border border-cream bg-white overflow-hidden group cursor-pointer hover:border-warm-light transition-colors duration-200"
                onClick={() => setSelected(dest)}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={`${dest.city}, ${dest.region}`}
                    className="w-full h-full object-cover transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="px-4 pt-4 pb-5">
                  <p className="font-display font-medium text-[20px] text-warm-dark leading-[1.25] mb-1">
                    {dest.city}, {dest.region}
                  </p>
                  <p className="font-body text-caption text-warm-mid mb-3">
                    Flights from ${dest.price}
                  </p>
                  <span className="inline-flex items-center gap-1 font-body font-medium text-caption text-burg-deep group-hover:text-burg-mid transition-colors duration-200">
                    Explore
                    <ArrowRight size={13} aria-hidden />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-warm-dark/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-card w-full max-w-[580px] overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero image */}
            <div className="relative h-[240px] overflow-hidden shrink-0">
              <img
                src={selected.image}
                alt={selected.city}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-[14px] right-[14px] w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center hover:bg-ivory transition-colors duration-200"
              >
                <X size={16} className="text-warm-dark" />
              </button>
            </div>

            {/* Body */}
            <div className="p-[32px]">

              {/* Heading */}
              <p className="font-body text-[11px] uppercase tracking-[0.12em] text-warm-mid mb-[4px]">
                {selected.region}, {selected.country}
              </p>
              <h2 className="font-display font-medium text-[40px] text-warm-dark leading-[1.05] mb-[16px]">
                {selected.city}
              </h2>
              <p className="font-body text-body text-warm-mid leading-[1.7]">
                {selected.description}
              </p>

              {/* Details row */}
              <div className="grid grid-cols-2 gap-[16px] mt-[24px] pt-[24px] border-t border-cream">
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.10em] text-warm-mid mb-[4px]">
                    Flights from
                  </p>
                  <p className="font-display font-medium text-[24px] text-burg-deep leading-none">
                    ${selected.price}
                  </p>
                </div>
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.10em] text-warm-mid mb-[4px]">
                    Hotels from
                  </p>
                  <p className="font-display font-medium text-[24px] text-burg-deep leading-none">
                    ${selected.hotelsFrom}
                    <span className="font-body text-[14px] text-warm-mid font-normal">/night</span>
                  </p>
                </div>
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.10em] text-warm-mid mb-[4px]">
                    Best time to visit
                  </p>
                  <p className="font-body text-body text-warm-dark">{selected.bestTime}</p>
                </div>
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.10em] text-warm-mid mb-[4px]">
                    Flight time
                  </p>
                  <p className="font-body text-body text-warm-dark">{selected.flightTime}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-[24px] pt-[24px] border-t border-cream">
                <p className="font-body text-[11px] uppercase tracking-[0.10em] text-warm-mid mb-[12px]">
                  Highlights
                </p>
                <div className="flex flex-wrap gap-[8px]">
                  {selected.highlights.map((h) => (
                    <span
                      key={h}
                      className="font-body text-caption text-warm-dark bg-cream rounded-full px-[14px] py-[6px]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex gap-[10px] mt-[28px]">
                <Button variant="ghost" className="flex-1 justify-center">
                  <Phone size={14} aria-hidden />
                  Call us
                </Button>
                <Button variant="primary" className="flex-1 justify-center">
                  Book now
                </Button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
