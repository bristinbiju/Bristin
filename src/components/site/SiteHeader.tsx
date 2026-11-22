import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, type Language } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { scrollToSection } from '../ScrollManager';

const langs: { code: Language; label: string; aria: string }[] = [
  { code: 'en', label: 'EN', aria: 'Switch to English' },
  { code: 'fr', label: 'FR', aria: 'Passer en français' },
];

/** Which nav item each home-page section belongs to. */
const sectionToNav: Record<string, string> = {
  work: 'work',
  projects: 'work',
  services: 'about',
  process: 'about',
  about: 'about',
  contact: 'contact',
};

/** Tracks the section in the middle of the viewport on the home page. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    const sections = Object.keys(sectionToNav)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(sectionToNav[hit.target.id]);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    const onTop = () => window.scrollY < 200 && setActive(null);
    window.addEventListener('scroll', onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onTop);
    };
  }, [enabled]);
  return active;
}

/** Sticky site header used on every page. */
export default function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const { pathname, hash } = useLocation();
  const t = translations[language].nav;
  const onHome = pathname === '/';
  const active = useActiveSection(onHome);

  const links = [
    { id: 'work', label: t.projects, mobile: true },
    { id: 'about', label: t.about, mobile: false },
    { id: 'contact', label: t.contact, mobile: true },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-surface-line bg-surface/85 backdrop-blur-md">
      <div className="content-wrap flex h-16 items-center justify-between gap-3">
        <Link
          to="/"
          onClick={() => onHome && !hash && window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-lg font-bold tracking-tight text-fg"
        >
          Bristin Biju
        </Link>

        <nav aria-label="Main" className="flex items-center gap-4 sm:gap-8">
          <ul className="flex items-center gap-4 sm:gap-8 text-sm font-medium">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id} className={l.mobile ? '' : 'hidden sm:block'}>
                  <Link
                    to={`/#${l.id}`}
                    // Clicking the link for the hash already in the URL would do nothing, so scroll manually.
                    onClick={() => onHome && hash === `#${l.id}` && scrollToSection(l.id)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent after:transition-transform after:duration-300 ${
                      isActive ? 'text-fg after:scale-x-100' : 'text-fg-muted hover:text-fg after:scale-x-0'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div role="group" aria-label="Language" className="flex items-center rounded-full border border-surface-line p-0.5 text-xs font-semibold">
            {langs.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLanguage(l.code)}
                aria-pressed={language === l.code}
                aria-label={l.aria}
                className={`min-h-8 min-w-9 rounded-full px-2 transition-colors ${
                  language === l.code ? 'bg-fg text-surface' : 'text-fg-muted hover:text-fg'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
