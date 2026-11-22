/**
 * Favicon set, generated from the master public/favicon.svg ("B" monogram):
 *
 *   npm run favicon
 *
 *   public/favicon.ico           16 + 32 + 48 px (legacy browsers, /favicon.ico requests)
 *   public/favicon-96x96.png     Google Search (needs a multiple of 48px)
 *   public/apple-touch-icon.png  180 px (iOS home screen, bookmarks)
 *   public/icon-192.png          web manifest
 *   public/icon-512.png          web manifest
 *
 * The SVG itself is served as the primary icon. Edit it, then run this script,
 * and bump the ?v= number on the icon links in index.html and site.webmanifest.
 */
import fs from 'node:fs';
import sharp from 'sharp';

const svg = fs.readFileSync('public/favicon.svg');
const png = (size) => sharp(svg, { density: Math.max(72, (size / 64) * 72 * 4) }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

/** ICO container with PNG-encoded images (supported by all current browsers). */
function ico(images) {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, i) => {
    const e = 6 + 16 * i;
    header.writeUInt8(size >= 256 ? 0 : size, e); // width
    header.writeUInt8(size >= 256 ? 0 : size, e + 1); // height
    header.writeUInt8(0, e + 2); // palette
    header.writeUInt8(0, e + 3); // reserved
    header.writeUInt16LE(1, e + 4); // colour planes
    header.writeUInt16LE(32, e + 6); // bits per pixel
    header.writeUInt32LE(data.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map((im) => im.data)]);
}

const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(icoSizes.map(async (size) => ({ size, data: await png(size) })));
fs.writeFileSync('public/favicon.ico', ico(icoImages));

const files = { 'favicon-96x96.png': 96, 'apple-touch-icon.png': 180, 'icon-192.png': 192, 'icon-512.png': 512 };
for (const [name, size] of Object.entries(files)) fs.writeFileSync(`public/${name}`, await png(size));

console.log(`favicon: favicon.ico (${icoSizes.join('/')}), ${Object.keys(files).join(', ')}`);
