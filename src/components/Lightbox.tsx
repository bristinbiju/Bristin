import { useCallback, useEffect, useRef, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  /** Alt text per image (same order as images). */
  alts?: string[];
  initialIndex?: number;
  onClose: () => void;
}

const labels = {
  en: { dialog: 'Image viewer', close: 'Close image viewer', prev: 'Previous image', next: 'Next image', of: 'of' },
  fr: { dialog: "Visionneuse d'images", close: 'Fermer la visionneuse', prev: 'Image précédente', next: 'Image suivante', of: 'sur' },
};

/**
 * Accessible image viewer: a modal dialog that moves focus inside on open,
 * keeps Tab within it, returns focus to the trigger on close, and supports
 * Esc / ← / → plus tap zones on touch screens.
 */
export default function Lightbox({ isOpen, images, alts = [], initialIndex = 0, onClose }: LightboxProps) {
  const { language } = useLanguage();
  const t = labels[language];
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusTo = useRef<HTMLElement | null>(null);

  const count = images.length;
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // Open: remember the trigger, lock scroll, focus the close button. Close: restore all of it.
  useEffect(() => {
    if (!isOpen) return;
    setIndex(initialIndex);
    returnFocusTo.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      returnFocusTo.current?.focus?.();
    };
  }, [isOpen, initialIndex]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowRight' && count > 1) {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft' && count > 1) {
      e.preventDefault();
      prev();
    } else if (e.key === 'Tab') {
      // Focus trap: cycle through the dialog's buttons only.
      // Visible buttons only: prev/next are hidden on small screens.
      const focusable = [...(dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled])') ?? [])].filter(
        (el) => el.getClientRects().length > 0,
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  if (!isOpen || count === 0) return null;

  const alt = alts[index] || `${t.dialog}: ${index + 1} ${t.of} ${count}`;
  const navBtn =
    'absolute top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-fg/10 p-3 text-fg backdrop-blur-md transition-colors hover:bg-fg/20 sm:block';

  return (
    <m.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={t.dialog}
      tabIndex={-1} // clicks inside keep focus in the dialog, so Esc/arrows keep working
      onKeyDown={onKeyDown}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-surface/95 outline-none backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 flex w-full items-center justify-between p-4 sm:p-6">
        <p aria-live="polite" className="pointer-events-auto rounded-full bg-surface/60 px-4 py-2 text-sm font-medium tracking-widest text-fg-muted backdrop-blur-md">
          {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="pointer-events-auto rounded-full bg-fg/10 p-3 text-fg backdrop-blur-md transition-colors hover:bg-fg/20"
          aria-label={t.close}
        >
          <X size={24} aria-hidden />
        </button>
      </div>

      {count > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className={`${navBtn} left-4 md:left-8`}
          aria-label={t.prev}
        >
          <ChevronLeft size={32} aria-hidden />
        </button>
      )}

      <div className="flex h-full w-full items-center justify-center p-4 pt-20 sm:p-12 md:p-24">
        <m.img
          key={index}
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          src={images[index]}
          alt={alt}
          className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {count > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className={`${navBtn} right-4 md:right-8`}
          aria-label={t.next}
        >
          <ChevronRight size={32} aria-hidden />
        </button>
      )}

      {/* Touch: tap the left/right half to move (mouse and keyboard users have the buttons). */}
      {count > 1 && (
        <div className="absolute inset-0 top-20 flex sm:hidden" aria-hidden>
          <div className="h-full w-1/2" onClick={(e) => { e.stopPropagation(); prev(); }} />
          <div className="h-full w-1/2" onClick={(e) => { e.stopPropagation(); next(); }} />
        </div>
      )}
    </m.div>
  );
}
