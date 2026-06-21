import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Booking with Tripile was the first time I felt like someone actually listened to what I wanted.",
    name: "Margaret H.",
    age: 67,
    city: "Phoenix, AZ",
    stars: 5,
  },
  {
    quote:
      "I called at 7pm on a Sunday when my connection was cancelled. Someone picked up in two rings.",
    name: "Robert K.",
    age: 71,
    city: "Tampa, FL",
    stars: 5,
  },
  {
    quote:
      "My wife has mobility needs. They arranged everything without me having to ask twice.",
    name: "David M.",
    age: 64,
    city: "Denver, CO",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-[80px]">
      <div className="max-w-[1280px] mx-auto px-20">

        <h2 className="font-display font-medium text-section text-warm-dark text-center tracking-[-0.01em] leading-[1.1] mb-[48px]">
          What our travelers say
        </h2>

        <div className="grid grid-cols-3 gap-[24px]">
          {testimonials.map(({ quote, name, age, city, stars }) => (
            <div
              key={name}
              className="bg-white border border-cream rounded-card p-[28px] flex flex-col gap-[20px]"
            >
              {/* Star rating */}
              <div className="flex gap-[3px]">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-gold-accent"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-display text-[20px] italic text-warm-dark leading-[1.6] flex-1">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex flex-col gap-[3px]">
                <p className="font-body font-medium text-[14px] text-warm-dark leading-none">
                  {name}
                </p>
                <p className="font-body text-caption text-warm-mid leading-none">
                  {age}, {city}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
