import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Universities", href: "#universities" },
  { label: "Programs", href: "#programs" },
  { label: "Costs", href: "#costs" },
  { label: "Apply", href: "#apply" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3.5 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <img
            src="/images/logo/logo.png"
            alt="YANKABA Education Consultancy"
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
          />

          <div className="flex flex-col leading-tight">
            
           <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  YANKABA
                </h1>

            <span
              className={`text-xs font-medium tracking-wider uppercase ${
                scrolled ? "text-gray-500" : "text-white/80"
              } transition-colors`}
            >
              Education Consultancy
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={`text-sm font-medium transition-colors relative group ${
                scrolled
                  ? "text-gray-700 hover:text-[#7a0016]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-0 ${
                  scrolled ? "bg-[#E63946]" : "bg-white"
                } transition-all duration-300 group-hover:w-full`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phone}`}
            data-testid="nav-phone"
            className={`text-sm font-semibold inline-flex items-center gap-2 transition-colors ${
              scrolled
                ? "text-gray-900 hover:text-[#7a0016]"
                : "text-white hover:text-[#ffb8c0]"
            }`}
          >
            <Phone size={14} />
            {CONTACT.phone}
          </a>
          <a
            href="#apply"
            data-testid="nav-apply-btn"
            className="px-5 py-2.5 bg-[#E63946] hover:bg-[#7a0016] text-white text-sm font-bold rounded-full transition-colors shadow-md shadow-[#E63946]/30"
          >
            Apply Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
          className={`lg:hidden p-2 ${scrolled ? "text-gray-900" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-gray-900"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-sm font-semibold text-gray-700 inline-flex items-center gap-2"
            >
              <Phone size={14} /> {CONTACT.phone}
            </a>
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 bg-[#E63946] text-white text-center text-sm font-bold rounded-full"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
