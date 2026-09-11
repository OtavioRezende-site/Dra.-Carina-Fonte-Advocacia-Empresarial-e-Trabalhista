import React from 'react';
import { CLIENT_INFO } from '../data/carinaData';
import { Scale, ShieldCheck, MapPin, Phone, Mail, Instagram, Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080d1e] border-t border-slate-800/80 text-slate-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-serif-title font-bold text-base text-white">Dra. Carina Fonte</span>
            </div>
            <p className="text-[11px] text-slate-400 font-light leading-relaxed">
              Advocacia Empresarial, Consultoria Preventiva, Compliance Trabalhista e Gestão de Riscos Jurídicos.
            </p>
            <div className="text-[10px] text-[#d4af37] font-semibold">
              OAB/RJ • Macaé - Rio de Janeiro
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Especialidades</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Compliance Trabalhista</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Consultoria Preventiva</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Direito Offshore (Macaé/RJ)</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Gestão de Passivos Trabalhistas</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Contratos & Terceirização</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Contato Directo</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#d4af37]" /> {CLIENT_INFO.phone}</li>
              <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#d4af37]" /> {CLIENT_INFO.email}</li>
              <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#d4af37]" /> {CLIENT_INFO.location}</li>
            </ul>
          </div>

          {/* Col 4: Socials & Ethics */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Redes Sociais</h4>
            <div className="flex items-center gap-3">
              <a
                href={CLIENT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#d4af37] hover:text-[#0b1329] flex items-center justify-center transition-colors"
                aria-label="Instagram Dra. Carina Fonte"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLIENT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#d4af37] hover:text-[#0b1329] flex items-center justify-center transition-colors"
                aria-label="LinkedIn Dra. Carina Fonte"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[10px] text-slate-500 leading-normal">
              Este site cumpre rigorosamente os preceitos do Código de Ética e Disciplina da OAB (Provimento 205/2021). Conteúdo meramente informativo.
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Dra. Carina Fonte. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com Tecnologia e Inteligência Comercial</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
