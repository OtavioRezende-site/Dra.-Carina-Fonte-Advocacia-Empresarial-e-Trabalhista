import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const LgpdConsentBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('lgpd_consent_carina');
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('lgpd_consent_carina', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-20 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 p-4 rounded-2xl bg-[#0b1329]/95 border border-[#d4af37]/40 backdrop-blur-xl shadow-2xl text-slate-200 text-xs space-y-3"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-[#d4af37] font-bold text-xs">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Privacidade e Segurança (LGPD)</span>
          </div>
          <button
            onClick={handleAccept}
            className="text-slate-400 hover:text-white"
            aria-label="Fechar Aviso LGPD"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-slate-300 font-light leading-relaxed">
          Este site utiliza cookies funcionais e criptografia de ponta para garantir a melhor experiência de navegação e proteger seus dados, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </p>

        <div className="flex items-center justify-end gap-2 pt-1">
          <button
            onClick={handleAccept}
            className="px-4 py-2 rounded-xl text-xs font-bold text-[#0b1329] bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#c59b27] shadow-md hover:scale-105 transition-transform"
          >
            Entendido e Concordo
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
