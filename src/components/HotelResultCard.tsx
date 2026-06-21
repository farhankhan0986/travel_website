import { Star, Phone } from "lucide-react";
import Button from "@/components/ui/Button";

export interface HotelResult {
  id: string;
  name: string;
  stars: number;
  location: string;
  pricePerNight: number;
  currency: string;
  imageUrl: string;
}

export default function HotelResultCard({ result }: { result: HotelResult }) {
  const { name, stars, location, pricePerNight, currency, imageUrl } = result;

  return (
    <article className="bg-white rounded-card border border-cream border-l-[3px] border-l-burg-deep hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow duration-200 flex flex-row overflow-hidden">

      {/* Hotel image */}
      <div className="w-[180px] shrink-0 overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="flex-1 p-[24px] flex flex-col justify-between gap-[12px]">

        <div className="flex flex-col gap-[6px]">
          <p className="font-display font-medium text-[20px] text-warm-dark leading-[1.2]">
            {name}
          </p>

          <div className="flex items-center gap-[3px]">
            {Array.from({ length: stars }).map((_, i) => (
              <Star key={i} size={13} className="text-gold-accent" fill="currentColor" />
            ))}
          </div>

          <p className="font-body text-caption text-warm-mid">{location}</p>
        </div>

        {/* Price + buttons */}
        <div className="flex items-end justify-between">
          <div>
            <p className="font-display font-medium text-[24px] text-burg-deep leading-none">
              {currency} {pricePerNight}
            </p>
            <p className="font-body text-caption text-warm-mid mt-[3px]">per night</p>
          </div>

          <div className="flex items-center gap-[8px]">
            <Button variant="ghost">
              <Phone size={14} aria-hidden />
              Call us
            </Button>
            <Button variant="primary">Book now</Button>
          </div>
        </div>

      </div>
    </article>
  );
}
