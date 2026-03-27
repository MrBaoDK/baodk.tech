import React from 'react';

import { SOCIALS } from '@baodk-site/data/socials';
import SocialLinks from './SocialLinks';

interface FooterProps {
  simple?: boolean;
}

const Footer: React.FC<FooterProps> = ({ simple = false }) => {

  const navItems = [
    { href: '/#/about', label: 'Go to top', id: 'about' },
    { href: '/#/about#projects', label: 'Projects', id: 'projects' },
    { href: '/#/about#experience', label: 'Experience', id: 'experience' },
    { href: 'https://blog.baodk.tech', label: 'Blog', id: 'blog' },
    { href: 'https://games.baodk.tech', label: 'Mini Games', id: 'mini-games' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const href = e.currentTarget.getAttribute('href');

    // External links
    if (href?.startsWith('http')) {
      e.preventDefault();
      window.open(href, '_blank');
      return;
    }

    if (href?.startsWith('/#')) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update hash manually 
        const newHash = id === 'about' ? '/#/about' : `/#/about#${id}`;
        window.history.replaceState(null, '', newHash);
        return;
      }
    }

    // Local paths (like /blog or /games)
    // If not a hash link and not an external link, let the browser navigate naturally
    // This will cause a full page load to the sub-project
  };

  return (
    <footer className={`bg-[var(--color-background)] border-t border-white/5 ${simple ? 'py-12' : 'pt-24 pb-12'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!simple && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 mb-12">
            {/* Brand & Mission */}
            <div className="lg:col-span-2 space-y-8">
              <a href={SOCIALS.WEBSITE.href} className="inline-flex items-center gap-3 no-underline group">
                <span className="w-10 h-10 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 rounded-full">
                  <img src="/logo/logo_head.svg" alt="Bao logo" className="w-10 h-10 " />
                </span>
                <span className="text-white font-black text-xl tracking-tighter uppercase">
                  Bao <span className="text-[var(--color-primary)]">DK</span>
                </span>
              </a>
              <p className="text-white/40 font-medium leading-relaxed max-w-sm">
                Architecting high-performance AI systems and scalable data infrastructure.
                Bridging the gap between code and business impact.
              </p>
              <SocialLinks label="primary" variant="icon" />
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)] mb-8">Navigation</h4>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className="text-white/40 hover:text-white font-bold text-xs uppercase tracking-widest no-underline transition-colors focus:outline-none"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Summary */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary)] mb-8">Direct</h4>
              <ul className="space-y-4">
                <li>
                  <a href={SOCIALS.EMAIL.href} className="text-white font-bold text-sm no-underline block hover:text-[var(--color-primary)] transition-colors">
                    {SOCIALS.EMAIL.label}
                  </a>
                </li>
                <li className="text-white/40 text-xs font-medium">Ho Chi Minh City, VN</li>
                <li className="pt-4 border-t border-white/5">
                  <button className="text-white font-black text-[10px] uppercase tracking-widest py-2 px-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                    Available for Hire
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Legal & Version */}
        <div className={`pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 ${!simple && 'mt-0'}`}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            © 2026 Bao DK. All Rights Reserved. Build v4.0.0
          </p>
          <div className="flex gap-8">
            <a href="/privacy" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 no-underline hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 no-underline hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
