import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import type { Project } from '../../data/projects';

/** Hero: positioning line, two actions, three featured thumbnails. */
export default function Hero({ featured }: { featured: Project[] }) {
  const { language } = useLanguage();
  const reduce = useReducedMotion();
  const t = translations[language].home.hero;
  const thumbs = featured.slice(0, 3);

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="top" aria-labelledby="hero-title" className="content-wrap pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="grid-12 items-center gap-y-12">
        <div className="col-span-12 lg:col-span-7">
          <motion.p {...enter(0)} className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {t.eyebrow}
          </motion.p>
          <motion.h1
            {...enter(0.08)}
            id="hero-title"
            className="mt-5 font-display text-h1 font-bold tracking-tight text-fg [text-wrap:balance]"
          >
            {t.titleBefore}
            <span className="text-accent">{t.titleAccent}</span>
            {t.titleAfter}
          </motion.h1>
          <motion.p {...enter(0.16)} className="mt-6 max-w-[52ch] text-lead text-fg-muted">
            {t.lead}
          </motion.p>
          <motion.div {...enter(0.24)} className="mt-10 flex flex-wrap gap-3">
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
          </motion.div>
        </div>

        {/* Three featured projects: one tall + two stacked */}
        <motion.ul
          {...enter(0.3)}
          aria-label="Featured projects"
          className="col-span-12 grid grid-cols-3 gap-3 lg:col-span-5 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4"
        >
          {thumbs.map((p, i) => (
            <li key={p.slug} className={i === 0 ? 'lg:row-span-2' : ''}>
              <Link
                to={`/work/${p.slug}`}
                className="group relative block h-full overflow-hidden rounded-card bg-surface-raised"
              >
                <img
                  src={p.cover}
                  alt={`${p.name}: ${p.category}`}
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                  decoding="async"
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
        </motion.ul>
      </div>
    </section>
  );
}
