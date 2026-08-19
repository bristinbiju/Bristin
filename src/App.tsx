import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { translations } from './data/translations';

function AppContent() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <main className="main-wrapper relative w-full h-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      <footer id="contact" className="bg-[#0C0C0C] py-16 flex flex-col items-center justify-center w-full z-40 relative gap-8">
        <div className="flex gap-6 items-center">
          <a href="https://www.linkedin.com/in/bristin-biju-832a4a1a6" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://www.instagram.com/bristinbiju/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.behance.net/bristinbiju" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Behance">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 5H10.5C12.433 5 14 6.567 14 8.5C14 9.619 13.475 10.613 12.643 11.233C13.829 11.666 14.667 12.835 14.667 14.167C14.667 16.284 12.951 18 10.833 18H6V5Z"></path><path d="M6 11.5H10.5"></path><path d="M16 8H21"></path></svg>
          </a>
          <a href="mailto:bristinbiju123@gmail.com" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Email">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </div>
        <p className="text-sm opacity-50 uppercase tracking-widest font-light text-center px-4">
          © {new Date().getFullYear()} {t.copyright}
        </p>
      </footer>
    </main>
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
