import type { ImgHTMLAttributes } from 'react';
import manifest from '../../data/image-manifest.json';

/**
 * Images are referenced by their base path without size or extension,
 * e.g. '/images/projects/gba/01'. `npm run images` generates
 * `<base>-800.webp` and `<base>-1600.webp` and records their size in
 * image-manifest.json.
 */
const sizes = manifest as Record<string, { w: number; h: number }>;

export const imgUrl = (base: string, width: 800 | 1600 = 1600) => `${base}-${width}.webp`;

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> & {
  src: string;
  /** Above-the-fold image: load eagerly with high priority. */
  priority?: boolean;
};

export default function Img({ src, alt, sizes: sizesAttr = '100vw', priority = false, ...rest }: Props) {
  const dim = sizes[src];
  if (import.meta.env.DEV && !dim) console.warn(`[Img] not in image-manifest.json (run npm run images): ${src}`);
  return (
    <img
      src={imgUrl(src, 1600)}
      srcSet={`${imgUrl(src, 800)} 800w, ${imgUrl(src, 1600)} 1600w`}
      sizes={sizesAttr}
      width={dim?.w}
      height={dim?.h}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchPriority: 'high' as const } : {})}
      {...rest}
    />
  );
}
