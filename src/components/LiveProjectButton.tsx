import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface LiveProjectButtonProps {
  className?: string;
  link?: string;
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ className = '', link }) => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  if (!link) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {t.liveProject}
    </a>
  );
};

export default LiveProjectButton;
