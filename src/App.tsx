import { Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ScrollManager from './components/ScrollManager';
import CaseStudyPage from './pages/CaseStudyPage';
import { LanguageProvider } from './context/LanguageContext';
import { usePageMeta } from './hooks/usePageMeta';

/** Current home page (rebuilt in Stage 3). */
function HomePage() {
  usePageMeta(); // restore the default title/description when coming back from a case study
  return (
    <div className="main-wrapper relative w-full h-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<CaseStudyPage />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
