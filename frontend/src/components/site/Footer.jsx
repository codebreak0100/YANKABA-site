import { CONTACT, UNIVERSITIES } from "@/lib/data";
import { Instagram, Facebook, Twitter, ArrowUpRight } from "lucide-react";

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
            "radial-gradient(circle at 20% 30%, #E63946 0%, transparent 40%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
             <div className="flex items-center gap-3">
              <img
                src="/images/logo/logo.png"
                alt="YANKABA Education Consultancy"
                className="h-16 w-auto"
              />

              <h3 className="font-display font-extrabold text-2xl tracking-tighter">
                YANKABA
              </h3>
            </div>

            <p className="mt-6 text-white/80 max-w-md leading-relaxed">
              Helping African and international students secure affordable
              scholarships and admissions to Egypt&apos;s top universities since
              day one.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.instagram.com/yankabaeducationconsultancy?utm_source=qr&igsh=a3EwaTdyNDBqaWVh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border border-white/20 grid place-items-center hover:bg-pink-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/18ogGtfPHY/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border border-white/20 grid place-items-center hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <p className="kicker text-white/60">Explore</p>
            <ul className="mt-5 space-y-3">
              {["About", "Services", "Universities", "Programs", "Costs", "Apply", "Contact"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="text-sm text-white/80 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {l}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                      />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Universities */}
          <div className="lg:col-span-2">
            <p className="kicker text-white/60">Universities</p>
            <ul className="mt-5 space-y-3">
              {UNIVERSITIES.slice(0, 7).map((u) => (
                <li key={u.name}>
                  <a
                    href={u.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {u.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="kicker text-white/60">Get in touch</p>
            <ul className="mt-5 space-y-4">
              <li>
                <p className="text-xs text-white/60">Phone</p>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-sm text-white hover:text-brand-light transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <p className="text-xs text-white/60">WhatsApp</p>
                <a
                  href={`https://wa.me/${CONTACT.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-brand-light transition-colors"
                >
                  {CONTACT.whatsapp}
                </a>
              </li>
              <li>
                <p className="text-xs text-white/60">Email</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-white hover:text-brand-light transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} YANKABA Education Consultancy. All
            rights reserved.
          </p>
          <p className="text-xs text-white/60">
            Officially authorised via WAFEDEN, Ministry of Higher Education
            Egypt.
          </p>
        </div>
      </div>
    </footer>
  );
}
