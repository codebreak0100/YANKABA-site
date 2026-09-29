import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

/**
 * Accessible breadcrumb trail. `items` is an array of
 * `{ label, to? }` objects; the last item is treated as the current page.
 */
export default function Breadcrumbs({ items = [], light = false }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol
        className={`flex flex-wrap gap-1.5 text-xs font-semibold ${
          light ? "text-white/70" : "text-gray-500"
        }`}
      >
        <li className="flex items-center">
          <Link
            to="/"
            className={`inline-flex items-center gap-1 transition-colors px-2 h-[44px] ${
              light ? "hover:text-white" : "hover:text-[#7a0016]"
            }`}
          >
            <Home size={13} />
            Home
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              <ChevronRight
                size={13}
                className={light ? "text-white/40" : "text-gray-300"}
                aria-hidden="true"
              />
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className={`inline-flex items-center transition-colors px-2 h-[44px] ${
                    light ? "hover:text-white" : "hover:text-[#7a0016]"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={light ? "text-white" : "text-gray-900"}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
