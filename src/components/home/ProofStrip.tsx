import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import type { Project } from '../../data/projects';

/** Client logos (shown as one-colour marks so mixed light/dark logos read evenly) + real facts. */
export default function ProofStrip({ projects }: { projects: Project[] }) {
  const { language } = useLanguage();
  const t = translations[language].home.proof;
  const withLogos = projects.filter((p) => p.logo);

  return (
    <section aria-label={t.label} className="border-y border-surface-line">
      <div className="content-wrap flex flex-col gap-10 py-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">{t.label}</p>
          <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6 lg:justify-between">
            {withLogos.map((p) => (
              <li key={p.slug}>
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  // TODO(Stage 4): trim the transparent padding in these PNGs, then this can shrink back
                  className="h-14 w-auto max-w-[150px] object-contain opacity-75 brightness-0 invert transition-opacity hover:opacity-100 sm:h-16"
                />
              </li>
            ))}
          </ul>
        </div>
        <dl className="flex flex-wrap gap-x-16 gap-y-6 border-t border-surface-line pt-8">
          {t.facts.map((f) => (
            <div key={f.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm text-fg-muted">{f.label}</dt>
              <dd className="font-display text-xl font-bold text-fg sm:text-2xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
