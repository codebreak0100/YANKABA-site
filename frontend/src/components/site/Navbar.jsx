import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Heart, GitCompareArrows } from "lucide-react";
import { CONTACT } from "@/lib/data";
import { useCompare, useSaved } from "@/lib/favorites";

const links = [
  { label: "Universities", to: "/universities", testid: "universities" },
  { label: "Countries", to: "/countries", testid: "countries" },
  { label: "Programs", to: "/programs", testid: "programs" },
  { label: "About", to: "/#about", testid: "about" },
  { label: "Services", to: "/#services", testid: "services" },
  { label: "Contact", to: "/#contact", testid: "contact" },
];

export default function Navbar({ solid: forceSolid = false }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { saved } = useSaved();
  const { compare } = useCompare();

  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (!onHome || typeof IntersectionObserver === "undefined") {
      setActive("");
      return;
    }
    const sections = links
      .filter((l) => l.to.includes("#"))
      .map((l) => document.getElementById(l.to.split("#")[1]))
      .filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome, location.pathname]);

  const solid = forceSolid || scrolled || open;

  const linkClass = (l) => {
    const isActive = onHome && l.to.includes("#") && active === l.to.split("#")[1];
    if (solid) {
      return isActive
        ? "text-[#7a0016]"
        : "text-gray-700 hover:text-[#7a0016]";
    }
    return isActive ? "text-white" : "text-white/90 hover:text-white";
  };

  const isLinkActive = (l) =>
    onHome && l.to.includes("#") && active === l.to.split("#")[1];

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-[72px] lg:h-[82px] flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-center gap-2.5 group"
          aria-label="YANKABA Education Consultancy — home"
        >
          <img
            src="/images/logo/logo.png"
            alt=""
            className="h-9 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-xl lg:text-[22px] font-extrabold tracking-[-0.04em] transition-colors ${
                solid
                  ? "bg-gradient-to-r from-[#7a0016] to-[#D62839] bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              YANKABA
            </span>
            <span
              className={`mt-0.5 text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors ${
                solid ? "text-gray-500" : "text-white/75"
              }`}
            >
              Education Consultancy
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {links.map((l) => {
            const isActive = isLinkActive(l);
            return (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`nav-link-${l.testid}`}
                aria-current={isActive ? "true" : undefined}
                className={`text-sm font-semibold transition-colors relative group ${linkClass(l)}`}
              >
                {l.label}
                <span
                  className={`absolute left-0 -bottom-1.5 h-0.5 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  } ${solid ? "bg-[#D62839]" : "bg-white"} transition-all duration-300`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/universities"
            aria-label={`Saved universities (${saved.length})`}
            className={`relative grid h-10 w-10 place-items-center rounded-full border transition-colors ${
              solid
                ? "border-gray-200 text-gray-700 hover:border-[#D62839] hover:text-[#D62839]"
                : "border-white/25 text-white hover:bg-white/15"
            }`}
          >
            <Heart size={16} />
            {saved.length > 0 && (
              <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#D62839] px-1 text-[10px] font-extrabold text-white">
                {saved.length}
              </span>
            )}
          </Link>
          <Link
            to={compare.length ? `/compare?u=${compare.join(",")}` : "/compare"}
            aria-label={`Compare universities (${compare.length})`}
            className={`relative grid h-10 w-10 place-items-center rounded-full border transition-colors ${
              solid
                ? "border-gray-200 text-gray-700 hover:border-[#7a0016] hover:text-[#7a0016]"
                : "border-white/25 text-white hover:bg-white/15"
            }`}
          >
            <GitCompareArrows size={16} />
            {compare.length > 0 && (
              <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#7a0016] px-1 text-[10px] font-extrabold text-white">
                {compare.length}
              </span>
            )}
          </Link>
          <a
            href={`tel:${CONTACT.phone}`}
            data-testid="nav-phone"
            className={`text-sm font-semibold inline-flex items-center gap-2 transition-colors ${
              solid
                ? "text-gray-900 hover:text-[#7a0016]"
                : "text-white hover:text-[#ffb8c0]"
            }`}
          >
            <Phone size={14} />
            {CONTACT.phone}
          </a>
          <Link
            to="/#apply"
            data-testid="nav-apply-btn"
            className="px-5 py-2.5 bg-[#D62839] hover:bg-[#7a0016] text-white text-sm font-bold rounded-full transition-colors shadow-md shadow-[#D62839]/30"
          >
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          className={`lg:hidden p-2 -mr-2 rounded-full transition-colors ${
            solid ? "text-gray-900" : "text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          data-testid="nav-mobile-menu"
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-4.5rem)] overflow-y-auto animate-fade-up"
        >
          <nav className="px-5 sm:px-6 py-4 flex flex-col" aria-label="Mobile">
            <Link
              to="/"
              className="py-3.5 text-base font-semibold text-gray-800 hover:text-[#7a0016] border-b border-gray-100 transition-colors"
            >
              Home
            </Link>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3.5 text-base font-semibold text-gray-800 hover:text-[#7a0016] border-b border-gray-100 transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                to="/universities"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-700"
              >
                <Heart size={15} /> Saved ({saved.length})
              </Link>
              <Link
                to={compare.length ? `/compare?u=${compare.join(",")}` : "/compare"}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-700"
              >
                <GitCompareArrows size={15} /> Compare ({compare.length})
              </Link>
            </div>

            <a
              href={`tel:${CONTACT.phone}`}
              className="mt-4 text-sm font-semibold text-gray-700 inline-flex items-center gap-2 hover:text-[#7a0016] transition-colors"
            >
              <Phone size={15} /> {CONTACT.phone}
            </a>
            <Link
              to="/#apply"
              className="mt-4 mb-2 px-5 py-3.5 bg-[#D62839] hover:bg-[#7a0016] text-white text-center text-sm font-bold rounded-full transition-colors"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
