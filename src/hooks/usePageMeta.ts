import { useEffect } from 'react';
import { SITE_URL, type PageMeta } from '../data/seo';

const setMeta = (selector: string, attr: 'content' | 'href', value: string) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

/**
 * Keeps <title>, description, canonical, Open Graph and Twitter tags in sync
 * with the current page during client-side navigation. Crawlers that don't run
 * JavaScript get the same values from the static HTML written by
 * scripts/build-meta.mjs.
 */
export function usePageMeta(meta: PageMeta) {
  const { title, description, path, image, noindex } = meta;
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const img = `${SITE_URL}${image}`;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', img);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', img);

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noindex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.name = 'robots';
        document.head.appendChild(robots);
      }
      robots.content = 'noindex';
    } else {
      robots?.remove();
    }
  }, [title, description, path, image, noindex]);
}
