import React from 'react';
import FadeIn from './FadeIn';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section id="services" className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <FadeIn delay={0} y={40} className="w-full flex justify-center">
        <h2 className="font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          {t.title}
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col w-full">
        {t.items.map((service, i) => (
          <FadeIn 
            key={`0${i + 1}`} 
            delay={i * 0.1} 
            y={30} 
            className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] first:border-t"
          >
            {/* Number on left */}
            <div className="font-black text-[clamp(3rem,10vw,140px)] leading-none text-[#0C0C0C] shrink-0 md:w-32 lg:w-40">
              {`0${i + 1}`}
            </div>

            {/* Content stacked vertically */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-tight">
                {service.name}
              </h3>
              <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
