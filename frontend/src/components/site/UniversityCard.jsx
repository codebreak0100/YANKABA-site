import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  GitCompareArrows,
  Heart,
  Layers,
  MapPin,
} from "lucide-react";
import { getCountry } from "@/lib/data";
import { useCompare, useSaved } from "@/lib/favorites";
import UniversityCover from "@/components/site/UniversityCover";

export default function UniversityCard({ university }) {
  const country = getCountry(university.country);
  const { isSaved, toggleSaved } = useSaved();
  const { isComparing, toggleCompare } = useCompare();

  const saved = isSaved(university.slug);
  const comparing = isComparing(university.slug);

  const controlBase =
    "grid place-items-center w-9 h-9 rounded-full backdrop-blur border transition-colors";

  return (
    <article
      data-testid={`university-card-${university.slug}`}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#D62839] hover:-translate-y-1.5 transition-all duration-500"
    >
      <div className="aspect-[16/11] overflow-hidden bg-gray-100 relative">
        <UniversityCover
          university={university}
          className="group-hover:scale-105 transition-transform duration-700"
          imgClassName="group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#7a0016]/75 via-transparent to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[11px] font-bold text-[#7a0016] flex items-center gap-1.5">
            <MapPin size={10} />
            {university.city}
          </span>
          {country && (
            <span className="px-3 py-1 bg-[#7a0016]/85 backdrop-blur rounded-full text-[11px] font-bold text-white">
              {country.flag} {country.name}
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => toggleSaved(university.slug)}
            aria-pressed={saved}
            aria-label={
              saved
                ? `Remove ${university.name} from saved universities`
                : `Save ${university.name}`
            }
            className={`${controlBase} ${
              saved
                ? "bg-[#D62839] border-[#D62839] text-white"
                : "bg-white/90 border-white/70 text-gray-700 hover:text-[#D62839]"
            }`}
          >
            <Heart size={16} fill={saved ? "currentColor" : "none"} />
          </button>
          <button
            type="button"
            onClick={() => toggleCompare(university.slug)}
            aria-pressed={comparing}
            aria-label={
              comparing
                ? `Remove ${university.name} from comparison`
                : `Add ${university.name} to comparison`
            }
            className={`${controlBase} ${
              comparing
                ? "bg-[#7a0016] border-[#7a0016] text-white"
                : "bg-white/90 border-white/70 text-gray-700 hover:text-[#7a0016]"
            }`}
          >
            <GitCompareArrows size={16} />
          </button>
        </div>

        {university.founded && (
          <div className="absolute bottom-3 right-3">
            <span className="px-3 py-1 bg-[#D62839]/90 backdrop-blur rounded-full text-[11px] font-bold text-white uppercase tracking-widest">
              Est. {university.founded}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display font-extrabold text-xl text-gray-900 group-hover:text-[#7a0016] transition-colors">
          <Link to={`/universities/${university.slug}`} className="after:absolute after:inset-0 py-1 block">
            {university.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
          {university.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#fff5f5] text-[11px] font-semibold text-[#7a0016]">
            <Layers size={12} />
            {university.degreeLevels.join(" · ")}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-[11px] font-semibold text-gray-700">
            <BookOpen size={12} />
            {university.programs.length}+ programs
          </span>
        </div>

        <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
          <span className="relative z-10 text-sm font-bold text-[#7a0016] group-hover:text-[#D62839] transition-colors flex items-center gap-1.5">
            View University
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </span>
        </div>
      </div>
    </article>
  );
}
