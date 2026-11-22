import { TODO } from './content';
import type { ProjectSlug } from './projects';

/**
 * Case-study wording, in EN and FR. It is exposed as
 * translations[lang].caseStudies.
 *
 * Any field still set to TODO(...) is hidden on the live site and shown as a
 * placeholder in `npm run dev`. Do not invent facts: leave a field as TODO
 * until the real information exists.
 */
export interface CaseStudyText {
  /** States the result, e.g. "Rebranding GBA for AIM Congress 2025". Falls back to the project name. */
  title: string;
  /** One-line outcome, used on cards and under the title. */
  summary: string;
  role: string[];
  deliverables: string[];
  /** 2-3 sentences. */
  challenge: string;
  goal: string;
  /** Keyed by the process ids in projects.ts. */
  process: Record<string, { title: string; text: string }>;
  solution: string;
  /** Captions keyed by the showcase ids in projects.ts. */
  showcase: Record<string, string>;
  /** Numbers if available, otherwise what was delivered and how it was used. */
  outcome: string;
}

const processEn = {
  moodboard: { title: 'Moodboard', text: TODO('moodboard: what inspired the direction (add an image in projects.ts)') },
  sketches: { title: 'Sketches', text: TODO('sketches: early ideas (add an image in projects.ts)') },
  iterations: { title: 'Iterations', text: TODO('iterations: what changed and why (add an image in projects.ts)') },
};
const processFr = {
  moodboard: { title: 'Moodboard', text: TODO('moodboard (FR)') },
  sketches: { title: 'Croquis', text: TODO('croquis (FR)') },
  iterations: { title: 'Itérations', text: TODO('itérations (FR)') },
};

const blankEn = (name: string): CaseStudyText => ({
  title: TODO(`result-led title for ${name}`),
  summary: TODO(`one-line outcome for ${name}`),
  role: [TODO('your role, e.g. Lead designer')],
  deliverables: [TODO('deliverables, e.g. Logo, Social templates')],
  challenge: TODO(`the challenge ${name} faced (2-3 sentences)`),
  goal: TODO(`the goal of the ${name} project`),
  process: processEn,
  solution: TODO(`the solution for ${name}`),
  showcase: {},
  outcome: TODO(`the outcome for ${name}: numbers if available, otherwise how the work was used`),
});

const blankFr = (name: string): CaseStudyText => ({
  title: TODO(`titre axé résultat pour ${name}`),
  summary: TODO(`résultat en une ligne pour ${name}`),
  role: [TODO('rôle')],
  deliverables: [TODO('livrables')],
  challenge: TODO(`le défi (${name})`),
  goal: TODO(`l'objectif (${name})`),
  process: processFr,
  solution: TODO(`la solution (${name})`),
  showcase: {},
  outcome: TODO(`le résultat (${name})`),
});

export const caseStudiesEn: Record<ProjectSlug, CaseStudyText> = {
  'you-can': blankEn('You Can'),
  'cowary-farms': blankEn('Cowary Farms'),
  liverpool: blankEn('Liverpool'),
  devine: blankEn('Devine'),
  gba: {
    ...blankEn('GBA'),
    title: TODO('result-led title, e.g. "Rebranding GBA for AIM Congress 2025" (confirm: new identity or rebrand?)'),
    deliverables: [
      'Logo',
      'Colour palette',
      'Event signage',
      'Outdoor posters',
      'Digital screens',
      'Merchandise',
      'Social media campaign',
    ],
    showcase: {
      logo: 'Logo: an Africa silhouette with concentric rings, paired with a condensed GBA wordmark.',
      palette: 'Colour palette: deep reds, ochres, olives and cream.',
      signage: 'Reception signage built on the “Think Global” line.',
      banners: 'Venue banners carrying the Think Global message.',
      outdoor: 'Outdoor posters: speaker, save-the-date and pattern formats.',
      digital: 'Digital: event registration screens.',
      merch: 'Merchandise: event T-shirts in both brand reds.',
      campaign: 'Social campaign announcing the 3rd edition at AIM Congress 2025 in Abu Dhabi.',
    },
  },
  javvis: blankEn('Javvis'),
  joyce4life: blankEn('Joyce4Life'),
  forti: blankEn('Forti'),
};

export const caseStudiesFr: Record<ProjectSlug, CaseStudyText> = {
  'you-can': blankFr('You Can'),
  'cowary-farms': blankFr('Cowary Farms'),
  liverpool: blankFr('Liverpool'),
  devine: blankFr('Devine'),
  gba: {
    ...blankFr('GBA'),
    title: TODO('titre axé résultat (FR)'),
    deliverables: [
      'Logo',
      'Palette de couleurs',
      'Signalétique événementielle',
      'Affiches extérieures',
      'Écrans digitaux',
      'Merchandising',
      'Campagne réseaux sociaux',
    ],
    showcase: {
      logo: "Logo : une silhouette de l'Afrique aux anneaux concentriques, associée à un logotype GBA condensé.",
      palette: 'Palette : rouges profonds, ocres, olives et crème.',
      signage: 'Signalétique d’accueil construite autour de la signature « Think Global ».',
      banners: 'Bannières sur le lieu de l’événement portant le message Think Global.',
      outdoor: 'Affiches extérieures : intervenant, save-the-date et motifs.',
      digital: 'Digital : écrans d’inscription à l’événement.',
      merch: 'Merchandising : t-shirts dans les deux rouges de la marque.',
      campaign: 'Campagne sociale annonçant la 3e édition à l’AIM Congress 2025 à Abu Dhabi.',
    },
  },
  javvis: blankFr('Javvis'),
  joyce4life: blankFr('Joyce4Life'),
  forti: blankFr('Forti'),
};
