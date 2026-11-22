/**
 * Runs after `vite build` (part of `npm run build`).
 *
 * Social networks (LinkedIn, WhatsApp, X ...) do not run JavaScript, so a
 * single-page app would show the same preview for every link. This writes one
 * HTML file per route, pre-rendered (the page's real content, which React then
 * hydrates) with its <title>, description, canonical URL and Open Graph /
 * Twitter tags already in place:
 *   dist/index.html            /
 *   dist/work/<slug>.html      /work/<slug>   (served by vercel.json "cleanUrls")
 *   dist/404.html              any unknown URL (Vercel serves it with status 404)
 * plus dist/sitemap.xml and dist/robots.txt.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';

const DIST = 'dist';
// Production mode: import.meta.env.DEV is false, so dev-only TODO placeholders never reach the HTML.
process.env.NODE_ENV = 'production';
const vite = await createServer({ mode: 'production', server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent' });
let projectsMeta, pageMeta, SITE_URL, renderApp;
try {
  ({ projectsMeta } = await vite.ssrLoadModule('/src/data/projects.ts'));
  ({ pageMeta, SITE_URL } = await vite.ssrLoadModule('/src/data/seo.ts'));
  ({ render: renderApp } = await vite.ssrLoadModule('/src/entry-server.tsx'));

// Preload the latin font files the hero uses (Syne 700, Be Vietnam Pro 400/600) so they
// arrive before first paint: otherwise the font swap reflows the hero (layout shift).
const CRITICAL_FONTS = [/^syne-latin-700-normal-.*\.woff2$/, /^be-vietnam-pro-latin-400-normal-.*\.woff2$/, /^be-vietnam-pro-latin-600-normal-.*\.woff2$/];
const assets = fs.readdirSync(path.join(DIST, 'assets'));
const fontPreloads = CRITICAL_FONTS.map((re) => {
  const file = assets.find((f) => re.test(f));
  if (!file) throw new Error(`font not found in dist/assets: ${re}`);
  return `<link rel="preload" as="font" type="font/woff2" href="/assets/${file}" crossorigin />`;
}).join('\n    ');

const template = fs
  .readFileSync(path.join(DIST, 'index.html'), 'utf8')
  .replace('</head>', `  ${fontPreloads}\n  </head>`);
const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** `route` is the URL to pre-render (defaults to the page's own path). */
function render(meta, route = meta.path) {
  const url = `${SITE_URL}${meta.path}`;
  const img = `${SITE_URL}${meta.image}`;
  const set = (html, re, value) => {
    if (!re.test(html)) throw new Error(`index.html is missing ${re}`);
    return html.replace(re, (_, a, b) => `${a}${attr(value)}${b}`);
  };
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${attr(meta.title)}</title>`);
  html = set(html, /(<meta name="description" content=")[^"]*(")/, meta.description);
  html = set(html, /(<link rel="canonical" href=")[^"]*(")/, url);
  html = set(html, /(<meta property="og:url" content=")[^"]*(")/, url);
  html = set(html, /(<meta property="og:title" content=")[^"]*(")/, meta.title);
  html = set(html, /(<meta property="og:description" content=")[^"]*(")/, meta.description);
  html = set(html, /(<meta property="og:image" content=")[^"]*(")/, img);
  html = set(html, /(<meta name="twitter:title" content=")[^"]*(")/, meta.title);
  html = set(html, /(<meta name="twitter:description" content=")[^"]*(")/, meta.description);
  html = set(html, /(<meta name="twitter:image" content=")[^"]*(")/, img);
  if (meta.preloadImage) {
    // Lets the browser fetch the above-the-fold image before the JavaScript runs.
    const { src, sizes } = meta.preloadImage;
    const srcset = [400, 800, 1600].map((w) => `${src}-${w}.webp ${w}w`).join(', ');
    html = html.replace(
      '</head>',
      `  <link rel="preload" as="image" href="${src}-1600.webp" imagesrcset="${attr(srcset)}" imagesizes="${attr(sizes)}" fetchpriority="high" />
  </head>`,
    );
  }
  if (!html.includes('<div id="root"></div>')) throw new Error('index.html is missing <div id="root"></div>');
  if (meta.noindex) html = html.replace('</head>', '  <meta name="robots" content="noindex" />\n  </head>');
  html = html.replace('<div id="root"></div>', `<div id="root">${renderApp(route)}</div>`);
  return html;
}

// English is the default language; the FR switch is client-side on the same URL.
const routes = [pageMeta('en'), ...projectsMeta.map((p) => pageMeta('en', p.slug))];
for (const meta of routes) {
  const file = meta.path === '/' ? 'index.html' : `${meta.path.slice(1)}.html`;
  fs.mkdirSync(path.dirname(path.join(DIST, file)), { recursive: true });
  fs.writeFileSync(path.join(DIST, file), render(meta));
}

// Styled "not found" page for unknown URLs (not in the sitemap).
fs.writeFileSync(path.join(DIST, '404.html'), render(pageMeta('en', '__missing__'), '/404'));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((m) => `  <url><loc>${SITE_URL}${m.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`meta: ${routes.length} pre-rendered pages + 404.html, sitemap.xml, robots.txt`);
} finally {
  await vite.close();
}
