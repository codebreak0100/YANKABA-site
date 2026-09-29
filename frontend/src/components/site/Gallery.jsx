import { ArrowRight } from "lucide-react";
import { GALLERY } from "@/lib/data";

export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      aria-labelledby="gallery-heading"
      className="section-shell bg-[#f7f6f2] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-16">
          <span className="inline-block rounded-full border border-[#D62839]/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
            Our Students
          </span>
          <h2
            id="gallery-heading"
            className="text-balance mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tighter text-gray-900 lg:text-5xl xl:text-6xl"
          >
            Living their dreams,{" "}
            <span className="text-brand-gradient">in Egypt.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 lg:text-lg">
            Moments from our community — from the classroom to the graduation
            stage.
          </p>

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
          aria-label="Student life gallery"
          tabIndex={0}
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 md:grid-cols-3 lg:grid-cols-4"
        >
          {GALLERY.map((item, i) => (
            <figure
              key={i}
              data-testid={`gallery-${i}`}
              className="group relative aspect-[4/5] w-[78%] shrink-0 snap-center overflow-hidden rounded-3xl bg-gray-200 shadow-sm ring-1 ring-black/5 sm:aspect-[4/3] sm:w-auto"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="mb-2 block h-0.5 w-8 rounded-full bg-[#D62839]" />
                <h3 className="text-base font-bold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-white/75">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
