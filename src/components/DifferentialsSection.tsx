import React, { useState } from 'react';
import { DIFFERENTIALS, TESTIMONIALS, FAQS, CLIENT_INFO } from '../data/carinaData';
import { Building2, Anchor, TrendingUp, Zap, Star, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, MessageSquare, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const DifferentialsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const getDiffIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-[#b45309]" />;
      case 'Anchor': return <Anchor className="w-5 h-5 text-sky-700" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#b45309]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-600" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#b45309]" />;
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const whatsappMessage = encodeURIComponent(`Olá, Dra. Carina Fonte! Gostaria de esclarecer dúvidas sobre a consultoria jurídica da minha empresa.`);

  return (
    <section id="differentials" className="relative py-20 sm:py-24 bg-white text-slate-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        
        {/* Differentials Section Header */}
        <div className="space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#d4af37]/15 text-[#92400e] border border-[#d4af37]/40 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#b45309]" />
              <span>Por Que Contratar Nossos Serviços</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-slate-900 tracking-tight">
              Diferenciais Competitivos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] via-[#b45309] to-transparent mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Tratamos a segurança jurídica como um ativo estratégico para proteger seu capital e dar tranquilidade operacional aos diretores.
            </p>
          </motion.div>

          {/* Differentials Executive Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {DIFFERENTIALS.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-[#d4af37] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      {getDiffIcon(diff.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#b45309] bg-amber-100/60 px-2 py-0.5 rounded">0{index + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold font-serif-title text-slate-900">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Proof / Interactive Testimonial Carousel Spotlight */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#b45309] uppercase tracking-wider">Prova Social & Confiança</span>
            <h3 className="text-2xl sm:text-4xl font-serif-title font-bold text-slate-900">
              Depoimentos de Clientes Corporativos
            </h3>
          </div>

          {/* Carousel Spotlight Card */}
          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#0b1329] text-white border border-[#d4af37]/40 shadow-xl space-y-6 relative overflow-hidden text-center sm:text-left"
              >
                <Quote className="w-10 h-10 text-[#d4af37]/20 absolute top-4 right-4 pointer-events-none" />

                <div className="flex justify-center sm:justify-start gap-1 text-[#fef08a]">
                  {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#d4af37]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-200 italic font-light leading-relaxed">
                  "{TESTIMONIALS[activeTestimonial].text}"
                </p>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">{TESTIMONIALS[activeTestimonial].name}</h4>
                    <p className="text-xs font-semibold text-[#d4af37]">{TESTIMONIALS[activeTestimonial].role}</p>
                    <p className="text-[11px] text-slate-400">{TESTIMONIALS[activeTestimonial].company}</p>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-[#d4af37] hover:text-[#0b1329] transition-colors border border-slate-700"
                      aria-label="Depoimento anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs font-mono text-slate-400 px-1">
                      {activeTestimonial + 1} / {TESTIMONIALS.length}
                    </span>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-[#d4af37] hover:text-[#0b1329] transition-colors border border-slate-700"
                      aria-label="Próximo depoimento"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="flex justify-center gap-1.5 pt-4">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeTestimonial === idx ? 'bg-[#b45309] w-6' : 'bg-slate-300'
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* General FAQs Accordion */}
        <div className="max-w-3xl mx-auto space-y-8 pt-8 border-t border-slate-200">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b45309]">
              <HelpCircle className="w-4 h-4" />
              <span>Esclareça suas Dúvidas</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-slate-900">
              Perguntas Frequentes
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#f8fafc] border border-slate-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-semibold text-sm text-slate-900 flex items-center justify-between hover:text-[#b45309] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#b45309] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-4 pb-4 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-200 pt-3 bg-white"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <a
              href={`https://wa.me/${CLIENT_INFO.phoneClean}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#b45309] hover:underline"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Tem outra pergunta? Fale diretamente no WhatsApp da Dra. Carina</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
