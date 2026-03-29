import { useLanguage } from "../context/LanguageContext";

const stopImages = [
  "https://images.unsplash.com/photo-1625551922738-3fb390d041dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHeWVvbmdib2tndW5nJTIwcGFsYWNlJTIwU2VvdWwlMjBLb3JlYXxlbnwxfHx8fDE3NzQ3NjE3ODF8MA&ixlib=rb-4.1.0&q=80&w=600",
  "https://images.unsplash.com/photo-1716025885714-3e4f75ff81fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdXNhbiUyMEtvcmVhJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0NzYxNzg0fDA&ixlib=rb-4.1.0&q=80&w=600",
  "https://images.unsplash.com/photo-1602934198239-ff2e47d124f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKZWp1JTIwaXNsYW5kJTIwS29yZWElMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0NzYxNzgzfDA&ixlib=rb-4.1.0&q=80&w=600",
];

const cityEn = ["Seoul", "Busan", "Jeju"];
const available = [true, false, false];

export function Itinerary() {
  const { t } = useLanguage();
  const it = t.itinerary;

  return (
    <section id="itinerary" className="bg-[#0d0d0d] py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-white mb-4"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            letterSpacing: "0.05em",
          }}
        >
          {it.sectionTitle}
        </h2>
        <div className="h-px bg-white/20 mb-4 w-1/2" />
        <p
          className="text-white/40 text-sm mb-14"
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        >
          {it.subtitle}
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="flex flex-col gap-16">
            {it.stops.map((stop, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 ${
                  !available[i] ? "opacity-40" : ""
                }`}
              >
                {/* Text side */}
                <div
                  className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
                >
                  <p
                    className="text-amber-400 text-sm tracking-widest mb-1"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                  >
                    {stop.days}
                  </p>
                  <div
                    className={`flex items-center gap-3 mb-2 ${
                      i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: "'Noto Serif SC', serif",
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      }}
                    >
                      {stop.city}
                      <span
                        className="text-white/30 text-base ml-2"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        {cityEn[i]}
                      </span>
                    </h3>
                    {!available[i] && (
                      <span
                        className="border border-white/30 text-white/50 text-xs px-2 py-0.5 rounded-full tracking-widest"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                      >
                        {it.comingSoon}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-white/60 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                  >
                    {stop.description}
                  </p>
                  <div
                    className={`flex gap-2 flex-wrap ${
                      i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {stop.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="border border-amber-400/40 text-amber-400/80 text-xs px-3 py-1 rounded-full"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative hidden md:flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full z-10 ${
                      available[i] ? "bg-amber-400" : "bg-white/20"
                    }`}
                  />
                </div>

                {/* Image side */}
                <div className="flex-1">
                  <div className="relative rounded-xl overflow-hidden group">
                    <img
                      src={stopImages[i]}
                      alt={stop.city}
                      className={`w-full h-52 md:h-64 object-cover transition-transform duration-700 ${
                        available[i] ? "group-hover:scale-105" : "grayscale"
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                        <span
                          className="text-white text-xs"
                          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                        >
                          {stop.city}
                        </span>
                      </div>
                      {!available[i] && (
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded px-2 py-1">
                          <span
                            className="text-white/70 text-xs tracking-widest"
                            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                          >
                            {it.comingSoon}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
