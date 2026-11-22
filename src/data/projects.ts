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
  /** Shown as a large card in "Selected work" on the home page (Stage 3). */
  featured: boolean;
  externalLink?: string;
  /** Card images used by the current home page. */
  images: { leftTop: string; leftBottom: string; right: string };
  /** Large image at the top of the case study. */
  cover: string;
  /** Process stages: text in case-studies.ts > process[id]. */
  process: { id: string; image?: string }[];
  /** Solution images: caption in case-studies.ts > showcase[id]. */
  showcase: { id: string; image: string }[];
  gallery: string[];
}

/** Moodboard, sketches and iterations: same stages for every project until real content exists. */
const defaultProcess = [{ id: 'moodboard' }, { id: 'sketches' }, { id: 'iterations' }];

const P = '/images/projects';

export const projectsMeta: ProjectMeta[] = [
  {
    slug: 'you-can',
    num: '01',
    name: 'You Can',
    client: TODO('client for the World Cancer Day "You Can" campaign'),
    year: TODO('year'),
    category: 'campaign',
    tags: ['campaign'],
    tools: [],
    featured: true,
    externalLink: 'https://www.behance.net/gallery/218572583/World-Cancer-Day?share=1',
    images: {
      leftTop: `${P}/liverpool/liverpool-01.png`,
      leftBottom: `${P}/liverpool/liverpool-02.png`,
      right: `${P}/liverpool/liverpool-03.png`,
    },
    cover: `${P}/liverpool/liverpool-01.png`,
    process: defaultProcess,
    showcase: [],
    gallery: [1, 2, 3, 4, 5, 6].map((n) => `${P}/liverpool/liverpool-0${n}.png`),
  },
  {
    slug: 'cowary-farms',
    num: '02',
    name: 'Cowary Farms',
    client: 'Cowary Farms',
    logo: `${P}/cowary/Cowary Farms Logo-01.png`,
    year: TODO('year'),
    category: 'socialMedia',
    tags: ['socialMedia'],
    tools: [],
    featured: false,
    images: {
      leftTop: `${P}/cowary/Cowary_.png`,
      leftBottom: `${P}/cowary/Goat Farming.jpg`,
      right: `${P}/cowary/Gvlobal stage!.jpg`,
    },
    cover: `${P}/cowary/Cowary_.png`,
    process: defaultProcess,
    showcase: [],
    gallery: [
      '2.jpg', 'A Day on the Farm.jpg', 'Artboard 1.1.png', 'Artboard 2.png', 'Artboard 4.jpg',
      'Artboard 5.jpg', 'Beekeeping Training Flyer.jpg', 'Easter Begins at the Roots.jpg',
      'Goat Farming.jpg', 'Gvlobal stage!.jpg', 'Happy Easter.jpg', 'Labour Day post.jpg',
      'Meet Us in.jpg', 'Ranchers Programme copy.jpg', 'Woman Behind the Vision.jpg',
    ].map((f) => `${P}/cowary/${f}`),
  },
  {
    slug: 'liverpool',
    num: '03',
    name: 'Liverpool',
    client: 'Liverpool',
    year: TODO('year'),
    category: 'socialMedia',
    tags: ['socialMedia'],
    tools: [],
    featured: false,
    images: {
      leftTop: `${P}/liverpool-social/Liverpool.jpg`,
      leftBottom: `${P}/liverpool-social/Caring.jpg`,
      right: `${P}/liverpool-social/Annual Health Check 02.jpg`,
    },
    cover: `${P}/liverpool-social/Liverpool.jpg`,
    process: defaultProcess,
    showcase: [],
    gallery: [
      'Annual Health Check 02.jpg', 'Bone Cancer Awareness_.png', 'Brain Facts.png', 'Caring.jpg',
      'Easter.jpg', 'Fertility Care & Support02_.jpg', 'Healthy Heart.jpg',
      'Heat exhaustion hits fast.png', 'IVF.png', 'Next Big Leap_.jpg', 'Webinar -02.jpg',
      'Webinar02 -03-03.jpg', 'World Brain Day.png', 'World Cancer Day04.jpg', 'Your bones peak.png',
    ].map((f) => `${P}/liverpool-social/${f}`),
  },
  {
    slug: 'devine',
    num: '04',
    name: 'Devine',
    client: 'Devine',
    logo: `${P}/devine-social/logo.png`,
    logoOnLight: true,
    year: TODO('year'),
    category: 'socialMedia',
    tags: ['socialMedia'],
    tools: [],
    featured: false,
    images: {
      leftTop: `${P}/devine-social/FB Cover.jpg`,
      leftBottom: `${P}/devine-social/Pure. Natural. Divine.jpg`,
      right: `${P}/devine-social/Your Health.jpg`,
    },
    cover: `${P}/devine-social/FB Cover.jpg`,
    process: defaultProcess,
    showcase: [],
    gallery: [
      'carousel-1_01.jpg', 'carousel-1_02.jpg', 'carousel-1_03.jpg', '04_02.jpg', 'A super Crop.jpg',
      'Carousel-Post---Why-Cassava_06.jpg', 'Carousel-Post---Why-Cassava_07.jpg',
      'Cookis-Recipe_01.jpg', 'Easter Poster.jpg', 'Labour Day.jpg', 'Pure. Natural. Divine.jpg',
      'Your Health.jpg',
    ].map((f) => `${P}/devine-social/${f}`),
  },
  {
    // Stage 2 example: the fullest case study so far.
    slug: 'gba',
    num: '05',
    name: 'GBA',
    client: 'Global Business Africa (GBA)',
    logo: `${P}/gba-designs/logo.png`,
    year: TODO('year, e.g. 2025 (the campaign is for AIM Congress, April 2025)'),
    category: 'branding',
    tags: ['branding', 'campaign'],
    tools: [],
    featured: true,
    images: {
      leftTop: `${P}/gba-designs/Artboard 5.jpg`,
      leftBottom: `${P}/gba-designs/01.jpg`,
      right: `${P}/gba-designs/02.jpg`,
    },
    cover: `${P}/gba-designs/03.jpg`,
    process: defaultProcess,
    showcase: [
      { id: 'logo', image: `${P}/gba-designs/01.jpg` },
      { id: 'palette', image: `${P}/gba-designs/08.jpg` },
      { id: 'signage', image: `${P}/gba-designs/03.jpg` },
      { id: 'banners', image: `${P}/gba-designs/04.jpg` },
      { id: 'outdoor', image: `${P}/gba-designs/02.jpg` },
      { id: 'digital', image: `${P}/gba-designs/06.jpg` },
      { id: 'merch', image: `${P}/gba-designs/07.jpg` },
      { id: 'campaign', image: `${P}/gba-designs/AIM Congress 2025 01.jpg` },
    ],
    gallery: [
      '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg',
      'AIM Congress 2025 01.jpg', 'AIM Congress 2025 04.jpg', 'AIM Congress 2025 05.jpg',
      'AIM Congress 2025 06.jpg', 'Artboard 5.jpg',
    ].map((f) => `${P}/gba-designs/${f}`),
  },
  {
    slug: 'javvis',
    num: '06',
    name: 'Javvis',
    client: 'Javvis',
    logo: `${P}/javvis-designs/logo.png`,
    year: TODO('year'),
    category: 'branding',
    tags: ['branding'],
    tools: [],
    featured: true,
    images: {
      leftTop: `${P}/javvis-designs/01.jpg`,
      leftBottom: `${P}/javvis-designs/02.jpg`,
      right: `${P}/javvis-designs/03.jpg`,
    },
    cover: `${P}/javvis-designs/01.jpg`,
    process: defaultProcess,
    showcase: [],
    gallery: [
      '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg',
      'Artboard 1.jpg',
    ].map((f) => `${P}/javvis-designs/${f}`),
  },
  {
    slug: 'joyce4life',
    num: '07',
    name: 'Joyce4Life',
    client: 'Joyce4Life',
    logo: `${P}/joyce4life-designs/logo.png`,
    logoOnLight: true,
    year: TODO('year'),
    category: 'branding',
    tags: ['branding'],
    tools: [],
    featured: false,
    images: {
      leftTop: `${P}/joyce4life-designs/01.jpg`,
      leftBottom: `${P}/joyce4life-designs/02.jpg`,
      right: `${P}/joyce4life-designs/03.jpg`,
    },
    cover: `${P}/joyce4life-designs/01.jpg`,
    process: defaultProcess,
    showcase: [],
    gallery: [
      '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg',
      '10.jpg', '11.jpg', '12.jpg', 'Artboard 1.jpg',
    ].map((f) => `${P}/joyce4life-designs/${f}`),
  },
  {
    slug: 'forti',
    num: '08',
    name: 'Forti',
    client: 'Forti',
    logo: `${P}/forti-designs/logo.png`,
    logoOnLight: true,
    year: TODO('year'),
    category: 'packaging',
    tags: ['packaging'],
    tools: [],
    featured: true,
    images: {
      leftTop: `${P}/forti-designs/Pakage Design 02.jpg`,
      leftBottom: `${P}/forti-designs/Corn Porridge Pakage 01.jpg`,
      right: `${P}/forti-designs/Fufu 01.jpg`,
    },
    cover: `${P}/forti-designs/Pakage Design 02.jpg`,
    process: defaultProcess,
    showcase: [],
    gallery: [
      'Corn Porridge Pakage 01.jpg', 'Fufu 01.jpg', 'Packaging Mockup.jpg', 'Packaging Mockup3.jpg',
      'Pakage Design 02.jpg', 'Psd_1.jpg', 'Psd_4.jpg',
    ].map((f) => `${P}/forti-designs/${f}`),
  },
];

/** Projects with their text in the chosen language. */
export const getProjects = (lang: Language) => {
  const t = translations[lang];
  return projectsMeta.map((p) => ({
    ...p,
    // Fields the current home page (ProjectsSection) still reads:
    category: t.projects.categories[p.category],
    categoryKey: p.category,
    link: p.externalLink ?? '',
    text: t.caseStudies[p.slug],
  }));
};

export type Project = ReturnType<typeof getProjects>[number];

export const getProjectBySlug = (lang: Language, slug?: string) =>
  getProjects(lang).find((p) => p.slug === slug);
