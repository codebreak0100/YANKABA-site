import {
  Users,
  Target,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { FEATURES } from "@/lib/data";

const ICONS = {
  users: Users,
  target: Target,
  sparkles: Sparkles,
  "check-circle-2": CheckCircle2,
};

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1746640662304-59a8ac46f809?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHw0fHxjYWlybyUyMHVuaXZlcnNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzgyMzQ5MDE1fDA&ixlib=rb-4.1.0&q=85";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, #7a0016 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#fff5f5] border border-[#E63946]/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
            About YANKABA
          </span>
          <h2
            data-testid="about-title"
            className="mt-6 font-display font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tighter text-gray-900"
          >
            Your trusted partner in accessing{" "}
            <span className="text-brand-gradient">world-class</span> education.
          </h2>
          <p className="mt-5 text-base lg:text-lg text-gray-600 leading-relaxed">
            We facilitate educational procedures in Egypt through the Central
            Department for International Students Affairs (WAFEDEN), under the
            Ministry of Higher Education Egypt.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: Big image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={ABOUT_IMG}
                  alt="Cairo University architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7a0016]/40 via-transparent to-transparent" />
              </div>
              {/* Floating authority card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 max-w-[260px]">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-gradient grid place-items-center shrink-0">
                    <ShieldCheck className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-display font-extrabold text-sm text-gray-900">
                      Officially Authorised
                    </p>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                      Licensed by Egyptian Ministry of Higher Education through
                      WAFEDEN.
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-[#E63946] grid place-items-center text-white shadow-xl rotate-6">
                <div className="text-center">
                  <p className="font-display font-extrabold text-xl">15+</p>
                  <p className="text-[9px] uppercase tracking-widest">Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Features */}
          <div className="lg:col-span-7">
            <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-gray-900 tracking-tight">
              Official Educational Partner in Egypt
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our diverse team of experts offers counselling advice for
              applicants and helps them get admission into their desired
              universities. We lead you through the complex university system
              to help you win places at the top universities in Egypt.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {FEATURES.map((f, i) => {
                const Icon = ICONS[f.icon];
                return (
                  <div
                    key={f.title}
                    data-testid={`feature-${i}`}
                    className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#E63946] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#fff5f5] group-hover:bg-brand-gradient grid place-items-center transition-colors duration-300">
                      <Icon
                        size={22}
                        className="text-[#7a0016] group-hover:text-white transition-colors"
                      />
                    </div>
                    <p className="mt-5 font-display font-extrabold text-lg text-gray-900">
                      {f.title}
                    </p>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {f.body}
                    </p>
                    <ArrowRight
                      size={14}
                      className="absolute top-6 right-6 text-gray-300 group-hover:text-[#E63946] group-hover:translate-x-1 transition-all"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
