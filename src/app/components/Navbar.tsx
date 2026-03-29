import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { type Lang } from "../i18n/translations";

const LANG_LABELS: { lang: Lang; label: string }[] = [
  { lang: "zh", label: "中文" },
  { lang: "ko", label: "한국어" },
  { lang: "en", label: "EN" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const navLinks = [
    { label: t.navbar.about, href: "#about" },
    { label: t.navbar.fitness, href: "#fitness" },
    { label: t.navbar.itinerary, href: "#itinerary" },
    { label: t.navbar.contact, href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between"
      style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 100%)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 text-white">
        <Globe size={20} className="text-amber-400" />
        <span
          style={{ fontFamily: "'Noto Serif SC', serif", letterSpacing: "0.1em" }}
          className="text-white tracking-widest uppercase text-sm"
        >
          YEOUN
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-white/80 hover:text-white text-sm transition-colors duration-200"
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right: Language Switcher + Book Button */}
      <div className="hidden md:flex items-center gap-4">
        {/* Language switcher */}
        <div className="flex items-center gap-1 border border-white/20 rounded-full px-2 py-1">
          {LANG_LABELS.map(({ lang: l, label }, i) => (
            <span key={l} className="flex items-center">
              <button
                onClick={() => setLang(l)}
                className={`text-xs px-2 py-0.5 rounded-full transition-all duration-200 ${
                  lang === l
                    ? "bg-amber-400 text-black"
                    : "text-white/50 hover:text-white"
                }`}
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {label}
              </button>
              {i < LANG_LABELS.length - 1 && (
                <span className="text-white/20 text-xs">|</span>
              )}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="border border-white/60 text-white text-sm px-5 py-1.5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        >
          {t.navbar.book}
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-black/95 flex flex-col items-center gap-6 py-8"
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-base transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile language switcher */}
          <div className="flex items-center gap-1 border border-white/20 rounded-full px-2 py-1">
            {LANG_LABELS.map(({ lang: l, label }, i) => (
              <span key={l} className="flex items-center">
                <button
                  onClick={() => { setLang(l); setMenuOpen(false); }}
                  className={`text-xs px-2 py-0.5 rounded-full transition-all duration-200 ${
                    lang === l
                      ? "bg-amber-400 text-black"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {label}
                </button>
                {i < LANG_LABELS.length - 1 && (
                  <span className="text-white/20 text-xs">|</span>
                )}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="border border-white/60 text-white text-sm px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all"
          >
            {t.navbar.book}
          </a>
        </div>
      )}
    </nav>
  );
}
