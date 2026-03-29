const SERIF = "'Cormorant Garamond', serif";
const SANS = "'Noto Sans SC', sans-serif";

const seoulImg = "https://images.unsplash.com/photo-1667670154380-bb61898f58bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW91bCUyMEtvcmVhJTIwY2l0eSUyMG5pZ2h0JTIwbGlnaHRzfGVufDF8fHx8MTc3NDc2MTc4MXww&ixlib=rb-4.1.0&q=80&w=1080";
const busanImg = "https://images.unsplash.com/photo-1716025885714-3e4f75ff81fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdXNhbiUyMEtvcmVhJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0NzYxNzg0fDA&ixlib=rb-4.1.0&q=80&w=600";
const jejuImg = "https://images.unsplash.com/photo-1602934198239-ff2e47d124f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKZWp1JTIwaXNsYW5kJTIwS29yZWElMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0NzYxNzgzfDA&ixlib=rb-4.1.0&q=80&w=600";

const destinations = [
  {
    city: "首尔",
    cityEn: "Seoul",
    img: seoulImg,
    wellness: "城市瑜伽 · 精品健身房",
    culture: "景福宫 · 弘大 · 北村韩屋",
  },
  {
    city: "釜山",
    cityEn: "Busan",
    img: busanImg,
    wellness: "海滨晨跑 · 冲浪体验",
    culture: "海云台 · 甘川文化村",
  },
  {
    city: "济州岛",
    cityEn: "Jeju",
    img: jejuImg,
    wellness: "汉拿山登山 · 户外瑜伽",
    culture: "城山日出峰 · 海女体验",
  },
];

export function TravelSection() {
  return (
    <section id="travel" className="bg-[#ede7d9] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p style={{ fontFamily: SANS, fontSize: "0.7rem", letterSpacing: "0.25em", color: "#8a7055" }} className="mb-2">
              TRAVEL & WELLNESS
            </p>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#2e2218", lineHeight: 1.2 }}>
              旅行路线<br />× 健康计划
            </h2>
          </div>
          <div className="self-end">
            <p style={{ fontFamily: SANS, fontSize: "0.78rem", color: "#7a6248", lineHeight: 2 }}>
              每一座城市，都有它独特的韩国气息。<br />
              我们将旅行体验与健康运动深度融合，<br />
              让您在探索韩国的同时，拥有更好的自己。
            </p>
          </div>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm mb-4" style={{ height: "260px" }}>
                <img
                  src={d.img}
                  alt={d.city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p style={{ fontFamily: SERIF, fontSize: "1.8rem", color: "white", fontWeight: 300 }}>{d.city}</p>
                  <p style={{ fontFamily: SANS, fontSize: "0.6rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.15em" }}>{d.cityEn}</p>
                </div>
              </div>
              <div className="border-t border-[#c9b89a] pt-4">
                <div className="flex items-start gap-2 mb-2">
                  <span style={{ fontFamily: SANS, fontSize: "0.6rem", color: "#7a4a32", background: "#f5e6d8", padding: "2px 8px", borderRadius: "2px", letterSpacing: "0.05em" }}>
                    健康
                  </span>
                  <p style={{ fontFamily: SANS, fontSize: "0.72rem", color: "#5a4530" }}>{d.wellness}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span style={{ fontFamily: SANS, fontSize: "0.6rem", color: "#5e7a5e", background: "#e8f0e8", padding: "2px 8px", borderRadius: "2px", letterSpacing: "0.05em" }}>
                    文化
                  </span>
                  <p style={{ fontFamily: SANS, fontSize: "0.72rem", color: "#5a4530" }}>{d.culture}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
