import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[70px] gap-6">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/neuroedge-logo-transparent.png"
              alt="NeuroEdge Chiropractic"
              width={160}
              height={64}
              className="h-16 w-auto"
            />
          </Link>

          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="#about"
                  className="text-sm font-medium text-foreground hover:text-[#235789] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#235789] after:transition-all hover:after:w-full"
                >
                  Meet the Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sm font-medium text-foreground hover:text-[#235789] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#235789] after:transition-all hover:after:w-full"
                >
                  How We Help
                </Link>
              </li>
              <li>
                <Link
                  href="#forms"
                  className="text-sm font-medium text-foreground hover:text-[#235789] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#235789] after:transition-all hover:after:w-full"
                >
                  Patient Forms
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-sm font-medium text-foreground hover:text-[#235789] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#235789] after:transition-all hover:after:w-full"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="text-sm font-medium text-foreground hover:text-[#235789] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#235789] after:transition-all hover:after:w-full"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm font-medium text-foreground hover:text-[#235789] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#235789] after:transition-all hover:after:w-full"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="tel:(951) 304-2242"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm border border-[#235789] text-[#235789] bg-white hover:bg-[#f0f6fc] transition-all hover:-translate-y-0.5"
            >
              Call (951) 304-2242
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm bg-[#235789] text-white shadow-md hover:bg-[#1a4166] transition-all hover:-translate-y-0.5"
            >
              Schedule
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
