import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 font-medium text-sm md:text-lg lg:text-[1.4rem] tracking-wider text-[#D7E2EA]" aria-label="Change language">
      <button 
        onClick={() => setLanguage('en')}
        className={`transition-opacity duration-300 min-w-[32px] md:min-w-[44px] h-[32px] md:h-[44px] flex items-center justify-center ${language === 'en' ? 'opacity-100 font-bold' : 'opacity-40 hover:opacity-70'}`}
        aria-label="Switch to English"
      >
        {language === 'en' ? '[EN]' : 'EN'}
      </button>
      <span className="opacity-40">/</span>
      <button 
        onClick={() => setLanguage('fr')}
        className={`transition-opacity duration-300 min-w-[32px] md:min-w-[44px] h-[32px] md:h-[44px] flex items-center justify-center ${language === 'fr' ? 'opacity-100 font-bold' : 'opacity-40 hover:opacity-70'}`}
        aria-label="Passer en français"
      >
        {language === 'fr' ? '[FR]' : 'FR'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
