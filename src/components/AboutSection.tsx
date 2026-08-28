import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  const stats = [
    { value: '4+', label: language === 'fr' ? "Ans d'expérience" : 'Years experience' },
    { value: '3', label: 'Continents' },
    { value: '5', label: language === 'fr' ? 'Disciplines' : 'Disciplines' },
  ];

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 w-full overflow-hidden scroll-mt-20">
      {/* Brand-color ambient glows */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B600A8 0%, transparent 70%)', transform: 'translate(-40%, -40%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7621B0 0%, transparent 70%)', transform: 'translate(40%, 40%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[30%] right-[5%] w-[200px] h-[200px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #BE4C00 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            {t.title}
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center mt-10 sm:mt-14 md:mt-16 w-full">
          <AnimatedText
            text={t.description}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[700px] text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        {/* Credibility stats */}
        <FadeIn delay={0.2} y={20} className="w-full">
          <div className="flex flex-row justify-center gap-8 sm:gap-16 md:gap-20 mt-14 sm:mt-16 md:mt-20 w-full">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span
                  className="font-black text-[clamp(2rem,6vw,4.5rem)] leading-none"
                  style={{
                    background: 'linear-gradient(123deg, #B600A8 0%, #7621B0 55%, #BE4C00 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-[#D7E2EA] text-xs sm:text-sm uppercase tracking-widest opacity-60 font-light text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CTAs */}
        <div className="mt-14 sm:mt-16 md:mt-20 flex flex-col sm:flex-row gap-4 items-center">
          <FadeIn delay={0.3} y={20}>
            <a
              href="#projects"
              className="relative inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base border-2 border-[#D7E2EA]/30 hover:border-[#D7E2EA]/70 transition-colors duration-300"
            >
              {language === 'fr' ? 'Voir mes projets' : 'View Work'}
            </a>
          </FadeIn>
          <FadeIn delay={0.4} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
