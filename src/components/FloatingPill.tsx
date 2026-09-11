import React from 'react';
import { DisplayMode } from '../types';
import { Globe, Layout, DollarSign, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingPillProps {
  mode: DisplayMode;
  setMode: (mode: DisplayMode) => void;
  openProposal: () => void;
  isProposalOpen: boolean;
}

export const FloatingPill: React.FC<FloatingPillProps> = ({
  mode,
  setMode,
  openProposal,
  isProposalOpen
}) => {
  const handleModeSwitch = (newMode: DisplayMode) => {
    if (mode !== newMode) {
      setMode(newMode);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100vw-24px)] sm:max-w-md px-1">
      <div className="relative p-1.5 rounded-full bg-[#0b1329]/90 border border-[#d4af37]/40 backdrop-blur-xl shadow-2xl shadow-black/80 flex items-center justify-between gap-1 overflow-hidden">
        
        {/* Subtle pulsing background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 via-transparent to-[#d4af37]/10 pointer-events-none" />

        {/* Tab 1: Institucional */}
        <button
          onClick={() => handleModeSwitch('institucional')}
          className={`relative flex-1 py-2 px-2.5 sm:px-4 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 z-10 whitespace-nowrap ${
            mode === 'institucional' && !isProposalOpen
              ? 'text-[#0b1329]'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          {mode === 'institucional' && !isProposalOpen && (
            <motion.div
              layoutId="pillActiveIndicator"
              className="absolute inset-0 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#c59b27] rounded-full -z-10 shadow-lg shadow-[#d4af37]/30"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <Globe className="w-3.5 h-3.5 shrink-0" />
          <span>Institucional</span>
        </button>

        {/* Tab 2: Landing Page */}
        <button
          onClick={() => handleModeSwitch('landing')}
          className={`relative flex-1 py-2 px-2.5 sm:px-4 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 z-10 whitespace-nowrap ${
            mode === 'landing' && !isProposalOpen
              ? 'text-[#0b1329]'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          {mode === 'landing' && !isProposalOpen && (
            <motion.div
              layoutId="pillActiveIndicator"
              className="absolute inset-0 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#c59b27] rounded-full -z-10 shadow-lg shadow-[#d4af37]/30"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <Layout className="w-3.5 h-3.5 shrink-0" />
          <span>Landing Page</span>
        </button>

        {/* Tab 3: Ver Valores (Proposal Trigger) */}
        <button
          onClick={openProposal}
          className={`relative flex-1 py-2 px-2.5 sm:px-4 rounded-full text-[11px] sm:text-xs font-extrabold transition-all duration-300 flex items-center justify-center gap-1.5 z-10 whitespace-nowrap ${
            isProposalOpen
              ? 'text-white'
              : 'text-[#fef08a] hover:text-white bg-[#d4af37]/20 border border-[#d4af37]/40'
          }`}
        >
          {isProposalOpen && (
            <motion.div
              layoutId="pillActiveIndicator"
              className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-700 rounded-full -z-10 shadow-lg shadow-emerald-500/30"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <DollarSign className="w-3.5 h-3.5 shrink-0 text-[#fef08a]" />
          <span>Ver Valores</span>
          <Sparkles className="w-3 h-3 text-[#fef08a] animate-pulse" />
        </button>

      </div>
    </div>
  );
};
