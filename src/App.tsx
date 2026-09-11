import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { DisplayMode, NavTab } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { LocationMapSection } from './components/LocationMapSection';
import { ContactSection } from './components/ContactSection';
import { SectionDivider } from './components/SectionDivider';
import { Footer } from './components/Footer';
import { FloatingPill } from './components/FloatingPill';
import { SalesOverlayModal } from './components/SalesOverlayModal';
import { LgpdConsentBanner } from './components/LgpdConsentBanner';
import { motion, AnimatePresence } from 'motion/react';

export function App() {
  const [mode, setMode] = useState<DisplayMode>('institucional');
  const [activeTab, setActiveTab] = useState<NavTab>('inicio');
  const [isProposalOpen, setIsProposalOpen] = useState<boolean>(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  // Sync scroll position when mode switches
  const handleModeChange = (newMode: DisplayMode) => {
    setMode(newMode);
    setActiveTab('inicio');
    setIsProposalOpen(false);
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  };

  // Scroll-Spy for Landing Page mode: auto-highlight nav tab based on active section
  useEffect(() => {
    if (mode !== 'landing') return;

    const sectionTabMap: { id: string; tab: NavTab }[] = [
      { id: 'home', tab: 'inicio' },
      { id: 'about', tab: 'sobre' },
      { id: 'services', tab: 'servicos' },
      { id: 'differentials', tab: 'diferenciais' },
      { id: 'location', tab: 'contato' },
      { id: 'contact', tab: 'contato' },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for fixed navbar

      for (let i = sectionTabMap.length - 1; i >= 0; i--) {
        const item = sectionTabMap[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(item.tab);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode]);

  return (
    <div className="min-h-screen bg-[#0b1329] text-slate-100 font-sans selection:bg-[#d4af37]/30 selection:text-[#fef08a] relative">
      
      {/* Top Navbar */}
      <Navbar
        mode={mode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="relative">
        
        {/* LANDING PAGE MODE OR INSTITUCIONAL FULL VIEW */}
        {mode === 'landing' ? (
          <motion.div
            key="landingMode"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Hero Section (Blue) */}
            <Hero />
            
            {/* Transition: Blue -> White */}
            <SectionDivider from="blue" to="white" />
            
            {/* About Section (White) */}
            <AboutSection />
            
            {/* Transition: White -> Blue */}
            <SectionDivider from="white" to="blue" />
            
            {/* Services Section (Blue) */}
            <ServicesSection />
            
            {/* Transition: Blue -> White */}
            <SectionDivider from="blue" to="white" />
            
            {/* Differentials Section (White) */}
            <DifferentialsSection />
            
            {/* Transition: White -> Blue */}
            <SectionDivider from="white" to="blue" />
            
            {/* Location Map Section (Blue) */}
            <LocationMapSection />
            
            {/* Adjacent Blue Section (Location -> Contact): NO gradient divider as per instructions */}
            <ContactSection />
          </motion.div>
        ) : (
          /* INSTITUCIONAL MODE: Smart Tab Navigation + Single Page Fallback Flow */
          <motion.div
            key="institucionalMode"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'inicio' && (
              <>
                <Hero />
                <ServicesSection />
                <SectionDivider from="blue" to="white" />
                <DifferentialsSection />
                <SectionDivider from="white" to="blue" />
                <ContactSection />
              </>
            )}

            {activeTab === 'sobre' && (
              <div className="pt-16">
                <AboutSection />
                <SectionDivider from="white" to="blue" />
                <ContactSection />
              </div>
            )}

            {activeTab === 'servicos' && (
              <div className="pt-16">
                <ServicesSection />
                <ContactSection />
              </div>
            )}

            {activeTab === 'diferenciais' && (
              <div className="pt-16">
                <DifferentialsSection />
                <SectionDivider from="white" to="blue" />
                <ContactSection />
              </div>
            )}

            {activeTab === 'contato' && (
              <div className="pt-16">
                <LocationMapSection />
                <ContactSection />
              </div>
            )}
          </motion.div>
        )}

      </main>

      {/* Corporate Legal Footer */}
      <Footer />

      {/* UNIFIED BOTTOM FLOATING NAVIGATION PILL (INSTITUCIONAL / LANDING / VER VALORES) */}
      <FloatingPill
        mode={mode}
        setMode={handleModeChange}
        openProposal={() => setIsProposalOpen(true)}
        isProposalOpen={isProposalOpen}
      />

      {/* SALES VIEW OVERLAY MODAL ("VER VALORES") */}
      <SalesOverlayModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />

      {/* LGPD Privacy Banner */}
      <LgpdConsentBanner />

    </div>
  );
}

export default App;
