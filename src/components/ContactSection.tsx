import React from 'react';
import FadeIn from './FadeIn';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const tc = t.contact;

  return (
    <footer id="contact" className="relative z-40 bg-[#0C0C0C] overflow-hidden">
      {/* Brand-color ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 120%, rgba(182, 0, 168, 0.12) 0%, rgba(118, 33, 176, 0.08) 40%, transparent 70%)',
        }}
      />

      {/* Main contact area */}
      <div className="relative z-10 flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 pt-32 sm:pt-40 md:pt-52 lg:pt-64 pb-20 sm:pb-28 md:pb-36 w-full">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(2.5rem,9vw,110px)] mb-8 sm:mb-10 md:mb-12">
            {tc.headline}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p className="text-[#D7E2EA] opacity-60 text-center font-light text-[clamp(0.9rem,1.8vw,1.2rem)] max-w-md mb-10 sm:mb-12">
            {tc.subtext}
          </p>
        </FadeIn>

        {/* Primary CTA */}
        <FadeIn delay={0.2} y={20}>
          <a
            href="mailto:bristinbiju123@gmail.com"
            id="contact-email-cta"
            className="relative inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white px-10 py-4 sm:px-14 sm:py-5 text-sm sm:text-base overflow-hidden transition-transform hover:scale-105 active:scale-95 mb-4"
            style={{
              background:
                'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow:
                '0px 4px 24px rgba(181, 1, 167, 0.35), inset 4px 4px 12px #7721B1',
            }}
          >
            <div
              className="absolute inset-0 rounded-full border-2 border-white pointer-events-none"
              style={{ margin: '3px' }}
            />
            <span className="relative z-10">{tc.cta}</span>
          </a>
        </FadeIn>

        {/* Visible email address */}
        <FadeIn delay={0.3} y={10}>
          <a
            href="mailto:bristinbiju123@gmail.com"
            className="text-[#D7E2EA] opacity-40 hover:opacity-80 transition-opacity text-sm sm:text-base tracking-wide mt-2 mb-14 sm:mb-16"
          >
            {tc.emailLabel}
          </a>
        </FadeIn>

        {/* Social links */}
        <FadeIn delay={0.35} y={10}>
          <div className="flex gap-6 items-center mb-8">
            <a
              href="https://www.linkedin.com/in/bristin-biju-832a4a1a6"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B600A8] rounded-full p-1"
              aria-label="Bristin Biju on LinkedIn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/bristinbiju/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B600A8] rounded-full p-1"
              aria-label="Bristin Biju on Instagram"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.behance.net/bristinbiju"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B600A8] rounded-full p-1"
              aria-label="Bristin Biju on Behance"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 5H10.5C12.433 5 14 6.567 14 8.5C14 9.619 13.475 10.613 12.643 11.233C13.829 11.666 14.667 12.835 14.667 14.167C14.667 16.284 12.951 18 10.833 18H6V5Z" />
                <path d="M6 11.5H10.5" />
                <path d="M16 8H21" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default ContactSection;
