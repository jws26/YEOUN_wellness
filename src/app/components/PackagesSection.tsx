const SERIF = "'Cormorant Garamond', serif";
const SANS = "'Noto Sans SC', sans-serif";

const packages = [
  {
    name: "轻体验",
    nameEn: "LIGHT",
    days: "3天",
    city: "首尔",
    price: "¥4,800起",
    color: "#c9b89a",
    features: ["1次瑜伽/冥想课", "2次本地文化体验", "全程中文陪同", "精品民宿住宿"],
    popular: false,
  },
  {
    name: "深度体验",
    nameEn: "CLASSIC",
    days: "7天",
    city: "首尔 + 釜山",
    price: "¥10,800起",
    color: "#7a4a32",
    features: ["5次运动课程", "全城市文化体验", "全程中文陪同", "精品住宿安排", "餐饮特别推荐", "课后SPA放松"],
    popular: true,
  },
  {
    name: "全境体验",
    nameEn: "PREMIUM",
    days: "12天",
    city: "3城全程",
    price: "¥18,800起",
    color: "#3d5a48",
    features: ["10次定制课程", "登山+户外体验", "瑜伽+力量+普拉提", "私人教练全程", "顶级住宿安排", "全程专属司机", "营养饮食规划"],
    popular: false,
  },
];

export function PackagesSection() {
  return (
    <section className="bg-[#f2ece0] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ fontFamily: SANS, fontSize: "0.7rem", letterSpacing: "0.25em", color: "#8a7055" }} className="mb-2">
            PACKAGES
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#2e2218" }}>
            旅行套餐选择
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="relative rounded-sm overflow-hidden"
              style={{
                border: pkg.popular ? `2px solid ${pkg.color}` : "1px solid #d6c9b0",
                background: pkg.popular ? "#fff9f4" : "#f9f5ef",
              }}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 py-1.5 text-center"
                  style={{ background: pkg.color }}>
                  <p style={{ fontFamily: SANS, fontSize: "0.6rem", color: "white", letterSpacing: "0.2em" }}>
                    最受欢迎
                  </p>
                </div>
              )}
              <div className={`p-8 ${pkg.popular ? "mt-6" : ""}`}>
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <p style={{ fontFamily: SANS, fontSize: "0.6rem", letterSpacing: "0.2em", color: "#8a7055" }}>{pkg.nameEn}</p>
                    <p style={{ fontFamily: SERIF, fontSize: "1.8rem", color: "#2e2218", fontWeight: 300 }}>{pkg.name}</p>
                  </div>
                  <div className="text-right">
                    <span style={{ fontFamily: SANS, fontSize: "0.6rem", color: "#8a7055", letterSpacing: "0.05em" }}>
                      {pkg.days} · {pkg.city}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <p style={{ fontFamily: SERIF, fontSize: "2rem", color: pkg.color, fontWeight: 400 }}>{pkg.price}</p>
                  <p style={{ fontFamily: SANS, fontSize: "0.6rem", color: "#9a8068" }}>per person</p>
                </div>

                <div className="flex flex-col gap-2.5 mb-8">
                  {pkg.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: pkg.color }} />
                      <p style={{ fontFamily: SANS, fontSize: "0.7rem", color: "#6b5740" }}>{f}</p>
                    </div>
                  ))}
                </div>

                <a href="#contact"
                  className="block text-center py-3 text-xs transition-all duration-300"
                  style={{
                    fontFamily: SANS,
                    letterSpacing: "0.1em",
                    background: pkg.popular ? pkg.color : "transparent",
                    color: pkg.popular ? "white" : pkg.color,
                    border: `1px solid ${pkg.color}`,
                  }}>
                  立即预约
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
