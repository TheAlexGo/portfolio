export type ContactIcon = 'mail' | 'phone' | 'telegram' | 'globe' | 'map-pin';

export interface Contact {
  label: string;
  href?: string;
  icon: ContactIcon;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface ExperiencePeriod {
  start: string;
  end: string;
  duration: string;
}

export interface ExperienceItem {
  company: string;
  url?: string;
  position: string;
  meta?: string;
  period: ExperiencePeriod;
  highlights: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface EducationItem {
  title: string;
  subtitle?: string;
  year: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface ResumeData {
  meta: {
    name: string;
    headline: string;
    tagline: string;
    photo: string;
    location: string;
  };
  contacts: Contact[];
  heroStats: HeroStat[];
  summary: string[];
  experience: ExperienceItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  languages: LanguageItem[];
}
