import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import WorkDetail from './pages/WorkDetail';
import ScrollToTop from './components/ui/ScrollToTop';
import MatrixRain from './components/ui/MatrixRain';
import { TransitionProvider } from './context/TransitionContext';
import { SectionProvider } from './context/SectionContext';
import { IntroProvider, useIntro } from './context/IntroContext';

function AppContent() {
  const { showIntro } = useIntro();

  return (
    <>
      <ScrollToTop />
      
      {/* Persistent Background for Hero Section */}
      <div className="fixed inset-0 bg-hero z-0" />

      <MatrixRain 
        isActive={true} 
        isOverlay={showIntro}
        className="fixed inset-0 pointer-events-none z-[1]"
      />

      {/* Global Glass Overlay */}
      <motion.div 
        className="fixed inset-0 z-[2] bg-white/60 dark:bg-black/30 backdrop-blur-sm pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }} 
        animate={{ opacity: showIntro ? 0 : 1 }} 
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work/:id" element={<WorkDetail />} />
          </Routes>
        </Layout>
      </motion.div>
    </>
  );
}

function App() {
  return (
    <Router>
      <IntroProvider>
        <TransitionProvider>
          <SectionProvider>
            <AppContent />
          </SectionProvider>
        </TransitionProvider>
      </IntroProvider>
    </Router>
  );
}

export default App;
