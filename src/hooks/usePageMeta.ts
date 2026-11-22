import { useEffect } from 'react';
import { SITE_URL, type PageMeta } from '../data/seo';

const setMeta = (selector: string, attr: 'content' | 'href', value: string) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

/** Create, update or remove a <link>/<meta> identified by `selector`. */
function upsert(selector: string, create: () => HTMLElement, apply: ((el: HTMLElement) => void) | null) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!apply) {
    el?.remove();
    return;
  }
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  apply(el);
}

/**
 * Keeps <title>, description, canonical, hreflang, Open Graph and Twitter tags
 * in sync with the current page during client-side navigation. Crawlers that
 * don't run JavaScript get the same values from the static HTML written by
 * scripts/build-meta.mjs.
 */
export function usePageMeta(meta: PageMeta) {
  const { title, description, path, image, noindex, alternates, ogLocale } = meta;
  const altKey = JSON.stringify(alternates);
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const img = `${SITE_URL}${image}`;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', img);
    setMeta('meta[property="og:locale"]', 'content', ogLocale);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', img);

    const link = (rel: string, hreflang?: string) => () => {
      const el = document.createElement('link');
      el.rel = rel;
      if (hreflang) el.hreflang = hreflang;
      return el;
    };
    // Indexable pages: self canonical + hreflang alternates. noindex pages: neither.
    upsert('link[rel="canonical"]', link('canonical'), noindex ? null : (el) => el.setAttribute('href', url));
    const alts = JSON.parse(altKey) as Record<string, string>;
    for (const lang of ['en', 'fr', 'x-default']) {
      const target = lang === 'x-default' ? alts.en : alts[lang];
      upsert(
        `link[rel="alternate"][hreflang="${lang}"]`,
        link('alternate', lang),
        target && !noindex ? (el) => el.setAttribute('href', `${SITE_URL}${target}`) : null,
      );
    }
    upsert(
      'meta[name="robots"]',
      () => Object.assign(document.createElement('meta'), { name: 'robots' }),
      noindex ? (el) => el.setAttribute('content', 'noindex') : null,
    );
  }, [title, description, path, image, noindex, altKey, ogLocale]);
}
