import React, { useState, useEffect } from 'react';

import { SOCIALS } from '@baodk-site/data/socials';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'experience', 'testimonials'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#testimonials', label: 'Testimonials', id: 'testimonials' },
    { href: '/blog', label: 'Blog', id: 'blog' },
    { href: '/mini-games', label: 'Mini Games', id: 'mini-games' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-black/40 backdrop-blur-md py-3 border-b border-white/5 shadow-2xl'
        : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <a
            href={SOCIALS.WEBSITE.href}
            aria-label="Bao DK - Home"
            className="flex items-center gap-2 md:gap-4 no-underline relative"
          >
            {/* Main logo: large, slight overlap */}
            <span
              className="rounded-full bg-white/5 backdrop-blur-md inline-flex items-center justify-center border border-white/10 shadow-2xl w-14 h-14 -mb-2.5 group"
            >
              <img
                src="/logo/logo_head.svg"
                alt="Bao DK logo"
                width={50}
                height={50}
                loading="eager"
                decoding="async"
                className="block drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-transform duration-500 group-hover:scale-110"
              />
            </span>

            {/* Logo Text: Replaced logo_sign.svg with text for better coherence */}
            <span className="hidden md:inline-flex items-baseline ml-3 lg:ml-4">
              <span className="text-white font-black text-2xl tracking-tighter uppercase">Bao</span>
              <span className="text-[var(--color-primary)] font-black text-2xl tracking-tighter uppercase ml-1">DK</span>
            </span>

            {/* Screen-reader-only brand text */}
            <span className="sr-only">Bao DK</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-bold transition-all duration-300 no-underline uppercase tracking-widest hover:text-[var(--color-primary)] ${activeSection === item.id ? 'text-[var(--color-primary)]' : 'text-white/70'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Professional CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-primary)] text-white font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-[var(--color-primary)]/20 no-underline"
          >
            Hire Me
            <span className="material-symbols-outlined text-sm">work</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl bg-transparent border-0 text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-[#374151] mt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-white hover:text-[var(--color-dark)] transition-colors no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary btn-lg mt-4 w-full no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
