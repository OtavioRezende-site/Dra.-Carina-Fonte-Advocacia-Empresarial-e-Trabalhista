import React from 'react';
import { CLIENT_INFO, ABOUT_TEXT, EDUCATION_LIST, SKILLS_CATEGORIES } from '../data/carinaData';
import { GraduationCap, Briefcase, Award, Shield, CheckCircle, Scale, Building, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#f8fafc] text-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#d4af37]/15 text-[#92400e] border border-[#d4af37]/40 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-[#b45309]" />
            <span>Perfil Profissional e Trajetória</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-slate-900 tracking-tight">
            Sobre a Dra. Carina Fonte
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] via-[#b45309] to-transparent mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Advogada Empresarial especialista em Consultoria Preventiva, Compliance Trabalhista, Governança e Gestão de Riscos com sólida atuação no setor corporativo e offshore.
          </p>
        </motion.div>

        {/* Top Split: Photo Frame & Core Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Professional Photo Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-md mx-auto">
              {/* Backing Gold Accent Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#d4af37]/30 to-sky-200/50 blur-md opacity-70" />
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/50 shadow-2xl bg-white group">
                <img
                  src={CLIENT_INFO.photoUrl}
                  alt="Dra. Carina Fonte"
                  className="w-full h-[450px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-transparent opacity-85" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b1329]/90 backdrop-blur-md border border-[#d4af37]/40 space-y-1">
                  <span className="text-[10px] font-bold text-[#fef08a] uppercase tracking-wider">Advocacia de Alta Performance</span>
                  <h3 className="text-base font-bold text-white font-serif-title">Carina Fonte | OAB/RJ</h3>
                  <p className="text-xs text-slate-300">Consultoria Preventiva e Gestão de Riscos para Empresas</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Biography & Public/Private Sector Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="border-l-4 border-[#d4af37] pl-4 text-slate-900 font-medium italic bg-amber-500/10 py-3 rounded-r-xl border border-amber-500/20">
                "{ABOUT_TEXT.summary}"
              </p>
              <p className="text-slate-600 font-normal leading-relaxed">
                {ABOUT_TEXT.experience}
              </p>
            </div>

            {/* Public vs Private Sector Experience Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:border-[#d4af37]/60 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                    <Building className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Setor Público</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Experiência em órgãos estratégicos (Tribunais de Justiça, Receita Federal e Prefeitura de Macaé), trazendo amplo domínio de rotinas fiscais e administrativas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:border-[#d4af37]/60 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Advocacia Privada & Offshore</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Assessoria corporativa na Bacia de Campos em contratos de alta complexidade, processos licitatórios, terceirizações e sustentação estratégica.
                </p>
              </div>
            </div>

            {/* External Links */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <a
                href={CLIENT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 hover:text-[#b45309] shadow-sm transition-all"
              >
                <span>Instagram {CLIENT_INFO.instagram}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={CLIENT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 hover:text-sky-700 shadow-sm transition-all"
              >
                <span>Perfil Profissional no LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>

        </div>

        {/* Academic Background / Formação Acadêmica Timeline */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center text-[#92400e]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-slate-900">Formação Acadêmica de Excelência</h3>
              <p className="text-xs text-slate-500">Pós-Graduações e Extensões em instituições renomadas nacionalmente</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EDUCATION_LIST.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: false, amount: 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#d4af37] shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-amber-100 text-[#92400e] text-[10px] font-extrabold uppercase border border-amber-200">
                      {edu.logoText}
                    </span>
                    <span className="text-xs text-slate-400 font-mono font-medium">{edu.period}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-slate-700">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-xs text-slate-500 leading-relaxed pt-1">
                      {edu.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competencies & Skill Clouds */}
        <div className="space-y-6 pt-6">
          <h3 className="text-lg font-serif-title font-bold text-slate-900 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#b45309]" />
            <span>Matriz de Competências & Especialidades</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
                <h4 className="text-xs font-extrabold text-[#92400e] uppercase tracking-wider">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200 hover:border-[#d4af37] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
