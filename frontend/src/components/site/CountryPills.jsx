import { Globe } from "lucide-react";
import { COUNTRIES } from "@/lib/data";

/**
 * Prominent, accessible country selector rendered as tabs.
 * `value` is a country id or "all".
 */
export default function CountryPills({ value = "all", onChange, counts = {} }) {
  const total = Object.values(counts).reduce((sum, n) => sum + n, 0);

  const options = [
    { id: "all", name: "All countries", flag: null, count: total },
    ...COUNTRIES.map((c) => ({
      id: c.id,
      name: c.name,
      flag: c.flag,
      count: counts[c.id] ?? 0,
    })),
  ];

  return (
    <div
      role="group"
      aria-label="Filter universities by country"
      className="flex flex-wrap gap-2"
    >
      {options.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            aria-pressed={active}
            data-testid={`country-pill-${opt.id}`}
            onClick={() => onChange(opt.id)}
            className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-bold rounded-full border transition-all duration-300 ${
              active
                ? "bg-[#7a0016] text-white border-[#7a0016] shadow-lg shadow-[#7a0016]/25 -translate-y-0.5"
                : "bg-white text-gray-700 border-gray-200 hover:border-[#D62839] hover:text-[#7a0016]"
            }`}
          >
            {opt.flag ? (
              <span aria-hidden="true" className="text-base leading-none">
                {opt.flag}
              </span>
            ) : (
              <Globe size={15} />
            )}
            {opt.name}
            <span
              className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                active ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
              }`}
            >
              {opt.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
