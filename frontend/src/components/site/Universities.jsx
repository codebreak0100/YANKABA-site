import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { COUNTRIES, getHomeFeatured } from "@/lib/data";
import { universityCountByCountry } from "@/lib/universities";
import UniversityCard from "@/components/site/UniversityCard";

export default function Universities() {
  const featured = getHomeFeatured(2);

  return (
    <section
      id="universities"
      data-testid="universities-section"
      aria-labelledby="universities-heading"
      className="section-shell relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-[#D62839]/20 bg-[#fff5f5] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
              Partner Universities
            </span>
            <h2
              id="universities-heading"
              className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tighter text-gray-900 lg:text-5xl xl:text-6xl"
            >
              45+ universities across{" "}
              <span className="text-brand-gradient">Egypt, Turkey &amp; Cyprus</span>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600 lg:text-lg">
              World-class faculty, modern facilities and internationally
              recognised degrees. Filter the full directory by country, city,
              degree level or program.
            </p>
          </div>

          <Link
            to="/universities"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-800 transition-all hover:border-[#7a0016] hover:text-[#7a0016]"
          >
            Explore the directory
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {COUNTRIES.map((country) => (
            <Link
              key={country.id}
              to={`/universities?country=${country.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-[#f7f6f2] px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:border-[#D62839] hover:text-[#7a0016]"
            >
              <span aria-hidden="true">{country.flag}</span>
              {country.name}
              <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-extrabold text-[#7a0016]">
                {universityCountByCountry[country.id]}
              </span>
            </Link>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((university) => (
            <UniversityCard key={university.slug} university={university} />
          ))}
        </div>
      </div>
    </section>
  );
}
