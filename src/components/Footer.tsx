import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-dark)] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <a href="https://baodk.zone.id" aria-label="Bao DK - Home" className="inline-flex items-center gap-3 mb-4 no-underline">
              <span className="rounded-full bg-white inline-flex items-center justify-center shadow-lg" style={{ width: 40, height: 40 }}>
                <img src="/logo/logo_head.svg" alt="Bao DK logo" width={24} height={24} loading="lazy" decoding="async" style={{ display: 'block' }} />
              </span>
              <span className="hidden md:inline-flex" aria-hidden="true">
                <img src="/logo/logo_sign.svg" alt="" width={36} height={28} loading="lazy" decoding="async" style={{ display: 'block', objectFit: 'contain' }} />
              </span>
              <span className="sr-only">Bao DK</span>
            </a>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Delivering scalable, AI-powered, and test-driven enterprise solutions 
              that transform data into actionable insights and drive business growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/baodk" target="_blank" rel="noreferrer"
                className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a 
                href="https://github.com/MrBaoDK" target="_blank" rel="noreferrer"
                className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors duration-300"
                aria-label="GitHub"
              >
                gh
              </a>
              <a 
                href="https://facebook.com/MrBaoDK" target="_blank" rel="noreferrer"
                className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors duration-300"
                aria-label="Facebook"
              >
                fb
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-[var(--color-primary)]">📧</span>
                <a 
                  href="mailto:mrbaodk@hotmail.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  mrbaodk@hotmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[var(--color-primary)]">📞</span>
                <a 
                  href="tel:+84898678905" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  +84 (898) 6789-05
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[var(--color-primary)]">📍</span>
                <span className="text-gray-300">Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[var(--color-primary)]">🌐</span>
                <span className="text-gray-300">Available for Remote Work</span>
              </div>
            </div>
          </div>
          
          {/* Certifications & Skills */}
          <div>
            <h3 className="text-xl font-bold mb-6">Certifications</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-[var(--color-accent)]">🏆</span>
                <span className="text-gray-300 text-sm">AWS Certified Solutions Architect</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[var(--color-accent)]">🏆</span>
                <span className="text-gray-300 text-sm">Google Professional Data Engineer</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[var(--color-accent)]">🏆</span>
                <span className="text-gray-300 text-sm">Certified Kubernetes Administrator</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[var(--color-accent)]">🏆</span>
                <span className="text-gray-300 text-sm">Python Institute Certified</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#capabilities" className="text-gray-300 hover:text-white transition-colors duration-300">
                Capabilities
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                Projects
              </a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">
                Experience
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300">
                Testimonials
              </a>
              <a href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">
                Blog
              </a>
              <a href="/mini-games" className="text-gray-300 hover:text-white transition-colors duration-300">
                Mini Games
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Bao DK. All rights reserved.
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300 mb-4">Ready to start your next project?</p>
          <button className="btn-primary btn-lg">
            Contact Me
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
