import { ArrowRight, Award, GraduationCap, Sparkles, Users, Trophy } from "lucide-react";
import { CONTACT } from "@/lib/data";

/*const HERO_IMG =
  "https://images.unsplash.com/photo-1594750852563-5ed8e0421d40?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85";*/

  // Hero images
  import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
  "/images/hero/hero4.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
  }, 4000);

  return () => clearInterval(timer);
}, []);
  // edited
  return (
    <section
      id="top"
      data-testid="hero-section"
      aria-labelledby="hero-title"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background images (crossfade) */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-out ${
              i === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-br from-[#250006]/95 via-[#680013]/84 to-[#160005]/95" />
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#d62839]/25 blur-3xl animate-soft-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Content */}
          <div className="lg:col-span-7 text-white animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <Sparkles size={14} className="text-[#ffb8c0]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white">
                A Journey To Remember
              </span>
            </div>

            <h1
              id="hero-title"
              data-testid="hero-title"
              className="text-balance mt-7 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[5.25rem] leading-[0.98] tracking-[-0.055em]"
            >
              Begin your journey to top universities in{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#ffb8c0] via-white to-[#ffb8c0] bg-clip-text text-transparent">
                  Egypt, Turkey &amp; Cyprus
                </span>
              </span>
              .
            </h1>

            <p className="mt-7 text-base lg:text-lg text-white/75 max-w-xl leading-relaxed">
              Join thousands of successful students who achieved their dreams
              through world-class universities abroad. Your journey to academic
              excellence starts here with{" "}
              <span className="font-semibold text-white">
                YANKABA Education Consultancy.
              </span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
               <a
                href="#apply"
                data-testid="hero-apply-btn"
                 className="group inline-flex items-center gap-2 px-7 py-4 bg-white text-[#7a0016] text-sm font-bold rounded-full hover:bg-[#ffd9dd] hover:shadow-[0_20px_50px_-12px_rgba(255,184,192,0.6)] hover:-translate-y-1 transition-all duration-300"
              >
                <GraduationCap size={18} />
                START YOUR JOURNEY
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#costs"
                data-testid="hero-scholarship-btn"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#D62839] text-white text-sm font-bold rounded-full hover:bg-[#ff4d5c] hover:shadow-[0_20px_50px_-12px_rgba(230,57,70,0.7)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Trophy size={18} />
                SCHOLARSHIP INFO
              </a>
            </div>

            {/* Trust badges */}
             <div className="mt-12 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 grid place-items-center">
                  <Award size={18} className="text-[#ffb8c0]" />
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest">
                    Authorised By
                  </p>
                  <p className="text-sm font-semibold">
                    WAFEDEN · MoHE Egypt
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 grid place-items-center">
                  <Users size={18} className="text-[#ffb8c0]" />
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest">
                    Helped
                  </p>
                  <p className="text-sm font-semibold">1000+ students</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Floating stat card stack */}
          <div
            className="hidden sm:block lg:col-span-5 relative animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
             <div className="relative animate-float-soft">
              {/* Glass card primary */}
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ffb8c0]">
                  You Deserve This Success!
                </p>
                <h2 className="mt-3 font-display font-extrabold text-3xl text-white leading-tight tracking-tight">
                  Your trusted gateway to world-class universities abroad.
                </h2>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  {[
                    { v: "45+", l: "Universities" },
                    { v: "1000+", l: "Students" },
                    { v: "100%", l: "Success" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      data-testid={`stat-${i}`}
                      className="bg-white/5 border border-white/10 rounded-2xl px-3 py-4 text-center"
                    >
                      <p className="font-display font-extrabold text-2xl lg:text-3xl text-white tracking-tighter">
                        {s.v}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest text-white/60 mt-1">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${CONTACT.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex items-center justify-between p-4 bg-gradient-to-r from-[#0B7A38] to-[#0A6B30] rounded-2xl text-white hover:shadow-xl transition-shadow group"
                >
                  <div>
                    <p className="text-xs text-white/80 uppercase tracking-widest">
                      Talk to us now
                    </p>
                    <p className="font-semibold text-sm">
                      {CONTACT.whatsapp}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Floating accent card */}
              <div
                data-testid="stat-3"
                 className="hidden sm:block absolute -bottom-6 -left-6 bg-[#D62839] rounded-2xl p-5 shadow-2xl rotate-[-4deg] hover:rotate-0 transition-transform"
              >
                <p className="text-xs uppercase tracking-widest text-white">
                  Response Time
                </p>
                <p className="font-display font-extrabold text-3xl text-white">
                  24h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom marquee */}
         <div className="hidden lg:flex mt-24 border-t border-white/15 pt-6 items-center justify-between">
          <div className="flex items-center gap-12 text-white/60 text-xs uppercase tracking-[0.3em]">
            <span>Cairo</span>
            <span>·</span>
            <span>Istanbul</span>
            <span>·</span>
            <span>Nicosia</span>
            <span>·</span>
            <span>Alexandria</span>
            <span>·</span>
            <span>Ankara</span>
            <span>·</span>
            <span>Famagusta</span>
            <span>·</span>
            <span>And many more...</span>
          </div>
          <div className="text-white/50 text-xs uppercase tracking-[0.25em]">Scroll to explore ↓</div>
        </div>
      </div>
    </section>
  );
}
