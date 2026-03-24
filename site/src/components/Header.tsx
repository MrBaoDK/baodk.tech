import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/mini-games', label: 'Mini Games' }
  ];

  return (
    <header className="bg-[var(--color-accent)] text-white sticky top-0 z-50 shadow-lg overflow-visible">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <a
            href="https://baodk.zone.id"
            aria-label="Bao DK - Home"
            className="flex items-center gap-2 md:gap-4 no-underline relative"
          >
            {/* Main logo: large, slight overlap */}
            <span
              className="rounded-full bg-white inline-flex items-center justify-center shadow-lg w-14 h-14 -mb-2.5"
            >
              <img
                src="/logo/logo_head.svg"
                alt="Bao DK logo"
                width={36}
                height={36}
                loading="eager"
                decoding="async"
                className="block"
              />
            </span>

            {/* Second logo: no circle, wider at md+ with more gap */}
            <span className="hidden md:inline-flex md:ml-3 lg:ml-4" aria-hidden="true">
              <img
                src="/logo/logo_sign.svg"
                alt=""
                width={64}
                height={48}
                loading="eager"
                decoding="async"
                className="block object-contain"
              />
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
                className="font-medium text-white hover:text-[var(--color-dark)] transition-colors no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-accent)] rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <button className="btn-primary btn-md hidden md:inline-block">
            Hire Me
          </button>
          
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
            <button className="btn-primary btn-lg mt-4 w-full">
              Contact Me
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
