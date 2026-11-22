import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import Reveal from '../site/Reveal';
import Todo from '../site/Todo';
import Img from '../site/Img';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const a = t.home.about;

  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-surface-line">
      <div className="content-wrap section-pad grid-12 items-center gap-y-12">
        <Reveal className="col-span-12 md:col-span-5 lg:col-span-4">
          <div className="mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-card bg-surface-raised md:max-w-none">
            <Img
              src="/images/about/photo"
              alt={a.photoAlt}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{a.eyebrow}</p>
          <h2 id="about-title" className="mt-4 font-display text-h2 font-bold text-fg">{a.title}</h2>
          <p className="mt-6 max-w-[62ch] text-lead text-fg-muted">{t.about.description}</p>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">{a.skillsLabel}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {a.skills.map((skill) => (
              <li key={skill} className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-fg">
                {skill}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">{a.toolsLabel}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {a.tools.map((tool) => (
              <li key={tool} className="rounded-full border border-surface-line px-4 py-1.5 text-sm text-fg">
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** Renders nothing until real quotes are added to translations > home.testimonials.items. */
export function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language].home.testimonials;
  if (t.items.length === 0) {
    return (
      <div className="content-wrap">
        <Todo className="mb-16" label="Testimonials" hint="add real client quotes to translations.ts > home.testimonials.items (the section stays hidden until then)" />
      </div>
    );
  }
  return (
    <section aria-labelledby="testimonials-title" className="border-t border-surface-line">
      <div className="content-wrap section-pad">
        <h2 id="testimonials-title" className="font-display text-h2 font-bold text-fg">{t.title}</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {t.items.map((q) => (
            <Reveal as="li" key={q.name} className="rounded-card border border-surface-line bg-surface-raised p-8">
              <figure>
                <blockquote className="text-lead text-fg">“{q.quote}”</blockquote>
                <figcaption className="mt-6 text-sm text-fg-muted">
                  <strong className="font-semibold text-fg">{q.name}</strong>, {q.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bristin-biju-832a4a1a6' },
  { name: 'Instagram', href: 'https://www.instagram.com/bristinbiju/' },
  { name: 'Behance', href: 'https://www.behance.net/bristinbiju' },
];

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const c = t.home.contact;
  const email = t.contact.emailLabel;
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // No backend: the form composes an email in the visitor's mail app.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Project enquiry: ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const field =
    'mt-2 w-full rounded-xl border border-surface-line bg-surface px-4 py-3 text-fg placeholder:text-fg-muted/60 focus:border-accent focus:outline-none';

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-surface-line">
      <div className="content-wrap section-pad grid-12 gap-y-14">
        <Reveal className="col-span-12 lg:col-span-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{c.eyebrow}</p>
          <h2 id="contact-title" className="mt-4 font-display text-h1 font-bold text-fg [text-wrap:balance]">
            {t.contact.headline}
          </h2>
          <p className="mt-6 max-w-[48ch] text-lead text-fg-muted">{t.contact.subtext}</p>

          <a
            href={`mailto:${email}`}
            className="group mt-10 inline-flex max-w-full items-center gap-3 break-all font-display text-xl font-bold text-fg hover:text-accent sm:text-2xl"
          >
            <Mail size={24} aria-hidden className="shrink-0 text-accent" />
            {email}
          </a>

          {c.bookingLink ? (
            <a
              href={c.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-fg"
            >
              {c.bookingLabel} <ArrowUpRight size={18} aria-hidden />
            </a>
          ) : (
            <Todo className="mt-6 max-w-md" label="Booking link" hint="optional: a Calendly/Cal.com link in translations.ts > home.contact.bookingLink" />
          )}

          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">{c.socialLabel}</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-fg hover:text-accent"
                >
                  {s.name} <ArrowUpRight size={14} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8">
          <form onSubmit={onSubmit} className="rounded-card border border-surface-line bg-surface-raised p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-fg">{c.orWrite}</h3>
            <label className="mt-6 block text-sm font-medium text-fg">
              {c.name}
              <input required autoComplete="name" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>
            <label className="mt-5 block text-sm font-medium text-fg">
              {c.email}
              <input required type="email" autoComplete="email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </label>
            <label className="mt-5 block text-sm font-medium text-fg">
              {c.message}
              <textarea required rows={5} className={`${field} resize-y`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-fg transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              {c.send} <ArrowUpRight size={18} aria-hidden />
            </button>
            <p className="mt-3 text-center text-xs text-fg-muted">{c.formNote}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
