import React, { useEffect, useState } from 'react';
import { CLIENT_INFO } from '../data/carinaData';
import { X, Check, ShieldCheck, Zap, Server, Code, MessageSquare, ArrowRight, Sparkles, Star, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SalesOverlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SalesOverlayModal: React.FC<SalesOverlayModalProps> = ({ isOpen, onClose }) => {
  const [selectedModel, setSelectedModel] = useState<'institucional' | 'landing'>('institucional');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Formatting message for Developer WhatsApp (5521973629114)
  const isInst = selectedModel === 'institucional';
  const modelName = isInst ? 'Site Institucional Completo (Multi-páginas)' : 'Landing Page Única de Alta Conversão';
  const totalValue = isInst ? 'R$ 1.997,00' : 'R$ 1.497,00';
  const devValue = isInst ? 'R$ 1.800,00' : 'R$ 1.348,00';
  const subValue = isInst ? 'R$ 197,00/mês' : 'R$ 149,00/mês';

  const developerMessage = encodeURIComponent(
    `Olá! Gostaria de solicitar os links seguros de contratação para o projeto da Dra. Carina Fonte.\n\n` +
    `📌 *Modelo Escolhido:* ${modelName}\n` +
    `💰 *Investimento Total:* ${totalValue}\n` +
    `  • *Link 1 (Adesão/Desenvolvimento):* ${devValue} (Pagamento único)\n` +
    `  • *Link 2 (Hospedagem & Manutenção):* ${subValue} (Assinatura mensal)\n\n` +
    `Por favor, envie os links de pagamento para formalização.`
  );

  const developerWhatsAppUrl = `https://wa.me/${CLIENT_INFO.developerWhatsApp}?text=${developerMessage}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-[#0f172a] border border-[#d4af37]/50 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-100"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-[#0b1329]/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37]/30 to-[#d4af37]/10 border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37]">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-[#d4af37] uppercase tracking-wider block">Showcase & Tabela Comercial</span>
                <h2 className="text-lg font-serif-title font-bold text-white">Proposta de Investimento e Estrutura</h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              aria-label="Fechar Painel de Valores"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
            
            {/* Top Selector Toggle */}
            <div className="text-center space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Escolha a Estrutura Ideal para o Seu Momento</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light">
                Selecione abaixo para comparar a composição financeira transparente de cada modelo de site.
              </p>

              {/* Model Selector Tabs */}
              <div className="inline-flex p-1.5 bg-slate-900 border border-slate-800 rounded-2xl gap-2 max-w-md w-full">
                <button
                  onClick={() => setSelectedModel('institucional')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    selectedModel === 'institucional'
                      ? 'bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#c59b27] text-[#0b1329] shadow-lg'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Site Institucional Completo</span>
                </button>

                <button
                  onClick={() => setSelectedModel('landing')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    selectedModel === 'landing'
                      ? 'bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#c59b27] text-[#0b1329] shadow-lg'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Landing Page Única</span>
                </button>
              </div>
            </div>

            {/* Financial Matrix Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* MODEL 1: SITE INSTITUCIONAL COMPLETO */}
              <div className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                selectedModel === 'institucional'
                  ? 'bg-gradient-to-b from-slate-900 via-[#0f172a] to-slate-900 border-[#d4af37] shadow-2xl ring-2 ring-[#d4af37]/30'
                  : 'bg-slate-900/50 border-slate-800 opacity-80 hover:opacity-100'
              }`}>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 uppercase">
                      Modelo Recomendado
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Multi-páginas</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif-title font-bold text-white">Site Institucional Completo</h3>
                    <p className="text-xs text-slate-300 font-light mt-1">
                      Ideal para escritórios e profissionais que exigem presença corporativa profunda, divisão de áreas de atuação e máxima autoridade no Google.
                    </p>
                  </div>

                  {/* DESTAQUE PRINCIPAL DO TOTAL */}
                  <div className="p-4 rounded-xl bg-[#0b1329] border border-[#d4af37]/40 text-center space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Valor Total do Investimento</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#fef08a] font-serif-title">
                      R$ 1.997,00
                    </div>
                    <p className="text-[11px] text-slate-400 font-light">Integralizado em 2 etapas paralelas de ativação</p>
                  </div>

                  {/* ENGENHARIA DE DIFERENCIAÇÃO ABAIXO DO TOTAL */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider border-b border-slate-800 pb-1">
                      Detalhamento dos Links de Ativação:
                    </h4>

                    {/* Link 1 */}
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Code className="w-3.5 h-3.5 text-[#d4af37]" />
                          Link 1: Desenvolvimento & Adesão
                        </span>
                        <span className="font-extrabold text-[#fef08a]">R$ 1.800,00</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-light">
                        Pagamento único referente à codificação, engenharia de UI/UX, arquitetura de software e implementação completa.
                      </p>
                    </div>

                    {/* Link 2 */}
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Server className="w-3.5 h-3.5 text-sky-400" />
                          Link 2: Hospedagem, Suporte & Manutenção
                        </span>
                        <span className="font-extrabold text-sky-300">R$ 197,00 / mês</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-light">
                        Assinatura mensal cobrindo infraestrutura Cloud Run, certificado SSL, segurança e atualizações ilimitadas sob demanda.
                      </p>
                    </div>
                  </div>

                  {/* Included features */}
                  <div className="space-y-2 pt-2 text-xs">
                    <span className="font-bold text-slate-300 block">Recursos Incluídos:</span>
                    <ul className="space-y-1.5 text-slate-300">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> Sistema de rotas dinâmicas (Início, Sobre, Serviços, Contato)</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> Vídeo de fundo na Hero + Motion animations total</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> Módulo de rotas Google Maps + Waze integrados</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> Otimização SEO Local + Schema Markup OAB</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setSelectedModel('institucional')}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all ${
                      selectedModel === 'institucional'
                        ? 'bg-[#d4af37] text-[#0b1329]'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {selectedModel === 'institucional' ? 'Modelo Selecionado' : 'Selecionar Este Modelo'}
                  </button>
                </div>
              </div>

              {/* MODEL 2: LANDING PAGE ÚNICA */}
              <div className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                selectedModel === 'landing'
                  ? 'bg-gradient-to-b from-slate-900 via-[#0f172a] to-slate-900 border-[#d4af37] shadow-2xl ring-2 ring-[#d4af37]/30'
                  : 'bg-slate-900/50 border-slate-800 opacity-80 hover:opacity-100'
              }`}>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-sky-500/20 text-sky-400 border border-sky-500/40 uppercase">
                      Modelo Alta Conversão
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Página Única</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif-title font-bold text-white">Landing Page Única de Conversão</h3>
                    <p className="text-xs text-slate-300 font-light mt-1">
                      Foco total em campanhas de tráfego pago (Google Ads / Meta Ads) para capturar leads e gerar contatos imediatos no WhatsApp.
                    </p>
                  </div>

                  {/* DESTAQUE PRINCIPAL DO TOTAL */}
                  <div className="p-4 rounded-xl bg-[#0b1329] border border-[#d4af37]/40 text-center space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Valor Total do Investimento</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#fef08a] font-serif-title">
                      R$ 1.497,00
                    </div>
                    <p className="text-[11px] text-slate-400 font-light">Integralizado em 2 etapas paralelas de ativação</p>
                  </div>

                  {/* ENGENHARIA DE DIFERENCIAÇÃO ABAIXO DO TOTAL */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider border-b border-slate-800 pb-1">
                      Detalhamento dos Links de Ativação:
                    </h4>

                    {/* Link 1 */}
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Code className="w-3.5 h-3.5 text-[#d4af37]" />
                          Link 1: Desenvolvimento & Adesão
                        </span>
                        <span className="font-extrabold text-[#fef08a]">R$ 1.348,00</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-light">
                        Pagamento único referente à estrutura de página única vertical com altíssima taxa de conversão.
                      </p>
                    </div>

                    {/* Link 2 */}
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Server className="w-3.5 h-3.5 text-sky-400" />
                          Link 2: Hospedagem, Suporte & Manutenção
                        </span>
                        <span className="font-extrabold text-sky-300">R$ 149,00 / mês</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-light">
                        Assinatura mensal cobrindo hospedagem Cloud, suporte técnico e atualizações periódicas de textos/fotos.
                      </p>
                    </div>
                  </div>

                  {/* Included features */}
                  <div className="space-y-2 pt-2 text-xs">
                    <span className="font-bold text-slate-300 block">Recursos Incluídos:</span>
                    <ul className="space-y-1.5 text-slate-300">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> Rolagem contínua com transições suaves em gradiente</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> Botões de WhatsApp otimizados para anúncios</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> Vídeo de fundo na Hero + Pílula flutuante mobile fit</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#d4af37]" /> Integração total com Google Maps e Waze</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setSelectedModel('landing')}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all ${
                      selectedModel === 'landing'
                        ? 'bg-[#d4af37] text-[#0b1329]'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {selectedModel === 'landing' ? 'Modelo Selecionado' : 'Selecionar Este Modelo'}
                  </button>
                </div>
              </div>

            </div>

            {/* MANDATORY DEVELOPER WHATSAPP CONVERSION CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-[#0b1329] to-emerald-950/80 border border-emerald-500/40 text-center space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-1">
                  <Lock className="w-3.5 h-3.5" />
                  Fechamento Seguro & Ativação Imediata
                </span>
                <h3 className="text-lg font-serif-title font-bold text-white">
                  Pronto para Ativar o Site Oficial da Dra. Carina Fonte?
                </h3>
                <p className="text-xs text-slate-300 max-w-xl mx-auto font-light">
                  Ao clicar no botão abaixo, você será direcionado ao atendimento do desenvolvedor (<strong>5521973629114</strong>) enviando a solicitação formal dos links seguros de pagamento.
                </p>
              </div>

              <a
                href={developerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-extrabold text-[#0b1329] bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 shadow-xl shadow-emerald-500/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 fill-current text-[#0b1329]" />
                <span>Solicitar Links de Contratação ({selectedModel === 'institucional' ? 'R$ 1.997,00' : 'R$ 1.497,00'})</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
