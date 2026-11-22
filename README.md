# bristin.world

Portfolio of **Bristin Biju**, brand and graphic designer (Dubai · Europe · Africa).

React 19 · TypeScript · Vite · Tailwind CSS v4 · framer-motion · react-router. The site
is in English and French, every page is pre-rendered to static HTML at build time, and
it deploys to Vercel.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173 (also shows TODO placeholders for missing content)
npm run build      # production build in dist/ (type-check, bundle, pre-render, sitemap)
npm run preview    # serve dist/ locally
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload. Missing case-study content shows as dashed **TODO** boxes. |
| `npm run build` | `tsc` → `vite build` → `scripts/build-meta.mjs` (pre-renders every page, adds per-page SEO tags, `sitemap.xml`, `robots.txt`). |
| `npm run images` | Converts originals in `images-src/` to WebP (400/800/1600px) in `public/images/`, and generates the share images in `public/og/`. Run it after adding or changing any image. |
| `npm run check:images` | Fails if the site references an image that hasn't been generated. |

## Folder structure

```
images-src/              Original images (kept in git, NOT deployed)
  about/                 photo.png (used), avatar.png (alternative)
  projects/<slug>/       one folder per project; logo.* gets auto-trimmed
public/
  images/                Generated WebP files (don't edit by hand; run npm run images)
  og/                    Generated 1200x630 share images
scripts/                 Build tooling (image pipeline, share images, pre-render/SEO)
src/
  data/
    projects.ts          Project facts: slug, client, logo, year, tools, images, featured
    case-studies.ts      Case-study wording, EN + FR (title, challenge, process, outcome ...)
    translations.ts      All other site copy, EN + FR
    content.ts           The TODO convention (see below)
    seo.ts               Page titles, descriptions, share images (browser + build)
    image-manifest.json  Generated image sizes (used for width/height)
  components/
    home/                Home page sections
    site/                Shared pieces: header, footer, Img, Reveal, Todo
    Lightbox.tsx         Accessible image viewer
  pages/                 HomePage, CaseStudyPage
  index.css              Design tokens (@theme): colours, fonts, type scale, layout utilities
docs/redesign/           Redesign notes: audit, accent options, content checklist
```

## Design system

All tokens live in `src/index.css` under `@theme`. Use the Tailwind utilities they
generate, not hex values:

- **Surfaces:** `bg-surface` (#14191C blue-charcoal), `bg-surface-raised`, `bg-paper`
  (#EDEDED light sections)
- **Text:** `text-fg` and `text-fg-muted` on dark; `text-ink` and `text-ink-muted` on light
- **Accent (Ribbon Green):** `text-accent` / `bg-accent` (#31D57C) on dark,
  `text-accent-ink` (#0E7A43) on light, `text-accent-fg` for text on accent buttons. Use
  the accent only for buttons, links and key words.
- **Type:** `font-display` (Syne 700) for headings, `font-body` (Be Vietnam Pro) for
  text. Sizes `text-h1`, `text-h2`, `text-h3`, `text-lead`, `text-body`.
- **Layout:** `content-wrap` (1200px column with gutters), `section-pad` (64/96/128px),
  `grid-12`, `rounded-card`

All text pairs meet WCAG AA.

## How to add a project

1. **Images.** Create `images-src/projects/<slug>/` and add the originals. Use
   lowercase-and-dashes names (`cover.jpg`, `packaging-01.jpg`) and include a `logo.png`
   if you have one. Then run:
   ```bash
   npm run images
   ```
2. **Facts.** Add an entry to `projectsMeta` in `src/data/projects.ts`, and add the slug
   to the `ProjectSlug` type. Image paths have no size or extension:
   ```ts
   {
     slug: 'acme',
     num: '09',
     name: 'Acme',
     client: 'Acme Ltd',
     logo: img('acme', 'logo'),
     year: '2026',
     category: 'branding',            // branding | campaign | packaging | socialMedia
     tags: ['branding'],
     tools: ['Illustrator', 'Photoshop'],
     featured: false,                 // true = large card on the home page
     cover: img('acme', 'cover'),
     process: defaultProcess,         // or [{ id: 'moodboard', image: img('acme', 'moodboard') }, ...]
     showcase: [],                    // [{ id: 'logo', image: img('acme', 'logo-sheet') }, ...]
     gallery: files('acme', ['01', '02', '03']),
   },
   ```
3. **Words.** Add `acme` to both `caseStudiesEn` and `caseStudiesFr` in
   `src/data/case-studies.ts`. Start from `blankEn('Acme')` / `blankFr('Acme')` and
   replace the TODOs you can.
4. **Check.** Run `npm run check:images` and `npm run build`. The page is live at
   `/work/acme`, it is in the sitemap, and it has its own share image.

## The TODO convention

Any text that starts with `TODO` (written as `TODO('hint')`) is **hidden on the live
site** and shown as a dashed placeholder in `npm run dev`. Facts are never invented:
leave a field as TODO until the real information exists. List what is still open with:

```bash
git grep -n "TODO(" src/data
```

`docs/redesign/content-todo.md` has the same list as a table.

## Deploy (Vercel)

`vercel.json` serves each pre-rendered page by its clean URL (`/work/gba` →
`work/gba.html`), rewrites any other path to the app, and caches images, share images
and hashed assets for a year. Push to the deployed branch and Vercel runs
`npm run build`.

## Notes

- **Windows:** this repo has a few long paths. If a clone fails, run
  `git config --global core.longpaths true` and clone again.
- **Performance:** fonts are self-hosted, and the hero fonts and each case-study cover
  are preloaded. Lighthouse (mobile) scored 98–100 Performance and 100 in Accessibility,
  Best Practices and SEO on the pages tested.
