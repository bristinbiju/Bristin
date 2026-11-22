/**
 * Image pipeline: images-src/  ->  public/images/  (+ src/data/image-manifest.json)
 *
 *   npm run images          only process new or changed originals
 *   npm run images -- --all reprocess everything
 *
 * Each original becomes three WebP files, `<name>-400|800|1600.webp`,
 * at the same relative path. Logos (`logo.*`) get their transparent padding
 * trimmed first. The manifest stores each image's size so pages can set
 * width/height and avoid layout shift.
 *
 * To add an image: drop the original into images-src/<same folder>, run
 * `npm run images`, then reference it in code without an extension, e.g.
 * '/images/projects/gba/01'.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'images-src';
const OUT = 'public/images';
const MANIFEST = 'src/data/image-manifest.json';
const WIDTHS = [400, 800, 1600];
const MAX_BYTES = 400 * 1024;
const all = process.argv.includes('--all');

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)],
  );

const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
const seen = new Set();
let made = 0;
let skipped = 0;
const oversize = [];

for (const file of walk(SRC).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).sort()) {
  const rel = path.relative(SRC, file).replace(/\\/g, '/').replace(/\.[^.]+$/, ''); // projects/gba/01
  const key = `/images/${rel}`;
  seen.add(key);
  const outBase = path.join(OUT, rel);
  const outputs = WIDTHS.map((w) => `${outBase}-${w}.webp`);
  const srcTime = fs.statSync(file).mtimeMs;

  if (!all && manifest[key] && outputs.every((o) => fs.existsSync(o) && fs.statSync(o).mtimeMs >= srcTime)) {
    skipped++;
    continue;
  }

  fs.mkdirSync(path.dirname(outBase), { recursive: true });
  const isLogo = path.basename(rel) === 'logo';
  // Read through Node (handles Windows long paths; libvips does not).
  let input = sharp(fs.readFileSync(file), { limitInputPixels: false }).rotate();
  if (isLogo) input = sharp(await input.trim().toBuffer());

  let largest;
  for (const [i, w] of WIDTHS.entries()) {
    // Step quality down until the file fits the budget (floor 55).
    let q = isLogo ? 90 : 80;
    let buf;
    do {
      buf = await input.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: q, effort: 5 }).toBuffer();
      q -= 8;
    } while (buf.length > MAX_BYTES && q >= 55);
    if (buf.length > MAX_BYTES) oversize.push(`${outputs[i]} (${Math.round(buf.length / 1024)} KB)`);
    fs.writeFileSync(outputs[i], buf);
    largest = buf;
  }
  const meta = await sharp(largest).metadata(); // largest = the 1600 output
  manifest[key] = { w: meta.width, h: meta.height };
  made++;
}

// Drop manifest entries (and outputs) whose original is gone.
for (const key of Object.keys(manifest)) {
  if (seen.has(key)) continue;
  delete manifest[key];
  for (const w of WIDTHS) fs.rmSync(path.join('public', `${key}-${w}.webp`), { force: true });
}

const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
fs.writeFileSync(MANIFEST, JSON.stringify(sorted, null, 1) + '\n');
console.log(`images: ${made} processed, ${skipped} unchanged, ${Object.keys(sorted).length} total`);
if (oversize.length) console.warn(`over ${MAX_BYTES / 1024} KB:\n  ${oversize.join('\n  ')}`);
