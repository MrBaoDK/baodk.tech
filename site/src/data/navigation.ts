import { NavItem } from '@baodk-site/types';

export const NAV_ITEMS: NavItem[] = [
  {
    href: '/#/about',
    label: 'About',
    footerLabel: 'Go to top',
    id: 'about',
    whereUsed: ['header', 'footer'],
  },
  {
    href: '/#/about#skills',
    label: 'Skills',
    id: 'skills',
    whereUsed: ['header'],
  },
  {
    href: '/#/about#projects',
    label: 'Projects',
    id: 'projects',
    whereUsed: ['header', 'footer'],
  },
  {
    href: '/#/about#experience',
    label: 'Experience',
    id: 'experience',
    whereUsed: ['header', 'footer'],
  },
  {
    href: '/#/about#testimonials',
    label: 'Testimonials',
    id: 'testimonials',
    whereUsed: ['header'],
  },
  {
    href: '/#/chat',
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
