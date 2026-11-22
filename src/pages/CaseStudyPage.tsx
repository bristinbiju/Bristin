import { useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import SiteHeader from '../components/site/SiteHeader';
import SiteFooter from '../components/site/SiteFooter';
import Todo from '../components/site/Todo';
import Reveal from '../components/site/Reveal';
import Img, { imgUrl } from '../components/site/Img';
import Lightbox from '../components/Lightbox';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { getProjects, type Project } from '../data/projects';
import { SHOW_DRAFTS, filledList, isFilled } from '../data/content';
import { usePageMeta } from '../hooks/usePageMeta';

/* ---------- small building blocks ---------- */

/** Text if filled, otherwise a dev-only TODO. */
function Copy({ value, label, className = '' }: { value: string; label: string; className?: string }) {
  return isFilled(value) ? <p className={className}>{value}</p> : <Todo label={label} hint={value} />;
}

/** True when a section should render: it has content, or we are in dev and want to see the gap. */
const shows = (...values: (string | undefined)[]) => values.some((v) => isFilled(v)) || SHOW_DRAFTS;

function ImageButton({
  src, alt, label, onOpen, className = '', eager = false, natural = false, sizes = '100vw',
}: {
  src: string; alt: string; label: string; onOpen: () => void;
  className?: string; eager?: boolean;
  /** Keep the image's own proportions (masonry gallery) instead of filling the box. */
  natural?: boolean;
  /** Rendered width hint for srcset. */
  sizes?: string;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${label}: ${alt}`}
      className={`group block w-full overflow-hidden rounded-card bg-surface-raised ${className}`}
    >
      <Img
        src={src}
        alt={alt}
        priority={eager}
        sizes={sizes}
        className={`w-full transition-transform duration-700 ease-out-soft group-hover:scale-[1.03] motion-reduce:transition-none ${natural ? 'h-auto' : 'h-full object-cover'}`}
      />
    </button>
  );
}

function SectionHeading({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="font-display text-h3 font-bold text-fg">
      {children}
    </h2>
  );
}

/* ---------- page ---------- */

function Shell({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-surface font-body text-body text-fg antialiased selection:bg-accent selection:text-accent-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        {translations[language].caseStudy.skipToContent}
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

function NotFound() {
  const { language } = useLanguage();
  const t = translations[language].caseStudy;
  usePageMeta(t.notFoundTitle);
  return (
    <Shell>
      <main id="main" className="content-wrap section-pad">
        <h1 className="font-display text-h2 font-bold">{t.notFoundTitle}</h1>
        <p className="mt-4 text-fg-muted">{t.notFoundText}</p>
        <Link to="/#projects" className="mt-8 inline-flex items-center gap-2 font-semibold text-accent hover:underline">
          <ArrowLeft size={18} aria-hidden /> {t.backToWork}
        </Link>
      </main>
    </Shell>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const projects = getProjects(language);
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) return <NotFound />;
  // key: reset lightbox state and replay the entrance when moving between projects
  return <CaseStudy key={projects[index].slug} project={projects[index]} prev={projects[(index - 1 + projects.length) % projects.length]} next={projects[(index + 1) % projects.length]} />;
}

function CaseStudy({ project, prev, next }: { project: Project; prev: Project; next: Project }) {
  const { language } = useLanguage();
  const reduce = useReducedMotion();
  const t = translations[language].caseStudy;
  const cats = translations[language].projects.categories;
  const email = translations[language].contact.emailLabel;
  const x = project.text;

  const title = isFilled(x.title) ? x.title : project.name;
  usePageMeta(title, isFilled(x.summary) ? x.summary : undefined);

  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const openInGallery = (src: string) => {
    const all = Array.from(new Set([project.cover, ...project.showcase.map((s) => s.image), ...project.gallery]));
    setLightbox({ images: all, index: Math.max(0, all.indexOf(src)) });
  };

  const tags = project.tags.map((k) => cats[k]).join(' · ');
  const roles = filledList(x.role);
  const deliverables = filledList(x.deliverables);

  const steps = project.process
    .map((s) => ({ ...s, ...x.process[s.id] }))
    .filter((s) => s.title && (isFilled(s.text) || SHOW_DRAFTS));

  const showcase = project.showcase.map((s) => ({ ...s, caption: x.showcase[s.id] }));
  const shown = new Set([project.cover, ...showcase.map((s) => s.image)]);
  const restOfGallery = project.gallery.filter((g) => !shown.has(g));
  const alt = (caption: string | undefined, n: number) =>
    caption && isFilled(caption) ? caption : `${project.name}: ${project.category}, image ${n}`;

  const glance: { label: string; content: ReactNode; ok: boolean; hint?: string }[] = [
    {
      label: t.client,
      ok: isFilled(project.client),
      hint: project.client,
      content: (
        <span className="flex flex-col items-start gap-3">
          {project.logo && (
            <Img
              src={project.logo}
              alt=""
              sizes="80px"
              className={`h-12 w-20 shrink-0 rounded-lg object-contain p-1.5 ${project.logoOnLight ? 'bg-paper' : 'bg-surface ring-1 ring-surface-line'}`}
            />
          )}
          {project.client}
        </span>
      ),
    },
    { label: t.role, ok: roles.length > 0, hint: x.role[0], content: roles.join(', ') },
    { label: t.year, ok: isFilled(project.year), hint: project.year, content: project.year },
    {
      label: t.deliverables,
      ok: deliverables.length > 0,
      hint: x.deliverables[0],
      content: <ul className="space-y-1">{deliverables.map((d) => <li key={d}>{d}</li>)}</ul>,
    },
    { label: t.tools, ok: project.tools.length > 0, hint: 'tools used, e.g. Illustrator, Photoshop', content: project.tools.join(', ') },
  ];

  return (
    <Shell>
      <motion.main
        id="main"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* ---------- Hero ---------- */}
        <section className="content-wrap pt-10 pb-12 md:pt-16 md:pb-16">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowLeft size={16} aria-hidden /> {t.backToWork}
          </Link>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {project.num} · {tags}
          </p>
          <h1 className="mt-4 max-w-[22ch] font-display text-h1 font-bold tracking-tight text-fg [text-wrap:balance]">
            {title}
          </h1>
          {!isFilled(x.title) && <Todo className="mt-4 max-w-xl" label="Title" hint={x.title} />}

          <div className="mt-6 max-w-[60ch]">
            <Copy value={x.summary} label="Summary" className="text-lead text-fg-muted" />
          </div>

          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-surface-line px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {t.viewExternal} <ArrowUpRight size={16} aria-hidden />
            </a>
          )}

          <ImageButton
            src={project.cover}
            alt={alt(undefined, 1)}
            label={t.openImage}
            onOpen={() => openInGallery(project.cover)}
            className="mt-12 aspect-[4/3] md:aspect-[16/9]"
            eager
          />
        </section>

        {/* ---------- At a glance ---------- */}
        <section aria-label="At a glance" className="content-wrap">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-8 border-y border-surface-line py-10 sm:grid-cols-2 lg:grid-cols-5">
            {glance
              .filter((g) => g.ok || SHOW_DRAFTS)
              .map((g) => (
                <div key={g.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">{g.label}</dt>
                  <dd className="mt-3 text-fg">{g.ok ? g.content : <Todo label={g.label} hint={g.hint} />}</dd>
                </div>
              ))}
          </dl>
        </section>

        {/* ---------- Challenge + goal ---------- */}
        {shows(x.challenge, x.goal) && (
          <section className="content-wrap section-pad">
            <div className="grid-12 gap-y-12">
              {[
                { label: t.challenge, value: x.challenge, key: 'Challenge' },
                { label: t.goal, value: x.goal, key: 'Goal' },
              ]
                .filter((b) => isFilled(b.value) || SHOW_DRAFTS)
                .map((b) => (
                  <Reveal key={b.key} className="col-span-12 grid grid-cols-subgrid gap-y-4">
                    <div className="col-span-12 md:col-span-4">
                      <SectionHeading>{b.label}</SectionHeading>
                    </div>
                    <div className="col-span-12 max-w-[65ch] md:col-span-8">
                      <Copy value={b.value} label={b.key} className="text-lead text-fg" />
                    </div>
                  </Reveal>
                ))}
            </div>
          </section>
        )}

        {/* ---------- Process ---------- */}
        {steps.length > 0 && (
          <section className="content-wrap section-pad border-t border-surface-line">
            <Reveal><SectionHeading>{t.process}</SectionHeading></Reveal>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.id} className="flex h-full flex-col gap-4">
                    {s.image ? (
                      <ImageButton src={s.image} alt={s.title} label={t.openImage} onOpen={() => openInGallery(s.image!)} className="aspect-[4/3]" sizes="(min-width: 768px) 33vw, 100vw" />
                    ) : (
                      SHOW_DRAFTS && <Todo label={`${s.title} image`} hint="add process.image in projects.ts" />
                    )}
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">0{i + 1}</p>
                    <h3 className="font-display text-xl font-bold">{s.title}</h3>
                    <Copy value={s.text} label={s.title} className="text-fg-muted" />
                </Reveal>
              ))}
            </ol>
          </section>
        )}

        {/* ---------- Solution ---------- */}
        {(showcase.length > 0 || shows(x.solution)) && (
          <section className="content-wrap section-pad border-t border-surface-line">
            <div className="grid-12 gap-y-4">
              <Reveal className="col-span-12 md:col-span-4"><SectionHeading>{t.solution}</SectionHeading></Reveal>
              <Reveal className="col-span-12 max-w-[65ch] md:col-span-8">
                <Copy value={x.solution} label="Solution" className="text-lead text-fg" />
              </Reveal>
            </div>

            {showcase.length > 0 && (
              <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2">
                {showcase.map((s, i) => (
                  <Reveal as="li" key={s.id} className={i === 0 ? 'sm:col-span-2' : ''}>
                      <figure>
                        <ImageButton
                          src={s.image}
                          alt={alt(s.caption, i + 2)}
                          label={t.openImage}
                          onOpen={() => openInGallery(s.image)}
                          className={i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}
                          sizes={i === 0 ? '(min-width: 1200px) 1120px, 100vw' : '(min-width: 640px) 50vw, 100vw'}
                        />
                        {isFilled(s.caption) && (
                          <figcaption className="mt-3 max-w-[60ch] text-sm text-fg-muted">{s.caption}</figcaption>
                        )}
                      </figure>
                  </Reveal>
                ))}
              </ul>
            )}
          </section>
        )}

        {/* ---------- Outcome (light section) ---------- */}
        {shows(x.outcome) && (
          <section className="bg-paper text-ink">
            <div className="content-wrap section-pad grid-12 gap-y-4">
              <Reveal className="col-span-12 md:col-span-4">
                <h2 className="font-display text-h3 font-bold">{t.outcome}</h2>
              </Reveal>
              <Reveal className="col-span-12 max-w-[65ch] md:col-span-8">
                {isFilled(x.outcome) ? (
                  <p className="text-lead">{x.outcome}</p>
                ) : (
                  <div className="rounded-lg border border-dashed border-accent-ink/50 px-4 py-3 text-sm text-ink-muted">
                    <strong className="font-semibold text-accent-ink">TODO · Outcome</strong>
                    <span className="block">{x.outcome.replace(/^TODO:\s*/i, '')}</span>
                  </div>
                )}
              </Reveal>
            </div>
          </section>
        )}

        {/* ---------- Gallery ---------- */}
        {restOfGallery.length > 0 && (
          <section className="content-wrap section-pad">
            <Reveal><SectionHeading>{t.gallery}</SectionHeading></Reveal>
            <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4 [&>li]:break-inside-avoid">
              {restOfGallery.map((src, i) => (
                <li key={src}>
                  <ImageButton
                    src={src}
                    alt={alt(undefined, showcase.length + i + 2)}
                    label={t.openImage}
                    onOpen={() => openInGallery(src)}
                    natural
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ---------- Prev / next ---------- */}
        <nav aria-label="Projects" className="content-wrap border-t border-surface-line py-12">
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { p: prev, label: t.previous, icon: <ArrowLeft size={16} aria-hidden />, align: '' },
              { p: next, label: t.next, icon: <ArrowRight size={16} aria-hidden />, align: 'sm:flex-row-reverse sm:text-right' },
            ].map(({ p, label, icon, align }) => (
              <li key={label}>
                <Link
                  to={`/work/${p.slug}`}
                  className={`group flex items-center gap-4 rounded-card border border-surface-line bg-surface-raised p-4 transition-colors hover:border-accent/60 ${align}`}
                >
                  <Img src={p.cover} alt="" sizes="80px" className="h-16 w-20 shrink-0 rounded-lg object-cover" />
                  <span className="min-w-0">
                    <span className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted ${align ? 'sm:justify-end' : ''}`}>
                      {icon} {label}
                    </span>
                    <span className="mt-1 block truncate font-display text-lg font-bold text-fg group-hover:text-accent">
                      {p.name}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ---------- CTA ---------- */}
        <section className="content-wrap pb-24">
          <div className="flex flex-col items-start gap-6 rounded-card bg-surface-raised p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h2 className="font-display text-h2 font-bold">{t.ctaHeadline}</h2>
              <p className="mt-3 text-fg-muted">{t.ctaText}</p>
            </div>
            <a
              href={`mailto:${email}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-fg transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              {t.ctaButton} <ArrowUpRight size={18} aria-hidden />
            </a>
          </div>
        </section>
      </motion.main>

      <Lightbox
        isOpen={!!lightbox}
        images={(lightbox?.images ?? []).map((src) => imgUrl(src, 1600))}
        initialIndex={lightbox?.index ?? 0}
        onClose={() => setLightbox(null)}
      />
    </Shell>
  );
}
