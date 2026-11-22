import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import type { Project } from '../../data/projects';
import Img from '../site/Img';

/**
 * Hero: positioning line, two actions, three featured thumbnails.
 * No entrance animation on purpose: it is pre-rendered and above the fold, so
 * it paints straight from the HTML (fastest LCP, nothing to wait for).
 */
export default function Hero({ featured }: { featured: Project[] }) {
  const { language } = useLanguage();
  const t = translations[language].home.hero;
  const thumbs = featured.slice(0, 3);

  return (
    <section id="top" aria-labelledby="hero-title" className="content-wrap pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="grid-12 items-center gap-y-12">
        <div className="col-span-12 lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{t.eyebrow}</p>
          <h1
            id="hero-title"
            className="mt-5 font-display text-h1 font-bold tracking-tight text-fg [text-wrap:balance]"
          >
            {t.titleBefore}
            <span className="text-accent">{t.titleAccent}</span>
            {t.titleAfter}
          </h1>
          <p className="mt-6 max-w-[52ch] text-lead text-fg-muted">
            {t.lead}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-fg transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              {t.primary} <ArrowDown size={18} aria-hidden />
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-surface-line px-6 py-3 font-semibold text-fg transition-colors hover:border-fg-muted"
            >
              {t.secondary} <ArrowUpRight size={18} aria-hidden />
            </Link>
          </div>
        </div>

        {/* Three featured projects: one tall + two stacked */}
        <ul
          aria-label="Featured projects"
          className="col-span-12 grid grid-cols-3 gap-3 lg:col-span-5 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4"
        >
          {thumbs.map((p, i) => (
            <li key={p.slug} className={i === 0 ? 'lg:row-span-2' : ''}>
              <Link
                to={`/work/${p.slug}`}
                className="group relative block h-full overflow-hidden rounded-card bg-surface-raised"
              >
                <Img
                  src={p.cover}
                  alt={`${p.name}: ${p.category}`}
                  priority={i === 0}
                  loading="eager"
                  sizes="(min-width: 1024px) 22vw, 33vw"
                  className={`h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04] motion-reduce:transition-none ${
                    i === 0 ? 'aspect-[3/4] lg:aspect-auto' : 'aspect-[3/4] lg:aspect-[4/3]'
                  }`}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface/90 to-transparent px-3 pb-2.5 pt-8 text-xs font-semibold text-fg sm:text-sm">
                  {p.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
