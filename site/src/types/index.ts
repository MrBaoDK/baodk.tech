// Core interfaces matching the markdown specifications
export interface Skill {
  title: string;
  description: string;
  technologies: string[];
  icon?: string;
}

export interface TechnicalCapability extends Skill {
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  category?: string;
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface TimelineItem extends Experience {
  achievements: string[];
}

export interface Testimonial {
  name: string;
  role: string; // e.g., client, colleague, manager
  location: string; // country or region
  content: string;
  logo: string; // short initials or flag-like token
}

// Navigation and UI interfaces
export interface NavItem {
  href: string;
  label: string;
}

export interface SocialItem extends NavItem {
  icon: string;
  labels?: string[];
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
