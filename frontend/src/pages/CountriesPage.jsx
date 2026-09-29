import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Building2, GraduationCap } from "lucide-react";
import useSeo from "@/lib/useSeo";
import { COUNTRIES } from "@/lib/data";
import { getUniversitiesByCountry, getAllCities } from "@/lib/universities";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import CompareTray from "@/components/site/CompareTray";
import PageHero from "@/components/site/PageHero";
import UniversityCard from "@/components/site/UniversityCard";

export default function CountriesPage() {
  useSeo({
    title: "Study Destinations",
    description:
      "Compare study destinations — Egypt, Turkey and Cyprus. Explore universities, cities and programmes for international students.",
    path: "/countries",
  });

  return (
    <div data-testid="countries-page" className="site-canvas bg-[#F7F6F2]">
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Study Destinations"
          title="Three countries. One trusted advisor."
          subtitle="Explore what makes each destination unique for international students, then dive into its universities."
          breadcrumbs={[{ label: "Countries" }]}
        />

        {COUNTRIES.map((country, index) => {
          const universities = getUniversitiesByCountry(country.id);
          const cities = getAllCities(country.id);
          const top = universities.slice(0, 4);

          return (
            <section
              key={country.id}
              id={country.id}
              data-testid={`country-block-${country.id}`}
              className={`py-20 lg:py-28 ${
                index % 2 === 0 ? "bg-[#f7f6f2]" : "bg-white"
              }`}
            >
              <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
                <div className="grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-24">
                      <span className="text-5xl" aria-hidden="true">
                        {country.flag}
                      </span>
                      <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tighter text-gray-900">
                        {country.name}
                      </h2>
                      <p className="mt-2 text-sm font-bold uppercase tracking-widest text-[#D62839]">
                        {country.tagline}
                      </p>
                      <p className="mt-5 leading-relaxed text-gray-600">
                        {country.description}
                      </p>

                      <dl className="mt-8 grid grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-gray-200 bg-white p-4">
                          <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                            <Building2 size={13} /> Universities
                          </dt>
                          <dd className="mt-1 font-display text-2xl font-extrabold text-gray-900">
                            {universities.length}
                          </dd>
                        </div>
                        <div className="rounded-2xl border border-gray-200 bg-white p-4">
                          <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                            <GraduationCap size={13} /> Cities
                          </dt>
                          <dd className="mt-1 font-display text-2xl font-extrabold text-gray-900">
                            {cities.length}
                          </dd>
                        </div>
                      </dl>

                      <p className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={15} className="text-[#7a0016]" />
                        {cities.join(" · ")}
                      </p>

                      <Link
                        to={`/universities?country=${country.id}`}
                        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#7a0016] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#D62839]"
                      >
                        View all universities in {country.name}
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {top.map((university) => (
                        <UniversityCard
                          key={university.slug}
                          university={university}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
      <aside aria-label="Quick contact">
        <WhatsAppFloat />
      </aside>
      <CompareTray />
    </div>
  );
}
