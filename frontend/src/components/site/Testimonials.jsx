import { ArrowRight, BadgeCheck, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section
      id="stories"
      data-testid="testimonials-section"
      aria-labelledby="testimonials-heading"
      className="section-shell relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #7a0016 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-16">
          <span className="inline-block rounded-full border border-[#D62839]/20 bg-[#fff5f5] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
            Success Stories
          </span>
          <h2
            id="testimonials-heading"
            className="text-balance mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tighter text-gray-900 lg:text-5xl xl:text-6xl"
          >
            From dream to{" "}
            <span className="text-brand-gradient">graduation cap.</span>
          </h2>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <div className="flex -space-x-3">
              {TESTIMONIALS.slice(0, 5).map((t) => (
                <img
                  key={t.name}
                  src={t.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width="36"
                  height="36"
                  className="h-9 w-9 rounded-full border-2 border-white object-cover object-top shadow-sm"
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-gray-600">
              Trusted by{" "}
              <span className="font-extrabold text-gray-900">1,000+</span>{" "}
              international students
            </p>
          </div>

          <p
            aria-hidden="true"
            className="mt-8 flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 sm:hidden"
          >
            Swipe to explore <ArrowRight size={13} />
          </p>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Student testimonials"
          tabIndex={0}
          className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              data-testid={`testimonial-${i}`}
              className="group relative flex h-full w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D62839]/40 hover:shadow-2xl sm:w-auto"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-gray-100">
                <img
                  src={t.image}
                  alt={`${t.name}, ${t.course} student from ${t.country}`}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="320"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a0010]/85 via-[#3a0010]/10 to-transparent" />

                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#7a0016] shadow-sm backdrop-blur">
                  <BadgeCheck size={13} className="text-[#0B7A38]" />
                  Verified student
                </span>

                <figcaption className="absolute inset-x-4 bottom-4 text-white">
                  <cite className="block font-display text-lg font-extrabold not-italic leading-tight">
                    {t.name}
                  </cite>
                  <p className="mt-0.5 text-xs text-white/80">
                    {t.course} · {t.country}
                  </p>
                </figcaption>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-[#D62839] text-[#D62839]"
                    />
                  ))}
                  <span className="ml-1.5 text-xs font-bold text-gray-500">
                    5.0
                  </span>
                </div>
                <blockquote className="relative flex-1 text-[15px] leading-relaxed text-gray-700">
                  <Quote
                    size={26}
                    aria-hidden="true"
                    className="absolute -left-1 -top-1.5 fill-[#D62839]/10 text-transparent"
                  />
                  <span className="relative">&ldquo;{t.quote}&rdquo;</span>
                </blockquote>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
