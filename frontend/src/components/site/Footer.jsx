import { Link } from "react-router-dom";
import { CONTACT, getHomeFeatured } from "@/lib/data";
import { Instagram, Facebook, ArrowUpRight } from "lucide-react";

const EXPLORE_LINKS = [
  { label: "Home", to: "/" },
  { label: "Universities", to: "/universities" },
  { label: "Countries", to: "/countries" },
  { label: "Programs", to: "/programs" },
  { label: "Compare", to: "/compare" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="bg-brand-dark text-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #D62839 0%, transparent 40%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
             <div className="flex items-center gap-3">
              <img
                src="/images/logo/logo.png"
                alt="YANKABA Education Consultancy"
                width="120"
                height="48"
                className="h-12 w-auto"
              />

              <p className="font-display font-extrabold text-2xl tracking-tighter">
                YANKABA
              </p>
            </div>

            <p className="mt-6 text-white/80 max-w-md leading-relaxed">
              Helping international students secure affordable admissions to
              top universities in Egypt, Turkey and Cyprus — with guidance from
              application to arrival.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.instagram.com/yankabaeducationconsultancy?utm_source=qr&igsh=a3EwaTdyNDBqaWVh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:bg-pink-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/18ogGtfPHY/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <p className="kicker text-white/70">Explore</p>
            <ul className="mt-5 space-y-3">
              {EXPLORE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/80 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Universities */}
          <div className="lg:col-span-2">
            <p className="kicker text-white/70">Popular universities</p>
            <ul className="mt-5 space-y-3">
              {getHomeFeatured(2).map((u) => (
                <li key={u.slug}>
                  <Link
                    to={`/universities/${u.slug}`}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {u.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="kicker text-white/70">Get in touch</p>
            <ul className="mt-5 space-y-4">
              <li>
                <p className="text-xs text-white/70">Phone</p>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-sm text-white hover:text-[#ffb8c0] transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <p className="text-xs text-white/70">WhatsApp</p>
                <a
                  href={`https://wa.me/${CONTACT.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-[#ffb8c0] transition-colors"
                >
                  {CONTACT.whatsapp}
                </a>
              </li>
              <li>
                <p className="text-xs text-white/70">Email</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-white hover:text-[#ffb8c0] transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/70 sm:text-right max-w-sm">
            © {new Date().getFullYear()} YANKABA Education Consultancy. All
            rights reserved.
          </p>
          <p className="text-xs text-white/70">
            Officially authorised via WAFEDEN, Ministry of Higher Education
            Egypt.
          </p>
        </div>
      </div>
    </footer>
  );
}
