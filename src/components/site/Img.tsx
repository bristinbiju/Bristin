import type { ImgHTMLAttributes } from 'react';
import { imageInfo, imgSrcSet, imgUrl } from '../../lib/images';

// Re-exported for existing imports (CaseStudyPage's lightbox).
export { imgUrl, imgSrcSet };

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> & {
  /** Base path without size or extension, e.g. '/images/projects/gba/01' (see src/lib/images.ts). */
  src: string;
  /** Above-the-fold image: load eagerly with high priority. */
  priority?: boolean;
};

export default function Img({ src, alt, sizes: sizesAttr = '100vw', priority = false, ...rest }: Props) {
  const dim = imageInfo[src];
  if (import.meta.env.DEV && !dim) console.warn(`[Img] not in image-manifest.json (run npm run images): ${src}`);
  return (
    <img
      src={imgUrl(src, 1600)}
      srcSet={imgSrcSet(src)}
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
