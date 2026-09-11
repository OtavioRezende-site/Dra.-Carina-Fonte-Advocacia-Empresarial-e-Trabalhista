import React from 'react';
import { CLIENT_INFO } from '../data/carinaData';
import { MapPin, Navigation, Compass, ExternalLink, Clock, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export const LocationMapSection: React.FC = () => {
  return (
    <section id="location" className="relative py-20 bg-[#0b1329] text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização e Atendimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-white">
            Escritório de Atendimento em Macaé/RJ
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light">
            Atendimento presencial no polo de Macaé e reuniões remotas para clientes de todo o país.
          </p>
        </div>

        {/* Grid: Info Cards & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Details & Smart Route CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl"
          >
            <div className="space-y-6">
              <h3 className="text-lg font-serif-title font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#d4af37]" />
                <span>Canais de Atendimento Direto</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#d4af37]/15 text-[#d4af37] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Endereço Presencial</h4>
                    <p className="text-slate-300">{CLIENT_INFO.location}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Disponibilidade presencial e remota</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Telefone & WhatsApp</h4>
                    <p className="text-slate-300">{CLIENT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">E-mail Profissional</h4>
                    <p className="text-slate-300">{CLIENT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Horário de Funcionamento</h4>
                    <p className="text-slate-300">Segunda a Sexta-feira: 08:00 às 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MANDATORY SMART ROUTE BUTTONS (GOOGLE MAPS & WAZE SIDE-BY-SIDE ON MOBILE) */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block text-center sm:text-left">
                Navegação Rápida ao Local:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={CLIENT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md hover:scale-[1.02] transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href={CLIENT_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md hover:scale-[1.02] transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Abrir Waze</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Map Embed Container */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative min-h-[360px] bg-slate-900"
          >
            <iframe
              title="Localização Dra. Carina Fonte em Macaé RJ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58925.33596707328!2d-41.81559902805988!3d-22.370831688647087!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9b823e59a4214f%3A0xa64ee91f24d10f27!2zTWFjYcOpLCBSSg!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', filter: 'grayscale(0.3) contrast(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            {/* Overlay badge */}
            <div className="absolute top-4 left-4 bg-[#0b1329]/90 border border-[#d4af37]/40 backdrop-blur-md px-3 py-2 rounded-xl text-xs font-semibold text-[#d4af37] shadow-lg flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Macaé / RJ • Centro de Negócios</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
