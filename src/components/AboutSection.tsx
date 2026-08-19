import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 w-full overflow-hidden">
      {/* Decorative 3D Images */}
      {/* Top Left - Moon */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="Moon icon" 
          className="w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none" 
        />
      </FadeIn>

      {/* Bottom Left - 3D Object */}
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="3D object" 
          className="w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none" 
        />
      </FadeIn>

      {/* Top Right - Lego */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="Lego icon" 
          className="w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none" 
        />
      </FadeIn>

      {/* Bottom Right - 3D Group */}
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="3D Group" 
          className="w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none" 
        />
      </FadeIn>

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

        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
