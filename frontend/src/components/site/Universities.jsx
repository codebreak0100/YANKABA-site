import { ExternalLink, MapPin, ArrowRight } from "lucide-react";
import { UNIVERSITIES } from "@/lib/data";

export default function Universities() {
  return (
    <section
      id="universities"
      data-testid="universities-section"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#fff5f5] border border-[#E63946]/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
            Partner Universities
          </span>
          <h2 className="mt-6 font-display font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tighter text-gray-900">
            Access to Egypt&apos;s most{" "}
            <span className="text-brand-gradient">prestigious</span>{" "}
            institutions.
          </h2>
          <p className="mt-5 text-base lg:text-lg text-gray-600 leading-relaxed">
            13 top-ranked universities. World-class faculty. Modern facilities.
            Internationally-recognised degrees.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-gray-200 py-6 mb-16 bg-gradient-to-r from-white via-[#fff5f5] to-white">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...UNIVERSITIES, ...UNIVERSITIES].map((u, i) => (
              <span
                key={i}
                className="font-display font-extrabold text-2xl lg:text-3xl text-gray-300"
              >
                {u.name}
                <span className="ml-12 text-[#E63946]">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {UNIVERSITIES.map((u, i) => (
            <a
              key={u.name}
              href={u.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`university-${i}`}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#E63946] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-[16/11] overflow-hidden bg-gray-100 relative">
                <img
                  src={u.image}
                  alt={u.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7a0016]/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-[#7a0016] flex items-center gap-1.5">
                    <MapPin size={10} />
                    {u.city}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-[#E63946]/90 backdrop-blur rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                    Est. {u.founded}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-extrabold text-xl text-gray-900 group-hover:text-[#7a0016] transition-colors">
                  {u.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Offering world-class education with modern facilities and
                  experienced faculty.
                </p>
                <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#7a0016] group-hover:text-[#E63946] transition-colors flex items-center gap-1.5">
                    Visit website
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-gray-400 group-hover:text-[#E63946] transition-colors"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
