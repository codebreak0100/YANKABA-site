import { Link } from "react-router-dom";
import { GitCompareArrows, X } from "lucide-react";
import { getUniversityBySlug } from "@/lib/data";
import { useCompare } from "@/lib/favorites";

export default function CompareTray() {
  const { compare, toggleCompare, clearCompare } = useCompare();
  if (compare.length === 0) return null;

  const items = compare
    .map((slug) => getUniversityBySlug(slug))
    .filter(Boolean);

  return (
    <div
      data-testid="compare-tray"
      className="fixed bottom-4 left-4 right-24 z-40 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:bottom-6"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-2xl backdrop-blur">
        <span className="hidden shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#7a0016] sm:flex">
          <GitCompareArrows size={14} />
          Compare
        </span>

        <ul className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto">
          {items.map((u) => (
            <li key={u.slug} className="shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff5f5] px-3 py-1.5 text-xs font-semibold text-[#7a0016]">
                {u.name}
                <button
                  type="button"
                  onClick={() => toggleCompare(u.slug)}
                  aria-label={`Remove ${u.name} from comparison`}
                  className="grid h-4 w-4 place-items-center rounded-full hover:bg-[#7a0016] hover:text-white transition-colors"
                >
                  <X size={11} />
                </button>
              </span>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={clearCompare}
            className="hidden text-xs font-bold text-gray-500 hover:text-[#7a0016] transition-colors sm:inline"
          >
            Clear
          </button>
          <Link
            to={`/compare?u=${compare.join(",")}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#7a0016] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#D62839]"
          >
            Compare ({compare.length})
          </Link>
        </div>
      </div>
    </div>
  );
}
