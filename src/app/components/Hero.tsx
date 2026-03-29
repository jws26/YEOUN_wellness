import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const heroImage =
  "https://images.unsplash.com/photo-1667670154380-bb61898f58bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW91bCUyMEtvcmVhJTIwY2l0eSUyMG5pZ2h0JTIwbGlnaHRzfGVufDF8fHx8MTc3NDc2MTc4MXww&ixlib=rb-4.1.0&q=80&w=1080";
const hikingImg =
  "https://images.unsplash.com/photo-1657887195417-a5cadcc2a37c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbiUyMHRyYWlsJTIwS29yZWElMjBzdW5yaXNlfGVufDF8fHx8MTc3NDc2NTMzMHww&ixlib=rb-4.1.0&q=80&w=1080";

const thumbnailImgs = [
  "https://images.unsplash.com/photo-1634042341465-f08e0d10a670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjB3b3Jrb3V0JTIwd2VpZ2h0JTIwdHJhaW5pbmclMjBkYXJrfGVufDF8fHx8MTc3NDc2NTMyOXww&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1657887195417-a5cadcc2a37c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbiUyMHRyYWlsJTIwS29yZWElMjBzdW5yaXNlfGVufDF8fHx8MTc3NDc2NTMzMHww&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1716025885714-3e4f75ff81fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdXNhbiUyMEtvcmVhJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0NzYxNzg0fDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1774195771711-5722af4ba999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcnVubmluZyUyMGNpdHklMjBuaWdodCUyMHVyYmFufGVufDF8fHx8MTc3NDc2NTMzNHww&ixlib=rb-4.1.0&q=80&w=400",
];

export function Hero() {
  const { t } = useLanguage();
  const thumbnails = t.hero.thumbnails;

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Seoul Korea" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.95) 100%)",
          }}
        />
      </div>

      {/* Hiking model - right side */}
      <div className="absolute bottom-0 right-0 md:right-10 lg:right-20 h-[70%] z-10 pointer-events-none hidden md:block">
        <img
          src={hikingImg}
          alt="Korea hiking"
          className="h-full w-auto object-cover object-top"
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 20%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%)",
          }}
        />
      </div>

      {/* Social icons */}
      <div className="absolute right-5 top-1/3 flex flex-col gap-3 z-20 hidden md:flex">
        {["微", "博", "信"].map((icon, i) => (
          <button
            key={i}
            className="w-8 h-8 rounded-full border border-white/30 text-white/60 hover:text-white hover:border-white text-xs flex items-center justify-center transition-all"
          >
            {icon}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-16 pb-0 pt-32">
        {/* Title */}
        <div>
          <p
            className="text-amber-400 text-sm tracking-[0.3em] mb-2"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {t.hero.tagline}
          </p>
          <h1
            className="text-white uppercase"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "clamp(5rem, 15vw, 12rem)",
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "0.02em",
              textShadow: "0 4px 40px rgba(0,0,0,0.5)",
            }}
          >
            {t.hero.title}
          </h1>
          <p
            className="text-white/70 text-base md:text-lg mt-3 max-w-sm"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {t.hero.subtitle}
          </p>
        </div>

        {/* Thumbnails + CTA */}
        <div className="flex flex-col sm:flex-row items-end gap-4 pb-8 mt-auto">
          <div className="flex gap-2 flex-wrap">
            {thumbnails.map((thumb, i) => (
              <div
                key={i}
                className="relative rounded-lg overflow-hidden w-28 h-36 md:w-32 md:h-40 flex-shrink-0 group cursor-pointer"
              >
                <img
                  src={thumbnailImgs[i]}
                  alt={thumb.label1}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-2 left-2">
                  <p className="text-white text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    {thumb.label1}
                  </p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                    {thumb.label2}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-white text-black text-sm px-10 py-3 rounded flex-shrink-0 hover:bg-amber-400 transition-colors duration-300 self-end"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-white/50" size={24} />
      </div>
    </section>
  );
}
