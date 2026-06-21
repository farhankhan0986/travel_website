import type { Metadata } from "next";
import Nav from "@/components/ui/Nav";
import CallCTA from "@/components/sections/CallCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us - Tripile",
  description: "22 years helping travelers over 50 see the world with confidence.",
};

const team = [
  {
    name:      "Margaret Chen",
    initials:  "MC",
    years:     12,
    specialty: "Caribbean and Mediterranean Cruises",
  },
  {
    name:      "Robert Walsh",
    initials:  "RW",
    years:     18,
    specialty: "European River Cruises",
  },
  {
    name:      "Dorothy Santos",
    initials:  "DS",
    years:     9,
    specialty: "National Parks and Alaska",
  },
];

const accreditations = [
  "BBB A+ Accredited",
  "ASTA Member",
  "IATA Accredited",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <Nav />

      {/* Hero strip */}
      <section className="relative pt-[72px] overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-warm-dark/80" />

  {/* Content */}
  <div className="relative z-10 max-w-[1280px] mx-auto px-20 py-[100px]">
    <p className="font-body text-[11px] uppercase tracking-[0.12em] text-white/50 mb-[20px]">
      Our Company
    </p>

    <h1 className="font-display font-medium text-[72px] text-white leading-[1.0] mb-[24px]">
      We are Tripile
    </h1>

    <p className="font-body text-body-lg text-white/80 max-w-[560px] leading-[1.65]">
      For 22 years we have helped travelers over 50 experience the world with
      confidence, comfort, and a real agent by their side every step of the way.
    </p>
  </div>

</section>

      {/* Our Story */}
      <section className="py-[100px]">
        <div className="max-w-[1280px] mx-auto px-20">
          <div className="grid grid-cols-2 gap-[80px] items-center">

            <div className="flex flex-col gap-[24px]">
              <p className="font-body text-[11px] uppercase tracking-[0.12em] text-warm-mid">
                Our Story
              </p>
              <h2 className="font-display font-medium text-[48px] text-warm-dark leading-[1.1]">
                Born from a belief in better travel
              </h2>
              <div className="flex flex-col gap-[18px] font-body text-body text-warm-mid leading-[1.7]">
                <p>
                  Tripile was founded in 2002 with one simple belief: booking travel should feel
                  like the beginning of your adventure, not the obstacle before it. Our founders
                  saw that travelers over 50 were being left behind by the growing
                  do-it-yourself booking landscape.
                </p>
                <p>
                  They deserved expert guidance, real phone support, and thoughtfully designed
                  itineraries that matched their pace, their comfort, and their curiosity.
                  Not just a search engine and a credit card form.
                </p>
                <p>
                  Today, with more than two decades of experience and thousands of satisfied
                  travelers, we remain committed to that original promise. Every trip we book
                  is handled personally by a licensed travel agent who knows your destination
                  from firsthand experience.
                </p>
                <p>
                  We do not outsource. We do not automate the important conversations.
                  We pick up the phone.
                </p>
              </div>
            </div>

            <div className="rounded-card h-[480px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
                alt="Scenic mountain lake travel destination"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-cream py-[100px]">
        <div className="max-w-[1280px] mx-auto px-20">

          <div className="text-center mb-[56px]">
            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-warm-mid mb-[12px]">
              Our People
            </p>
            <h2 className="font-display font-medium text-[48px] text-warm-dark leading-[1.1]">
              Meet your agents
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-[24px]">
            {team.map((agent) => (
              <div
                key={agent.name}
                className="bg-white rounded-card border border-cream p-[32px] flex flex-col gap-[20px]"
              >
                <div className="w-[64px] h-[64px] rounded-full bg-burg-pale flex items-center justify-center">
                  <span className="font-display font-semibold text-[22px] text-burg-deep leading-none">
                    {agent.initials}
                  </span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="font-display font-medium text-[22px] text-warm-dark leading-none">
                    {agent.name}
                  </p>
                  <p className="font-body text-caption text-warm-mid">
                    {agent.years} years of experience
                  </p>
                  <p className="font-body text-body text-warm-mid leading-[1.5] mt-[4px]">
                    {agent.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Accreditations */}
      <section className="py-[80px]">
        <div className="max-w-[1280px] mx-auto px-20">
          <p className="font-body text-[11px] uppercase tracking-[0.12em] text-warm-mid text-center mb-[40px]">
            Trusted and Accredited
          </p>
          <div className="flex items-center justify-center gap-[20px] flex-wrap">
            {accreditations.map((badge) => (
              <div
                key={badge}
                className="border border-warm-light rounded-full px-[28px] py-[12px] font-body font-medium text-[16px] text-warm-dark"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallCTA />
      <Footer />
    </div>
  );
}
