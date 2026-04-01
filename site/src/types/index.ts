export interface BaseIcon {
  icon: string | React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string }>;
}

export interface Technology extends BaseIcon {
  name: string;
}

export interface BaseContent {
  title: string;
  description: string;
}

export interface Capability extends BaseContent, BaseIcon {
  core: Technology[];
  utility: string[];
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

export interface SocialItem extends NavItem, BaseIcon {
  labels?: string[];
  order?: number;
}
