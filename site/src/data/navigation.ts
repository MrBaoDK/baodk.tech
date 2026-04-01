import { NavItem } from '@baodk-site/types';

export const NAV_ITEMS: NavItem[] = [
  {
    href: '#about',
    label: 'About',
    footerLabel: 'Go to top',
    id: 'about',
    whereUsed: ['header', 'footer'],
  },
  {
    href: '#contact',
    label: 'Contact',
    id: 'contact',
    whereUsed: ['cta'],
  },
  {
    href: '#skills',
    label: 'Skills',
    id: 'skills',
  },
  {
    href: '#capabilities',
    label: 'Capabilities',
    id: 'capabilities',
    whereUsed: ['header'],
  },
  {
    href: '#projects',
    label: 'Projects',
    id: 'projects',
    whereUsed: ['header', 'footer'],
  },
  {
    href: '#experience',
    label: 'Experience',
    id: 'experience',
    whereUsed: ['header', 'footer'],
  },
  {
    href: '#testimonials',
    label: 'Testimonials',
    id: 'testimonials',
    whereUsed: ['header'],
  },
  {
    href: '#chat',
    label: 'Ask AI',
    id: 'ask-ai',
    whereUsed: ['header'],
  },
  {
    href: 'https://blog.baodk.tech',
    label: 'Blog',
    id: 'blog',
    whereUsed: ['footer'],
  },
  {
    href: 'https://games.baodk.tech',
    label: 'Mini Games',
    id: 'mini-games',
    whereUsed: ['footer'],
  },
];
