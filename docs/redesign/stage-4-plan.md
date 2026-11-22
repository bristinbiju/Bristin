# Stage 4 plan: images, renames, cleanup

**Status: approved and done.** All renames, additions and deletions below were applied. The About section uses the real photo, and Liverpool Medical Clinic is set as the You Can client.

## 1. Image pipeline (not destructive)
- The original files move out of `public/` into `images-src/`. They stay in
  the repo (so nothing is lost) but are no longer deployed.
- `npm run images` generates optimised **WebP** files into `public/images/`
  in 2 sizes (800px and 1600px wide) for responsive `srcset`, with a target
  of ≤ 400 KB each.
- Logos get their empty transparent padding trimmed.
- Every image gets real width/height attributes (no layout shift), and
  everything below the fold lazy-loads.

## 2. Folder renames (folder = project URL slug)
| Now | New | Why |
|---|---|---|
| `liverpool/` | `you-can/` | It holds the **You Can** campaign, not Liverpool |
| `liverpool-social/` | `liverpool/` | It holds the Liverpool social work |
| `cowary/` | `cowary-farms/` | |
| `devine-social/` | `devine/` | |
| `gba-designs/` | `gba/` | |
| `javvis-designs/` | `javvis/` | |
| `joyce4life-designs/` | `joyce4life/` | |
| `forti-designs/` | `forti/` | |

## 3. File renames
Lowercase-and-dashes, with no spaces or symbols. Obvious typos are fixed
(Pakage → package, Gvlobal → global, Casava → cassava, Cookis → cookies) and
"copy" is dropped. 106 files in total; 71 of them get a new name.
Unchanged names (`01.jpg`, `logo.png` ...) are not listed.

### liverpool/ → liverpool/

| Current file | New name (.webp) |
|---|---|
| `Liverpool.png` | `logo` |

### liverpool/ → you-can/

| Current file | New name (.webp) |
|---|---|
| `liverpool-01.png` | `you-can-01` |
| `liverpool-02.png` | `you-can-02` |
| `liverpool-03.png` | `you-can-03` |
| `liverpool-04.png` | `you-can-04` |
| `liverpool-05.png` | `you-can-05` |
| `liverpool-06.png` | `you-can-06` |
| `liverpool-07.png` | `you-can-07` |
| `liverpool-08.png` | `you-can-08` |

### liverpool-social/ → liverpool/

| Current file | New name (.webp) |
|---|---|
| `Annual Health Check 02.jpg` | `annual-health-check-02` |
| `Bone Cancer Awareness_.png` | `bone-cancer-awareness` |
| `Brain Facts.png` | `brain-facts` |
| `Caring.jpg` | `caring` |
| `Easter.jpg` | `easter` |
| `Fertility Care & Support02_.jpg` | `fertility-care-and-support02` |
| `Healthy Heart.jpg` | `healthy-heart` |
| `Heat exhaustion hits fast.png` | `heat-exhaustion-hits-fast` |
| `IVF.png` | `ivf` |
| `Liverpool.jpg` | `liverpool` |
| `Next Big Leap_.jpg` | `next-big-leap` |
| `Webinar -02.jpg` | `webinar-02` |
| `Webinar02 -03-03.jpg` | `webinar02-03-03` |
| `World Brain Day.png` | `world-brain-day` |
| `World Cancer Day04.jpg` | `world-cancer-day04` |
| `Your bones peak.png` | `your-bones-peak` |

### cowary/ → cowary-farms/

| Current file | New name (.webp) |
|---|---|
| `2.jpg` | `02` |
| `A Day on the Farm.jpg` | `a-day-on-the-farm` |
| `Artboard 1.1.png` | `artboard-1-1` |
| `Artboard 2.png` | `artboard-2` |
| `Artboard 4.jpg` | `artboard-4` |
| `Artboard 5.jpg` | `artboard-5` |
| `Beekeeping Training Flyer.jpg` | `beekeeping-training-flyer` |
| `Cowary Farms Logo-01.png` | `logo` |
| `Cowary_.png` | `cowary` |
| `Easter Begins at the Roots.jpg` | `easter-begins-at-the-roots` |
| `Goat Farming.jpg` | `goat-farming` |
| `Gvlobal stage!.jpg` | `global-stage` |
| `Happy Easter.jpg` | `happy-easter` |
| `Labour Day post.jpg` | `labour-day-post` |
| `Let’s Grow ToGether.jpg` | `lets-grow-together` |
| `Meet Us in.jpg` | `meet-us-in` |
| `Ranchers Programme copy.jpg` | `ranchers-programme` |
| `Woman Behind the Vision.jpg` | `woman-behind-the-vision` |

### devine-social/ → devine/

| Current file | New name (.webp) |
|---|---|
| `04_02.jpg` | `04-02` |
| `A super Crop.jpg` | `a-super-crop` |
| `Carousel-Post---Why-Cassava_06.jpg` | `carousel-post-why-cassava-06` |
| `Carousel-Post---Why-Cassava_07.jpg` | `carousel-post-why-cassava-07` |
| `Cookis-Recipe_01.jpg` | `cookies-recipe-01` |
| `Easter Poster.jpg` | `easter-poster` |
| `FB Cover.jpg` | `fb-cover` |
| `Labour Day.jpg` | `labour-day` |
| `Pure. Natural. Divine.jpg` | `pure-natural-divine` |
| `Your Health.jpg` | `your-health` |
| `carousel-1_01.jpg` | `carousel-1-01` |
| `carousel-1_02.jpg` | `carousel-1-02` |
| `carousel-1_03.jpg` | `carousel-1-03` |
| `logo.png` | `logo` |

### gba-designs/ → gba/

| Current file | New name (.webp) |
|---|---|
| `01.jpg` | `01` |
| `02.jpg` | `02` |
| `03.jpg` | `03` |
| `04.jpg` | `04` |
| `05.jpg` | `05` |
| `06.jpg` | `06` |
| `07.jpg` | `07` |
| `08.jpg` | `08` |
| `AIM Congress 2025 01.jpg` | `aim-congress-2025-01` |
| `AIM Congress 2025 04.jpg` | `aim-congress-2025-04` |
| `AIM Congress 2025 05.jpg` | `aim-congress-2025-05` |
| `AIM Congress 2025 06.jpg` | `aim-congress-2025-06` |
| `Artboard 5.jpg` | `artboard-5` |
| `logo.png` | `logo` |

### javvis-designs/ → javvis/

| Current file | New name (.webp) |
|---|---|
| `01.jpg` | `01` |
| `02.jpg` | `02` |
| `03.jpg` | `03` |
| `04.jpg` | `04` |
| `05.jpg` | `05` |
| `06.jpg` | `06` |
| `07.jpg` | `07` |
| `08.jpg` | `08` |
| `09.jpg` | `09` |
| `Artboard 1.jpg` | `artboard-1` |
| `logo.png` | `logo` |

### joyce4life-designs/ → joyce4life/

| Current file | New name (.webp) |
|---|---|
| `01.jpg` | `01` |
| `02.jpg` | `02` |
| `03.jpg` | `03` |
| `04.jpg` | `04` |
| `05.jpg` | `05` |
| `06.jpg` | `06` |
| `07.jpg` | `07` |
| `08.jpg` | `08` |
| `09.jpg` | `09` |
| `10.jpg` | `10` |
| `11.jpg` | `11` |
| `12.jpg` | `12` |
| `Artboard 1.jpg` | `artboard-1` |
| `logo.png` | `logo` |

### forti-designs/ → forti/

| Current file | New name (.webp) |
|---|---|
| `06.jpg` | `06` |
| `Casava Starch Red.jpg` | `cassava-starch-red` |
| `Corn Porridge Pakage 01.jpg` | `corn-porridge-package-01` |
| `Fufu 01.jpg` | `fufu-01` |
| `Packaging Mockup.jpg` | `packaging-mockup` |
| `Packaging Mockup3.jpg` | `packaging-mockup3` |
| `Pakage Design 02.jpg` | `package-design-02` |
| `Psd_1.jpg` | `psd-1` |
| `Psd_4.jpg` | `psd-4` |
| `logo.png` | `logo` |

## 4. Unused project images: add to the site instead of deleting
| File | Proposal |
|---|---|
| `cowary/Let’s Grow ToGether.jpg` | add to the Cowary Farms gallery |
| `forti-designs/06.jpg`, `Casava Starch Red.jpg` (Cassava Starch packs) | add to the Forti gallery |
| `liverpool/liverpool-07.png`, `-08.png` (You Can posts) | add to the You Can gallery |
| `liverpool/Liverpool.png` (Liverpool Medical Clinic logo) | use as the **Liverpool** project logo |
| `hero-asset.png` (a real photo of you) | keep: your choice of photo or 3D avatar in About |

## 5. Delete (git history keeps a copy of everything)
**Images, 54 MB:**
- `services/` (all 9 files, none of them shown anywhere): `Brand.jpg`,
  `brand-identity.jpg`, `digital-social.jpg` (19.4 MB), `digital_social.jpg`
  (19.4 MB, a duplicate), `digital_social_update.jpg`, `motion-ai.jpg`,
  `motion_ai.jpg` (a duplicate), `print-editorial.jpg`, `print_media.jpg`
  (a duplicate)
- `hero-3d-asset.jpg` (a generic AI stock cube)
- `forti-designs/Pakage-05.png` (duplicate of the Forti logo)
- `javvis-designs/Javvis Logo-17.png` (duplicate of the Javvis logo)
- `public/icons.svg` (unreferenced)

**Old code that the new design no longer renders:**
`HeroSection`, `MarqueeSection`, `AboutSection`, `ServicesSection`,
`ProjectsSection`, `ContactSection`, `AnimatedText`, `Magnet`,
`ContactButton`, `LiveProjectButton`, `LanguageSwitcher` and `FadeIn`
(`.tsx` files in `src/components/`), plus `src/App.css`, the unused
`src/assets/` files (`hero.png`, `react.svg`, `vite.svg`) and the
`.hero-heading` CSS utility.
