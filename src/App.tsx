import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { LanguageProvider } from './context/LanguageContext';

function AppContent() {
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
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
