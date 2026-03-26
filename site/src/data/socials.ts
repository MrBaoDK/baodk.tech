import { SocialItem } from "@baodk-site/types";

interface SocialData {
   [key: string]: SocialItem;
}

export const SOCIALS: SocialData = {
   GITHUB: {
      href: "https://github.com/mrbaodk",
      label: "GitHub",
      icon: "code",
      labels: ["digital-network", "primary"],
      order: 2
   },
   LINKEDIN: {
      href: "https://linkedin.com/in/baodk",
      label: "LinkedIn",
      icon: "work",
      labels: ["digital-network", "primary"],
      order: 1
   },
   TWITTER: {
      href: "https://x.com/mrbaodk",
      label: "X",
      icon: "share",
   },
   FACEBOOK: {
      href: "https://facebook.com/baodk.tech",
      label: "Facebook",
      icon: "facebook",
      labels: ["digital-network"]
   },
   INSTAGRAM: {
      href: "https://instagram.com/mrbaodk",
      label: "Instagram",
      icon: "instagram",
   },
   TIKTOK: {
      href: "https://tiktok.com/mrbaodk",
      label: "Tiktok",
      icon: "tiktok",
      labels: ["digital-network"]
   },
   WEBSITE: {
      href: "https://baodk.tech",
      label: "BAODK.TECH",
      icon: "language",
   },
   GDEV: {
      href: "https://g.dev/baodk",
      label: "Google Developer",
      icon: "g_dev",
      labels: ["digital-network"]
   },
   PHONE: {
      href: "tel:+84898678905",
      label: "+84 (898) 6789-05",
      icon: "call",
      labels: ["primary"],
      order: 4
   },
   EMAIL: {
      href: "mailto:mrbaodk@hotmail.com",
      label: "mrbaodk@hotmail.com",
      icon: "mail",
   },
   ADDRESS: {
      href: "https://maps.google.com/?q=Ho+Chi+Minh+City",
      label: "Ho Chi Minh City, Vietnam",
      icon: "location_on",
   },
   CREDLY: {
      href: "https://credly.com/users/baodk/badges",
      label: "Credly",
      icon: "workspace_premium",
      labels: ["primary"],
      order: 3
   },
};