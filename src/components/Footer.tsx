const bookLinks = ["Flights", "Hotels", "About Us"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

function ColHeading({ children }: { children: string }) {
  return (
    <p className="font-body font-medium text-label text-white/60 uppercase tracking-[0.10em]">
      {children}
    </p>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <li>
      <a
        href={href}
        className="font-body text-[14px] text-white/80 hover:text-white transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-warm-dark py-[48px]">
      <div className="max-w-[1280px] mx-auto px-20">

        <div className="grid grid-cols-4 gap-[64px]">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-[12px]">
            <a
              href="/"
              className="font-display font-semibold text-[24px] text-white leading-none"
            >
              Tripile
            </a>
            <p className="font-body text-[14px] text-white/60 leading-[1.5]">
              Travel with confidence.
            </p>
          </div>

          {/* Col 2 — Book */}
          <div className="flex flex-col gap-[16px]">
            <ColHeading>Book</ColHeading>
            <ul className="flex flex-col gap-[12px]">
              {bookLinks.map((link) => (
                <NavLink key={link} href="#">{link}</NavLink>
              ))}
            </ul>
          </div>

          {/* Col 3 — Support */}
          <div className="flex flex-col gap-[16px]">
            <ColHeading>Support</ColHeading>
            <ul className="flex flex-col gap-[12px]">
              <NavLink href="#">Call 1-800-TRIPILE</NavLink>
              <li className="font-body text-[14px] text-white/80">
                Mon-Sat 8am-9pm EST
              </li>
              <NavLink href="mailto:help@tripile.com">help@tripile.com</NavLink>
            </ul>
          </div>

          {/* Col 4 — Legal */}
          <div className="flex flex-col gap-[16px]">
            <ColHeading>Legal</ColHeading>
            <ul className="flex flex-col gap-[12px]">
              {legalLinks.map((link) => (
                <NavLink key={link} href="#">{link}</NavLink>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-[48px] pt-[24px] border-t border-white/10">
          <p className="font-body text-label text-white/40">
            &copy; 2026 Tripile. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
