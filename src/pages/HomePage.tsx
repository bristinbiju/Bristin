import SiteHeader from '../components/site/SiteHeader';
import SiteFooter from '../components/site/SiteFooter';
import Hero from '../components/home/Hero';
import ProofStrip from '../components/home/ProofStrip';
import { SelectedWork, ProjectIndex } from '../components/home/Work';
import { Services, Process } from '../components/home/ServicesProcess';
import { About, Testimonials, Contact } from '../components/home/AboutContact';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { getProjects } from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';
import { pageMeta } from '../data/seo';

/**
 * Home page, one job per screen:
 * hero → proof → selected work → all projects → services → process → about
 * → testimonials (hidden until real) → contact.
 */
export default function HomePage() {
  const { language } = useLanguage();
  usePageMeta(pageMeta(language));
  const projects = getProjects(language);
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-surface font-body text-body text-fg antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        {translations[language].caseStudy.skipToContent}
      </a>
      <SiteHeader />
      <main id="main">
        <Hero featured={featured} />
        <ProofStrip projects={projects} />
        <SelectedWork featured={featured} />
        <ProjectIndex projects={projects} />
        <Services projects={projects} />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
