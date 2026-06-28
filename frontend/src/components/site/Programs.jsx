import { useState } from "react";
import { FIELDS } from "@/lib/data";
import {
  Heart,
  Cpu,
  Wrench,
  Atom,
  BookOpen,
  Globe,
} from "lucide-react";
const CATEGORIES = [
  { name: "All", icon: Globe },
  { name: "Health Sciences", icon: Heart },
  { name: "Computer Science", icon: Cpu },
  { name: "Engineering", icon: Wrench },
  { name: "Natural Sciences", icon: Atom },
  { name: "Business & Management", icon: BookOpen },
  { name: "Media & Communication", icon: BookOpen },
  { name: "Law & Political Studies", icon: BookOpen },
  { name: "Arts, Languages & Humanities", icon: BookOpen },
  { name: "Education", icon: BookOpen },
];
const CAT_ICONS = {
  "Health Sciences": Heart,
  "Computer Science": Cpu,
  Engineering: Wrench,
  "Natural Sciences": Atom,
  "Business & Management": BookOpen,
  "Media & Communication": BookOpen,
  "Law & Political Studies": BookOpen,
  "Arts, Languages & Humanities": BookOpen,
  Education: BookOpen,
};

/*const CATEGORIES = [
  { name: "All", icon: Globe },
  { name: "Health Sciences", icon: Heart },
  { name: "Computer Science", icon: Cpu },
  { name: "Engineering", icon: Wrench },
  { name: "Natural Sciences", icon: Atom },
  { name: "Social Science and Humanities", icon: BookOpen },
  { name: "Media and Communication", icon: BookOpen },
];

/*const CAT_ICONS = {
  "Health Sciences": Heart,
  Technology: Cpu,
  Engineering: Wrench,
  Sciences: Atom,
  "Liberal Arts": BookOpen,
};*/

export default function Programs() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? FIELDS : FIELDS.filter((f) => f.category === active);

  return (
    <section
      id="programs"
      data-testid="programs-section"
      className="py-24 lg:py-32 bg-[#fafafa] relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-white border border-[#E63946]/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
            Fields of Study
          </span>
          <h2 className="mt-6 font-display font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tighter text-gray-900">
            Explore diverse{" "}
            <span className="text-brand-gradient">academic programs</span>.
          </h2>
          <p className="mt-5 text-base lg:text-lg text-gray-600 leading-relaxed">
            Whether you&apos;re pursuing medicine, engineering, technology or
            the liberal arts — our partner universities offer the program
            you&apos;re looking for.
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            const isActive = active === c.name;
            return (
              <button
                key={c.name}
                onClick={() => setActive(c.name)}
                data-testid={`program-cat-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full border transition-all ${
                  isActive
                    ? "bg-[#7a0016] text-white border-[#7a0016] shadow-lg shadow-[#7a0016]/30"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#E63946] hover:text-[#7a0016]"
                }`}
              >
                <Icon size={14} />
                {c.name}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((f, i) => {
            const Icon = CAT_ICONS[f.category] || BookOpen;
            return (
              <div
                key={f.name}
                data-testid={`field-${i}`}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#E63946] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#fff5f5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#fff5f5] group-hover:bg-brand-gradient grid place-items-center transition-colors">
                      <Icon
                        size={20}
                        className="text-[#7a0016] group-hover:text-white transition-colors"
                      />
                    </div>
                    <span className="px-2.5 py-1 bg-gray-100 group-hover:bg-[#E63946] group-hover:text-white rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-600 transition-colors">
                      {f.duration}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-extrabold text-lg text-gray-900">
                    {f.name}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-gray-500 font-semibold">
                    {f.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-sm text-gray-500 text-center">
          And many more specialised programs available across all our partner
          universities.
        </p>
      </div>
    </section>
  );
}
