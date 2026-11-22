import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../site/Reveal';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import { filledList, isFilled } from '../../data/content';
import type { CategoryKey, Project } from '../../data/projects';

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{children}</p>
);

/* ---------- Selected work: large cards ---------- */

function FeatureCard({ project, large }: { project: Project; large: boolean }) {
  const { language } = useLanguage();
  const t = translations[language];
  const x = project.text;
  const title = isFilled(x.title) ? x.title : project.name;
  const roles = filledList(x.role);
  const tags = project.tags.map((k) => t.projects.categories[k]).join(' · ');

  return (
    <Link to={`/work/${project.slug}`} className="group block">
      <div className="overflow-hidden rounded-card bg-surface-raised">
        <img
          src={project.cover}
          alt={`${project.name}: ${project.category}`}
          loading="lazy"
          decoding="async"
          className={`w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03] motion-reduce:transition-none ${
            large ? 'aspect-[4/3] md:aspect-[16/9]' : 'aspect-[4/3]'
          }`}
        />
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">
          {project.num} · {tags}
        </p>
        <h3 className="font-display text-h3 font-bold text-fg transition-colors group-hover:text-accent">{title}</h3>
        {isFilled(x.summary) && <p className="max-w-[60ch] text-fg-muted">{x.summary}</p>}
        {roles.length > 0 && <p className="text-sm text-fg-muted">{roles.join(', ')}</p>}
        <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-accent">
          {t.home.selected.viewCase}
          <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
        </span>
      </div>
    </Link>
  );
}

export function SelectedWork({ featured }: { featured: Project[] }) {
  const { language } = useLanguage();
  const t = translations[language].home.selected;
  return (
    <section id="work" aria-labelledby="work-title" className="content-wrap section-pad">
      <Reveal>
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 id="work-title" className="mt-4 max-w-[20ch] font-display text-h2 font-bold text-fg [text-wrap:balance]">
          {t.title}
        </h2>
      </Reveal>
      <ul className="mt-12 grid gap-x-6 gap-y-14 md:mt-16 md:grid-cols-2">
        {featured.map((p, i) => (
          // first card spans the full row; the rest pair up
          <Reveal as="li" key={p.slug} className={i === 0 && featured.length % 2 === 1 ? 'md:col-span-2' : ''}>
            <FeatureCard project={p} large={i === 0 && featured.length % 2 === 1} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ---------- All projects: filterable compact grid ---------- */

const filterOrder: CategoryKey[] = ['branding', 'campaign', 'packaging', 'socialMedia'];

export function ProjectIndex({ projects }: { projects: Project[] }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [filter, setFilter] = useState<CategoryKey | 'all'>('all');
  const labels: Record<CategoryKey, string> = {
    branding: t.projects.categories.branding,
    campaign: t.projects.categories.campaign,
    packaging: t.projects.categories.packaging,
    socialMedia: t.projects.categories.socialMedia,
  };
  const available = filterOrder.filter((k) => projects.some((p) => p.tags.includes(k)));
  const shown = filter === 'all' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" aria-labelledby="projects-title" className="content-wrap pb-24 md:pb-32">
      <div className="flex flex-col gap-6 border-t border-surface-line pt-12 md:flex-row md:items-end md:justify-between">
        <h2 id="projects-title" className="font-display text-h3 font-bold text-fg">
          {t.home.index.title} <span className="text-fg-muted">({projects.length})</span>
        </h2>
        <div role="group" aria-label={t.home.index.filterLabel} className="flex flex-wrap gap-2">
          {(['all', ...available] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setFilter(k)}
              aria-pressed={filter === k}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === k
                  ? 'border-accent bg-accent text-accent-fg'
                  : 'border-surface-line text-fg-muted hover:border-fg-muted hover:text-fg'
              }`}
            >
              {k === 'all' ? t.home.index.all : labels[k]}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">{shown.length} projects</p>
      {shown.length === 0 ? (
        <p className="mt-10 text-fg-muted">{t.home.index.empty}</p>
      ) : (
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {shown.map((p) => (
            <li key={p.slug}>
              <Link to={`/work/${p.slug}`} className="group block">
                <div className="overflow-hidden rounded-card bg-surface-raised">
                  <img
                    src={p.cover}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                </div>
                <p className="mt-3 font-display font-bold text-fg transition-colors group-hover:text-accent">{p.name}</p>
                <p className="text-sm text-fg-muted">{p.category}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
