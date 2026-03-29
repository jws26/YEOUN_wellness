import { useLanguage } from "../context/LanguageContext";
import { MapPin, Quote } from "lucide-react";
import jiwonPhoto from "../../assets/86b447d7dfa93cf712b35ff1fd2030d16fc34b85.png";

export function Guide() {
  const { t } = useLanguage();
  const g = t.guide;
  const guide = g.guides[0];

  return (
    <section id="guide" className="bg-[#0a0a0a] py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-amber-400 text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {g.sectionTag}
          </p>
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
              letterSpacing: "0.05em",
            }}
          >
            {g.sectionTitle}
          </h2>
          <p
            className="text-white/45 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.9,
            }}
          >
            {g.sectionSubtitle}
          </p>
        </div>

        {/* Guide card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/8">

          {/* Left: Photo */}
          <div className="relative h-80 md:h-auto min-h-[440px]">
            <img
              src={jiwonPhoto}
              alt={guide.name}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 hidden md:block" />

            <div className="absolute bottom-0 left-0 p-7">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span
                  className="text-amber-400 text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {guide.role}
                </span>
              </div>
              <h3
                className="text-white"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: "2.4rem",
                  letterSpacing: "0.05em",
                }}
              >
                {guide.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-2">
                <MapPin size={12} className="text-white/40" />
                <span
                  className="text-white/40 text-xs"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {guide.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="bg-[#131313] p-8 md:p-10 flex flex-col justify-between">

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {guide.stats.map((stat, j) => (
                <div key={j} className="text-center">
                  <p
                    className="text-amber-400 mb-1"
                    style={{
                      fontFamily: "'Noto Serif SC', serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-white/35 leading-snug"
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "0.68rem",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-px bg-white/8 mb-7" />

            {/* Bio */}
            <p
              className="text-white/55 mb-7"
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.9,
              }}
            >
              {guide.bio}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {guide.tags.map((tag, j) => (
                <span
                  key={j}
                  className="px-3 py-1 rounded-full border border-amber-400/25 text-amber-400/80 text-xs"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Philosophy quote */}
            <div className="border-l-2 border-amber-400/40 pl-5">
              <Quote size={14} className="text-amber-400/40 mb-2" />
              <p
                className="text-white/40 italic"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: "0.82rem",
                  lineHeight: 1.8,
                }}
              >
                {guide.philosophy}
              </p>
            </div>
          </div>
        </div>

        {/* Credentials bar */}
        <div className="mt-14">
          <p
            className="text-white/25 text-xs tracking-[0.25em] uppercase text-center mb-8"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {g.credentialsTitle}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {g.credentials.map((cred, i) => (
              <div
                key={i}
                className="border border-white/8 rounded-xl p-5 text-center hover:border-amber-400/20 transition-colors duration-300"
              >
                <div className="text-2xl mb-3">{cred.icon}</div>
                <p
                  className="text-white/70 mb-1.5"
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                  }}
                >
                  {cred.label}
                </p>
                <p
                  className="text-white/30 leading-snug"
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "0.7rem",
                    lineHeight: 1.6,
                  }}
                >
                  {cred.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}