import { Link } from 'react-router-dom';
import { useLanguage, type Language } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

const langs: { code: Language; label: string; aria: string }[] = [
  { code: 'en', label: 'EN', aria: 'Switch to English' },
  { code: 'fr', label: 'FR', aria: 'Passer en français' },
];

/** New site header (design system). Used on case studies now, and on the home page from Stage 3. */
export default function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  const links = [
    { to: '/#projects', label: t.projects, mobile: true },
    { to: '/#about', label: t.about, mobile: false },
    { to: '/#contact', label: t.contact, mobile: false },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-surface-line bg-surface/85 backdrop-blur-md">
      <div className="content-wrap flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-fg">
          Bristin Biju
        </Link>

        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-8">
          <ul className="flex items-center gap-5 sm:gap-8 text-sm font-medium">
            {links.map((l) => (
              <li key={l.to} className={l.mobile ? '' : 'hidden sm:block'}>
                <Link to={l.to} className="text-fg-muted transition-colors hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
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
