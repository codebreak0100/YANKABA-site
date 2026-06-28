import { Check, FileText, Award, Trophy, Sparkles } from "lucide-react";
import { DOCUMENTS, COSTS } from "@/lib/data";

export default function Costs() {
  return (
    <section
      id="costs"
      data-testid="costs-section"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#fff5f5] border border-[#E63946]/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
            Requirements & Costs
          </span>
          <h2 className="mt-6 font-display font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tighter text-gray-900">
            Transparent pricing.{" "}
            <span className="text-brand-gradient">No hidden charges.</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-gray-600 leading-relaxed">
            Simple requirements. Flexible payment plans. Premium scholarship
            packages that save you up to $50,000.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* DOCUMENTS */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#fafafa] to-[#fff5f5] rounded-3xl p-8 lg:p-10 h-full border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-gradient grid place-items-center shadow-lg shadow-[#7a0016]/20">
                  <FileText className="text-white" size={20} />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-gray-900">
                  Required Documents
                </h3>
              </div>

              <ul className="mt-8 space-y-5">
                {DOCUMENTS.map((d, i) => (
                  <li
                    key={d}
                    data-testid={`doc-${i}`}
                    className="flex gap-4 pb-5 border-b border-gray-200 last:border-0"
                  >
                    <span className="w-9 h-9 rounded-full bg-white border-2 border-[#E63946] grid place-items-center font-display font-extrabold text-[#7a0016] shrink-0 text-sm">
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-800 leading-relaxed pt-1.5">
                      {d}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-8 p-4 bg-white border-l-4 border-[#E63946] rounded-r-lg text-xs text-gray-700 leading-relaxed">
                <span className="font-bold text-[#7a0016]">Note:</span> All
                documents must be officially translated into Arabic and English
                if not already in these languages.
              </p>
            </div>
          </div>

          {/* COSTS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-6 lg:p-8 border-b border-gray-200 bg-gradient-to-r from-white to-[#fff5f5]">
                <h3 className="font-display font-extrabold text-2xl text-gray-900">
                  Admission Cost Breakdown
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Government, university and consultancy fees.
                </p>
              </div>

              <div className="divide-y divide-gray-100">
                {COSTS.map((c, i) => (
                  <div
                    key={c.label}
                    data-testid={`cost-${i}`}
                    className="flex items-center justify-between px-6 lg:px-8 py-4 hover:bg-[#fff5f5] transition-colors group"
                  >
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {c.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{c.note}</p>
                    </div>
                    <p className="font-display font-extrabold text-xl text-[#7a0016] group-hover:text-[#E63946] transition-colors">
                      {c.amount}
                    </p>
                  </div>
                ))}
              </div>

              <div className="px-6 lg:px-8 py-5 bg-gray-50 flex items-center justify-between border-t border-gray-200">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-700">
                  Base Required Fees
                </p>
                <p className="font-display font-extrabold text-2xl text-gray-900">
                  $2,595
                </p>
              </div>
            </div>

            {/* Scholarship Package */}
            <div className="relative bg-gradient-to-br from-[#7a0016] via-[#9a0a25] to-[#7a0016] rounded-3xl p-8 lg:p-10 text-white overflow-hidden shadow-2xl shadow-[#7a0016]/30">
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, #E63946 0%, transparent 50%), radial-gradient(circle at 20% 80%, #ff6b7a 0%, transparent 40%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur grid place-items-center">
                    <Trophy size={16} className="text-[#ffb8c0]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em]">
                    Premium Scholarship Package
                  </p>
                </div>

                <div className="mt-6 flex items-end justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-display font-extrabold text-5xl lg:text-7xl tracking-tighter leading-none">
                      $8,000
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      One-time tuition for entire program duration
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#ffb8c0]">
                      Save up to
                    </p>
                    <p className="font-display font-extrabold text-3xl text-white">
                      $50,000
                    </p>
                  </div>
                </div>

                <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                  {[
                    "Complete free education (4–6 years)",
                    "One-time tuition fees throughout studies",
                    "100% scholarship coverage",
                    "Student support service",
                  ].map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm bg-white/10 backdrop-blur border border-white/10 rounded-xl px-3 py-2.5"
                    >
                      <Check
                        size={16}
                        className="text-[#ffb8c0] mt-0.5 shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-white/15 flex items-end justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#ffb8c0]">
                      Total cost of admission & scholarship
                    </p>
                    <p className="font-display font-extrabold text-4xl lg:text-5xl tracking-tighter">
                      $10,595
                    </p>
                  </div>
                  <a
                    href="#apply"
                    data-testid="costs-apply-btn"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#7a0016] text-sm font-bold rounded-full hover:bg-[#ffd9dd] hover:shadow-2xl transition-all"
                  >
                    <Sparkles size={16} />
                    Apply for Scholarship
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed px-2">
              <span className="font-bold text-gray-700">Payment terms:</span>{" "}
              50% of Service Fee ($250) is required upfront. Remaining 50% is
              due when admission is secured. Flexible payment plans are
              available — contact us to discuss options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
