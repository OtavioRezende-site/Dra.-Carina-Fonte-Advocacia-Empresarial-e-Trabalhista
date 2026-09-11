import React, { useState } from 'react';
import { CLIENT_INFO } from '../data/carinaData';
import { MessageSquare, Send, CheckCircle2, Phone, Mail, Instagram, MapPin, ShieldCheck, Building } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    assunto: 'Consultoria Preventiva e Compliance',
    mensagem: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const formattedMessage = `*NOVA SOLICITAÇÃO DE CONTATO VIA SITE*\n\n` +
      `👤 *Nome:* ${formData.nome}\n` +
      `🏢 *Empresa:* ${formData.empresa || 'Não informada'}\n` +
      `📧 *E-mail:* ${formData.email}\n` +
      `📞 *Telefone/WhatsApp:* ${formData.telefone}\n` +
      `📋 *Assunto:* ${formData.assunto}\n` +
      `💬 *Mensagem:* ${formData.mensagem}`;

    const whatsappUrl = `https://wa.me/${CLIENT_INFO.phoneClean}?text=${encodeURIComponent(formattedMessage)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0b1329] text-slate-100 overflow-hidden">
      
      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Atendimento Direto e Rápido</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white">
            Fale Diretamente com a Dra. Carina Fonte
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Preencha o formulário para enviar sua demanda ou utilize nossos canais diretos para agendar um diagnóstico jurídico.
          </p>
        </div>

        {/* Grid: Form & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-serif-title font-bold text-white border-b border-slate-800 pb-3">
                Canais de Comunicação
              </h3>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/${CLIENT_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-[#d4af37]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">WhatsApp Direto</span>
                    <span className="text-sm font-extrabold text-white">{CLIENT_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${CLIENT_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-[#d4af37]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">E-mail Profissional</span>
                    <span className="text-xs font-semibold text-white break-all">{CLIENT_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={CLIENT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-[#d4af37]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-500/15 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider block">Instagram Oficial</span>
                    <span className="text-xs font-bold text-white">{CLIENT_INFO.instagram}</span>
                  </div>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-[#fef08a] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  Compromisso de Sigilo e Confidencialidade
                </span>
                <p className="text-[11px] font-light text-slate-400">
                  Todas as informações enviadas estão protegidas pelo Sigilo Profissional da Advocacia e LGPD.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Interactive Lead Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif-title font-bold text-white">Solicitação Enviada com Sucesso!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Você está sendo redirecionado para o WhatsApp oficial da Dra. Carina Fonte. Caso a janela não abra automaticamente, clique no botão abaixo.
                  </p>
                  <a
                    href={`https://wa.me/${CLIENT_INFO.phoneClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#d4af37] text-[#0b1329] font-bold text-xs shadow-lg"
                  >
                    <span>Abrir Conversa no WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <h3 className="text-xl font-serif-title font-bold text-white border-b border-slate-800 pb-3">
                    Formulário de Agendamento
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Seu Nome Completo *</label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex: João da Silva"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Nome da Empresa</label>
                      <input
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Ex: Empresa XYZ Ltda."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Seu E-mail *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contato@empresa.com.br"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(22) 99999-9999"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Área de Interesse Principal</label>
                    <select
                      value={formData.assunto}
                      onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="Compliance Trabalhista e Auditoria">Compliance Trabalhista & Auditoria Preventiva</option>
                      <option value="Consultoria Jurídica Empresarial">Consultoria Jurídica Empresarial Contínua</option>
                      <option value="Gestão de Passivos e Defesa Trabalhista">Gestão de Passivos & Defesa Trabalhista</option>
                      <option value="Direito Offshore e Regulações em Macaé">Direito Offshore & Regulações (Macaé/RJ)</option>
                      <option value="Contratos Corporativos e Terceirização">Contratos Corporativos & Terceirização PJ</option>
                      <option value="Treinamento de Lideranças e Código de Ética">Treinamentos Corporativos & CIPA</option>
                      <option value="Outro Assunto">Outro Assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Resumo da Demanda / Mensagem</label>
                    <textarea
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Descreva brevemente a necessidade da sua empresa..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-[#0b1329] bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#c59b27] shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    <span>Enviar Mensagem e Iniciar Atendimento</span>
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
