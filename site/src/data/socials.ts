import { SocialItem } from "@baodk-site/types";

interface SocialData {
   [key: string]: SocialItem;
}

export const SOCIALS: SocialData = {
   GITHUB: {
      href: "https://github.com/mrbaodk",
      label: "GitHub",
      icon: "github",
      labels: ["digital-network"]
   },
   LINKEDIN: {
      href: "https://linkedin.com/in/baodk",
      label: "LinkedIn",
      icon: "linkedin",
      labels: ["digital-network"]
   },
   TWITTER: {
      href: "https://x.com/mrbaodk",
      label: "X",
      icon: "x",
      labels: ["digital-network"]
   },
   FACEBOOK: {
      href: "https://facebook.com/mrbaodk",
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
   },
   WEBSITE: {
      href: "https://baodk.tech",
      label: "BAODK.TECH",
      icon: "website",
   },
   PHONE: {
      href: "tel:+84898678905",
      label: "+84 (898) 6789-05",
      icon: "phone",
   },
   EMAIL: {
      href: "mailto:mrbaodk@hotmail.com",
      label: "mrbaodk@hotmail.com",
      icon: "email",
   },
   ADDRESS: {
      href: "https://maps.google.com/?q=Ho+Chi+Minh+City",
      label: "Ho Chi Minh City, Vietnam",
      icon: "address",
   },
   CREDLY: {
      href: "https://credly.com/users/baodk/badges",
      label: "Credly",
      icon: "credly",
   },
};