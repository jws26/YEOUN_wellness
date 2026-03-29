const SERIF = "'Cormorant Garamond', serif";
const SANS = "'Noto Sans SC', sans-serif";

export function FooterNew() {
  return (
    <footer className="bg-[#2e2218] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <p style={{ fontFamily: SERIF, fontSize: "1.5rem", color: "#f2ece0", letterSpacing: "0.1em" }}>
              VITA KOREA
            </p>
            <p style={{ fontFamily: SANS, fontSize: "0.6rem", letterSpacing: "0.2em", color: "#8a7055" }} className="mb-4">
              健康 · 旅行 · 韩国
            </p>
            <p style={{ fontFamily: SANS, fontSize: "0.72rem", color: "#9a8068", lineHeight: 2, maxWidth: "280px" }}>
              专为中国旅行者设计的韩国健康旅行陪同服务。旅行与运动，相遇在这里。
            </p>
            <div className="flex gap-3 mt-5">
              {["微博", "微信", "小红书"].map((s, i) => (
                <button key={i}
                  className="border border-[#5a4530] text-[#8a7055] text-xs px-3 py-1 rounded-sm hover:border-[#c9b89a] hover:text-[#c9b89a] transition-colors duration-200"
                  style={{ fontFamily: SANS, fontSize: "0.6rem" }}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontFamily: SANS, fontSize: "0.6rem", letterSpacing: "0.2em", color: "#8a7055" }} className="mb-4">
              快速导航
            </p>
            {["课程项目", "旅行体验", "专属空间", "我们的教练", "套餐选择"].map((l, i) => (
              <a key={i} href="#"
                className="block mb-2"
                style={{ fontFamily: SANS, fontSize: "0.72rem", color: "#7a6248" }}>
                {l}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: SANS, fontSize: "0.6rem", letterSpacing: "0.2em", color: "#8a7055" }} className="mb-4">
              联系方式
            </p>
            {[
              { label: "微信", val: "VitaKorea_Official" },
              { label: "邮箱", val: "hello@vitakorea.com" },
              { label: "电话", val: "+82 10-1234-5678" },
              { label: "地址", val: "首尔市麻浦区" },
            ].map((item, i) => (
              <div key={i} className="mb-2">
                <span style={{ fontFamily: SANS, fontSize: "0.6rem", color: "#5a4530" }}>{item.label}：</span>
                <span style={{ fontFamily: SANS, fontSize: "0.7rem", color: "#7a6248" }}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#3e2f20] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: SANS, fontSize: "0.6rem", color: "#5a4530" }}>
            © 2025 VITA KOREA. 保留所有权利。
          </p>
          <p style={{ fontFamily: SANS, fontSize: "0.6rem", color: "#5a4530" }}>
            专为在韩中国旅行者提供专属健康旅行服务
          </p>
        </div>
      </div>
    </footer>
  );
}
