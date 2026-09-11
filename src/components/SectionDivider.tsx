import React from 'react';

interface SectionDividerProps {
  from: 'blue' | 'white';
  to: 'blue' | 'white';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ from, to }) => {
  if (from === to) {
    return null; // No gradient when colors are identical
  }

  if (from === 'blue' && to === 'white') {
    return (
      <div 
        className="w-full h-20 sm:h-28 bg-gradient-to-b from-[#0b1329] via-[#0b1329]/90 to-white pointer-events-none relative z-10" 
        aria-hidden="true" 
      />
    );
  }

  if (from === 'white' && to === 'blue') {
    return (
      <div 
        className="w-full h-20 sm:h-28 bg-gradient-to-b from-white via-white/90 to-[#0b1329] pointer-events-none relative z-10" 
        aria-hidden="true" 
      />
    );
  }

  return null;
};
