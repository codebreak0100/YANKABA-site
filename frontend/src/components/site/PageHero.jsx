import Breadcrumbs from "@/components/site/Breadcrumbs";

/**
 * Shared header for interior pages. Keeps the homepage's editorial brand
 * language (dark burgundy gradient, grid texture) while staying compact.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs = [],
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#250006] via-[#680013] to-[#160005] text-white pt-32 pb-14 lg:pt-40 lg:pb-20">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#d62839]/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} light />
          </div>
        )}
        {eyebrow && (
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ffb8c0] backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-4xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
