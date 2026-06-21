"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

type FlightValues = { tab: "flights"; from: string; to: string; departure: string };
type HotelValues  = { tab: "hotels"; city: string; checkIn: string; checkOut: string };
export type SearchValues = FlightValues | HotelValues;

interface SearchBoxProps {
  activeTab: "flights" | "hotels";
  setActiveTab: (tab: "flights" | "hotels") => void;
  /** Override the outer wrapper's className. Defaults to hero absolute-protrusion positioning. */
  className?: string;
  /** Called when the user clicks the search button. If omitted the button is decorative. */
  onSearch?: (values: SearchValues) => void;
}

function Separator() {
  return <div className="hidden sm:block w-px self-stretch my-4 bg-cream" />;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center px-[16px] py-[12px] sm:px-5 sm:py-4 flex-1 min-w-0 border-b border-cream sm:border-b-0">
      <span className="font-body text-[11px] uppercase tracking-[0.10em] text-black mb-1 select-none">
        {label}
      </span>
      {children}
    </div>
  );
}

const inputClass =
  "font-body text-[15px] text-white/70 placeholder:text-white/70 bg-transparent outline-none w-full";

export default function SearchBox({
  activeTab,
  setActiveTab,
  className,
  onSearch,
}: SearchBoxProps) {
  const router = useRouter();

  const [from, setFrom]           = useState("");
  const [to, setTo]               = useState("");
  const [departure, setDeparture] = useState("");
  const [city, setCity]           = useState("");
  const [checkIn, setCheckIn]     = useState("");
  const [checkOut, setCheckOut]   = useState("");

  function handleSearch() {
    if (onSearch) {
      if (activeTab === "flights") {
        onSearch({ tab: "flights", from, to, departure });
      } else {
        onSearch({ tab: "hotels", city, checkIn, checkOut });
      }
    } else {
      router.push(activeTab === "flights" ? "/flights" : "/hotels");
    }
  }

  const outerClass =
    className ??
    "absolute bottom-[100px] left-1/2 lg:left-[calc(50%+300px)] -translate-x-1/2 translate-y-[48px] z-30 w-full max-w-4xl px-6";

  return (
    <div className={outerClass}>
      <div className="bg-white/15 backdrop-blur-md rounded-search border border-white/15 shadow-[0_8px_40px_rgba(15,6,4,0.22)]">

        {/* Tab row */}
        <div className="flex gap-1 px-4 pt-3">
          {(["flights", "hotels"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={[
                "capitalize px-5 py-1.5 rounded-full font-body font-medium text-sm transition-colors duration-200",
                activeTab === tab
                  ? "bg-burg-deep text-white"
                  : "bg-transparent text-black hover:text-warm-dark",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Fields row — stacks vertically on mobile */}
        <div className="flex flex-col sm:flex-row items-stretch">
          {activeTab === "flights" ? (
            <>
              <Field label="FROM">
                <input
                  type="text"
                  placeholder="City or airport"
                  className={inputClass}
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </Field>
              <Separator />
              <Field label="TO">
                <input
                  type="text"
                  placeholder="City or airport"
                  className={inputClass}
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </Field>
              <Separator />
              <Field label="DEPARTURE">
                <input
                  type="date"
                  className={inputClass}
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
              </Field>
            </>
          ) : (
            <>
              <Field label="CITY">
                <input
                  type="text"
                  placeholder="Where to?"
                  className={inputClass}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Field>
              <Separator />
              <Field label="CHECK-IN">
                <input
                  type="date"
                  className={inputClass}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </Field>
              <Separator />
              <Field label="CHECK-OUT">
                <input
                  type="date"
                  className={inputClass}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </Field>
            </>
          )}

          {/* Search button */}
          <div className="flex items-center justify-center py-[10px] sm:py-0 sm:pr-4 sm:pl-2">
            <button
              type="button"
              aria-label="Search"
              onClick={handleSearch}
              className="w-[52px] h-[52px] rounded-full bg-burg-deep flex items-center justify-center hover:bg-burg-mid transition-colors duration-200 shrink-0"
            >
              <Search size={20} className="text-white" aria-hidden />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
