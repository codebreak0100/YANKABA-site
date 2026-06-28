import {
  GraduationCap,
  FileText,
  Plane,
  Home,
  Compass,
  Handshake,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICONS = {
  "graduation-cap": GraduationCap,
  "file-text": FileText,
  plane: Plane,
  home: Home,
  compass: Compass,
  handshake: Handshake,
};

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 lg:py-32 bg-[#fafafa] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white border border-[#E63946]/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
            Our Services
          </span>
          <h2 className="mt-6 font-display font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tighter text-gray-900">
            Comprehensive support for your{" "}
            <span className="text-brand-gradient">educational journey</span>.
          </h2>
          <p className="mt-5 text-base lg:text-lg text-gray-600 leading-relaxed">
            From the first consultation to graduation day, we handle every
            detail so you can focus on what matters: your studies and your
            future.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <div
                key={s.title}
                data-testid={`service-${i}`}
                className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#E63946] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#fff5f5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-brand-gradient grid place-items-center shadow-lg shadow-[#7a0016]/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="font-display font-extrabold text-3xl text-gray-100 group-hover:text-[#E63946]/20 tracking-tighter transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display font-extrabold text-xl text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {s.body}
                  </p>
                  <a
                    href="#apply"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#7a0016] group-hover:text-[#E63946] transition-colors"
                  >
                    Learn more
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
