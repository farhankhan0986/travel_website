import { Search, Phone, Plane } from "lucide-react";

const steps = [
  {
    Icon: Search,
    title: "Search",
    description: "Enter where you want to go and your dates.",
  },
  {
    Icon: Phone,
    title: "Call or Book",
    description: "Speak with a real agent or book online instantly.",
  },
  {
    Icon: Plane,
    title: "Travel",
    description: "We handle every detail. You just show up.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-ivory py-20">
      <div className="max-w-[1280px] mx-auto px-20">

        <h2 className="font-display font-medium text-section text-warm-dark text-center tracking-[-0.01em] leading-[1.1] mb-16">
          Simple from start to finish
        </h2>

        <div className="grid grid-cols-3 gap-16">
          {steps.map(({ Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center gap-5">
              <Icon size={28} className="text-burg-deep" aria-hidden />
              <h3 className="font-display font-medium text-card-title text-warm-dark leading-[1.25]">
                {title}
              </h3>
              <p className="font-body text-body text-warm-mid leading-[1.65]">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
