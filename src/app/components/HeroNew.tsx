const heroPersonImg = "https://images.unsplash.com/photo-1616569671466-97df7f217ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMGJlYWNoJTIwS29yZWElMjBvdXRkb29yfGVufDF8fHx8MTc3NDc2MjQwNnww&ixlib=rb-4.1.0&q=80&w=1080";

const SERIF = "'Cormorant Garamond', serif";
const SANS = "'Noto Sans SC', sans-serif";
const SERIF_CN = "'Noto Serif SC', serif";

export function HeroNew() {
  return (
    <section className="relative overflow-hidden bg-[#ede7d9]" style={{ minHeight: "90vh" }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #c9b89a 0%, transparent 60%)" }} />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0 items-end" style={{ minHeight: "90vh" }}>
        {/* Left — image */}
        <div className="relative self-end order-2 md:order-1">
          <img
            src={heroPersonImg}
            alt="wellness in Korea"
            className="w-full object-cover object-top"
            style={{ height: "75vh", objectPosition: "center top" }}
          />
          {/* Floating tag */}
          <div className="absolute top-10 left-4 bg-white/70 backdrop-blur-sm rounded-md px-4 py-3 shadow-sm">
            <p style={{ fontFamily: SANS, fontSize: "0.65rem", color: "#8a7055", letterSpacing: "0.12em" }}>全程陪同 · 健康旅行</p>
            <p style={{ fontFamily: SERIF_CN, fontSize: "1rem", color: "#3a2e24" }}>韩国专属体验</p>
          </div>
        </div>

        {/* Right — text */}
        <div className="flex flex-col justify-center py-20 px-4 md:px-12 order-1 md:order-2">
          <p style={{ fontFamily: SANS, fontSize: "0.7rem", letterSpacing: "0.3em", color: "#8a7055" }} className="mb-4">
            VITA KOREA · 健康旅行计划
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#2e2218",
              letterSpacing: "0.02em",
            }}
          >
            旅行，也是<br />
            <em style={{ fontStyle: "italic" }}>回归自我</em><br />
            的旅程
          </h1>
          <p style={{ fontFamily: SANS, fontSize: "0.82rem", color: "#7a6248", lineHeight: 1.8 }} className="mb-8 max-w-xs">
            在韩国的每一天，不仅探索当地文化，<br />更在专业教练的陪伴下，锻炼身体，回归内心。
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#contact"
              className="bg-[#7a4a32] text-[#f5ede0] text-xs px-8 py-3 hover:bg-[#5e3520] transition-colors duration-300"
              style={{ fontFamily: SANS, letterSpacing: "0.1em" }}>
              预约体验课
            </a>
            <a href="#programs"
              className="border border-[#7a4a32] text-[#7a4a32] text-xs px-8 py-3 hover:bg-[#7a4a32] hover:text-white transition-colors duration-300"
              style={{ fontFamily: SANS, letterSpacing: "0.1em" }}>
              了解课程
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-[#c9b89a]">
            {[
              { num: "500+", label: "服务旅行者" },
              { num: "12+", label: "健康课程" },
              { num: "3", label: "城市体验" },
            ].map((s, i) => (
              <div key={i}>
                <p style={{ fontFamily: SERIF, fontSize: "1.8rem", fontWeight: 400, color: "#3a2e24" }}>{s.num}</p>
                <p style={{ fontFamily: SANS, fontSize: "0.65rem", color: "#8a7055", letterSpacing: "0.1em" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
