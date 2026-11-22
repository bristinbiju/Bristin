import { Route, Routes } from 'react-router-dom';
import ScrollManager from './components/ScrollManager';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import { LanguageProvider } from './context/LanguageContext';

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
