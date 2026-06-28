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
      className="relative min-h-[100vh] flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
      
        <img
          src={HERO_IMAGES[currentImage]}
          alt="YANKABA Hero"
          className="w-full h-full object-cover object-center transition-opacity duration-1000"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#3a0009]/95 via-[#7a0016]/85 to-[#1a0006]/90" />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #E63946 0%, transparent 40%), radial-gradient(circle at 80% 70%, #ff6b7a 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
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
              data-testid="hero-title"
              className="mt-7 font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[1.02] tracking-tighter"
            >
              Begin your journey to one of the{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#ffb8c0] via-white to-[#ffb8c0] bg-clip-text text-transparent">
                  best Egyptian
                </span>
              </span>{" "}
              universities.
            </h1>

            <p className="mt-7 text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed">
              Join thousands of successful students who achieved their dreams
              through Egypt&apos;s world-class universities. Your journey to
              academic excellence starts here with{" "}
              <span className="font-semibold text-white">
                YANKABA Education Consultancy.
              </span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#apply"
                data-testid="hero-apply-btn"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#7a0016] text-sm font-bold rounded-full hover:bg-[#ffd9dd] hover:shadow-[0_20px_50px_-12px_rgba(255,184,192,0.6)] hover:-translate-y-0.5 transition-all duration-300"
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
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E63946] text-white text-sm font-bold rounded-full hover:bg-[#ff4d5c] hover:shadow-[0_20px_50px_-12px_rgba(230,57,70,0.7)] hover:-translate-y-0.5 transition-all duration-300"
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
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glass card primary */}
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ffb8c0]">
                  You Deserve This Success!
                </p>
                <h3 className="mt-3 font-display font-extrabold text-3xl text-white leading-tight tracking-tight">
                  Africa&apos;s most trusted gateway to Egyptian higher
                  education.
                </h3>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  {[
                    { v: "13+", l: "Universities" },
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
                  className="mt-7 flex items-center justify-between p-4 bg-gradient-to-r from-[#25D366] to-[#1ebe5d] rounded-2xl text-white hover:shadow-xl transition-shadow group"
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
                className="hidden sm:block absolute -bottom-6 -left-6 bg-[#E63946] rounded-2xl p-5 shadow-2xl rotate-[-4deg] hover:rotate-0 transition-transform"
              >
                <p className="text-xs uppercase tracking-widest text-white/80">
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
        <div className="hidden lg:block mt-24 border-t border-white/15 pt-6">
          <div className="flex items-center gap-12 text-white/60 text-xs uppercase tracking-[0.3em]">
            <span>Cairo</span>
            <span>·</span>
            <span>Alexandria</span>
            <span>·</span>
            <span>Ain Shams</span>
            <span>·</span>
            <span>Assuit</span>
            <span>·</span>
            <span>Mansoura</span>
            <span>·</span>
            <span>Helwan</span>
            <span>·</span>
            <span>And many more...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
