import Button from "@/components/ui/Button";

export interface FlightResult {
  id: string;
  airline: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  durationMinutes: number;
  stops: number;
  priceUsd: number;
  cabinClass: string;
}

function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export default function FlightResultCard({ result }: { result: FlightResult }) {
  const {
    airline, flightNumber, origin, destination,
    departureTime, arrivalTime, durationMinutes, stops, priceUsd, cabinClass,
  } = result;

  const stopsLabel = stops === 0 ? "Non-stop" : `${stops} stop${stops > 1 ? "s" : ""}`;

  return (
    <div className="bg-white border border-cream rounded-card px-[24px] py-[20px] flex items-center gap-[24px]">

      {/* Airline */}
      <div className="w-[140px] shrink-0">
        <p className="font-display font-medium text-[18px] text-warm-dark leading-none mb-[4px]">
          {airline}
        </p>
        <p className="font-body text-caption text-warm-mid">{flightNumber}</p>
      </div>

      {/* Route */}
      <div className="flex items-center gap-[12px] flex-1 min-w-0">
        <div className="text-right shrink-0">
          <p className="font-display font-semibold text-[22px] text-warm-dark leading-none">
            {departureTime}
          </p>
          <p className="font-body text-caption text-warm-mid mt-[4px]">{origin}</p>
        </div>

        <div className="flex flex-col items-center flex-1 min-w-0">
          <p className="font-body text-caption text-warm-mid mb-[6px]">
            {formatDuration(durationMinutes)}
          </p>
          <div className="flex items-center w-full">
            <div className="h-px flex-1 bg-cream" />
            <div className="w-[6px] h-[6px] rounded-full bg-warm-light mx-[4px] shrink-0" />
            <div className="h-px flex-1 bg-cream" />
          </div>
          <p className="font-body text-caption text-warm-mid mt-[6px]">{stopsLabel}</p>
        </div>

        <div className="shrink-0">
          <p className="font-display font-semibold text-[22px] text-warm-dark leading-none">
            {arrivalTime}
          </p>
          <p className="font-body text-caption text-warm-mid mt-[4px]">{destination}</p>
        </div>
      </div>

      {/* Price */}
      <div className="text-right shrink-0 w-[100px]">
        <p className="font-body text-caption text-warm-mid">{cabinClass}</p>
        <p className="font-display font-semibold text-[28px] text-warm-dark leading-none mt-[4px]">
          ${priceUsd}
        </p>
        <p className="font-body text-caption text-warm-mid mt-[2px]">per person</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-[8px] shrink-0">
        <Button variant="primary">Book now</Button>
        <Button variant="phone">Call us</Button>
      </div>

    </div>
  );
}
