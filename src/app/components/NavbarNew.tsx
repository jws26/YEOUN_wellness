import { useState } from "react";
import { Menu, X } from "lucide-react";

const FONT_SANS = "'Noto Sans SC', sans-serif";

export function NavbarNew() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "课程项目", href: "#programs" },
    { label: "旅行体验", href: "#travel" },
    { label: "专属空间", href: "#studio" },
    { label: "我们的教练", href: "#team" },
    { label: "预约咨询", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#f2ece0] border-b border-[#d6c9b0]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, letterSpacing: "0.1em", color: "#3a2e24" }}>
            VITA KOREA
          </p>
          <p style={{ fontFamily: FONT_SANS, fontSize: "0.6rem", letterSpacing: "0.25em", color: "#8a7055" }}>
            健康 · 旅行 · 韩国
          </p>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.slice(0, -1).map((l) => (
            <a key={l.label} href={l.href}
              style={{ fontFamily: FONT_SANS, fontSize: "0.78rem", color: "#6b5740", letterSpacing: "0.05em" }}
              className="hover:text-[#3a2e24] transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact"
          className="hidden md:inline-block bg-[#7a4a32] text-[#f5ede0] text-xs px-6 py-2.5 rounded-sm hover:bg-[#5e3520] transition-colors duration-300"
          style={{ fontFamily: FONT_SANS, letterSpacing: "0.08em" }}>
          预约体验
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#3a2e24]" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#f2ece0] border-t border-[#d6c9b0] flex flex-col items-center gap-5 py-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: FONT_SANS, fontSize: "0.9rem", color: "#6b5740" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
