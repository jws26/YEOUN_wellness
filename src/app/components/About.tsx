import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="bg-[#111111] py-20 px-8 md:px-16">
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-14">
        <div className="flex-1 h-px bg-white/20" />
        <h2
          className="text-white text-center whitespace-nowrap"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            letterSpacing: "0.1em",
          }}
        >
          {a.sectionTitle}
        </h2>
        <div className="flex-1 h-px bg-white/20" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Text */}
        <div>
          <p
            className="text-white/70 leading-relaxed mb-6"
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.9,
            }}
          >
            {a.p1parts[0]}
            <span className="text-amber-400">{a.p1parts[1]}</span>
            {a.p1parts[2]}
          </p>
          <p
            className="text-white/70 leading-relaxed mb-6"
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.9,
            }}
          >
            {a.p2parts[0]}
            <span className="text-amber-400">{a.p2parts[1]}</span>
            {a.p2parts[2]}
          </p>
          <p
            className="text-white/70 leading-relaxed"
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.9,
            }}
          >
            {a.p3parts[0]}
            <span className="text-amber-400">{a.p3parts[1]}</span>
            {a.p3parts[2]}
          </p>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-4">
          {a.stats.map((stat, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl p-6 hover:border-amber-400/40 transition-colors duration-300"
            >
              <p
                className="text-amber-400 mb-1"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                }}
              >
                {stat.number}
              </p>
              <p
                className="text-white/50 text-sm leading-snug"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
