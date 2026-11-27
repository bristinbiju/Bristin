/**
 * Runs after `vite build` (part of `npm run build`).
 *
 * Writes one pre-rendered HTML file per route and language (the page's real
 * content, which React then hydrates) with its <html lang>, <title>,
 * description, canonical, hreflang alternates and Open Graph / Twitter tags
 * already in place, so crawlers and link previews never need JavaScript:
 *   dist/index.html               /                 (English, default)
 *   dist/work/<slug>.html         /work/<slug>      (vercel.json rewrites /work/:slug -> .html)
 *   dist/fr/index.html            /fr               (French)
 *   dist/fr/work/<slug>.html      /fr/work/<slug>
 *   dist/404.html                 any unknown URL (Vercel serves it with status 404)
 * plus dist/sitemap.xml (with language alternates) and dist/robots.txt.
 * The home pages also get schema.org Person structured data.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';

const DIST = 'dist';
// Production mode: import.meta.env.DEV is false, so dev-only TODO placeholders never reach the HTML.
process.env.NODE_ENV = 'production';
const vite = await createServer({ mode: 'production', server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent' });
try {
  const { projectsMeta } = await vite.ssrLoadModule('/src/data/projects.ts');
  const { pageMeta, personJsonLd, SITE_URL } = await vite.ssrLoadModule('/src/data/seo.ts');
  const { LANGUAGES, OG_LOCALE } = await vite.ssrLoadModule('/src/lib/locale.ts');
  const { imgUrl, imgSrcSet } = await vite.ssrLoadModule('/src/lib/images.ts');
  const { render: renderApp } = await vite.ssrLoadModule('/src/entry-server.tsx');

  // Preload the latin font files the hero uses (Syne 700, Be Vietnam Pro 400/600) so they
  // arrive before first paint: otherwise the font swap reflows the hero (layout shift).
  const CRITICAL_FONTS = [/^syne-latin-700-normal-.*\.woff2$/, /^be-vietnam-pro-latin-400-normal-.*\.woff2$/, /^be-vietnam-pro-latin-600-normal-.*\.woff2$/];
  const assets = fs.readdirSync(path.join(DIST, 'assets'));
  const fontPreloads = CRITICAL_FONTS.map((re) => {
    const file = assets.find((f) => re.test(f));
    if (!file) throw new Error(`font not found in dist/assets: ${re}`);
    return `<link rel="preload" as="font" type="font/woff2" href="/assets/${file}" crossorigin />`;
  });

  const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
  const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const abs = (p) => `${SITE_URL}${p}`;

  /** `route` is the URL to pre-render (defaults to the page's own path). */
  function render(meta, { route = meta.path, jsonLd } = {}) {
    const set = (html, re, value) => {
      if (!re.test(html)) throw new Error(`index.html is missing ${re}`);
      return html.replace(re, (_, a, b) => `${a}${attr(value)}${b}`);
    };
    let html = template;
    html = set(html, /(<html lang=")[^"]*(")/, meta.lang);
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${attr(meta.title)}</title>`);
    html = set(html, /(<meta name="description" content=")[^"]*(")/, meta.description);
    html = set(html, /(<meta property="og:url" content=")[^"]*(")/, abs(meta.path));
    html = set(html, /(<meta property="og:title" content=")[^"]*(")/, meta.title);
    html = set(html, /(<meta property="og:description" content=")[^"]*(")/, meta.description);
    html = set(html, /(<meta property="og:image" content=")[^"]*(")/, abs(meta.image));
    html = set(html, /(<meta property="og:locale" content=")[^"]*(")/, meta.ogLocale);
    html = set(html, /(<meta name="twitter:title" content=")[^"]*(")/, meta.title);
    html = set(html, /(<meta name="twitter:description" content=")[^"]*(")/, meta.description);
    html = set(html, /(<meta name="twitter:image" content=")[^"]*(")/, abs(meta.image));

    const head = [...fontPreloads];
    if (meta.noindex) {
      // A noindex page must not declare a canonical (conflicting signals).
      html = html.replace(/\s*<!-- Canonical -->\s*<link rel="canonical" href="[^"]*" \/>/, '');
      head.push('<meta name="robots" content="noindex" />');
    } else {
      html = set(html, /(<link rel="canonical" href=")[^"]*(")/, abs(meta.path));
      for (const lang of LANGUAGES) {
        if (meta.alternates[lang]) head.push(`<link rel="alternate" hreflang="${lang}" href="${abs(meta.alternates[lang])}" />`);
      }
      if (meta.alternates.en) head.push(`<link rel="alternate" hreflang="x-default" href="${abs(meta.alternates.en)}" />`);
      for (const lang of LANGUAGES) {
        if (lang !== meta.lang) head.push(`<meta property="og:locale:alternate" content="${OG_LOCALE[lang]}" />`);
      }
    }
    if (meta.preloadImage) {
      // Lets the browser fetch the above-the-fold image before the JavaScript runs.
      const { src, sizes } = meta.preloadImage;
      // Same hashed URLs as the <img>, so the preload is reused.
      head.push(`<link rel="preload" as="image" href="${attr(imgUrl(src, 1600))}" imagesrcset="${attr(imgSrcSet(src))}" imagesizes="${attr(sizes)}" fetchpriority="high" />`);
    }
    if (jsonLd) {
      head.push(`<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`);
    }
    html = html.replace('</head>', `  ${head.join('\n    ')}\n  </head>`);

    if (!html.includes('<div id="root"></div>')) throw new Error('index.html is missing <div id="root"></div>');
    html = html.replace('<div id="root"></div>', `<div id="root">${renderApp(route)}</div>`);
    return html;
  }

  const fileFor = (p) => (p === '/' ? 'index.html' : p === '/fr' ? 'fr/index.html' : `${p.slice(1)}.html`);
  const write = (file, html) => {
    fs.mkdirSync(path.dirname(path.join(DIST, file)), { recursive: true });
    fs.writeFileSync(path.join(DIST, file), html);
  };

  const pages = LANGUAGES.flatMap((lang) => [pageMeta(lang), ...projectsMeta.map((p) => pageMeta(lang, p.slug))]);
  for (const meta of pages) {
    const isHome = meta.path === '/' || meta.path === '/fr';
    write(fileFor(meta.path), render(meta, { jsonLd: isHome ? personJsonLd(meta.lang) : undefined }));
  }

  // Styled "not found" page for unknown URLs (not in the sitemap).
  write('404.html', render(pageMeta('en', '__missing__'), { route: '/404' }));

  // Sitemap: every indexable URL, with its language alternates.
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages.map((m) => {
    const alts = [...LANGUAGES.map((l) => [l, m.alternates[l]]), ['x-default', m.alternates.en]]
      .map(([l, p]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(p)}" />`)
      .join('\n');
    return `  <url>\n    <loc>${abs(m.path)}</loc>\n    <lastmod>${today}</lastmod>\n${alts}\n  </url>`;
  });
  write(
    'sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`,
  );
  write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  console.log(`meta: ${pages.length} pre-rendered pages (${LANGUAGES.join(' + ')}) + 404.html, sitemap.xml, robots.txt`);
} finally {
  await vite.close();
}
