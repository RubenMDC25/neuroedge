import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#235789] text-white">
      {/* Footer Top */}
      <div className="py-10 px-6 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-6 flex-wrap">
          <h2 className="text-2xl font-bold text-white m-0 flex-1">Experience Health & Healing Today!</h2>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm bg-[#c1292e] text-white shadow-md hover:bg-[#a01f24] transition-all hover:-translate-y-0.5"
          >
            Request an Appointment
          </Link>
        </div>
      </div>

      {/* Footer Mid */}
      <div className="py-12 px-6 border-b border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/neuroedge-logo-transparent.png"
              alt="NeuroEdge Chiropractic Logo"
              width={120}
              height={120}
              className="h-[120px] w-auto transition-transform hover:scale-105"
            />
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2 text-[#cbd5e1] text-sm">
              <li>25032 Las Brisas Rd #A, Murrieta, CA 92562</li>
              <li>
                <Link href="mailto:hello@neuroedgechiropractic.com" className="hover:text-white transition-colors">
                  hello@neuroedgechiropractic.com
                </Link>
              </li>
              <li>
                <Link href="tel:(951) 304-2242" className="hover:text-white transition-colors">
                  (951) 304-2242
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Hours</h4>
            <ul className="space-y-2 text-[#cbd5e1] text-sm">
              <li>Mon · 8–12, 2–6</li>
              <li>Tue · 8–12, 2–5</li>
              <li>Wed · 8–12, 2–6</li>
              <li>Thu · 8–12, 2–6</li>
              <li>Fri · Closed</li>
              <li>Sat · Closed</li>
              <li>Sun · Closed</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2 text-[#cbd5e1] text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Meet the Doctor
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Appointment Request
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  How We Help
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-white transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-6 px-6 border-t border-white/10 text-[#cbd5e1] text-sm">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-5 flex-wrap">
          <div>
            © 2025 NeuroEdge Chiropractic. All rights reserved.{" "}
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div>
            Website by{" "}
            <Link
              href="https://rmdigitaldesigns.com"
              target="_blank"
              rel="noopener"
              className="hover:text-white transition-colors"
            >
              R&M Digital Designs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
