import React, { useState, useEffect } from 'react';
import { CLIENT_INFO } from '../data/carinaData';
import { DisplayMode, NavTab } from '../types';
import { Scale, Phone, MessageSquare, Menu, X, Shield, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  mode: DisplayMode;
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ mode, activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavTab; label: string; href: string }[] = [
    { id: 'inicio', label: 'Início', href: '#home' },
    { id: 'sobre', label: 'Sobre a Advogada', href: '#about' },
    { id: 'servicos', label: 'Áreas de Atuação', href: '#services' },
    { id: 'diferenciais', label: 'Diferenciais', href: '#differentials' },
    { id: 'contato', label: 'Contato & Localização', href: '#contact' },
  ];

  const handleNavClick = (item: { id: NavTab; href: string }) => {
    setMobileMenuOpen(false);
    setActiveTab(item.id);

    if (mode === 'institucional') {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0, { duration: 0.8 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(element, { offset: -80, duration: 1.2 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const whatsappMessage = encodeURIComponent(`Olá, Dra. Carina Fonte! Gostaria de agendar uma consultoria jurídica empresarial.`);
  const whatsappUrl = `https://wa.me/${CLIENT_INFO.phoneClean}?text=${whatsappMessage}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#0b1329]/90 backdrop-blur-md border-b border-[#d4af37]/20 shadow-2xl py-3' 
        : 'bg-gradient-to-b from-[#0b1329]/95 via-[#0b1329]/70 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Monogram */}
          <button 
            onClick={() => handleNavClick({ id: 'inicio', href: '#home' })}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#d4af37]/40 flex items-center justify-center shadow-lg group-hover:border-[#d4af37] transition-all duration-300">
              <Scale className="w-5 h-5 text-[#d4af37] transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -inset-0.5 rounded-xl bg-[#d4af37]/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-10" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-title font-bold text-lg text-slate-100 tracking-tight group-hover:text-[#d4af37] transition-colors">
                  Dra. Carina Fonte
                </span>
                <span className="hidden sm:inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30">
                  ADVOGADA
                </span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-wide font-light hidden xs:block">
                Advocacia Empresarial & Compliance
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1e293b]/50 p-1.5 rounded-full border border-slate-700/50 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-[#0b1329] font-semibold shadow-md' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#b89120] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Direct Contact Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0b1329] bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#c59b27] shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Agendar Consulta</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-[#d4af37] focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu & Overlay Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop click listener */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[64px] bg-black/60 backdrop-blur-sm z-30 lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="relative z-40 lg:hidden bg-[#0b1329] border-b border-[#d4af37]/30 shadow-2xl overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-[#d4af37]/20 to-transparent text-[#d4af37] border-l-4 border-[#d4af37]'
                          : 'text-slate-300 hover:bg-slate-800/50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <Shield className="w-4 h-4 text-[#d4af37]" />}
                    </button>
                  );
                })}

                <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-[#0b1329] bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#c59b27] shadow-lg shadow-[#d4af37]/20"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Falar no WhatsApp com a Dra. Carina</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
