import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../site/Reveal';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import type { Project } from '../../data/projects';

export function Services({ projects }: { projects: Project[] }) {
  const { language, lp } = useLanguage();
  const t = translations[language].home.services;
  const nameOf = (slug: string) => projects.find((p) => p.slug === slug)?.name;

  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-surface-line">
      <div className="content-wrap section-pad">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{t.eyebrow}</p>
          <h2 id="services-title" className="mt-4 max-w-[20ch] font-display text-h2 font-bold text-fg [text-wrap:balance]">
            {t.title}
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {t.items.map((s, i) => {
            const project = nameOf(s.slug);
            return (
              <Reveal as="li" key={s.name} delay={i * 0.08} className="flex flex-col rounded-card border border-surface-line bg-surface-raised p-6 md:p-8">
                <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
                <h3 className="mt-6 font-display text-h3 font-bold text-fg">{s.name}</h3>
                <p className="mt-3 flex-1 text-fg-muted">{s.desc}</p>
                {project && (
                  <Link
                    to={lp(`/work/${s.slug}`)}
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-fg hover:text-accent"
                  >
                    {t.seeProject} {project}
                    <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                  </Link>
                )}
              </Reveal>
            );
          })}
        </ul>
        <p className="mt-8 text-sm text-fg-muted">{t.also}</p>
      </div>
    </section>
  );
}

/** Light section: the one place the paper surface appears on the home page. */
export function Process() {
  const { language } = useLanguage();
  const t = translations[language].home.process;
  return (
    <section id="process" aria-labelledby="process-title" className="bg-paper text-ink">
      <div className="content-wrap section-pad">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink">{t.eyebrow}</p>
          <h2 id="process-title" className="mt-4 font-display text-h2 font-bold [text-wrap:balance]">{t.title}</h2>
        </Reveal>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-8">
          {t.steps.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 0.08} className="border-t-2 border-ink pt-6">
              <span className="font-display text-sm font-bold text-accent-ink">0{i + 1}</span>
              <h3 className="mt-3 font-display text-xl font-bold">{s.name}</h3>
              <p className="mt-2 text-ink-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
