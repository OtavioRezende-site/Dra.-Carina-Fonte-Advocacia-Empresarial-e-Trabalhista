export type DisplayMode = 'institucional' | 'landing';

export type NavTab = 'inicio' | 'sobre' | 'servicos' | 'diferenciais' | 'contato';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  forWho: string;
  faq: { question: string; answer: string }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  skills?: string[];
  logoText: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}
