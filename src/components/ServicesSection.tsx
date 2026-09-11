import React, { useState, useEffect } from 'react';
import { SERVICES_LIST, CLIENT_INFO } from '../data/carinaData';
import { ServiceItem } from '../types';
import { 
  ShieldCheck, FileText, Scale, Anchor, Briefcase, GraduationCap, 
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp, MessageSquare, X, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_LIST[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [viewMode, setViewMode] = useState<'spotlight' | 'list'>('spotlight');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Disable background scrolling when modal pop-up is active
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const categories = ['Todas', 'Compliance & Trabalhista', 'Contratos & Societário', 'Offshore & P&G', 'Treinamentos'];

  const filteredServices = selectedCategory === 'Todas'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0]));

  const activeSpotlightService = SERVICES_LIST.find(s => s.id === activeServiceId) || SERVICES_LIST[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#d4af37]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#d4af37]" />;
      case 'Scale': return <Scale className="w-6 h-6 text-[#d4af37]" />;
      case 'Anchor': return <Anchor className="w-6 h-6 text-sky-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#d4af37]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#d4af37]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  const whatsappMessage = (serviceTitle: string) => 
    encodeURIComponent(`Olá, Dra. Carina Fonte! Gostaria de obter mais informações sobre o serviço de ${serviceTitle} para minha empresa.`);

  return (
    <section id="services" className="relative py-20 sm:py-24 bg-[#0b1329] text-slate-100 overflow-hidden">
      
      {/* Clean Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30">
            <Scale className="w-3.5 h-3.5" />
            <span>Soluções Jurídicas de Alto Impacto</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight">
            Áreas de Atuação Especializada
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-transparent mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Proteção patrimonial, sustentabilidade trabalhista e governança estratégica para o seu negócio em Macaé e em todo o Brasil.
          </p>

          {/* View Mode Controls Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setViewMode('spotlight')}
                className={`px-4 py-2 rounded-lg transition-all ${viewMode === 'spotlight' ? 'bg-[#d4af37] text-[#0b1329] font-bold shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                Painel Interativo
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-[#d4af37] text-[#0b1329] font-bold shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                Lista Executiva
              </button>
            </div>
          </div>
        </motion.div>

        {/* Categories Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#d4af37]/20 text-[#fef08a] border-[#d4af37]'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* DYNAMIC PRESENTATION MODE 1: INTERACTIVE SPOTLIGHT SHOWCASE */}
        {viewMode === 'spotlight' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left/Top Interactive Service Tabs Selector */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-1">
                Selecione a área para explorar:
              </span>
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
                {filteredServices.map((service) => {
                  const isActive = service.id === activeSpotlightService.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveServiceId(service.id)}
                      className={`shrink-0 lg:w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between gap-3 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#1e293b] to-[#0f172a] border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                          : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-[#d4af37]/20 border border-[#d4af37]/50' : 'bg-slate-800'}`}>
                          {getIcon(service.iconName)}
                        </div>
                        <div>
                          <h4 className={`text-xs font-bold font-serif-title ${isActive ? 'text-[#fef08a]' : 'text-slate-200'}`}>
                            {service.title}
                          </h4>
                          <span className="text-[10px] text-slate-400 block">{service.category}</span>
                        </div>
                      </div>
                      <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-[#d4af37] translate-x-1' : 'text-slate-600'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Active Spotlight Detail Box */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpotlightService.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-[#d4af37]/40 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shadow-inner">
                        {getIcon(activeSpotlightService.iconName)}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded-md border border-[#d4af37]/30">
                          {activeSpotlightService.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-white pt-1">
                          {activeSpotlightService.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed font-light bg-slate-900/70 p-4 rounded-xl border border-slate-800/80">
                    {activeSpotlightService.fullDesc}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-[#fef08a] uppercase tracking-wider">Benefícios Diretos:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeSpotlightService.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-200 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60">
                          <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setSelectedService(activeSpotlightService)}
                      className="py-3 px-5 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-[#d4af37] transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Ver Perguntas Frequentes do Serviço</span>
                      <HelpCircle className="w-4 h-4 text-[#d4af37]" />
                    </button>

                    <a
                      href={`https://wa.me/${CLIENT_INFO.phoneClean}?text=${whatsappMessage(activeSpotlightService.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-6 rounded-xl text-xs font-bold text-[#0b1329] bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#c59b27] shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Solicitar Diagnóstico Jurídico</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        )}

        {/* DYNAMIC PRESENTATION MODE 2: EXECUTIVE ACCORDION LIST */}
        {viewMode === 'list' && (
          <div className="max-w-4xl mx-auto space-y-3">
            {filteredServices.map((service, index) => {
              const isOpen = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  className="rounded-2xl bg-gradient-to-r from-[#1e293b]/90 to-[#0f172a]/90 border border-slate-800 hover:border-[#d4af37]/50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveServiceId(isOpen ? '' : service.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-mono font-bold text-[#d4af37] bg-[#d4af37]/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-[#d4af37]/30">
                        0{index + 1}
                      </span>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-bold">{service.category}</span>
                        <h3 className="text-base sm:text-lg font-serif-title font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#d4af37]" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-slate-800/80 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed pt-3">
                        {service.fullDesc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => setSelectedService(service)}
                          className="py-2 px-4 rounded-xl text-xs font-bold text-[#0b1329] bg-[#d4af37] hover:bg-[#fef08a] transition-colors flex items-center gap-1.5"
                        >
                          <span>Ver Detalhes Completos</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Expandable Service Detail Drawer / Modal */}
      <AnimatePresence>
        {selectedService && (
          <div 
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-6 bg-black/80 backdrop-blur-md overflow-hidden"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.96 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-[#0f172a] border border-[#d4af37]/50 shadow-2xl p-6 sm:p-8 space-y-6 text-left my-0 sm:my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header inside modal */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-[#d4af37] uppercase tracking-wider">
                    {selectedService.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Full Description */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Visão Geral do Serviço</h4>
                <p className="text-sm text-slate-200 leading-relaxed font-light bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Benefits list */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-[#d4af37] uppercase tracking-wider">Benefícios Diretos para a Empresa</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-800/50">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Para Quem Se Destina</h4>
                <p className="text-xs text-slate-300 italic bg-slate-900/40 p-3 rounded-lg border border-slate-800">
                  {selectedService.forWho}
                </p>
              </div>

              {/* Accordion FAQ inside modal */}
              {selectedService.faq && selectedService.faq.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#d4af37]" />
                    <span>Perguntas Frequentes sobre esta Área</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedService.faq.map((faq, idx) => (
                      <div key={idx} className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden">
                        <button
                          onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                          className="w-full p-3 text-left text-xs font-bold text-slate-200 flex items-center justify-between hover:text-[#d4af37]"
                        >
                          <span>{faq.question}</span>
                          {openFaqIndex === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {openFaqIndex === idx && (
                          <div className="p-3 pt-0 text-xs text-slate-400 border-t border-slate-800/50 leading-relaxed font-light">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal CTA */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Fechar
                </button>
                <a
                  href={`https://wa.me/${CLIENT_INFO.phoneClean}?text=${whatsappMessage(selectedService.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-xs font-bold text-[#0b1329] bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#c59b27] shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Solicitar Atendimento para este Serviço</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
