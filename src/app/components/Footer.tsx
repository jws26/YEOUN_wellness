import { Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-[#080808] border-t border-white/10 px-8 md:px-16 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Globe size={18} className="text-amber-400" />
          <span
            className="text-white text-sm tracking-widest uppercase"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            YEOUN
          </span>
        </div>

        {/* Nav */}
        <div className="flex gap-6">
          {f.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/40 hover:text-white text-sm transition-colors duration-200"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Book */}
        <a
          href="#contact"
          className="border border-white/30 text-white text-sm px-5 py-1.5 rounded-full hover:bg-white hover:text-black transition-all"
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        >
          {f.book}
        </a>
      </div>

      <div className="max-w-5xl mx-auto mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-white/20 text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
          {f.copyright}
        </p>
        <p className="text-white/20 text-xs" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
          {f.tagline}
        </p>
      </div>
    </footer>
  );
}
