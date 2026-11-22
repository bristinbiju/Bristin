// Loads the TypeScript project data + translations through Vite, for build scripts.
import { createServer } from 'vite';

export async function loadProjects() {
  const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent' });
  try {
    const { projectsMeta } = await vite.ssrLoadModule('/src/data/projects.ts');
    const { translations } = await vite.ssrLoadModule('/src/data/translations.ts');
    return { projectsMeta, translations };
  } finally {
    await vite.close();
  }
}
