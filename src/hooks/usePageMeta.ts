import { useEffect } from 'react';

// Defaults come from index.html and are captured once, at first load.
const defaultTitle = typeof document !== 'undefined' ? document.title : '';
const descTag = () => document.querySelector<HTMLMetaElement>('meta[name="description"]');
const defaultDescription = typeof document !== 'undefined' ? descTag()?.content ?? '' : '';

/**
 * Sets a per-page <title> and meta description, falling back to the
 * index.html defaults. Stage 5 replaces this with full SEO tags (OG, canonical).
 */
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Bristin Biju` : defaultTitle;
    const tag = descTag();
    if (tag) tag.content = description || defaultDescription;
  }, [title, description]);
}
