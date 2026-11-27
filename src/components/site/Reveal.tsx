import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Subtle fade-up when scrolled into view, as a progressive enhancement:
 *
 * - The HTML (pre-rendered and hydrated) is always fully visible, so search
 *   engines, link previews and visitors whose browser doesn't run the script
 *   see all content.
 * - After hydration, only elements that are still outside the viewport (not
 *   seen yet) are hidden, then fade in when scrolled to. Anything already on
 *   screen is left alone, so nothing visible ever disappears.
 * - Skipped entirely for prefers-reduced-motion.
 *
 * The hidden/shown states are CSS ([data-reveal] in index.css). They're set
 * on the DOM node directly, outside React's props, so hydration always matches.
 */
export default function Reveal({
  children,
  className = '',
  as = 'div',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li';
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return; // already visible: never hide it

    el.dataset.reveal = 'hidden';
    if (delay) el.style.transitionDelay = `${delay}s`;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.dataset.reveal = 'shown';
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      // Leave content visible if the component unmounts mid-way.
      if (el.dataset.reveal === 'hidden') el.dataset.reveal = 'shown';
    };
  }, [delay]);

  if (as === 'li') {
    return (
      <li ref={(n) => { ref.current = n; }} className={className}>
        {children}
      </li>
    );
  }
  return (
    <div ref={(n) => { ref.current = n; }} className={className}>
      {children}
    </div>
  );
}
