// Fails if the site references an image that `npm run images` has not generated,
// and lists generated images nothing references.   npm run check:images
import fs from 'node:fs';
import { createServer } from 'vite';

const FIXED = ['/images/about/photo']; // referenced directly in components
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent' });
try {
  const { projectsMeta } = await vite.ssrLoadModule('/src/data/projects.ts');
  const used = new Set(FIXED);
  for (const p of projectsMeta) {
    [p.logo, p.cover, ...p.gallery, ...p.showcase.map((s) => s.image), ...p.process.map((s) => s.image)]
      .filter(Boolean)
      .forEach((x) => used.add(x));
  }
  const manifest = JSON.parse(fs.readFileSync('src/data/image-manifest.json', 'utf8'));
  const missing = [...used].filter((u) => !manifest[u]);
  const spare = Object.keys(manifest).filter((k) => !used.has(k));
  console.log(`check:images ${used.size} referenced, ${missing.length} missing, ${spare.length} not referenced`);
  if (spare.length) console.log('  not referenced:\n   ' + spare.join('\n   '));
  if (missing.length) {
    console.error('  MISSING:\n   ' + missing.join('\n   '));
    process.exitCode = 1;
  }
} finally {
  await vite.close();
}
