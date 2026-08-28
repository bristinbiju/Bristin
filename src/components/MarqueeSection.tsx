import React, { useEffect, useRef, useState } from 'react';

// Bristin's own project images — replacing the third-party motionsites.ai GIFs
const projectImages: { src: string; alt: string }[] = [
  { src: '/images/projects/liverpool/liverpool-01.png', alt: 'You Can — World Cancer Day campaign' },
  { src: '/images/projects/liverpool/liverpool-02.png', alt: 'You Can — World Cancer Day campaign spread' },
  { src: '/images/projects/liverpool/liverpool-05.png', alt: 'You Can — campaign poster design' },
  { src: '/images/projects/cowary/Gvlobal stage!.jpg', alt: 'Cowary Farms — social media design' },
  { src: '/images/projects/cowary/Goat Farming.jpg', alt: 'Cowary Farms — goat farming post' },
  { src: '/images/projects/cowary/A Day on the Farm.jpg', alt: 'Cowary Farms — a day on the farm post' },
  { src: '/images/projects/liverpool-social/Annual Health Check 02.jpg', alt: 'Liverpool — annual health check post' },
  { src: '/images/projects/liverpool-social/Healthy Heart.jpg', alt: 'Liverpool — healthy heart awareness post' },
  { src: '/images/projects/liverpool-social/World Brain Day.png', alt: 'Liverpool — World Brain Day post' },
  { src: '/images/projects/devine-social/Pure. Natural. Divine.jpg', alt: 'Devine — pure natural divine product post' },
  { src: '/images/projects/devine-social/Your Health.jpg', alt: 'Devine — your health social post' },
  { src: '/images/projects/gba-designs/01.jpg', alt: 'GBA — brand identity design' },
  { src: '/images/projects/gba-designs/02.jpg', alt: 'GBA — brand identity application' },
  { src: '/images/projects/gba-designs/AIM Congress 2025 01.jpg', alt: 'GBA — AIM Congress 2025 design' },
  { src: '/images/projects/javvis-designs/01.jpg', alt: 'Javvis — brand identity' },
  { src: '/images/projects/javvis-designs/03.jpg', alt: 'Javvis — brand identity mockup' },
  { src: '/images/projects/javvis-designs/Artboard 1.jpg', alt: 'Javvis — brand system overview' },
  { src: '/images/projects/joyce4life-designs/01.jpg', alt: 'Joyce4Life — brand identity' },
  { src: '/images/projects/joyce4life-designs/03.jpg', alt: 'Joyce4Life — brand applications' },
  { src: '/images/projects/forti-designs/Fufu 01.jpg', alt: 'Forti — packaging design' },
  { src: '/images/projects/forti-designs/Pakage Design 02.jpg', alt: 'Forti — package design mockup' },
  { src: '/images/projects/forti-designs/Packaging Mockup.jpg', alt: 'Forti — packaging mockup presentation' },
];

const row1Original = projectImages.slice(0, 11);
const row2Original = projectImages.slice(11);

// Tripled arrays for seamless scrolling illusion
const row1 = [...row1Original, ...row1Original, ...row1Original];
const row2 = [...row2Original, ...row2Original, ...row2Original];

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  // Respect prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  useEffect(() => {
    if (prefersReducedMotion) return;

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
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full flex flex-col gap-3" aria-label="Portfolio work showcase">
      {/* Row 1 - Moves RIGHT */}
      <div
        className="flex gap-3 whitespace-nowrap min-w-max"
        style={{
          transform: prefersReducedMotion ? 'none' : `translate3d(${offset - 200}px, 0, 0)`,
          willChange: prefersReducedMotion ? 'auto' : 'transform',
        }}
      >
        {row1.map((item, idx) => (
          <img
            key={`r1-${idx}`}
            src={item.src}
            loading="lazy"
            decoding="async"
            alt={item.alt}
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
          />
        ))}
      </div>

      {/* Row 2 - Moves LEFT */}
      <div
        className="flex gap-3 whitespace-nowrap min-w-max"
        style={{
          transform: prefersReducedMotion ? 'none' : `translate3d(${-(offset - 200)}px, 0, 0)`,
          willChange: prefersReducedMotion ? 'auto' : 'transform',
        }}
      >
        {row2.map((item, idx) => (
          <img
            key={`r2-${idx}`}
            src={item.src}
            loading="lazy"
            decoding="async"
            alt={item.alt}
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
          />
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
