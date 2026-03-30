export interface Technology {
  name: string;
  logoSlug?: string;
}

export interface BaseContent {
  title: string;
  description: string;
}

export interface Capability extends BaseContent {
  core: Technology[];
  utility: string[];
  icon?: string; // Unified: emoji or Material Symbol name
}

export interface Project extends BaseContent {
  technologies: string[]; // Keeping as string[] for now per user feedback
  impact: string;
  category?: string;
}

export interface Experience extends BaseContent {
  year: string;
  company: string;
}

export interface TimelineItem extends Experience {
  achievements: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  content: string;
  logo: string;
}

export type NavLocation = 'header' | 'footer' | 'cta';

export interface NavItem {
  href: string;
  label: string;
  id: string;
  whereUsed?: NavLocation[];
  footerLabel?: string;
}

export interface SocialItem extends NavItem {
  icon: string;
  labels?: string[];
  order?: number;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}
