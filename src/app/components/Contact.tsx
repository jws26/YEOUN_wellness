import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { DateRangePicker } from "./DateRangePicker";

const bgImage =
  "https://images.unsplash.com/photo-1602934198239-ff2e47d124f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKZWp1JTIwaXNsYW5kJTIwS29yZWElMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0NzYxNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [formData, setFormData] = useState({
    name: "",
    wechat: "",
    program: c.options[0].value,
    dates: "",
    guests: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDatesChange = (value: string) => {
    setFormData((prev) => ({ ...prev, dates: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 px-8 md:px-16 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="Jeju" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <p
            className="text-amber-400 text-sm tracking-widest mb-3"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {c.tagline}
          </p>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              lineHeight: 1.3,
              whiteSpace: "pre-line",
            }}
          >
            {c.title}
          </h2>
          <p
            className="text-white/60 leading-relaxed text-sm mb-8"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {c.desc}
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            {c.contactItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <div>
                  <p
                    className="text-white/40 text-xs"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✨</div>
              <p
                className="text-amber-400 text-lg mb-2"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                {c.successTitle}
              </p>
              <p
                className="text-white/60 text-sm"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {c.successDesc}
              </p>
            </div>
          ) : (
            <>
              <p
                className="text-white/60 text-sm mb-6"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {c.formTitle}
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={c.namePlaceholder}
                  required
                  className="bg-transparent border-b border-white/20 text-white placeholder:text-white/30 py-2 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                />
                <input
                  type="text"
                  name="wechat"
                  value={formData.wechat}
                  onChange={handleChange}
                  placeholder={c.wechatPlaceholder}
                  required
                  className="bg-transparent border-b border-white/20 text-white placeholder:text-white/30 py-2 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                />
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="bg-black/60 border-b border-white/20 text-white/70 py-2 text-sm focus:outline-none focus:border-amber-400 transition-colors appearance-none cursor-pointer"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {c.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                {/* Date Range Picker */}
                <DateRangePicker
                  value={formData.dates}
                  onChange={handleDatesChange}
                  placeholder={c.datesPlaceholder}
                />

                <input
                  type="text"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder={c.guestsPlaceholder}
                  className="bg-transparent border-b border-white/20 text-white placeholder:text-white/30 py-2 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={c.messagePlaceholder}
                  rows={3}
                  className="bg-transparent border-b border-white/20 text-white placeholder:text-white/30 py-2 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                />
                <button
                  type="submit"
                  className="bg-white text-black py-3 rounded text-sm mt-2 hover:bg-amber-400 transition-colors duration-300"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {c.submit}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
