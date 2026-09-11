import { ServiceItem, EducationItem, TestimonialItem } from '../types';

export const CLIENT_INFO = {
  name: "Dra. Carina Fonte",
  title: "Advogada Empresarial Trabalhista",
  subtitle: "Consultoria Preventiva | Compliance Trabalhista e Gestão de Riscos | Segurança Jurídica para Negócios",
  phone: "+55 (22) 99965-0427",
  phoneClean: "5522999650427",
  email: "carinafonte.adv@gmail.com",
  instagram: "@carinafonte.advogada",
  instagramUrl: "https://www.instagram.com/carinafonte.advogada",
  linkedinUrl: "https://www.linkedin.com/in/carina-fonte-997070a5",
  location: "Macaé, Rio de Janeiro - Brasil",
  availability: "Atendimento presencial em Macaé/RJ e consultoria remota em todo o Brasil",
  oab: "OAB/RJ - Atuação Especializada",
  developerWhatsApp: "5521973629114",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Centro+Macae+RJ",
  wazeUrl: "https://waze.com/ul?q=Macae%20RJ&navigate=yes",
  // Professional portrait photo of Dra. Carina Fonte
  photoUrl: "./photo-carina-fonte.jpeg",
  // Hero section background loop video
  heroVideoUrl: "./hero-video.mp4",
  heroVideoFallbackUrl: "./hero-video.mp4"
};

export const ABOUT_TEXT = {
  summary: `Construí uma trajetória sólida e respeitada na advocacia empresarial, unindo consultoria preventiva de alto impacto, defesa estratégica de empresas, compliance e gestão rigorosa de riscos jurídicos. Meu trabalho é pautado pela busca constante da conformidade legal e pela sustentabilidade das relações de trabalho, sempre focando em soluções estratégicas que reduzam passivos e fortaleçam a segurança empresarial.`,
  experience: `Minha experiência integra com excelência o setor público — com passagens expressivas por Tribunais de Justiça, Receita Federal e Prefeitura Municipal de Macaé — à advocacia privada, onde assessoro empresas em contratos de alta complexidade, processos licitatórios, compliance corporativo e disputas trabalhistas. Destaco-me na atuação em setores altamente regulados e desafiadores, como o segmento offshore da Bacia de Campos e grandes contratos corporativos, proporcionando eficiência operacional e vantagem competitiva para os negócios que represento.`
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "compliance-trabalhista",
    title: "Compliance Trabalhista & Auditoria Preventiva",
    category: "Mapeamento e Mitigação de Riscos",
    iconName: "ShieldCheck",
    shortDesc: "Auditoria completa de rotinas trabalhistas, criação de códigos de conduta e programas de governança corporativa para evitar litígios.",
    fullDesc: "Implantação de boas práticas de compliance no ambiente de trabalho. Através de investigações internas, due diligence trabalhista e revisão de rotinas de RH, identificamos vulnerabilidades e eliminamos gargalos jurídicos antes que se transformem em reclamações trabalhistas ou autuações fiscais.",
    benefits: [
      "Redução drástica do passivo trabalhista acumulado",
      "Elaboração e atualização de Regulamento Interno e Código de Ética",
      "Procedimentos de Due Diligence Trabalhista em fusões e aquisições",
      "Treinamento de lideranças e equipes de RH"
    ],
    forWho: "Empresas de médio e grande porte, prestadores de serviço do setor offshore e indústrias que buscam proteger seu patrimônio.",
    faq: [
      {
        question: "Como o compliance trabalhista reduz os custos da minha empresa?",
        answer: "O compliance previne falhas em contratações, horas extras indevidas e desvios de função, evitando ações judiciais que custam dezenas de vezes mais que a prevenção."
      },
      {
        question: "Quanto tempo dura um projeto de auditoria preventiva?",
        answer: "Geralmente de 30 a 90 dias, dependendo do porte da empresa e do número de colaboradores envolvidos."
      }
    ]
  },
  {
    id: "consultoria-preventiva",
    title: "Consultoria Jurídica Empresarial Preventiva",
    category: "Acompanhamento Contínuo",
    iconName: "FileText",
    shortDesc: "Assessoria jurídica diária e estratégica para tomada de decisões seguras, elaboração de pareceres e resposta ágil a dúvidas operacionais.",
    fullDesc: "Acompanhamento próximo aos diretores e gestores para garantir suporte imediato em negociações, alterações contratuais e contingências diárias. Oferecemos um parecer transparente e fundamentado para mitigar riscos contratuais e trabalhistas.",
    benefits: [
      "Suporte rápido via canais diretos para tomada de decisão",
      "Minimização de multas regulatórias e autuações do Ministério do Trabalho",
      "Revisão e elaboração de contratos comerciais de alta complexidade",
      "Blindagem jurídica da diretoria e dos sócios"
    ],
    forWho: "Empresários, diretores executivos e gestores de RH em Macaé e todo o Brasil.",
    faq: [
      {
        question: "A consultoria preventiva atende empresas fora do Rio de Janeiro?",
        answer: "Sim! O atendimento é prestado tanto presencialmente em Macaé/RJ quanto de forma 100% digital e remota para empresas de todo o país."
      }
    ]
  },
  {
    id: "gestao-passivos",
    title: "Gestão de Passivos e Disputas Trabalhistas",
    category: "Contencioso Estratégico",
    iconName: "Scale",
    shortDesc: "Defesa combativa e técnica em reclamatórias trabalhistas, fiscalizações e acordos judiciais favoráveis à saúde financeira da empresa.",
    fullDesc: "Atuação contenciosa diferenciada perante a Justiça do Trabalho, com elaboração de defesas personalizadas, acompanhamento em audiências e realização de sustentação oral. Atuamos fortemente para anular pleitos indevidos e negociar acordos realistas.",
    benefits: [
      "Defesas customizadas sem uso de petições genéricas",
      "Acompanhamento rigoroso em audiências presenciais e virtuais",
      "Análise estatística de pedidos recorrentes para correção interna",
      "Estratégia focada na preservação do fluxo de caixa"
    ],
    forWho: "Organizações que enfrentam reclamatórias trabalhistas recorrentes ou de alto valor financeiro.",
    faq: [
      {
        question: "Vocês realizam sustentação oral nos Tribunais Regionais (TRT)?",
        answer: "Sim, atuamos no contencioso estratégico em todas as instâncias, inclusive TRTs e TST."
      }
    ]
  },
  {
    id: "direito-offshore",
    title: "Direito do Trabalho no Setor Offshore e Regulações",
    category: "Especialização Regional Macaé",
    iconName: "Anchor",
    shortDesc: "Segurança jurídica específica para operações marítimas, escalas de embarque, adicionais contratuais e normas regulamentadoras do setor de petróleo e gás.",
    fullDesc: "Atuação altamente especializada nas demandas do polo petrolífero de Macaé. Compreendemos a dinâmica de regimes de embarque, adicionais de periculosidade e insalubridade, terceirizações em plataformas e fiscalizações do trabalho marítimo.",
    benefits: [
      "Enquadramento correto de acordos e convenções coletivas offshore",
      "Adequação de contratos de prestação de serviços para embarcados",
      "Mitigação de passivos relativos a folgas, dobras e adicionais",
      "Assessoria em fiscalizações da Marinha e do Ministério do Trabalho"
    ],
    forWho: "Empresas de logística petroleira, armadores, prestadoras de serviço offshore e suprimentos marítimos.",
    faq: [
      {
        question: "Como funciona a adequação às Convenções Coletivas do setor offshore?",
        answer: "Avaliamos as especificidades do sindicato correspondente em Macaé/RJ para garantir alinhamento perfeito nas cláusulas de benefícios e regimes de trabalho."
      }
    ]
  },
  {
    id: "contratos-terceirizacao",
    title: "Contratos Corporativos, Societário & Terceirização",
    category: "Estruturação de Negócios",
    iconName: "Briefcase",
    shortDesc: "Elaboração de contratos corporativos, acordos de sócios, reestruturação trabalhista e conformidade em processos de terceirização.",
    fullDesc: "Assessoria completa em Direito Societário e contratual. Blindamos sua empresa na contratação de terceiros, autônomos e Prestadores de Serviços (PJ), garantindo que não haja caracterização indevida de vínculo empregatício.",
    benefits: [
      "Contratos de prestação de serviços (PJ) blindados",
      "Adequação às diretrizes da Lei da Terceirização",
      "Redação de Acordos de Confidencialidade (NDA) e Não-Concorrência",
      "Gestão de contratos com fornecedores estratégicos"
    ],
    forWho: "Empresas que contratam prestadores PJ ou terceirizam etapas de sua operação.",
    faq: [
      {
        question: "Contratar PJ sem risco trabalhista é possível?",
        answer: "Sim, desde que haja autonomia real, ausência de habitualidade/subordinação direta e contrato devidamente minutado por especialista."
      }
    ]
  },
  {
    id: "treinamentos-governanca",
    title: "Treinamentos Corporativos & Código de Ética",
    category: "Cultura e Prevenção",
    iconName: "GraduationCap",
    shortDesc: "Capacitação presencial ou online para diretores, gerentes e RH sobre prevenção de assédio, liderança consciente e regras disciplinares.",
    fullDesc: "Treinamentos dinâmicos que educam lideranças sobre aplicação de advertências, suspensões, prevenção de assédio moral e sexual no trabalho (CIPA/CIPAA) e cumprimento das normas internas de segurança.",
    benefits: [
      "Cumprimento das obrigações legais da CIPA e Lei 14.457/22",
      "Melhoria do clima organizacional e retenção de talentos",
      "Fortalecimento da postura ética das chefias",
      "Certificado corporativo de capacitação"
    ],
    forWho: "Empresas que desejam treinar suas equipes e comprovar engajamento preventivo na Justiça.",
    faq: [
      {
        question: "Os treinamentos podem ser gravados ou ministrados presencialmente?",
        answer: "Oferecemos ambas as modalidades de acordo com a logística da sua empresa."
      }
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: "Estácio de Sá",
    degree: "Pós-Graduação Lato Sensu em Direito Público: Constitucional, Administrativo e Tributário",
    period: "2025 - 2026",
    logoText: "ESTÁCIO",
    description: "Especialização focada no aprofundamento das relações entre o Estado e a iniciativa privada, licitações, regulação e tributação de negócios."
  },
  {
    institution: "Damásio Educacional",
    degree: "Extensão em Compliance Trabalhista, Law & Governance",
    period: "2025",
    logoText: "DAMÁSIO",
    description: "Capacitação prática voltada para a implantação de boas práticas no ambiente corporativo, prevenção de passivos trabalhistas, auditorias de due diligence e estruturação de códigos de conduta."
  },
  {
    institution: "Faculdade CERS",
    degree: "Pós-Graduação Lato Sensu em Especialização em Relações do Trabalho (Labor and Industrial Relations)",
    period: "2020 - 2021",
    logoText: "CERS",
    description: "Formação avançada em relações sindicais, acordos coletivos, direito corporativo e negociações do trabalho."
  },
  {
    institution: "Estácio de Sá",
    degree: "Bacharelado em Direito",
    period: "2015 - 2019",
    logoText: "ESTÁCIO",
    description: "Graduação em Direito com destaque acadêmico e aprovação no Exame da Ordem dos Advogados do Brasil."
  },
  {
    institution: "Universidade Metodista de São Paulo",
    degree: "Ensino Superior em Logística, Gestão da Cadeia de Suprimentos e Operações",
    period: "2015 - 2016",
    logoText: "METODISTA",
    description: "Visão sistêmica de processos operacionais, logística e supply chain que impulsiona a compreensão prática dos negócios dos clientes."
  }
];

export const SKILLS_CATEGORIES = [
  {
    category: "Gestão de Conformidade e Risco",
    skills: ["Compliance Trabalhista", "Gestão de Riscos Jurídicos", "Investigação Interna Corporativa", "Due Diligence Trabalhista", "Prevenção de Perdas"]
  },
  {
    category: "Direito Empresarial & Público",
    skills: ["Consultoria Preventiva", "Direito Societário", "Direito Administrativo & Licitações", "Processos Judiciais Corporativos", "Elaboração de Contratos Complexos"]
  },
  {
    category: "Setor Regulado & Relações do Trabalho",
    skills: ["Direito Offshore (Macaé/RJ)", "Relações Trabalhistas e Sindicais", "Terceirização e Quarteirização", "Auditorias Fiscais", "Gestão de Equipes e RH"]
  }
];

export const DIFFERENTIALS = [
  {
    title: "Dupla Visão: Pública e Privada",
    desc: "A passagem por órgãos públicos estratégicos (Tribunais, Receita Federal e Prefeitura) confere um olhar único e assertivo para prever o comportamento fiscal e fiscalizador.",
    icon: "Building2"
  },
  {
    title: "Expertise Regional no Polo Offshore de Macaé",
    desc: "Domínio técnico das nuances das empresas marítimas e fornecedoras de petróleo e gás da Bacia de Campos.",
    icon: "Anchor"
  },
  {
    title: "Advocacia Orientada a Resultados Financeiros",
    desc: "Tratamos o Direito não como um centro de custos, mas como ferramenta de proteção patrimonial e alavancagem de negócios.",
    icon: "TrendingUp"
  },
  {
    title: "Atendimento Agilizado e Sem Jargões",
    desc: "Comunicação clara, direta e objetiva com os sócios e diretores, focando na velocidade que o mercado exige.",
    icon: "Zap"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Dr. Roberto Mendonça",
    role: "Diretor Operacional",
    company: "Empresa de Logística Offshore (Macaé)",
    text: "A Dra. Carina reorganizou todo o nosso passivo trabalhista em menos de seis meses. A consultoria preventiva dela salvou nossa empresa de autuações pesadas.",
    rating: 5
  },
  {
    name: "Mariana Alencar",
    role: "Gerente de Recursos Humanos",
    company: "Grupo de Serviços de Engenharia",
    text: "O treinamento sobre prevenção de assédio e aplicação de sanções disciplinares ministrado pela Dra. Carina transformou a postura de nossas lideranças. Impecável!",
    rating: 5
  },
  {
    name: "Carlos Eduardo Santos",
    role: "CEO & Fundador",
    company: "Tech & Services Corporativos",
    text: "Ter a Dra. Carina no suporte diário das nossas negociações de contratos PJ trouxe uma tranquilidade ímpar. Excelente capacidade de resolver problemas com velocidade.",
    rating: 5
  }
];

export const FAQS = [
  {
    q: "Como agendar uma primeira consulta diagnóstica?",
    a: "Basta clicar em qualquer botão de WhatsApp nesta página. Nossa equipe responderá rapidamente para compreender as necessidades da sua empresa e agendar a reunião presencial ou online."
  },
  {
    q: "Atendem pequenas e médias empresas também?",
    a: "Sim! Oferecemos planos de consultoria jurídica adequados à realidade de PMEs, prevenindo problemas antes que eles tomem proporções financeiras graves."
  },
  {
    q: "Qual a diferença entre contratar advogada pontual e consultoria contínua?",
    a: "A advocacia pontual atua quando o processo já existe (remediativa). A consultoria contínua impede que o processo nasça, ajustando rotinas e economizando recursos do caixa da empresa."
  },
  {
    q: "Como funciona o atendimento presencial em Macaé?",
    a: "Disponibilizamos reuniões na sede da sua empresa ou em nosso escritório de apoio no Centro/Parque Aeroporto em Macaé/RJ, além de suporte via chamadas de vídeo."
  }
];
