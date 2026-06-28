import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function Contact() {
  const items = [
    {
      icon: Phone,
      label: "Phone",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
      testid: "contact-phone",
      color: "from-[#7a0016] to-[#E63946]",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: CONTACT.whatsapp,
      href: `https://wa.me/${CONTACT.whatsappRaw}`,
      testid: "contact-whatsapp",
      color: "from-[#25D366] to-[#1ebe5d]",
    },
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      testid: "contact-email",
      color: "from-[#7a0016] to-[#E63946]",
    },
    {
      icon: MapPin,
      label: "Operating From",
      value: "Nigeria · Egypt",
      href: "#",
      testid: "contact-location",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 lg:py-32 bg-[#fafafa] relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="inline-block px-4 py-1.5 bg-white border border-[#E63946]/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
              Get In Touch
            </span>
            <h2 className="mt-6 font-display font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tighter text-gray-900">
              Ready to start your{" "}
              <span className="text-brand-gradient">journey?</span>
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Contact us today for a free consultation. Our team typically
              responds within minutes during business hours.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${CONTACT.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-cta-whatsapp"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-bold rounded-full shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center gap-2 px-7 py-4 bg-white border-2 border-gray-200 hover:border-[#7a0016] text-gray-900 text-sm font-bold rounded-full transition-all hover:-translate-y-0.5"
              >
                <Phone size={18} />
                Call us
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    data-testid={c.testid}
                    target={c.label === "WhatsApp" ? "_blank" : undefined}
                    rel={
                      c.label === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group relative bg-white rounded-3xl p-7 border border-gray-200 hover:border-[#E63946] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <div
                      className={`w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-br ${c.color} grid place-items-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <p className="mt-5 text-xs uppercase tracking-widest font-bold text-gray-500">
                      {c.label}
                    </p>
                    <p className="mt-2 font-display font-extrabold text-lg text-gray-900 break-all group-hover:text-[#7a0016] transition-colors">
                      {c.value}
                    </p>
                    <ArrowRight
                      size={14}
                      className="absolute top-7 right-7 text-gray-300 group-hover:text-[#E63946] group-hover:translate-x-1 transition-all"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
