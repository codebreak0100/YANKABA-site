import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { getCountry } from "@/lib/data";

const GRADIENTS = [
  "from-[#7a0016] via-[#9c0b28] to-[#d62839]",
  "from-[#0f2a43] via-[#173d5e] to-[#2a6f97]",
  "from-[#1f2937] via-[#374151] to-[#7a0016]",
  "from-[#0b3d2e] via-[#116149] to-[#d62839]",
  "from-[#3b0764] via-[#5b21b6] to-[#9c0b28]",
  "from-[#7c2d12] via-[#b45309] to-[#d62839]",
];

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function initialsOf(name) {
  const skip = new Set(["of", "and", "the", "for", "&"]);
  const words = name
    .split(/\s+/)
    .filter((w) => !skip.has(w.toLowerCase()));
  const letters = words.slice(0, 2).map((w) => w[0]?.toUpperCase() || "");
  return letters.join("") || name.slice(0, 2).toUpperCase();
}

/**
 * Renders a university image when one exists, otherwise a deterministic,
 * on-brand placeholder cover. If a real image fails to load we gracefully fall
 * back to the placeholder instead of showing a broken image.
 */
export default function UniversityCover({
  university,
  className = "",
  imgClassName = "",
  eager = false,
  sizes,
}) {
  const [failed, setFailed] = useState(false);
  const country = getCountry(university.country);
  const showImage = university.image && !failed;

  if (showImage) {
    return (
      <img
        src={university.image}
        alt={`${university.name} in ${university.city}, ${country?.name || ""}`}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        width="800"
        height="550"
        onError={() => setFailed(true)}
        className={`w-full h-full object-cover ${imgClassName} ${className}`}
      />
    );
  }

  const gradient = GRADIENTS[hashString(university.slug) % GRADIENTS.length];

  return (
    <div
      role="img"
      aria-label={`${university.name} ${country?.name || ""} — image coming soon`}
      className={`relative w-full h-full overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.55) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.35) 0%, transparent 40%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-4">
        <span className="font-display font-extrabold text-4xl sm:text-5xl text-white/95 tracking-tighter">
          {initialsOf(university.name)}
        </span>
        <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
          <GraduationCap size={13} />
          {country?.name}
        </span>
      </div>
    </div>
  );
}
