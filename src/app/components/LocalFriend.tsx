import { useLanguage } from "../context/LanguageContext";
import { X, Check } from "lucide-react";

export function LocalFriend() {
  const { t, lang } = useLanguage();
  const lf = t.localFriend;

  return (
    <section className="bg-[#0d0d0d] py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-amber-400 text-xs tracking-[0.3em] mb-3 uppercase"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {lf.subtitle}
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
              letterSpacing: "0.05em",
            }}
          >
            {lf.sectionTitle}
          </h2>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl overflow-hidden border border-white/8 mb-20">
          {/* Column headers */}
          <div className="grid grid-cols-2">
            <div className="bg-[#161616] px-7 py-5 flex items-center gap-3 border-b border-white/8">
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                <X size={11} className="text-white/30" />
              </div>
              <span
                className="text-white/35 text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {lf.notTour}
              </span>
            </div>
            <div className="bg-[#1b1700] px-7 py-5 flex items-center gap-3 border-b border-white/8 border-l border-amber-400/10">
              <div className="w-6 h-6 rounded-full bg-amber-400/15 flex items-center justify-center flex-shrink-0">
                <Check size={11} className="text-amber-400" />
              </div>
              <span
                className="text-amber-400 text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {lf.yeounWay}
              </span>
            </div>
          </div>

          {/* Comparison rows */}
          {lf.comparisons.map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-t border-white/5">
              <div className="bg-[#111111] px-7 py-5 flex items-start gap-3">
                <X size={13} className="text-white/15 mt-0.5 flex-shrink-0" />
                <p
                  className="text-white/30 text-sm leading-relaxed"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {row.tour}
                </p>
              </div>
              <div className="bg-[#111100] px-7 py-5 flex items-start gap-3 border-l border-amber-400/8">
                <Check size={13} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <p
                  className="text-white/75 text-sm leading-relaxed"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {row.friend}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* "Who's in the group" visual strip */}
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="flex -space-x-3">
            {/* Avatar placeholders representing the group */}
            {[
              { bg: "bg-amber-400", label: "로컬", isLocal: true },
              { bg: "bg-zinc-700", label: "여행자", isLocal: false },
              { bg: "bg-zinc-700", label: "여행자", isLocal: false },
              { bg: "bg-zinc-700", label: "여행자", isLocal: false },
              { bg: "bg-zinc-700", label: "+", isLocal: false },
            ].map((av, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full border-2 border-[#0d0d0d] flex items-center justify-center text-xs ${av.bg} ${av.isLocal ? "text-black" : "text-white/60"}`}
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {i === 0 ? "L" : i === 4 ? "+" : "✈"}
              </div>
            ))}
          </div>
          <p
            className="text-white/40 text-sm"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {lang === "zh"
              ? "本地陪同 + 同频旅行者 = 专属小圈子体验"
              : lang === "ko"
              ? "로컬 동행 + 소그룹 여행자 = 맞춤 동행 경험"
              : "Local companion + small group = personalised experience"}
          </p>
        </div>

        {/* Friend Moments — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {lf.moments.map((moment, i) => (
            <div
              key={i}
              className="border border-white/8 rounded-2xl p-7 hover:border-amber-400/25 hover:bg-white/2 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{moment.icon}</div>
              <h3
                className="text-white mb-3 group-hover:text-amber-400 transition-colors duration-200"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                {moment.title}
              </h3>
              <p
                className="text-white/40 text-sm leading-relaxed"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {moment.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}