import { Phone, Plane } from "lucide-react";
import Button from "@/components/ui/Button";

export interface FlightResult {
  id: string;
  airline: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  cabin: string;
  price: number;
  currency: string;
}

export default function FlightResultCard({ result }: { result: FlightResult }) {
  const {
    airline, flightNumber, origin, destination,
    departureTime, arrivalTime, duration, stops, cabin, price, currency,
  } = result;

  const stopsLabel = stops === 0 ? "Non-stop" : stops === 1 ? "1 stop" : `${stops} stops`;
  const initials   = airline.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <article className="bg-white rounded-card border border-cream border-l-[3px] border-l-burg-deep hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow duration-200 p-[24px] flex flex-col gap-[18px]">

      {/* Airline row */}
      <div className="flex items-center gap-[12px]">
        <div className="w-[38px] h-[38px] rounded-full bg-burg-pale flex items-center justify-center shrink-0">
          <span className="font-display font-semibold text-[13px] text-burg-deep leading-none">
            {initials}
          </span>
        </div>
        <p className="font-body text-caption text-warm-mid flex-1">
          {airline} · {flightNumber}
        </p>
        <span className="font-body text-[11px] uppercase tracking-[0.08em] text-warm-mid border border-cream rounded-full px-[10px] py-[3px]">
          {cabin}
        </span>
      </div>

      {/* Route row */}
      <div className="flex items-center gap-[16px]">

        <div className="shrink-0">
          <p className="font-display font-medium text-[28px] text-warm-dark leading-none">
            {departureTime}
          </p>
          <p className="font-body text-caption text-warm-mid mt-[5px]">{origin}</p>
        </div>

        <div className="flex flex-col items-center flex-1 min-w-0">
          <p className="font-body text-caption text-warm-mid mb-[8px]">
            {duration} · {stopsLabel}
          </p>
          <div className="flex items-center w-full">
            <div className="h-px flex-1 bg-cream" />
            <Plane size={12} className="text-burg-deep/50 mx-[6px] shrink-0" />
            <div className="h-px flex-1 bg-cream" />
          </div>
        </div>

        <div className="text-right shrink-0">
          <p className="font-display font-medium text-[28px] text-warm-dark leading-none">
            {arrivalTime}
          </p>
          <p className="font-body text-caption text-warm-mid mt-[5px]">{destination}</p>
        </div>

      </div>

      {/* Price + buttons */}
      <div className="flex items-center justify-between pt-[14px] border-t border-cream">
        <div>
          <p className="font-display font-medium text-[24px] text-burg-deep leading-none">
            {currency} {price}
          </p>
          <p className="font-body text-caption text-warm-mid mt-[3px]">per person</p>
        </div>

        <div className="flex items-center gap-[8px]">
          <Button variant="ghost">
            <Phone size={14} aria-hidden />
            Call us
          </Button>
          <Button variant="primary">Book now</Button>
        </div>
      </div>

    </article>
  );
}
