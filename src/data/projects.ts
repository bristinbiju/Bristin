import { translations } from './translations';
import type { Language } from '../context/LanguageContext';
import { TODO } from './content';

export type CategoryKey = 'campaign' | 'socialMedia' | 'branding' | 'packaging';

export type ProjectSlug =
  | 'you-can'
  | 'cowary-farms'
  | 'liverpool'
  | 'devine'
  | 'gba'
  | 'javvis'
  | 'joyce4life'
  | 'forti';

/**
 * Facts that are the same in every language. All wording (title, challenge,
 * captions ...) lives in src/data/case-studies.ts, in EN and FR, keyed by slug
 * and by the `id`s used below.
 *
 * Image paths have no size or extension: '/images/projects/gba/01' means
 * images-src/projects/gba/01.<ext>, published by `npm run images`.
 */
export interface ProjectMeta {
  slug: ProjectSlug;
  num: string;
  name: string;
  client: string;
  logo?: string;
  /** true for dark/coloured logos that need a light plate behind them. */
  logoOnLight?: boolean;
  year: string;
  category: CategoryKey;
  tags: CategoryKey[];
  tools: string[];
  /** Shown as a large card in "Selected work" on the home page. */
  featured: boolean;
  externalLink?: string;
  /** Card image and the large image at the top of the case study. */
  cover: string;
  /** Process stages: text in case-studies.ts > process[id]. */
  process: { id: string; image?: string }[];
  /** Solution images: caption in case-studies.ts > showcase[id]. */
  showcase: { id: string; image: string }[];
  gallery: string[];
}

/** Moodboard, sketches and iterations: same stages for every project until real content exists. */
const defaultProcess = [{ id: 'moodboard' }, { id: 'sketches' }, { id: 'iterations' }];

const img = (slug: ProjectSlug, name: string) => `/images/projects/${slug}/${name}`;
const files = (slug: ProjectSlug, names: string[]) => names.map((n) => img(slug, n));

export const projectsMeta: ProjectMeta[] = [
  {
    slug: 'you-can',
    num: '01',
    name: 'You Can',
    client: 'Liverpool Medical Clinic',
    logo: img('liverpool', 'logo'),
    logoOnLight: true,
    year: TODO('year'),
    category: 'campaign',
    tags: ['campaign'],
    tools: [],
    featured: true,
    externalLink: 'https://www.behance.net/gallery/218572583/World-Cancer-Day?share=1',
    cover: img('you-can', 'you-can-01'),
    process: defaultProcess,
    showcase: [],
    gallery: files('you-can', ['01', '02', '03', '04', '05', '06', '07', '08'].map((n) => `you-can-${n}`)),
  },
  {
    slug: 'cowary-farms',
    num: '02',
    name: 'Cowary Farms',
    client: 'Cowary Farms',
    logo: img('cowary-farms', 'logo'),
    year: TODO('year'),
    category: 'socialMedia',
    tags: ['socialMedia'],
    tools: [],
    featured: false,
    cover: img('cowary-farms', 'cowary'),
    process: defaultProcess,
    showcase: [],
    gallery: files('cowary-farms', [
      '02', 'a-day-on-the-farm', 'artboard-1-1', 'artboard-2', 'artboard-4', 'artboard-5',
      'beekeeping-training-flyer', 'easter-begins-at-the-roots', 'goat-farming', 'global-stage',
      'happy-easter', 'labour-day-post', 'lets-grow-together', 'meet-us-in', 'ranchers-programme',
      'woman-behind-the-vision',
    ]),
  },
  {
    slug: 'liverpool',
    num: '03',
    name: 'Liverpool',
    client: 'Liverpool Medical Clinic',
    logo: img('liverpool', 'logo'),
    logoOnLight: true,
    year: TODO('year'),
    category: 'socialMedia',
    tags: ['socialMedia'],
    tools: [],
    featured: false,
    cover: img('liverpool', 'liverpool'),
    process: defaultProcess,
    showcase: [],
    gallery: files('liverpool', [
      'annual-health-check-02', 'bone-cancer-awareness', 'brain-facts', 'caring', 'easter',
      'fertility-care-and-support02', 'healthy-heart', 'heat-exhaustion-hits-fast', 'ivf',
      'next-big-leap', 'webinar-02', 'webinar02-03-03', 'world-brain-day', 'world-cancer-day04',
      'your-bones-peak',
    ]),
  },
  {
    slug: 'devine',
    num: '04',
    name: 'Devine',
    client: 'Devine',
    logo: img('devine', 'logo'),
    logoOnLight: true,
    year: TODO('year'),
    category: 'socialMedia',
    tags: ['socialMedia'],
    tools: [],
    featured: false,
    cover: img('devine', 'fb-cover'),
    process: defaultProcess,
    showcase: [],
    gallery: files('devine', [
      'carousel-1-01', 'carousel-1-02', 'carousel-1-03', '04-02', 'a-super-crop',
      'carousel-post-why-cassava-06', 'carousel-post-why-cassava-07', 'cookies-recipe-01',
      'easter-poster', 'labour-day', 'pure-natural-divine', 'your-health',
    ]),
  },
  {
    // Stage 2 example: the fullest case study so far.
    slug: 'gba',
    num: '05',
    name: 'GBA',
    client: 'Global Business Africa (GBA)',
    logo: img('gba', 'logo'),
    year: TODO('year, e.g. 2025 (the campaign is for AIM Congress, April 2025)'),
    category: 'branding',
    tags: ['branding', 'campaign'],
    tools: [],
    featured: true,
    cover: img('gba', '03'),
    process: defaultProcess,
    showcase: [
      { id: 'logo', image: img('gba', '01') },
      { id: 'palette', image: img('gba', '08') },
      { id: 'signage', image: img('gba', '03') },
      { id: 'banners', image: img('gba', '04') },
      { id: 'outdoor', image: img('gba', '02') },
      { id: 'digital', image: img('gba', '06') },
      { id: 'merch', image: img('gba', '07') },
      { id: 'campaign', image: img('gba', 'aim-congress-2025-01') },
    ],
    gallery: files('gba', [
      '01', '02', '03', '04', '05', '06', '07', '08', 'aim-congress-2025-01', 'aim-congress-2025-04',
      'aim-congress-2025-05', 'aim-congress-2025-06', 'artboard-5',
    ]),
  },
  {
    slug: 'javvis',
    num: '06',
    name: 'Javvis',
    client: 'Javvis',
    logo: img('javvis', 'logo'),
    year: TODO('year'),
    category: 'branding',
    tags: ['branding'],
    tools: [],
    featured: true,
    cover: img('javvis', '01'),
    process: defaultProcess,
    showcase: [],
    gallery: files('javvis', ['01', '02', '03', '04', '05', '06', '07', '08', '09', 'artboard-1']),
  },
  {
    slug: 'joyce4life',
    num: '07',
    name: 'Joyce4Life',
    client: 'Joyce4Life',
    logo: img('joyce4life', 'logo'),
    logoOnLight: true,
    year: TODO('year'),
    category: 'branding',
    tags: ['branding'],
    tools: [],
    featured: false,
    cover: img('joyce4life', '01'),
    process: defaultProcess,
    showcase: [],
    gallery: files('joyce4life', [
      '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', 'artboard-1',
    ]),
  },
  {
    slug: 'forti',
    num: '08',
    name: 'Forti',
    client: 'Forti',
    logo: img('forti', 'logo'),
    logoOnLight: true,
    year: TODO('year'),
    category: 'packaging',
    tags: ['packaging'],
    tools: [],
    featured: true,
    cover: img('forti', 'package-design-02'),
    process: defaultProcess,
    showcase: [],
    gallery: files('forti', [
      'corn-porridge-package-01', 'fufu-01', 'cassava-starch-red', '06', 'packaging-mockup',
      'packaging-mockup3', 'package-design-02', 'psd-1', 'psd-4',
    ]),
  },
];

/** Projects with their text in the chosen language. */
export const getProjects = (lang: Language) => {
  const t = translations[lang];
  return projectsMeta.map((p) => ({
    ...p,
    // Localised category label (the key stays in categoryKey).
    category: t.projects.categories[p.category],
    categoryKey: p.category,
    text: t.caseStudies[p.slug],
  }));
};

export type Project = ReturnType<typeof getProjects>[number];

export const getProjectBySlug = (lang: Language, slug?: string) =>
  getProjects(lang).find((p) => p.slug === slug);
