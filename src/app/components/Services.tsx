import { useLanguage } from "../context/LanguageContext";

export function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="bg-[#111111] py-20 px-8 md:px-16">
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-14 max-w-5xl mx-auto">
        <h2
          className="text-white whitespace-nowrap"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            letterSpacing: "0.05em",
          }}
        >
          {s.sectionTitle}
        </h2>
        <div className="flex-1 h-px bg-white/20" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {s.items.map((item, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-xl p-6 hover:border-amber-400/40 hover:bg-white/5 transition-all duration-300 group"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3
              className="text-white mb-2 group-hover:text-amber-400 transition-colors duration-200"
              style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem" }}
            >
              {item.title}
            </h3>
            <p
              className="text-white/50 text-sm leading-relaxed"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
