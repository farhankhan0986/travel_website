import Button from "@/components/ui/Button";

export default function WhyTripile() {
  return (
    <section className="bg-ivory py-[80px]">
      <div className="max-w-[1280px] mx-auto px-20 grid grid-cols-2 gap-[64px] items-stretch">

        {/* Left — editorial copy */}
        <div className="flex flex-col gap-[24px] justify-center">
          <p className="font-body text-label text-warm-mid uppercase tracking-[0.10em]">
            Why Tripile
          </p>

          <h2 className="font-display font-medium text-section text-warm-dark tracking-[-0.01em] leading-[1.1]">
            We have been doing this for 22 years
          </h2>

          <p className="font-body text-body-lg text-warm-mid leading-[1.7]">
            Every agent on our team has personally traveled to the destinations
            they recommend. We do not read from a script.
          </p>

          <p className="font-body text-body-lg text-warm-mid leading-[1.7]">
            When something goes wrong mid-trip - a cancelled flight, a hotel
            mix-up - you call us and a real person picks up.
          </p>

          <div>
            <Button variant="phone">Call 1-800-TRIPILE</Button>
          </div>
        </div>

        {/* Right — image */}
        <div className="rounded-card min-h-[420px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
            alt="Scenic road trip destination"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
