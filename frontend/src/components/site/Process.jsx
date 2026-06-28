import { STEPS } from "@/lib/data";
import { MessageSquare, FileText, Plane, Sparkles } from "lucide-react";

const STEP_ICONS = [MessageSquare, FileText, Plane, Sparkles];

export default function Process() {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="py-24 lg:py-32 bg-[#fafafa] relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white border border-[#E63946]/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
            How It Works
          </span>
          <h2 className="mt-6 font-display font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tighter text-gray-900">
            Four simple steps to start your{" "}
            <span className="text-brand-gradient">journey</span>.
          </h2>
        </div>

        <div className="relative grid lg:grid-cols-4 gap-6">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-[#E63946] to-transparent opacity-30" />

          {STEPS.map((s, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div
                key={s.n}
                data-testid={`step-${i}`}
                className="relative group"
              >
                <div className="relative bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-2xl hover:border-[#E63946] hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-brand-gradient grid place-items-center shadow-lg shadow-[#7a0016]/20 group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="font-display font-extrabold text-4xl text-gray-100 tracking-tighter group-hover:text-[#E63946]/20 transition-colors">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display font-extrabold text-xl text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
