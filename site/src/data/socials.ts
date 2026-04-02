import { FaGlobeAsia, FaLinkedin } from 'react-icons/fa';
import {
  SiCredly,
  SiFacebook,
  SiGithub,
  SiGooglesummerofcode,
  SiInstagram,
  SiTiktok,
  SiX,
} from 'react-icons/si';

import { SocialItem } from '@baodk-site/types';

interface SocialData {
  [key: string]: SocialItem;
}

export const SOCIALS: SocialData = {
  GITHUB: {
    id: 'github',
    href: 'https://github.com/mrbaodk',
    label: 'GitHub',
    icon: SiGithub,
    labels: ['digital-network', 'primary'],
    order: 2,
  },
  LINKEDIN: {
    id: 'linkedin',
    href: 'https://linkedin.com/in/baodk',
    label: 'LinkedIn',
    icon: FaLinkedin,
    labels: ['digital-network', 'primary'],
    order: 1,
  },
  TWITTER: {
    id: 'twitter',
    href: 'https://x.com/mrbaodk',
    label: 'X',
    icon: SiX,
  },
  FACEBOOK: {
    id: 'facebook',
    href: 'https://facebook.com/baodk.tech',
    label: 'Facebook',
    icon: SiFacebook,
    labels: ['digital-network'],
  },
  INSTAGRAM: {
    id: 'instagram',
    href: 'https://instagram.com/mrbaodk',
    label: 'Instagram',
    icon: SiInstagram,
  },
  TIKTOK: {
    id: 'tiktok',
    href: 'https://tiktok.com/mrbaodk',
    label: 'Tiktok',
    icon: SiTiktok,
    labels: ['digital-network'],
  },
  WEBSITE: {
    id: 'website',
    href: 'https://baodk.tech',
    label: 'BAODK.TECH',
    icon: FaGlobeAsia,
  },
  GDEV: {
    id: 'gdev',
    href: 'https://g.dev/baodk',
    label: 'Google Developer',
    icon: SiGooglesummerofcode,
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
    icon: SiCredly,
    labels: ['primary'],
    order: 3,
  },
};
