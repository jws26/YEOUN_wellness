const SERIF = "'Cormorant Garamond', serif";
const SANS = "'Noto Sans SC', sans-serif";

const studioImg1 = "https://images.unsplash.com/photo-1752454162935-317ed06f1f2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHN0dWRpbyUyMGludGVyaW9yJTIwbmF0dXJhbCUyMGxpZ2h0JTIwYmVpZ2V8ZW58MXx8fHwxNzc0NzYyNDEzfDA&ixlib=rb-4.1.0&q=80&w=800";
const studioImg2 = "https://images.unsplash.com/photo-1530178338825-ceb89d377f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwbWluaW1hbCUyMGludGVyaW9yJTIwd2FybXxlbnwxfHx8fDE3NzQ3NjI0MTN8MA&ixlib=rb-4.1.0&q=80&w=600";

export function StudioSection() {
  return (
    <section id="studio" className="bg-[#f2ece0] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left — big image + text below */}
          <div>
            <div className="relative overflow-hidden rounded-sm" style={{ height: "360px" }}>
              <img src={studioImg1} alt="wellness studio" className="w-full h-full object-cover" />
            </div>
            <div className="mt-6">
              <p style={{ fontFamily: SANS, fontSize: "0.75rem", color: "#7a6248", lineHeight: 2 }}>
                精心挑选的合作工作室，融入自然采光与温暖色调，<br />
                为您打造最舒适的运动空间。
              </p>
              <p style={{ fontFamily: SANS, fontSize: "0.75rem", color: "#7a6248", lineHeight: 2 }} className="mt-2">
                自然的暖色调与周围空间融为一体，<br />
                强调身体与心灵的和谐统一。
              </p>
            </div>
          </div>

          {/* Right — quote + smaller image */}
          <div className="flex flex-col gap-6">
            {/* Quote */}
            <div className="flex flex-col justify-center" style={{ minHeight: "160px" }}>
              <blockquote
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "#2e2218",
                  lineHeight: 1.5,
                }}
              >
                "成为你自己<br />最好的版本"
              </blockquote>
              <div className="h-px w-16 bg-[#7a4a32] mt-4 mb-2" />
              <p style={{ fontFamily: SANS, fontSize: "0.65rem", color: "#8a7055", letterSpacing: "0.1em" }}>
                — VITA KOREA 健康理念
              </p>
            </div>

            {/* Smaller studio image */}
            <div className="relative overflow-hidden rounded-sm" style={{ height: "260px" }}>
              <img src={studioImg2} alt="yoga studio" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#7a4a32]/10" />
            </div>

            {/* Feature list */}
            <div className="border-t border-[#c9b89a] pt-5 grid grid-cols-2 gap-4">
              {[
                { icon: "☀️", label: "天然采光工作室" },
                { icon: "🌿", label: "环保瑜伽设备" },
                { icon: "🧖", label: "课后SPA放松" },
                { icon: "🥤", label: "有机健康饮品" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-base">{f.icon}</span>
                  <p style={{ fontFamily: SANS, fontSize: "0.68rem", color: "#6b5740" }}>{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
