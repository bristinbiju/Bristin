import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export default function SiteFooter() {
  const { language, lp } = useLanguage();
  const t = translations[language];

  return (
    <footer className="border-t border-surface-line">
      <div className="content-wrap flex flex-col gap-4 py-10 text-sm text-fg-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
        <ul className="flex flex-wrap gap-6">
          <li><Link className="hover:text-fg" to={lp('/#projects')}>{t.nav.projects}</Link></li>
          <li><Link className="hover:text-fg" to={lp('/#about')}>{t.nav.about}</Link></li>
          <li><a className="hover:text-fg" href={`mailto:${t.contact.emailLabel}`}>{t.contact.emailLabel}</a></li>
        </ul>
      </div>
    </footer>
  );
}
