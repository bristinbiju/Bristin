/**
 * Language lives in the URL so both versions can be crawled and shared:
 *   English (default):  /            /work/gba      /#contact
 *   French:             /fr          /fr/work/gba   /fr#contact
 */
export type Language = 'en' | 'fr';
export const LANGUAGES: Language[] = ['en', 'fr'];

export const langFromPath = (pathname: string): Language =>
  pathname === '/fr' || pathname.startsWith('/fr/') ? 'fr' : 'en';

/** '/fr/work/gba' -> '/work/gba', '/fr' -> '/'. English paths are returned unchanged. */
export const stripLang = (pathname: string) =>
  langFromPath(pathname) === 'fr' ? pathname.slice(3) || '/' : pathname;

/** Language-neutral path ('/', '/#work', '/work/gba') -> path for `lang`. */
export function localizePath(path: string, lang: Language) {
  if (lang === 'en') return path;
  if (path === '/') return '/fr';
  if (path.startsWith('/#')) return `/fr${path.slice(1)}`;
  return `/fr${path}`;
}

/** BCP 47 / Open Graph locale codes. */
export const OG_LOCALE: Record<Language, string> = { en: 'en_GB', fr: 'fr_FR' };
