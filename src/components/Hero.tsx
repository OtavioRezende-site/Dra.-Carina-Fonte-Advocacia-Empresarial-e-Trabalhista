import React, { useRef, useEffect } from 'react';
import { CLIENT_INFO } from '../data/carinaData';
import { ShieldCheck, MessageSquare, Award, ArrowRight, Scale, ChevronDown, CheckCircle2, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = true;
      vid.defaultMuted = true;
      vid.volume = 0;
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Autoplay video loop initialized safely:", err);
        });
      }
    }
  }, []);

  const whatsappMessage = encodeURIComponent(`Olá, Dra. Carina Fonte! Gostaria de agendar uma consultoria jurídica empresarial.`);
  const whatsappUrl = `https://wa.me/${CLIENT_INFO.phoneClean}?text=${whatsappMessage}`;  return (
    <section id="home" className="relative min-h-[100dvh] sm:min-h-[92vh] flex flex-col justify-center pt-16 pb-6 sm:pt-28 sm:pb-20 overflow-hidden bg-[#0b1329]">
      
      {/* Clean Background Grid Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Mandatory Hero Loop Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-75 scale-100 filter brightness-95 contrast-105"
        >
          <source src={CLIENT_INFO.heroVideoUrl} type="video/mp4" />
        </video>
        
        {/* Layer 1: Subtle Executive Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-[#0b1329]/55 to-[#0b1329]/35" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Full Width / Centered Executive Presentation */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-12 max-w-4xl mx-auto text-center space-y-3 sm:space-y-7"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1 sm:pt-2">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold bg-[#d4af37]/15 text-[#fef08a] border border-[#d4af37]/30 backdrop-blur-md shadow-inner">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#d4af37]" />
                Compliance & Consultoria Preventiva
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/80 backdrop-blur-md">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400" />
                Macaé/RJ & Atendimento Nacional
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-1.5 sm:space-y-4">
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-serif-title font-extrabold text-white tracking-tight leading-snug sm:leading-[1.15]">
                Segurança Jurídica para <br className="hidden sm:inline" />
                <span className="gold-gradient-text drop-shadow-sm">Alavancar seu Negócio</span>
              </h1>
              <p className="text-xs sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                Advocacia empresarial estratégica, redução drástica de passivos trabalhistas e governança corporativa em Macaé/RJ e setor offshore.
              </p>
            </div>

            {/* Value Highlights Grid */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-4 pt-1 sm:pt-2 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3 bg-slate-900/80 p-2 sm:p-3.5 rounded-xl border border-slate-800/90 backdrop-blur-md text-center sm:text-left">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#d4af37] shrink-0" />
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-slate-200 leading-tight">Mitigação de Riscos</h4>
                  <p className="hidden sm:block text-[11px] text-slate-400">Elimine brechas de passivos</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3 bg-slate-900/80 p-2 sm:p-3.5 rounded-xl border border-slate-800/90 backdrop-blur-md text-center sm:text-left">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#d4af37] shrink-0" />
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-slate-200 leading-tight">Expertise Offshore</h4>
                  <p className="hidden sm:block text-[11px] text-slate-400">Polo P&G Macaé e Região</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3 bg-slate-900/80 p-2 sm:p-3.5 rounded-xl border border-slate-800/90 backdrop-blur-md text-center sm:text-left">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#d4af37] shrink-0" />
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-slate-200 leading-tight">Atendimento Agilizado</h4>
                  <p className="hidden sm:block text-[11px] text-slate-400">Suporte direto e preventivo</p>
                </div>
              </div>
            </div>

            {/* CTAs Buttons */}
            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-[#0b1329] bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#c59b27] shadow-xl shadow-[#d4af37]/25 hover:shadow-[#d4af37]/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                <span>Solicitar Diagnóstico Jurídico</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#services');
                  if (target) {
                    if ((window as any).lenis) {
                      (window as any).lenis.scrollTo(target, { offset: -80, duration: 1.2 });
                    } else {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 sm:px-6 sm:py-4 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-[#d4af37]/50 backdrop-blur-md transition-all duration-300"
              >
                <span>Conhecer Áreas de Atuação</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#d4af37]" />
              </a>
            </div>

            {/* Trust Footer line */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-[#d4af37]" />
                Atuação Ética e Transparente
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                Especialista em Compliance Trabalhista
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
