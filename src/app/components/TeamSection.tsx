const SERIF = "'Cormorant Garamond', serif";
const SANS = "'Noto Sans SC', sans-serif";

const trainers = [
  {
    name: "Kim Jiwon",
    nameCn: "金智媛",
    role: "瑜伽 & 冥想教练",
    img: "https://images.unsplash.com/photo-1759873911661-d4cba84d2eff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMG1lZGl0YXRpb24lMjB3ZWxsbmVzcyUyMHBvcnRyYWl0JTIwY2FsbXxlbnwxfHx8fDE3NzQ3NjI0MTd8MA&ixlib=rb-4.1.0&q=80&w=400",
    specialty: "哈他瑜伽、冥想指导",
    years: "8年经验",
  },
  {
    name: "Park Sungmin",
    nameCn: "朴成敏",
    role: "健身 & 力量教练",
    img: "https://images.unsplash.com/photo-1628935291759-bbaf33a66dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZml0bmVzcyUyMHRyYWluZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ3NTQxODl8MA&ixlib=rb-4.1.0&q=80&w=400",
    specialty: "功能训练、私人定制",
    years: "10年经验",
  },
  {
    name: "Lee Yuna",
    nameCn: "李侑娜",
    role: "普拉提 & 体态教练",
    img: "https://images.unsplash.com/photo-1752477225721-5f1b72f83b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZml0bmVzcyUyMHRyYWluZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ3NjI0MTZ8MA&ixlib=rb-4.1.0&q=80&w=400",
    specialty: "普拉提、体态矫正",
    years: "6年经验",
  },
  {
    name: "Choi Junho",
    nameCn: "崔俊浩",
    role: "户外运动 & 登山向导",
    img: "https://images.unsplash.com/photo-1758274526406-4c3a319da0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBwb3NlJTIwbmF0dXJlJTIwc2VyZW5lfGVufDF8fHx8MTc3NDc2MjQwNnww&ixlib=rb-4.1.0&q=80&w=400",
    specialty: "登山规划、户外瑜伽",
    years: "12年经验",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-[#ede7d9] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p style={{ fontFamily: SANS, fontSize: "0.7rem", letterSpacing: "0.25em", color: "#8a7055" }} className="mb-2">
              TEACHERS IN OUR TEAM
            </p>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#2e2218" }}>
              我们的专业教练
            </h2>
          </div>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", color: "#8a7055", maxWidth: "260px", lineHeight: 1.9 }}>
            每位教练均精通中文沟通，<br />
            拥有丰富的国际旅行者服务经验
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {trainers.map((t, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Photo */}
              <div className="relative overflow-hidden rounded-sm mb-3" style={{ height: "260px" }}>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Hover tag */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span style={{ fontFamily: SANS, fontSize: "0.6rem", color: "white", background: "#7a4a32cc", padding: "3px 8px", borderRadius: "2px" }}>
                    {t.years}
                  </span>
                </div>
              </div>
              {/* Info */}
              <p style={{ fontFamily: SERIF, fontSize: "1.1rem", color: "#2e2218", fontWeight: 400 }}>{t.nameCn}</p>
              <p style={{ fontFamily: SANS, fontSize: "0.6rem", color: "#8a7055", letterSpacing: "0.05em" }} className="mt-0.5">{t.name}</p>
              <p style={{ fontFamily: SANS, fontSize: "0.68rem", color: "#7a4a32" }} className="mt-1">{t.role}</p>
              <p style={{ fontFamily: SANS, fontSize: "0.65rem", color: "#9a8068" }} className="mt-0.5">{t.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
