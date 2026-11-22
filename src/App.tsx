import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import ScrollManager from './components/ScrollManager';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import { LanguageProvider } from './context/LanguageContext';
import { appState } from './lib/appState';

function App() {
  // After the first commit (incl. hydration), page changes may animate.
  useEffect(() => {
    appState.ready = true;
  }, []);

  return (
    // LazyMotion + `m` components ship only the animation features in use (smaller bundle).
    // reducedMotion="user": framer-motion drops movement for visitors who ask for less motion,
    // without changing what is rendered (so pre-rendered HTML and the client always match).
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <LanguageProvider>
          <ScrollManager />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
            {/* French: same pages under /fr (language is read from the URL) */}
            <Route path="/fr" element={<HomePage />} />
            <Route path="/fr/work/:slug" element={<CaseStudyPage />} />
            <Route path="*" element={<CaseStudyPage />} />
          </Routes>
        </LanguageProvider>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
