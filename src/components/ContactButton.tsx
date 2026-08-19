import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ContactButton: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contactButton;

  return (
    <a
      href="mailto:bristinbiju123@gmail.com"
      className="relative inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base overflow-hidden transition-transform hover:scale-105 active:scale-95"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
      }}
    >
      <div 
        className="absolute inset-0 rounded-full border-2 border-white pointer-events-none" 
        style={{ margin: '3px' }} 
      />
      <span className="relative z-10">{t.text}</span>
    </a>
  );
};

export default ContactButton;
