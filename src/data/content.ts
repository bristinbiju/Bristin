/**
 * Placeholder convention for unknown content.
 *
 * Any text that starts with "TODO" counts as missing. Missing content is
 * hidden on the live site. In `npm run dev` it shows as a dashed
 * placeholder, so you can see what still needs writing.
 *
 * To list every open item, run:  git grep -n "TODO" src/data
 */
export const TODO = (hint: string) => `TODO: ${hint}`;

export const isFilled = (value?: string | null): boolean =>
  !!value && !value.trim().toUpperCase().startsWith('TODO');

export const filledList = (values?: string[]) => (values ?? []).filter(isFilled);

export const SHOW_DRAFTS = import.meta.env.DEV;
