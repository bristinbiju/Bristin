import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Subtle fade-up when scrolled into view. Renders static content under prefers-reduced-motion. */
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
  const reduce = useReducedMotion();
  const Tag = as;
  if (reduce) return <Tag className={className}>{children}</Tag>;
  const M = as === 'li' ? motion.li : motion.div;
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
