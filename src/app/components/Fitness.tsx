import { useLanguage } from "../context/LanguageContext";

const gymImg =
  "https://images.unsplash.com/photo-1634042341465-f08e0d10a670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjB3b3Jrb3V0JTIwd2VpZ2h0JTIwdHJhaW5pbmclMjBkYXJrfGVufDF8fHx8MTc3NDc2NTMyOXww&ixlib=rb-4.1.0&q=80&w=1080";
const hikingImg =
  "https://images.unsplash.com/photo-1622116889199-d600a35da5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbnMlMjBLb3JlYSUyMHRyYWlsfGVufDF8fHx8MTc3NDc2MjQxMHww&ixlib=rb-4.1.0&q=80&w=1080";
const runningImg =
  "https://images.unsplash.com/photo-1774195771711-5722af4ba999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcnVubmluZyUyMGNpdHklMjBuaWdodCUyMHVyYmFufGVufDF8fHx8MTc3NDc2NTMzNHww&ixlib=rb-4.1.0&q=80&w=1080";
const gymInteriorImg =
  "https://images.unsplash.com/photo-1761971975962-9cc397e2ba2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZ3ltJTIwZml0bmVzcyUyMGNlbnRlciUyMGludGVyaW9yfGVufDF8fHx8MTc3NDc2NTMzM3ww&ixlib=rb-4.1.0&q=80&w=1080";
const trainerImg =
  "https://images.unsplash.com/photo-1564282350350-a8355817fd2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGF0aGxldGV8ZW58MXx8fHwxNzc0NzY1MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const groupHikingImg =
  "https://images.unsplash.com/photo-1603909070343-649482999bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYSUyMG1vdW50YWluJTIwaGlraW5nJTIwZ3JvdXAlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzc0NzY1MzMwfDA&ixlib=rb-4.1.0&q=80&w=1080";

const programImages = [gymImg, hikingImg, runningImg];

export function Fitness() {
  const { t } = useLanguage();
  const f = t.fitness;
  const bottomCardImgs = [gymInteriorImg, trainerImg, groupHikingImg];

  return (
    <section id="fitness" className="bg-[#111111] py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <h2
            className="text-white whitespace-nowrap"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              letterSpacing: "0.05em",
            }}
          >
            {f.sectionTitle}
          </h2>
          <div className="flex-1 h-px bg-white/20" />
        </div>
        <p
          className="text-white/50 text-sm mb-14 max-w-xl"
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        >
          {f.subtitle}
        </p>

        {/* Program list */}
        <div className="flex flex-col gap-8">
          {f.programs.map((p, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/30 transition-all duration-300 group ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-56 md:h-auto overflow-hidden">
                <img
                  src={programImages[i]}
                  alt={p.tagLocal}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-4 left-4">
                  <span
                    className="bg-amber-400 text-black text-xs px-3 py-1 rounded-full"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif", letterSpacing: "0.1em" }}
                  >
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="bg-[#161616] p-8 flex flex-col justify-center">
                <p
                  className="text-amber-400 text-xs tracking-widest mb-3"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {p.tagLocal}
                </p>
                <h3
                  className="text-white mb-4 whitespace-pre-line"
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                    lineHeight: 1.4,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-white/50 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {p.desc}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {p.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      <span
                        className="text-white/60 text-xs"
                        style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                      >
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:border-amber-400 hover:text-amber-400 text-sm px-5 py-2 rounded-full transition-all duration-300 self-start"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {f.bookBtn}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3-image row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {f.bottomCards.map((card, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden h-48 group cursor-pointer">
              <img
                src={bottomCardImgs[i]}
                alt={card.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
              <div className="absolute bottom-4 left-4">
                <p className="text-amber-400 text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {card.label}
                </p>
                <p className="text-white/60 text-xs mt-0.5" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {card.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
