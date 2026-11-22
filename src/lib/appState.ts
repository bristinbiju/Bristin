/**
 * Becomes true once the first render (including hydration of the pre-rendered
 * HTML) has been committed. Anything that animates on page change checks it,
 * so the first paint matches the server HTML exactly and only later client-side
 * navigations animate.
 */
export const appState = { ready: false };
