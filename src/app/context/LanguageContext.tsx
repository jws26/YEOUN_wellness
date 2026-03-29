import { createContext, useContext, useState, type ReactNode } from "react";
import { type Lang, translations, type Translations } from "../i18n/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const defaultValue: LanguageContextType = {
  lang: "zh",
  setLang: () => {},
  t: translations["zh"] as Translations,
};

const LanguageContext = createContext<LanguageContextType>(defaultValue);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");
  const t = translations[lang] as Translations;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}