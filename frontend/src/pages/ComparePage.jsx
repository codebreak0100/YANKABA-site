import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Check, GitCompareArrows, X } from "lucide-react";
import useSeo from "@/lib/useSeo";
import { getCountry, getUniversityBySlug } from "@/lib/data";
import { MAX_COMPARE } from "@/lib/favorites";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import PageHero from "@/components/site/PageHero";
import EmptyState from "@/components/site/EmptyState";
import UniversityCover from "@/components/site/UniversityCover";

function Row({ label, children }) {
  return (
    <tr className="border-t border-gray-100">
      <th
        scope="row"
        className="sticky left-0 z-10 bg-[#f7f6f2] px-4 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-500 align-top"
      >
        {label}
      </th>
      {children}
    </tr>
  );
}

export default function ComparePage() {
  const [params, setParams] = useSearchParams();
  // Read the URL only after hydration to keep the prerendered (empty) markup
  // in sync with the first client render.
  const [slugs, setSlugs] = useState([]);

  useEffect(() => {
    const list = (params.get("u") || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, MAX_COMPARE);
    setSlugs(list);
  }, [params]);

  const universities = slugs
    .map((slug) => getUniversityBySlug(slug))
    .filter(Boolean);

  useSeo({
    title: "Compare Universities",
    description:
      "Compare universities in Egypt, Turkey and Cyprus side by side — location, degree levels, programs and admission information.",
    path: `/compare${params.toString() ? `?${params.toString()}` : ""}`,
  });

  const remove = (slug) => {
    const next = slugs.filter((s) => s !== slug);
    const nextParams = new URLSearchParams(params);
    if (next.length) nextParams.set("u", next.join(","));
    else nextParams.delete("u");
    setParams(nextParams, { replace: true });
  };

  return (
    <div data-testid="compare-page" className="site-canvas bg-[#F7F6F2]">
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Comparison"
          title="Compare universities side by side."
          subtitle="Review location, degree levels, programs and admission details before you choose."
          breadcrumbs={[{ label: "Compare" }]}
        />

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
            {universities.length >= 2 ? (
              <>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <table className="w-full min-w-[720px] border-collapse">
                    <thead>
                      <tr>
                        <th scope="col" className="w-40 px-4 py-4">
                          <span className="sr-only">Comparison factors</span>
                        </th>
                        {universities.map((u) => (
                          <th key={u.slug} className="px-4 py-5 align-top">
                            <div className="flex flex-col items-center text-center">
                              <div className="h-20 w-32 overflow-hidden rounded-xl bg-gray-100">
                                <UniversityCover university={u} />
                              </div>
                              <Link
                                to={`/universities/${u.slug}`}
                                className="mt-3 font-display text-base font-extrabold text-gray-900 hover:text-[#7a0016] transition-colors"
                              >
                                {u.name}
                              </Link>
                              <button
                                type="button"
                                onClick={() => remove(u.slug)}
                                className="mt-2 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold text-gray-600 hover:text-[#D62839] transition-colors"
                              >
                                <X size={12} /> Remove
                              </button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <Row label="Country">
                        {universities.map((u) => {
                          const c = getCountry(u.country);
                          return (
                            <td
                              key={u.slug}
                              className="px-4 py-4 text-center text-sm font-semibold text-gray-800"
                            >
                              {c?.flag} {c?.name}
                            </td>
                          );
                        })}
                      </Row>
                      <Row label="City">
                        {universities.map((u) => (
                          <td
                            key={u.slug}
                            className="px-4 py-4 text-center text-sm text-gray-700"
                          >
                            {u.city}
                          </td>
                        ))}
                      </Row>
                      <Row label="Established">
                        {universities.map((u) => (
                          <td
                            key={u.slug}
                            className="px-4 py-4 text-center text-sm text-gray-700"
                          >
                            {u.founded || "—"}
                          </td>
                        ))}
                      </Row>
                      <Row label="Degree levels">
                        {universities.map((u) => (
                          <td key={u.slug} className="px-4 py-4 text-center">
                            <div className="flex flex-wrap justify-center gap-1.5">
                              {u.degreeLevels.map((level) => (
                                <span
                                  key={level}
                                  className="rounded-full bg-[#fff5f5] px-2.5 py-1 text-[11px] font-semibold text-[#7a0016]"
                                >
                                  {level}
                                </span>
                              ))}
                            </div>
                          </td>
                        ))}
                      </Row>
                      <Row label="Programs">
                        {universities.map((u) => (
                          <td
                            key={u.slug}
                            className="px-4 py-4 text-center text-sm font-bold text-gray-900"
                          >
                            {u.programs.length}+
                          </td>
                        ))}
                      </Row>
                      <Row label="Popular programs">
                        {universities.map((u) => (
                          <td key={u.slug} className="px-4 py-4 align-top">
                            <ul className="mx-auto max-w-[220px] space-y-1.5 text-left">
                              {u.programs.slice(0, 5).map((p) => (
                                <li
                                  key={p}
                                  className="flex items-start gap-1.5 text-xs text-gray-700"
                                >
                                  <Check
                                    size={12}
                                    className="mt-0.5 shrink-0 text-[#0B7A38]"
                                  />
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </Row>
                      <Row label="Admission">
                        {universities.map((u) => (
                          <td
                            key={u.slug}
                            className="px-4 py-4 text-center text-xs text-gray-600"
                          >
                            {u.admissionRequirements.length} key requirements
                          </td>
                        ))}
                      </Row>
                      <Row label="Website">
                        {universities.map((u) => (
                          <td key={u.slug} className="px-4 py-4 text-center">
                            {u.website ? (
                              <a
                                href={u.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold text-[#7a0016] hover:text-[#D62839] underline-offset-2 hover:underline"
                              >
                                Visit site
                              </a>
                            ) : (
                              <span className="text-xs text-gray-400">
                                Not available
                              </span>
                            )}
                          </td>
                        ))}
                      </Row>
                      <Row label={<span className="sr-only">Actions</span>}>
                        {universities.map((u) => (
                          <td key={u.slug} className="px-4 py-4 text-center">
                            <Link
                              to={`/universities/${u.slug}`}
                              className="inline-flex items-center gap-1.5 rounded-full bg-[#7a0016] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#D62839]"
                            >
                              View details
                            </Link>
                          </td>
                        ))}
                      </Row>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to="/universities"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#7a0016] hover:text-[#D62839] transition-colors"
                  >
                    <ArrowLeft size={16} /> Add more universities
                  </Link>
                  <Link
                    to="/#apply"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D62839] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#7a0016]"
                  >
                    Start your application
                  </Link>
                </div>
              </>
            ) : (
              <EmptyState
                icon={GitCompareArrows}
                title="Add at least two universities to compare"
                message="Use the compare icon on any university card to add it here. You can compare up to four universities at once."
                action={
                  <Link
                    to="/universities"
                    className="inline-flex items-center gap-2 rounded-full bg-[#7a0016] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#D62839]"
                  >
                    Browse universities
                  </Link>
                }
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
      <aside aria-label="Quick contact">
        <WhatsAppFloat />
      </aside>
    </div>
  );
}
