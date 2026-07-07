import { GALLERY } from "@/lib/data";

export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-24 lg:py-32 bg-[#fafafa]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white border border-[#E63946]/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
            Our Students
          </span>
          <h2 className="mt-6 font-display font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tighter text-gray-900">
            Living their dreams,{" "}
            <span className="text-brand-gradient">in Egypt.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY.map((item, i) => (
            <div
              key={i}
              data-testid={`gallery-${i}`}
              className={`relative overflow-hidden rounded-3xl group bg-gray-100 ${
                i % 5 === 0 ? "md:row-span-2 md:col-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7a0016]/80 via-[#7a0016]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-500">
              <h3 className="text-white font-bold text-sm">
                {item.title}
              </h3>

              <p className="text-white/90 text-xs mt-1">
                {item.description}
              </p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
