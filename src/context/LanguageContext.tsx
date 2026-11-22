import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { langFromPath, localizePath, stripLang, type Language } from '../lib/locale';

export type { Language } from '../lib/locale';

interface LanguageContextType {
  /** Current language, read from the URL (/fr/... = French). */
  language: Language;
  /** Turns a language-neutral path ('/', '/#work', '/work/gba') into one for the current language. */
  lp: (path: string) => string;
  /** The current page in another language (keeps the #section). */
  pathFor: (lang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname, hash } = useLocation();
  const language = langFromPath(pathname);

  // Keep <html lang> in sync on client-side navigation (pre-rendered pages already have it).
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextType = {
    language,
    lp: (path) => localizePath(path, language),
    pathFor: (lang) => {
      const neutral = stripLang(pathname);
      const target = localizePath(neutral, lang);
      return hash ? `${target}${hash}` : target;
    },
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
