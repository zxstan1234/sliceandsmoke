import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Deals from './components/Deals';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import AnimatedGradients from './components/AnimatedGradients';
import SectionDivider from './components/SectionDivider';

// Memoize background components to prevent re-renders
const MemoizedAnimatedBackground = memo(AnimatedBackground);
const MemoizedAnimatedGradients = memo(AnimatedGradients);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-brand-orange border-t-transparent rounded-full mx-auto mb-4"
              />
              <h1 className="font-heading text-4xl tracking-wider text-white">
                SLICE <span className="text-brand-orange">&</span> SMOKE
              </h1>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <MemoizedAnimatedGradients />
            <MemoizedAnimatedBackground />
            <Navbar />
            <Hero />
            <SectionDivider variant="wave" />
            <About />
            <SectionDivider variant="flame" />
            <Menu />
            <SectionDivider variant="dots" />
            <Deals />
            <SectionDivider variant="wave" />
            <Reviews />
            <SectionDivider variant="flame" />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
