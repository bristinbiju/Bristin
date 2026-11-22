import { SHOW_DRAFTS } from '../../data/content';

/**
 * Placeholder for missing content. Only rendered in `npm run dev`;
 * renders nothing in the production build.
 */
export default function Todo({ label, hint, className = '' }: { label: string; hint?: string; className?: string }) {
  if (!SHOW_DRAFTS) return null;
  return (
    <div
      className={`rounded-lg border border-dashed border-accent-support/50 bg-accent-support/5 px-4 py-3 text-sm leading-relaxed ${className}`}
      data-todo
    >
      <strong className="font-semibold text-accent-support">TODO · {label}</strong>
      {hint && <span className="mt-0.5 block text-fg-muted">{hint.replace(/^TODO:\s*/i, '')}</span>}
    </div>
  );
}
