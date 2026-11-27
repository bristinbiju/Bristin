import manifest from '../data/image-manifest.json';
import ogManifest from '../data/og-manifest.json';

/**
 * Image URLs. Images are referenced by base path without size or extension,
 * e.g. '/images/projects/gba/01'; `npm run images` publishes
 * `<base>-400|800|1600.webp` and records size + content hash in image-manifest.json.
 *
 * Every URL carries `?v=<content hash>`: images are cached as immutable for a
 * year (vercel.json), so a replaced image must get a new URL to be re-fetched.
 */
export const imageInfo = manifest as Record<string, { w: number; h: number; v?: string }>;

export const IMAGE_WIDTHS = [400, 800, 1600] as const;

export const imgUrl = (base: string, width: 400 | 800 | 1600 = 1600) => {
  const v = imageInfo[base]?.v;
  return `${base}-${width}.webp${v ? `?v=${v}` : ''}`;
};

export const imgSrcSet = (base: string) => IMAGE_WIDTHS.map((w) => `${imgUrl(base, w)} ${w}w`).join(', ');

/** Share image path ('/og/gba.jpg') with its content hash. */
export const ogUrl = (file: string) => {
  const v = (ogManifest as Record<string, string>)[file];
  return v ? `${file}?v=${v}` : file;
};
