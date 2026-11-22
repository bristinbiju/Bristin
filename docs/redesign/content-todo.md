# Content you need to provide

Every case-study page is live at `/work/<slug>`. Any field still marked
`TODO` is **hidden on the live site** and shown as a dashed box in
`npm run dev`, so the pages work now and fill in as you write.

To see every open item at any time, run:

```
git grep -n "TODO" src/data
```

## Where to write
| What | File | Notes |
|---|---|---|
| Title, summary, role, deliverables, challenge, goal, process text, solution, outcome, image captions | `src/data/case-studies.ts` | Once in `caseStudiesEn` and once in `caseStudiesFr` |
| Client name, year, tools, logo, featured, process images, solution images | `src/data/projects.ts` | Language-neutral facts |

## Per project (EN + FR each)
| Field | you-can | cowary-farms | liverpool | devine | gba | javvis | joyce4life | forti |
|---|---|---|---|---|---|---|---|---|
| Title (states the result) | ✗ | ✗ | ✗ | ✗ | ✗ ¹ | ✗ | ✗ | ✗ |
| One-line summary / outcome | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Your role | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Year | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Tools | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Deliverables | ✗ | ✗ | ✗ | ✗ | ✓ ² | ✗ | ✗ | ✗ |
| Client name | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Challenge (2-3 sentences) | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Goal | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Process: moodboard, sketches, iterations (text + image) | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Solution text | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Solution images + captions | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ |
| Outcome (numbers if you have them) | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |

1. Suggested: "Rebranding GBA for AIM Congress 2025". Please confirm whether
   it was a new identity or a rebrand.
2. Taken from what the artwork shows (logo, palette, signage, posters,
   digital, merch, social campaign). Please confirm that all of it was your
   work.
3. ~~Which organisation was "You Can" for?~~ Liverpool Medical Clinic (confirmed in Stage 4).

## Decisions
- **Featured projects** (large cards on the home page in Stage 3): currently
  `you-can`, `gba`, `javvis` and `forti`. Change `featured` in `projects.ts`.
- **Names:** kept as Devine / Javvis / Forti, as you chose. Note that the logo
  files read "Divine Favour", "Javvy's" and "Fortii".
