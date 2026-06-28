import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section
      id="stories"
      data-testid="testimonials-section"
      //className="py-24 lg:py-32 bg-white relative overflow-hidden"
      className="py-16 lg:py-20 bg-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #7a0016 0%, transparent 50%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#fff5f5] border border-[#E63946]/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
            Success Stories
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight text-gray-900">
            From dream to{" "}
            <span className="text-brand-gradient">graduation cap.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              data-testid={`testimonial-${i}`}
              className="group bg-gradient-to-br from-white to-[#fff5f5] rounded-3xl overflow-hidden border border-gray-200 hover:border-[#E63946] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[3/3] overflow-hidden bg-gray-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  //className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  //className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  //className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7a0016]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="font-display font-extrabold text-xl">
                    {t.name}
                  </p>
                  <p className="text-xs text-white/80 mt-0.5">
                    {t.country} · {t.course}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#E63946] grid place-items-center shadow-lg">
                  <Quote size={16} className="text-white" />
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-[#E63946] text-[#E63946]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-[15px] italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
