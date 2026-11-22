import type { ReactNode } from 'react';
import { m } from 'framer-motion';

/**
 * Subtle fade-up when scrolled into view. Reduced motion is handled globally by
 * <MotionConfig reducedMotion="user"> (opacity only, no movement), so the
 * pre-rendered HTML and the client render always match.
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
  const M = as === 'li' ? m.li : m.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  );
}
