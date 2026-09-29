import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Bookmark, Heart } from "lucide-react";
import useSeo from "@/lib/useSeo";
import { COUNTRIES, UNIVERSITIES } from "@/lib/data";
import { useSaved } from "@/lib/favorites";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import CompareTray from "@/components/site/CompareTray";
import PageHero from "@/components/site/PageHero";
import CountryPills from "@/components/site/CountryPills";
import SearchFilters from "@/components/site/SearchFilters";
import UniversityCard from "@/components/site/UniversityCard";
import EmptyState from "@/components/site/EmptyState";

const DEFAULTS = {
  query: "",
  country: "all",
  city: "all",
  degree: "all",
  program: "all",
  sort: "name-asc",
};

function sortList(list, sort) {
  const copy = [...list];
  switch (sort) {
    case "name-desc":
      return copy.sort((a, b) => b.name.localeCompare(a.name));
    case "founded-asc":
      return copy.sort((a, b) => Number(a.founded || 0) - Number(b.founded || 0));
    case "founded-desc":
      return copy.sort((a, b) => Number(b.founded || 0) - Number(a.founded || 0));
    case "city-asc":
      return copy.sort(
        (a, b) =>
          a.city.localeCompare(b.city) || a.name.localeCompare(b.name),
      );
    default:
      return copy.sort((a, b) => a.name.localeCompare(b.name));
  }
}

export default function UniversitiesPage() {
  const [params, setParams] = useSearchParams();
  const { saved, toggleSaved } = useSaved();
  const [onlySaved, setOnlySaved] = useState(false);

  // Start from defaults (matching the prerendered HTML) and only apply URL
  // filters after hydration. Reading search params during the first render
  // would cause a hydration mismatch.
  const [filters, setFilters] = useState(DEFAULTS);

  useEffect(() => {
    setFilters({
      query: params.get("q") || DEFAULTS.query,
      country: params.get("country") || DEFAULTS.country,
      city: params.get("city") || DEFAULTS.city,
      degree: params.get("degree") || DEFAULTS.degree,
      program: params.get("program") || DEFAULTS.program,
      sort: params.get("sort") || DEFAULTS.sort,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const writeParams = (next) => {
    const sp = new URLSearchParams();
    if (next.query.trim()) sp.set("q", next.query.trim());
    if (next.country !== "all") sp.set("country", next.country);
    if (next.city !== "all") sp.set("city", next.city);
    if (next.degree !== "all") sp.set("degree", next.degree);
    if (next.program !== "all") sp.set("program", next.program);
    if (next.sort !== "name-asc") sp.set("sort", next.sort);
    setParams(sp, { replace: true });
  };

  const handleChange = (patch) => {
    const next = { ...filters, ...patch };
    if (patch.country !== undefined && patch.city === undefined) {
      next.city = "all";
    }
    setFilters(next);
    writeParams(next);
  };

  const handleReset = () => {
    setOnlySaved(false);
    setFilters(DEFAULTS);
    setParams({}, { replace: true });
  };

  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    let list = UNIVERSITIES;

    if (filters.country !== "all") {
      list = list.filter((u) => u.country === filters.country);
    }
    if (filters.city !== "all") {
      list = list.filter((u) => u.city === filters.city);
    }
    if (filters.degree !== "all") {
      list = list.filter((u) => u.degreeLevels.includes(filters.degree));
    }
    if (filters.program !== "all") {
      list = list.filter((u) => u.programs.includes(filters.program));
    }
    if (q) {
      list = list.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.city.toLowerCase().includes(q) ||
          u.programs.some((p) => p.toLowerCase().includes(q)),
      );
    }
    if (onlySaved) {
      list = list.filter((u) => saved.includes(u.slug));
    }

    return sortList(list, filters.sort);
  }, [filters, onlySaved, saved]);

  const counts = useMemo(
    () =>
      COUNTRIES.reduce((acc, c) => {
        acc[c.id] = UNIVERSITIES.filter((u) => u.country === c.id).length;
        return acc;
      }, {}),
    [],
  );

  const activeCountry = COUNTRIES.find((c) => c.id === filters.country);

  useSeo({
    title: activeCountry
      ? `Universities in ${activeCountry.name}`
      : "University Directory",
    description: activeCountry
      ? `Browse partner universities in ${activeCountry.name}. Filter by city, degree level and program, then compare and apply with YANKABA.`
      : "Browse 45+ partner universities in Egypt, Turkey and Cyprus. Filter by country, city, degree level and program.",
    path: `/universities${params.toString() ? `?${params.toString()}` : ""}`,
  });

  return (
    <div data-testid="universities-page" className="site-canvas bg-[#F7F6F2]">
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="University Directory"
          title={
            activeCountry
              ? `Universities in ${activeCountry.name}`
              : "Find your university abroad"
          }
          subtitle={
            activeCountry
              ? activeCountry.description
              : "Search and filter our partner universities across Egypt, Turkey and Cyprus."
          }
          breadcrumbs={
            activeCountry
              ? [
                  { label: "Universities", to: "/universities" },
                  { label: activeCountry.name },
                ]
              : [{ label: "Universities" }]
          }
        >
          <CountryPills
            value={filters.country}
            counts={counts}
            onChange={(country) => handleChange({ country })}
          />
        </PageHero>

        <section className="bg-[#f7f6f2] py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
            <SearchFilters
              filters={filters}
              onChange={handleChange}
              onReset={handleReset}
              resultCount={results.length}
            />

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setOnlySaved((v) => !v)}
                aria-pressed={onlySaved}
                data-testid="saved-toggle"
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                  onlySaved
                    ? "border-[#D62839] bg-[#D62839] text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#D62839] hover:text-[#7a0016]"
                }`}
              >
                <Heart size={15} fill={onlySaved ? "currentColor" : "none"} />
                Saved universities
                <span className="rounded-full bg-black/10 px-2 py-0.5 text-[11px] font-extrabold">
                  {saved.length}
                </span>
              </button>
              <p className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-bold text-gray-900">
                  {results.length}
                </span>{" "}
                of {UNIVERSITIES.length} universities
              </p>
            </div>

            <div className="mt-8">
              {results.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {results.map((university) => (
                    <UniversityCard
                      key={university.slug}
                      university={university}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={onlySaved ? Bookmark : undefined}
                  title={
                    onlySaved
                      ? "You haven't saved any universities yet"
                      : "No universities match your filters"
                  }
                  message={
                    onlySaved
                      ? "Tap the heart icon on any university card to save it here for later."
                      : "Try a different country, city, degree level or program — or reset the filters."
                  }
                  action={
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 rounded-full bg-[#7a0016] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#D62839]"
                    >
                      Reset filters
                    </button>
                  }
                />
              )}
            </div>

            {saved.length > 0 && (
              <p className="mt-8 text-center text-sm text-gray-500">
                You have {saved.length} saved{" "}
                {saved.length === 1 ? "university" : "universities"}.{" "}
                <button
                  type="button"
                  onClick={() => saved.forEach((s) => toggleSaved(s))}
                  className="font-bold text-[#7a0016] underline-offset-2 hover:underline"
                >
                  Clear all
                </button>
              </p>
            )}

            <div className="mt-14 rounded-3xl bg-gradient-to-br from-[#250006] via-[#680013] to-[#160005] px-8 py-12 text-center text-white lg:px-16">
              <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight lg:text-4xl">
                Not sure which university fits you best?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">
                Talk to an advisor for a free consultation. We&apos;ll compare
                programmes, fees and admission requirements for you.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/#apply"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#7a0016] transition-colors hover:bg-[#ffd9dd]"
                >
                  Start your application
                </Link>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
                >
                  Contact an advisor
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <aside aria-label="Quick contact">
        <WhatsAppFloat />
      </aside>
      <CompareTray />
    </div>
  );
}
