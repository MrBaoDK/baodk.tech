import { SocialItem } from '@baodk-site/types';

interface SocialData {
  [key: string]: SocialItem;
}

export const SOCIALS: SocialData = {
  GITHUB: {
    id: 'github',
    href: 'https://github.com/mrbaodk',
    label: 'GitHub',
    icon: 'code',
    labels: ['digital-network', 'primary'],
    order: 2,
  },
  LINKEDIN: {
    id: 'linkedin',
    href: 'https://linkedin.com/in/baodk',
    label: 'LinkedIn',
    icon: 'work',
    labels: ['digital-network', 'primary'],
    order: 1,
  },
  TWITTER: {
    id: 'twitter',
    href: 'https://x.com/mrbaodk',
    label: 'X',
    icon: 'share',
  },
  FACEBOOK: {
    id: 'facebook',
    href: 'https://facebook.com/baodk.tech',
    label: 'Facebook',
    icon: 'facebook',
    labels: ['digital-network'],
  },
  INSTAGRAM: {
    id: 'instagram',
    href: 'https://instagram.com/mrbaodk',
    label: 'Instagram',
    icon: 'instagram',
  },
  TIKTOK: {
    id: 'tiktok',
    href: 'https://tiktok.com/mrbaodk',
    label: 'Tiktok',
    icon: 'tiktok',
    labels: ['digital-network'],
  },
  WEBSITE: {
    id: 'website',
    href: 'https://baodk.tech',
    label: 'BAODK.TECH',
    icon: 'language',
  },
  GDEV: {
    id: 'gdev',
    href: 'https://g.dev/baodk',
    label: 'Google Developer',
    icon: 'g_dev',
    labels: ['digital-network'],
  },
  PHONE: {
    id: 'phone',
    href: 'tel:+84898678905',
    label: '+84 (898) 6789-05',
    icon: 'call',
    labels: ['primary'],
    order: 4,
  },
  EMAIL: {
    id: 'email',
    href: 'mailto:mrbaodk@hotmail.com',
    label: 'mrbaodk@hotmail.com',
    icon: 'mail',
  },
  ADDRESS: {
    id: 'address',
    href: 'https://maps.google.com/?q=Ho+Chi+Minh+City',
    label: 'Ho Chi Minh City, Vietnam',
    icon: 'location_on',
  },
  CREDLY: {
    id: 'credly',
    href: 'https://credly.com/users/bao-dk/badges',
    label: 'Credly',
    icon: 'workspace_premium',
    labels: ['primary'],
    order: 3,
  },
};
