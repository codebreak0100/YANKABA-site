import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Cpu,
  Globe,
  GraduationCap,
  Heart,
  Leaf,
  Newspaper,
  Plane,
  Scale,
  Search,
  Wrench,
} from "lucide-react";
import useSeo from "@/lib/useSeo";
import { UNIVERSITIES } from "@/lib/data";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import CompareTray from "@/components/site/CompareTray";
import PageHero from "@/components/site/PageHero";
import EmptyState from "@/components/site/EmptyState";

const CATEGORY_RULES = [
  { name: "Health Sciences", icon: Heart, match: /medicine|dentist|pharmacy|nursing|physiotherap|nutrition|health/i },
  { name: "Engineering", icon: Wrench, match: /engineering|mechatronic/i },
  { name: "Computer Science & IT", icon: Cpu, match: /computer|software|cyber|artificial|information systems|data science/i },
  { name: "Business & Management", icon: Briefcase, match: /business|accounting|marketing|economics|trade|logistics|tourism|hotel/i },
  { name: "Law & Political Studies", icon: Scale, match: /law|political|international relations|psychology|sociology/i },
  { name: "Media & Communication", icon: Newspaper, match: /media|public relations|radio|cinema|journalism|advertising/i },
  { name: "Arts & Design", icon: BookOpen, match: /graphic|interior|fashion|english|translation|literature|design/i },
  { name: "Education", icon: GraduationCap, match: /education|childhood|counselling/i },
  { name: "Aviation", icon: Plane, match: /aviation|aircraft|air traffic/i },
  { name: "Natural Sciences", icon: Leaf, match: /biotechnology|chemistry|physics|mathematics|biology|environmental|science/i },
];

function categorize(program) {
  const rule = CATEGORY_RULES.find((r) => r.match.test(program));
  return rule ? rule.name : "Natural Sciences";
}

export default function ProgramsPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  useSeo({
    title: "Programs & Fields of Study",
    description:
      "Explore 100+ academic programs available at partner universities in Egypt, Turkey and Cyprus — from medicine and engineering to business, arts and aviation.",
    path: "/programs",
  });

  const programs = useMemo(() => {
    const map = new Map();
    UNIVERSITIES.forEach((u) => {
      u.programs.forEach((p) => {
        const entry = map.get(p) || { name: p, count: 0, category: categorize(p) };
        entry.count += 1;
        map.set(p, entry);
      });
    });
    return Array.from(map.values()).sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }, []);

  const categories = useMemo(() => {
    const set = new Set(programs.map((p) => p.category));
    return ["All", ...CATEGORY_RULES.map((r) => r.name).filter((n) => set.has(n))];
  }, [programs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programs.filter((p) => {
      const matchesCategory = active === "All" || p.category === active;
      const matchesQuery = !q || p.name.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [programs, active, query]);

  const activeRule = CATEGORY_RULES.find((r) => r.name === active);

  return (
    <div data-testid="programs-page" className="site-canvas bg-[#F7F6F2]">
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Fields of Study"
          title="Explore programs across three countries."
          subtitle="Whether you're pursuing medicine, engineering, technology or the arts — our partner universities offer the program you're looking for."
          breadcrumbs={[{ label: "Programs" }]}
        />

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
            <div className="relative mx-auto max-w-xl">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs…"
                aria-label="Search programs"
                data-testid="programs-search"
                className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm font-semibold text-gray-800 shadow-sm focus:border-[#7a0016] focus:outline-none focus:ring-2 focus:ring-[#7a0016]/15"
              />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => {
                const rule = CATEGORY_RULES.find((r) => r.name === cat);
                const Icon = cat === "All" ? Globe : rule?.icon || BookOpen;
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    aria-pressed={isActive}
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-all ${
                      isActive
                        ? "bg-[#7a0016] text-white border-[#7a0016] shadow-lg shadow-[#7a0016]/30"
                        : "bg-white text-gray-700 border-gray-200 hover:border-[#D62839] hover:text-[#7a0016]"
                    }`}
                  >
                    <Icon size={14} />
                    {cat}
                  </button>
                );
              })}
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              {filtered.length} {filtered.length === 1 ? "program" : "programs"}
              {activeRule ? ` in ${activeRule.name}` : ""}
            </p>

            <h2 className="sr-only">All programs</h2>
            <div className="mt-8">
              {filtered.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filtered.map((program) => {
                    const rule = CATEGORY_RULES.find(
                      (r) => r.name === program.category,
                    );
                    const Icon = rule?.icon || BookOpen;
                    return (
                      <Link
                        key={program.name}
                        to={`/universities?program=${encodeURIComponent(program.name)}`}
                        data-testid={`program-${program.name}`}
                        className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D62839] hover:shadow-xl"
                      >
                        <div className="flex items-center justify-between">
                          <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#fff5f5] text-[#7a0016] transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                            <Icon size={20} />
                          </span>
                          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-gray-600">
                            {program.count}{" "}
                            {program.count === 1 ? "uni" : "unis"}
                          </span>
                        </div>
                        <h3 className="mt-4 font-display text-lg font-extrabold text-gray-900 group-hover:text-[#7a0016] transition-colors">
                          {program.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-gray-500">
                          {program.category}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#7a0016]">
                          View universities
                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <EmptyState
                  title="No programs match your search"
                  message="Try a different keyword or category."
                  action={
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        setActive("All");
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-[#7a0016] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#D62839]"
                    >
                      Reset
                    </button>
                  }
                />
              )}
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
