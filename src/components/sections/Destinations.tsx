"use client";

import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
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
  snippet: string;
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
    snippet: "Sun-soaked beaches, Art Deco charm, and world-class dining in one of America's most vibrant cities.",
    description: "Miami dazzles with iconic South Beach, Art Deco architecture, and a culinary scene blending Caribbean and Latin flavors. Warm winters, world-class hotels, and gentle surf make it a top choice for a refined Florida escape.",
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
    snippet: "Championship golf, luxury resort spas, and beautiful lakeside dining beyond the theme parks.",
    description: "Orlando is far more than theme parks. Championship golf courses, luxury resort spas, and beautiful lakeside dining make it an ideal destination for a relaxed, sun-filled Florida getaway at any pace.",
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
    snippet: "Celebrity dining, world-famous shows, and Grand Canyon day trips from one glamorous base.",
    description: "Las Vegas delivers unrivaled entertainment, celebrity chef dining, and world-famous shows. Day trips to the Grand Canyon and Hoover Dam add natural wonder to the neon glamour of the Strip.",
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
    snippet: "Turquoise Caribbean waters, ancient Mayan ruins, and all-inclusive resorts on a pristine coastline.",
    description: "Cancun's turquoise Caribbean waters, all-inclusive resorts, and ancient Mayan ruins create the perfect blend of relaxation and discovery. Calm Hotel Zone waters are ideal for a gentle, unhurried vacation.",
    highlights: ["Chichen Itza", "Isla Mujeres", "Tulum Ruins", "Underwater Museum", "Holbox Island"],
  },
  {
    city: "New Orleans",
    region: "Louisiana",
    country: "USA",
    price: 219,
    hotelsFrom: 139,
    bestTime: "February to May",
    flightTime: "2h 45m from New York",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    snippet: "Jazz, Creole cuisine, and stunning Garden District mansions make this one of America's most soulful cities.",
    description: "New Orleans blends French Creole heritage, world-famous cuisine, and a live music scene unlike anywhere else in the country. Garden District walking tours, riverboat cruises, and legendary jazz bars await.",
    highlights: ["French Quarter", "Garden District", "Jazz Clubs on Frenchmen St", "Riverboat Cruise", "Commander's Palace"],
  },
  {
    city: "Sedona",
    region: "Arizona",
    country: "USA",
    price: 269,
    hotelsFrom: 189,
    bestTime: "March to May",
    flightTime: "5h from New York",
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80",
    snippet: "Red rock canyons, world-class spa resorts, and the Grand Canyon just two hours away.",
    description: "Sedona's dramatic red rock landscape and clean desert air make it one of the Southwest's premier wellness destinations. Luxury spa resorts, scenic jeep tours, and a short drive to the Grand Canyon round out the perfect escape.",
    highlights: ["Red Rock State Park", "Grand Canyon Drive", "Luxury Spa Resorts", "Tlaquepaque Arts Village", "Chapel of the Holy Cross"],
  },
  {
    city: "Savannah",
    region: "Georgia",
    country: "USA",
    price: 198,
    hotelsFrom: 159,
    bestTime: "March to June",
    flightTime: "2h 15m from New York",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    snippet: "Spanish-moss-draped squares, antebellum architecture, and a remarkable dining scene in the South's most charming city.",
    description: "Savannah enchants with its 22 historic squares, cobblestone streets, and antebellum mansions draped in Spanish moss. The city's exceptional restaurants, riverfront promenade, and gentle pace make it perfect for an unhurried Southern escape.",
    highlights: ["Historic District Squares", "Forsyth Park", "River Street", "Bonaventure Cemetery", "Carriage Tours"],
  },
  {
    city: "Maui",
    region: "Hawaii",
    country: "USA",
    price: 449,
    hotelsFrom: 249,
    bestTime: "April to May",
    flightTime: "10h from New York",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=800&q=80",
    snippet: "Volcanic peaks, whale watching, the legendary Road to Hana, and some of the world's most beautiful beaches.",
    description: "Maui combines dramatic volcanic landscapes with lush tropical coastline and some of the finest resort hotels in the world. Whale watching from December to April, the spectacular Road to Hana, and glorious sunsets over Haleakala make every day unforgettable.",
    highlights: ["Road to Hana", "Whale Watching", "Haleakala Sunrise", "Wailea Beach", "Lahaina Town"],
  },
  {
    city: "Nashville",
    region: "Tennessee",
    country: "USA",
    price: 178,
    hotelsFrom: 119,
    bestTime: "April to June",
    flightTime: "2h from New York",
    image: "https://plus.unsplash.com/premium_photo-1670176447319-c5622f2fb996?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snippet: "Live music on every corner, world-class BBQ, and the honky-tonk spirit of Music City.",
    description: "Nashville pulses with live music spilling out of legendary venues on Broadway, Michelin-star dining, and a thriving arts scene. The Bluebird Cafe, Country Music Hall of Fame, and rooftop bars with skyline views make it an electrifying getaway.",
    highlights: ["Broadway Honky-Tonks", "Bluebird Cafe", "Country Music Hall of Fame", "Hot Chicken", "Centennial Park"],
  },
  {
    city: "San Diego",
    region: "California",
    country: "USA",
    price: 238,
    hotelsFrom: 169,
    bestTime: "May to October",
    flightTime: "5h 30m from New York",
    image: "https://images.unsplash.com/photo-1519954352454-2d5a7353e277?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snippet: "Year-round sunshine, world-class craft beer, and some of California's most beautiful beaches.",
    description: "San Diego offers the perfect California escape with miles of pristine beaches, the world-famous San Diego Zoo, a booming craft beer scene, and the historic Gaslamp Quarter. Mild year-round weather makes every season the right season.",
    highlights: ["Balboa Park", "San Diego Zoo", "Gaslamp Quarter", "Torrey Pines", "La Jolla Cove"],
  },
  {
    city: "Charleston",
    region: "South Carolina",
    country: "USA",
    price: 195,
    hotelsFrom: 149,
    bestTime: "March to May",
    flightTime: "1h 45m from New York",
    image: "https://images.unsplash.com/photo-1623608103487-3953899aff0b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snippet: "Pastel antebellum architecture, James Beard–awarded restaurants, and breathtaking plantation gardens.",
    description: "Charleston enchants with its rainbow-colored Rainbow Row, cobblestone streets, and exceptional Lowcountry cuisine. Historic plantations, sailboat tours on the harbor, and the laid-back Southern pace make it one of America's most beloved cities.",
    highlights: ["Rainbow Row", "Fort Sumter", "Magnolia Plantation", "King Street Dining", "Folly Beach"],
  },
  {
    city: "Puerto Rico",
    region: "Caribbean",
    country: "USA Territory",
    price: 268,
    hotelsFrom: 159,
    bestTime: "December to April",
    flightTime: "3h 30m from New York",
    image: "https://plus.unsplash.com/premium_photo-1661962694871-5422f8c4c506?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snippet: "Bioluminescent bays, Old San Juan's colorful forts, and no passport required for US travelers.",
    description: "Puerto Rico dazzles with the cobblestone streets and colorful fortresses of Old San Juan, bioluminescent bays that glow electric blue at night, and stunning beaches from Condado to Rincon. As a US territory, no passport is required.",
    highlights: ["Old San Juan", "El Yunque Rainforest", "Bioluminescent Bay", "Condado Beach", "El Morro Fort"],
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
      <section className="bg-ivory py-[100px]">
        <div className="max-w-[1280px] mx-auto px-20">

          {/* Heading */}
          <div className="mb-[56px]">
            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-warm-mid mb-[12px]">
              Where we go
            </p>
            <h2 className="font-display font-medium text-[52px] text-warm-dark leading-[1.05] tracking-[-0.01em]">
              Popular destinations
            </h2>
          </div>

          {/* Cards grid 4-col editorial: first 4 tall (Miami), last 4 short (Sedona) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-[16px]">
            {destinations.map((dest, i) => {
              // First 4 cards = tall (row-span-2, Miami style), last 4 = short (row-span-1, Sedona style)
              const isFeatured = i < 4;
              return (
                <div
                  key={dest.city}
                  onClick={() => setSelected(dest)}
                  className={`relative overflow-hidden rounded-[18px] cursor-pointer group ${isFeatured ? "row-span-2" : "row-span-1"}`}
                  style={{ boxShadow: "0 4px 24px rgba(26,15,13,0.13)" }}
                >
                  {/* Background image */}
                  <img
                    src={dest.image}
                    alt={`${dest.city}, ${dest.region}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
                  />

                  {/* Dark gradient overlay always visible at bottom */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(15,6,4,0.88) 0%, rgba(15,6,4,0.30) 45%, transparent 100%)"
                    }}
                  />

                  {/* Hover overlay subtle tint on hover */}
                  <div
                    className="absolute inset-0 bg-burg-deep/0 group-hover:bg-burg-deep/10 transition-colors duration-400"
                  />

                  {/* Price badge top-right */}
                  <div
                    className="absolute top-[14px] right-[14px] px-[12px] py-[6px] rounded-full text-[11px] font-body font-medium tracking-[0.06em] uppercase"
                    style={{
                      background: "rgba(201,168,76,0.92)",
                      color: "#1A0F0D",
                      backdropFilter: "blur(6px)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.18)"
                    }}
                  >
                    from ${dest.price}
                  </div>

                  {/* Content bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-[20px]">
                    {/* City name */}
                    <p
                      className="font-display font-semibold text-white leading-[1.1] mb-[2px]"
                      style={{ fontSize: isFeatured ? "28px" : "22px" }}
                    >
                      {dest.city}
                    </p>

                    {/* Region */}
                    <p className="font-body text-[12px] text-white/70 tracking-[0.06em] uppercase mb-[10px]">
                      {dest.region}, {dest.country}
                    </p>

                    {/* Snippet only visible on featured or on hover */}
                    <p
                      className={`font-body text-[13px] text-white/80 leading-[1.55] mb-[14px] transition-all duration-400 ${
                        isFeatured
                          ? "line-clamp-2"
                          : "max-h-0 opacity-0 group-hover:max-h-[60px] group-hover:opacity-100 overflow-hidden"
                      }`}
                    >
                      {dest.snippet}
                    </p>

                    {/* Bottom row: hotels price + CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[6px]">
                        <span className="font-body text-[11px] text-white/50 uppercase tracking-[0.05em]">Hotels</span>
                        <span className="font-display font-medium text-[15px] text-white/90">from ${dest.hotelsFrom}</span>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelected(dest); }}
                        className="font-body text-[12px] font-medium text-white bg-white/15 hover:bg-white/25 border border-white/25 rounded-full px-[14px] py-[6px] transition-all duration-250 backdrop-blur-sm"
                      >
                        Explore →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(15,6,4,0.75)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white w-full max-w-[680px] overflow-hidden max-h-[92vh] flex flex-col"
            style={{ borderRadius: "24px", boxShadow: "0 24px 80px rgba(15,6,4,0.45)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Hero image with text overlay ── */}
            <div className="relative h-[320px] shrink-0 overflow-hidden">
              <img
                src={selected.image}
                alt={selected.city}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(15,6,4,0.82) 0%, rgba(15,6,4,0.15) 55%, transparent 100%)" }}
              />

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-[16px] right-[16px] w-[38px] h-[38px] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                <X size={16} color="#fff" />
              </button>

              {/* Price badge */}
              <div
                className="absolute top-[16px] left-[16px] px-[14px] py-[7px] rounded-full font-body text-[11px] font-semibold tracking-[0.06em] uppercase"
                style={{ background: "rgba(201,168,76,0.92)", color: "#1A0F0D", backdropFilter: "blur(6px)" }}
              >
                Flights from ${selected.price}
              </div>

              {/* City name burned into image */}
              <div className="absolute bottom-0 left-0 right-0 px-[28px] pb-[24px]">
                <p className="font-body text-[11px] uppercase tracking-[0.12em] text-white/60 mb-[4px]">
                  {selected.region}, {selected.country}
                </p>
                <h2 className="font-display font-semibold text-[44px] text-white leading-[1.0]">
                  {selected.city}
                </h2>
              </div>
            </div>

            {/* ── Scrollable body ── */}
            <div className="flex-1 overflow-y-auto">

              {/* Stat strip */}
              <div
                className="grid grid-cols-4 border-b"
                style={{ borderColor: "#EDE0CC" }}
              >
                {[
                  { label: "Flights from", value: `$${selected.price}` },
                  { label: "Hotels from", value: `$${selected.hotelsFrom}/night` },
                  { label: "Best time", value: selected.bestTime },
                  { label: "Flight time", value: selected.flightTime },
                ].map(({ label, value }, i) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center py-[18px] px-[8px] text-center"
                    style={{ borderRight: i < 3 ? "1px solid #EDE0CC" : "none" }}
                  >
                    <p className="font-body text-[10px] uppercase tracking-[0.09em] text-warm-mid mb-[4px]">{label}</p>
                    <p
                      className="font-display font-semibold leading-none"
                      style={{ fontSize: i < 2 ? "18px" : "13px", color: i < 2 ? "#5C1828" : "#1A0F0D" }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="px-[28px] pt-[24px] pb-[8px]">
                <p className="font-body text-[15px] text-warm-mid leading-[1.75]">
                  {selected.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="px-[28px] pt-[20px] pb-[28px]">
                <p className="font-body text-[11px] uppercase tracking-[0.10em] text-warm-mid mb-[14px]">
                  Top highlights
                </p>
                <div className="flex flex-wrap gap-[8px]">
                  {selected.highlights.map((h, i) => (
                    <span
                      key={h}
                      className="font-body text-[13px] font-medium px-[16px] py-[8px] rounded-full flex items-center gap-[6px]"
                      style={{
                        background: i === 0 ? "#5C1828" : "#F5EAED",
                        color: i === 0 ? "#fff" : "#5C1828",
                      }}
                    >
                      {i === 0 && <span className="text-[10px]">★</span>}
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Sticky bottom CTA bar ── */}
            <div
              className="shrink-0 px-[28px] py-[20px] flex gap-[10px]"
              style={{
                borderTop: "1px solid #EDE0CC",
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(12px)"
              }}
            >
              <Button variant="ghost" className="flex-1 justify-center">
                <Phone size={14} aria-hidden />
                Call us
              </Button>
              <Button variant="primary" className="flex-1 justify-center">
                Book {selected.city}
              </Button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
