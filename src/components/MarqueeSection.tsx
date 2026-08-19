import React, { useEffect, useRef, useState } from 'react';

const gifs = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

const row1Original = gifs.slice(0, 11);
const row2Original = gifs.slice(11);

// Tripled arrays for seamless scrolling illusion
const row1 = [...row1Original, ...row1Original, ...row1Original];
const row2 = [...row2Original, ...row2Original, ...row2Original];

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      
      // Calculate offset based on scroll position relative to the section
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full flex flex-col gap-3">
      {/* Row 1 - Moves RIGHT */}
      <div 
        className="flex gap-3 whitespace-nowrap min-w-max"
        style={{ 
          transform: `translate3d(${offset - 200}px, 0, 0)`,
          willChange: 'transform'
        }}
      >
        {row1.map((src, idx) => (
          <img 
            key={`r1-${idx}`} 
            src={src} 
            loading="lazy" 
            alt="Portfolio preview" 
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" 
          />
        ))}
      </div>

      {/* Row 2 - Moves LEFT */}
      <div 
        className="flex gap-3 whitespace-nowrap min-w-max"
        style={{ 
          transform: `translate3d(${-(offset - 200)}px, 0, 0)`,
          willChange: 'transform'
        }}
      >
        {row2.map((src, idx) => (
          <img 
            key={`r2-${idx}`} 
            src={src} 
            loading="lazy" 
            alt="Portfolio preview" 
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" 
          />
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
