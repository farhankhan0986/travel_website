import { Shield, Users, Headphones, Lock } from "lucide-react";

const items = [
  { Icon: Shield,     label: "BBB A+ Rating" },
  { Icon: Users,      label: "150K+ Travelers" },
  { Icon: Headphones, label: "Real Agents, Not Bots" },
  { Icon: Lock,       label: "Secure SSL Booking" },
];

export default function TrustStrip() {
  return (
    <div className="w-full bg-ivory border-b border-cream py-4">
      <ul className="flex items-center justify-center gap-8 flex-wrap px-6 max-w-5xl mx-auto list-none">
        {items.map(({ Icon, label }) => (
          <li key={label} className="flex items-center gap-2">
            <Icon size={18} className="text-burg-deep shrink-0" aria-hidden />
            <span className="font-body text-caption text-warm-mid">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
