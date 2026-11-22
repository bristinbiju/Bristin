import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Scroll smoothly to a section on the current page (instant under reduced motion). */
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    block: 'start',
    behavior: prefersReducedMotion() ? 'instant' : 'smooth',
  });
}

/**
 * Handles scrolling on navigation:
 * - a new page starts at the top;
 * - /#section from another page jumps straight to that section;
 * - #section on the same page scrolls there smoothly.
 * 'instant' overrides the global `scroll-behavior: smooth`, so a page change
 * never starts as a long smooth scroll that another navigation can interrupt.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    const samePage = prevPath.current === pathname;
    prevPath.current = pathname;

    if (!hash) {
      if (!samePage) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    if (samePage) {
      scrollToSection(id);
      return;
    }
    let tries = 0;
    const timer = window.setInterval(() => {
      const el = document.getElementById(id);
      if (el || ++tries > 20) {
        window.clearInterval(timer);
        el?.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
    }, 50);
    return () => window.clearInterval(timer);
  }, [pathname, hash]);

  return null;
}
