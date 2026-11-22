/**
 * Social share images (1200x630 JPEG), run as part of `npm run images`:
 *   public/og/home.jpg         home page: headline + three featured covers
 *   public/og/<slug>.jpg       one per project, cropped from its cover
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { loadProjects } from './lib/load-projects.mjs';

const W = 1200;
const H = 630;
const OUT = 'public/og';
const C = { surface: '#14191C', fg: '#D9E0E4', muted: '#9AA6AD', accent: '#31D57C' };

// Covers are referenced as '/images/projects/gba/03': find the original in images-src.
const original = (base) => {
  const dir = path.join('images-src', path.dirname(base.replace(/^\/images\//, '')));
  const name = path.basename(base);
  const file = fs.readdirSync(dir).find((f) => f.replace(/\.[^.]+$/, '') === name);
  if (!file) throw new Error(`no original for ${base}`);
  return fs.readFileSync(path.join(dir, file)); // buffer: libvips can't open Windows long paths
};

const jpeg = (img) => img.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

fs.mkdirSync(OUT, { recursive: true });
const { projectsMeta } = await loadProjects();

// Per project: cover cropped to 1.91:1 (attention = keep the busiest region).
for (const p of projectsMeta) {
  const buf = await jpeg(sharp(original(p.cover)).resize(W, H, { fit: 'cover', position: sharp.strategy.attention }));
  fs.writeFileSync(path.join(OUT, `${p.slug}.jpg`), buf);
}

// Home: text on the left, three featured covers on the right.
const featured = projectsMeta.filter((p) => p.featured).slice(0, 3);
const tileW = 150;
const tileH = 450;
const tiles = await Promise.all(
  featured.map(async (p, i) => ({
    input: await sharp(original(p.cover))
      .resize(tileW, tileH, { fit: 'cover', position: sharp.strategy.attention })
      .composite([{ input: Buffer.from(`<svg width="${tileW}" height="${tileH}"><rect width="100%" height="100%" rx="18" fill="#fff"/></svg>`), blend: 'dest-in' }])
      .png()
      .toBuffer(),
    left: W - 64 - (3 - i) * tileW - (2 - i) * 14,
    top: (H - tileH) / 2,
  })),
);
const lines = ['Brand identities and', 'campaigns for growing', 'businesses across Dubai,', 'Europe and Africa.'];
const text = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .k { font: 700 18px 'Segoe UI', Arial, sans-serif; letter-spacing: 3px; fill: ${C.accent}; }
    .h { font: 800 36px 'Segoe UI', 'Arial Black', Arial, sans-serif; fill: ${C.fg}; }
    .u { font: 600 22px 'Segoe UI', Arial, sans-serif; fill: ${C.muted}; }
  </style>
  <text x="80" y="170" class="k">BRISTIN BIJU</text>
  ${lines.map((l, i) => `<text x="80" y="${236 + i * 48}" class="h">${esc(l)}</text>`).join('')}
  <text x="80" y="500" class="u">bristin.world</text>
  <rect x="80" y="522" width="56" height="5" rx="2.5" fill="${C.accent}"/>
</svg>`;
const home = await jpeg(
  sharp({ create: { width: W, height: H, channels: 3, background: C.surface } }).composite([
    ...tiles,
    { input: Buffer.from(text), left: 0, top: 0 },
  ]),
);
fs.writeFileSync(path.join(OUT, 'home.jpg'), home);
console.log(`og: ${projectsMeta.length + 1} share images in ${OUT}/`);
