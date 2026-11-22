# Stage 1 audit: current site (main @ 48f33f6)

The baseline `npm run build` passes: JS 362 KB (113 KB gzip), CSS 29 KB.

## Structure
`App.tsx` → Hero, Marquee, About, Services, Projects, Contact, all on a single
page with no router. The projects come from `src/data/projects.ts` (8 entries).
EN/FR text lives in `src/data/translations.ts`.

## Issues found

### Layout and design
| # | Issue | Where | Fixed in |
|---|---|---|---|
| 1 | The hero H1 is `whitespace-nowrap` at 14-17.5vw, so it can never wrap and clips on narrow screens | `HeroSection.tsx:61` | Stage 3 |
| 2 | 17 different hex colours are hard-coded in components (`#D7E2EA` ×17, `#8900ff` ×10, `#B600A8` ×9 …), and the palette mixes magenta, purple, orange and cyan with no system | all components | Stage 3 (tokens now exist) |
| 3 | The `tailwind.config.js` v3 file was never loaded by Tailwind v4 | root | **Done**: deleted |
| 4 | Kanit is loaded at 7 weights from Google Fonts with no preload | `index.html:37` | Stage 3 |
| 5 | `Magnet` (cursor-following hero image) and `MarqueeSection` add motion without adding content | components | Stage 3 |

### Content and accuracy
| # | Issue | Where |
|---|---|---|
| 6 | The vague "5 Disciplines" and "3 Continents" stats, with FR labels hard-coded outside translations.ts | `AboutSection.tsx:12-16` |
| 7 | **Names differ from the artwork:** the data says "Devine" but the artwork says "Divine Favour", and the data says "Javvis" but the logo reads "Javvy's" | `projects.ts` |
| 8 | "You Can" uses the `liverpool/` folder while "Liverpool" uses `liverpool-social/` | `projects.ts` |
| 9 | Projects only open a lightbox: there is no brief, role, process or outcome | `ProjectsSection.tsx` |

### Performance (the biggest win)
- `public/` is **140 MB**: 117 PNG/JPG files, 87 of them over 400 KB.
- **None of the 9 service images are used** (54 MB). They include two
  identical 19.4 MB files (`digital-social.jpg`, `digital_social.jpg`).
- 26 files in `public/` are unused overall, including all 7 client logos
  (wanted for the proof strip), `hero-asset.png`, `hero-3d-asset.jpg`,
  `icons.svg` and 6 extra project images.
- `src/App.css` and `src/assets/*` (hero.png, react.svg, vite.svg) are never
  imported.
- 47 filenames contain spaces or symbols (`Gvlobal stage!.jpg`,
  `Let’s Grow ToGether.jpg`). Three paths are long enough to break a Windows
  checkout in a deep folder (fixed locally with `core.longpaths`).

### SEO and accessibility
- `og:image` points at `/og-image.jpg`, which does not exist.
- There is no `vercel.json`, so new `/work/:slug` routes would 404 on refresh.
- There is no sitemap or robots.txt.
- Lightbox: Esc and arrow keys already work, but there is no focus trap and
  focus is not returned to the trigger on close.
- Every image has alt text, but most use a generic "Project name image N".

## What Stage 1 changed
1. `src/index.css`: added the design-system tokens (`@theme`): surfaces,
   text, accent (placeholder), fonts, fluid type scale, container width and
   card radius. Added the `section-pad`, `content-wrap` and `grid-12`
   utilities. **No visual change:** nothing uses them yet, and the build
   confirms that none of them are emitted.
2. Deleted the dead `tailwind.config.js`.
3. Added `docs/redesign/accent-options.html` with three accent options from
   your artwork, all checked for WCAG AA.

## Decisions needed from you
- **Accent:** A (Ribbon Green), B (Harvest Gold) or C (Signal Red).
- **Project names:** "Devine" or "Divine Favour"? "Javvis" or "Javvy's"?
- **Fonts:** keep Syne + Be Vietnam Pro, or try alternatives?
