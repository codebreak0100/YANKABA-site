import { Search, X, SlidersHorizontal } from "lucide-react";
import {
  COUNTRIES,
  getAllCities,
  getAllDegreeLevels,
  getAllPrograms,
  getUniversitiesByCountry,
} from "@/lib/data";

export const SORT_OPTIONS = [
  { value: "name-asc", label: "Name (A–Z)" },
  { value: "name-desc", label: "Name (Z–A)" },
  { value: "founded-asc", label: "Oldest first" },
  { value: "founded-desc", label: "Newest first" },
  { value: "city-asc", label: "City (A–Z)" },
];

const selectClass =
  "w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-9 text-sm font-semibold text-gray-800 focus:border-[#7a0016] focus:outline-none focus:ring-2 focus:ring-[#7a0016]/15";

function Field({ id, label, children }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-gray-500"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function SearchFilters({ filters, onChange, onReset, resultCount }) {
  const cities =
    filters.country === "all"
      ? getAllCities()
      : getAllCities(filters.country);
  const degrees = getAllDegreeLevels();
  const programs = getAllPrograms();

  const countryCounts = COUNTRIES.map((c) => ({
    ...c,
    count: getUniversitiesByCountry(c.id).length,
  }));

  const hasActiveFilters =
    filters.query ||
    filters.country !== "all" ||
    filters.city !== "all" ||
    filters.degree !== "all" ||
    filters.program !== "all" ||
    filters.sort !== "name-asc";

  return (
    <div
      data-testid="search-filters"
      className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm"
    >
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2 text-[#7a0016]">
          <SlidersHorizontal size={16} />
          <h2 className="font-display font-extrabold text-lg text-gray-900">
            Find your university
          </h2>
        </div>
        <p
          className="text-sm text-gray-600 font-semibold"
          aria-live="polite"
          data-testid="results-count"
        >
          {resultCount} {resultCount === 1 ? "result" : "results"}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Field id="filter-search" label="Search">
            <div className="relative">
              <Search
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                id="filter-search"
                type="search"
                value={filters.query}
                onChange={(e) => onChange({ query: e.target.value })}
                placeholder="Search by university name…"
                data-testid="filter-search"
                className="w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-3 text-sm font-semibold text-gray-800 focus:border-[#7a0016] focus:outline-none focus:ring-2 focus:ring-[#7a0016]/15"
              />
            </div>
          </Field>
        </div>

        <div className="lg:col-span-2">
          <Field id="filter-country" label="Country">
            <select
              id="filter-country"
              value={filters.country}
              data-testid="filter-country"
              onChange={(e) =>
                onChange({ country: e.target.value, city: "all" })
              }
              className={selectClass}
            >
              <option value="all">All countries</option>
              {countryCounts.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.count})
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="lg:col-span-2">
          <Field id="filter-city" label="City">
            <select
              id="filter-city"
              value={filters.city}
              data-testid="filter-city"
              onChange={(e) => onChange({ city: e.target.value })}
              className={selectClass}
            >
              <option value="all">All cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="lg:col-span-2">
          <Field id="filter-degree" label="Degree level">
            <select
              id="filter-degree"
              value={filters.degree}
              data-testid="filter-degree"
              onChange={(e) => onChange({ degree: e.target.value })}
              className={selectClass}
            >
              <option value="all">All levels</option>
              {degrees.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="lg:col-span-2">
          <Field id="filter-sort" label="Sort by">
            <select
              id="filter-sort"
              value={filters.sort}
              data-testid="filter-sort"
              onChange={(e) => onChange({ sort: e.target.value })}
              className={selectClass}
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="lg:col-span-12">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            <div className="flex-1">
              <Field id="filter-program" label="Program">
                <select
                  id="filter-program"
                  value={filters.program}
                  data-testid="filter-program"
                  onChange={(e) => onChange({ program: e.target.value })}
                  className={selectClass}
                >
                  <option value="all">All programs</option>
                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <button
              type="button"
              onClick={onReset}
              disabled={!hasActiveFilters}
              data-testid="filter-reset"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition-colors hover:border-[#D62839] hover:text-[#7a0016] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <X size={15} />
              Reset filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
