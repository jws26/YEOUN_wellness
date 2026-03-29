import { useState } from "react";

const SERIF = "'Cormorant Garamond', serif";
const SANS = "'Noto Sans SC', sans-serif";
const SERIF_CN = "'Noto Serif SC', serif";

const yogaImg = "https://images.unsplash.com/photo-1616569671466-97df7f217ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMGJlYWNoJTIwS29yZWElMjBvdXRkb29yfGVufDF8fHx8MTc3NDc2MjQwNnww&ixlib=rb-4.1.0&q=80&w=600";

export function ContactNew() {
  const [form, setForm] = useState({ name: "", wechat: "", program: "瑜伽 & 冥想", date: "", people: "2", msg: "" });
  const [done, setDone] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => { e.preventDefault(); setDone(true); };

  return (
    <section id="contact" className="bg-[#ede7d9] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p style={{ fontFamily: SANS, fontSize: "0.7rem", letterSpacing: "0.25em", color: "#8a7055" }} className="mb-2">
              BOOK A SESSION
            </p>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#2e2218", lineHeight: 1.2 }} className="mb-6">
              开启您的<br />健康旅行之旅
            </h2>

            <div className="relative overflow-hidden rounded-sm mb-6" style={{ height: "300px" }}>
              <img src={yogaImg} alt="book a session" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e2218]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p style={{ fontFamily: SERIF_CN, fontSize: "1rem", color: "white" }}>身体与心灵，共同出发</p>
                <p style={{ fontFamily: SANS, fontSize: "0.65rem", color: "rgba(255,255,255,0.7)" }} className="mt-1">
                  提交预约后，我们将在24小时内通过微信与您联系
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { icon: "💬", label: "微信", val: "VitaKorea_Official" },
                { icon: "📧", label: "邮箱", val: "hello@vitakorea.com" },
                { icon: "📍", label: "总部", val: "首尔市麻浦区" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: SANS, fontSize: "0.6rem", color: "#9a8068", letterSpacing: "0.05em" }}>{item.label}</p>
                    <p style={{ fontFamily: SANS, fontSize: "0.75rem", color: "#4a3828" }}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#f9f5ef] border border-[#d6c9b0] rounded-sm p-8">
            {done ? (
              <div className="text-center py-12">
                <p style={{ fontFamily: SERIF, fontSize: "2.5rem", color: "#7a4a32" }}>✦</p>
                <p style={{ fontFamily: SERIF_CN, fontSize: "1.2rem", color: "#2e2218" }} className="mt-4 mb-2">预约成功！</p>
                <p style={{ fontFamily: SANS, fontSize: "0.72rem", color: "#8a7055", lineHeight: 2 }}>
                  感谢您的关注。<br />我们将在24小时内通过微信联系您。
                </p>
              </div>
            ) : (
              <>
                <p style={{ fontFamily: SANS, fontSize: "0.7rem", color: "#8a7055", letterSpacing: "0.1em" }} className="mb-6">
                  填写预约信息
                </p>
                <form onSubmit={submit} className="flex flex-col gap-5">
                  {[
                    { name: "name", placeholder: "您的姓名", type: "text", required: true },
                    { name: "wechat", placeholder: "微信号", type: "text", required: true },
                    { name: "date", placeholder: "出行日期（如：2025年6月）", type: "text", required: false },
                    { name: "people", placeholder: "出行人数", type: "text", required: false },
                  ].map((f) => (
                    <div key={f.name} className="border-b border-[#c9b89a] pb-1">
                      <input
                        name={f.name}
                        type={f.type}
                        required={f.required}
                        placeholder={f.placeholder}
                        value={form[f.name as keyof typeof form]}
                        onChange={handle}
                        className="w-full bg-transparent placeholder:text-[#c0ad96] text-[#3a2e24] text-sm focus:outline-none"
                        style={{ fontFamily: SANS }}
                      />
                    </div>
                  ))}

                  <div className="border-b border-[#c9b89a] pb-1">
                    <select
                      name="program"
                      value={form.program}
                      onChange={handle}
                      className="w-full bg-transparent text-[#6b5740] text-sm focus:outline-none appearance-none cursor-pointer"
                      style={{ fontFamily: SANS }}
                    >
                      {["瑜伽 & 冥想", "普拉提 & 伸展", "健身 & 力量训练", "登山 & 户外运动", "综合套餐（多课程）"].map(opt => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="border-b border-[#c9b89a] pb-1">
                    <textarea
                      name="msg"
                      rows={3}
                      placeholder="特别需求或留言"
                      value={form.msg}
                      onChange={handle}
                      className="w-full bg-transparent placeholder:text-[#c0ad96] text-[#3a2e24] text-sm focus:outline-none resize-none"
                      style={{ fontFamily: SANS }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#7a4a32] text-[#f5ede0] py-3.5 text-xs tracking-widest mt-1 hover:bg-[#5e3520] transition-colors duration-300"
                    style={{ fontFamily: SANS }}
                  >
                    发送预约申请
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
