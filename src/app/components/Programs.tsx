const SERIF = "'Cormorant Garamond', serif";
const SANS = "'Noto Sans SC', sans-serif";
const SERIF_CN = "'Noto Serif SC', serif";

const programs = [
  {
    title: "瑜伽 & 冥想",
    titleEn: "Yoga & Meditation",
    desc: "在首尔的专业瑜伽工作室，从呼吸开始，找回内心的平静",
    tag: "初级 · 进阶",
    img: "https://images.unsplash.com/photo-1593164842249-d74fc06dae05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwYmVnaW5uZXIlMjBjbGFzcyUyMHN0dWRpbyUyMHdhcm18ZW58MXx8fHwxNzc0NzYyNDA5fDA&ixlib=rb-4.1.0&q=80&w=600",
    color: "#5e7a5e",
  },
  {
    title: "普拉提 & 伸展",
    titleEn: "Pilates & Stretching",
    desc: "专业普拉提教练一对一指导，改善体态，强化核心",
    tag: "全程陪同",
    img: "https://images.unsplash.com/photo-1767611094402-2b28863b834f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwc3RyZXRjaGluZyUyMGV4ZXJjaXNlJTIwaW5kb29yfGVufDF8fHx8MTc3NDc2MjQxMHww&ixlib=rb-4.1.0&q=80&w=600",
    color: "#7a6248",
  },
  {
    title: "登山 & 户外运动",
    titleEn: "Hiking & Outdoor",
    desc: "探索汉拿山、北汉山的壮丽，在大自然中挑战自我",
    tag: "济州 · 首尔",
    img: "https://images.unsplash.com/photo-1622116889199-d600a35da5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbnMlMjBLb3JlYSUyMHRyYWlsfGVufDF8fHx8MTc3NDc2MjQxMHww&ixlib=rb-4.1.0&q=80&w=600",
    color: "#3d5a48",
  },
  {
    title: "健身 & 力量训练",
    titleEn: "Gym & Strength",
    desc: "韩国本地精品健身房，私人教练全程中文指导",
    tag: "个人定制",
    img: "https://images.unsplash.com/photo-1673717466155-312a68d6016d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwdHJhaW5pbmclMjBLb3JlYXxlbnwxfHx8fDE3NzQ3NjI0MDZ8MA&ixlib=rb-4.1.0&q=80&w=600",
    color: "#5c4a38",
  },
];

export function Programs() {
  return (
    <section id="programs" className="bg-[#f2ece0] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p style={{ fontFamily: SANS, fontSize: "0.7rem", letterSpacing: "0.25em", color: "#8a7055" }} className="mb-2">
            CLASSES & PROGRAMS
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#2e2218" }}>
            课程 & 项目
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <div key={i} className="group cursor-pointer overflow-hidden rounded-sm">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "300px" }}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-4"
                  style={{ background: `${p.color}e6` }}>
                  <p style={{ fontFamily: SANS, fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.15em" }} className="mb-0.5">
                    {p.tag}
                  </p>
                  <p style={{ fontFamily: SERIF_CN, fontSize: "0.95rem", color: "#ffffff" }}>
                    {p.title}
                  </p>
                </div>
              </div>
              {/* Text below */}
              <div className="bg-[#ede7d9] px-4 py-4">
                <p style={{ fontFamily: SANS, fontSize: "0.7rem", color: "#8a7055", lineHeight: 1.8 }}>
                  {p.desc}
                </p>
                <div className="mt-3 flex items-center gap-1">
                  <div className="h-px flex-1" style={{ background: p.color, opacity: 0.4 }} />
                  <p style={{ fontFamily: SANS, fontSize: "0.6rem", color: p.color, letterSpacing: "0.1em" }}>
                    了解详情 →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
