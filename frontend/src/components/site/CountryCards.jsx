import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { COUNTRIES, universityCountByCountry } from "@/lib/universities";

export default function CountryCards() {
  return (
    <section
      id="countries"
      data-testid="countries-section"
      aria-labelledby="countries-heading"
      className="section-shell relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#D62839]/20 bg-[#fff5f5] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
            Choose Your Destination
          </span>
          <h2
            id="countries-heading"
            className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tighter text-gray-900 lg:text-5xl xl:text-6xl"
          >
            Study in{" "}
            <span className="text-brand-gradient">three countries</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 lg:text-lg">
            Pick a destination to explore its universities, programmes,
            admission requirements and tuition guidance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {COUNTRIES.map((country) => (
            <Link
              key={country.id}
              to={`/universities?country=${country.id}`}
              data-testid={`country-card-${country.id}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-3xl border border-gray-100 shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl sm:aspect-[3/4]"
            >
              <img
                src={country.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#250006]/95 via-[#35000a]/55 to-transparent" />

              <div className="relative flex h-full flex-col justify-end p-7 text-white">
                <span className="text-4xl" aria-hidden="true">
                  {country.flag}
                </span>
                <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight">
                  {country.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#ffb8c0]">
                  {country.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {country.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                    {universityCountByCountry[country.id]} universities
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white">
                    Explore
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
