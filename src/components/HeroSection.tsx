import React from 'react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Split the greeting on \n — enables two-line centred layout for FR
  const greetingLines = t.hero.greeting.split('\n');
  const isMultiLine = greetingLines.length > 1;

  return (
    <section className="relative h-screen flex flex-col overflow-x-clip w-full" aria-label="Hero">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <div className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8">
          <nav
            aria-label="Main navigation"
            className="flex gap-4 sm:gap-6 md:gap-10 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]"
          >
            {[
              { id: 'about', label: t.nav.about },
              { id: 'services', label: t.nav.services },
              { id: 'projects', label: t.nav.projects },
              { id: 'contact', label: t.nav.contact },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="transition-opacity duration-200 hover:opacity-70 whitespace-nowrap focus-visible:opacity-70"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <LanguageSwitcher />
        </div>
      </FadeIn>

      {/* Main Content Flex Fill */}
      <div className="flex-1 flex flex-col justify-between w-full relative z-10 px-5 sm:px-8 md:px-10 pt-6 sm:pt-4 md:-mt-5">

        {/* H1 Heading */}
        <div className="overflow-hidden w-full">
          <FadeIn delay={0.15} y={40} className="w-full">
            {isMultiLine ? (
              /* FR — two-line centred layout */
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-center text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw]">
                {greetingLines.map((line, idx) => (
                  <span key={idx} className="block whitespace-nowrap">{line}</span>
                ))}
              </h1>
            ) : (
              /* EN — single-line full-width layout (unchanged) */
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
                {t.hero.greeting}
              </h1>
            )}
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 w-full relative z-20">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[220px] sm:max-w-[320px] md:max-w-[420px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
              {t.hero.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait — LCP image, load eagerly with high priority */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3}>
          <img
            src="/images/hero-asset-new.png"
            alt="Bristin Biju — Graphic & Brand Designer"
            width={520}
            height={780}
            fetchPriority="high"
            decoding="sync"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain pointer-events-none"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
};

export default HeroSection;
