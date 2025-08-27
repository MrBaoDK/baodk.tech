import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="section bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA Content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform Your{' '}
            <span className="text-[var(--color-dark)]">Data Strategy?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
            Let's discuss how AI-powered solutions, robust data engineering, and 
            comprehensive quality practices can drive your business forward
          </p>
          
          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-lg mb-2">Rapid Implementation</h3>
              <p className="text-gray-200 text-sm">Get your solutions up and running quickly with proven methodologies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-bold text-lg mb-2">Measurable Results</h3>
              <p className="text-gray-200 text-sm">Track real business impact with comprehensive metrics and reporting</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-lg mb-2">Enterprise Quality</h3>
              <p className="text-gray-200 text-sm">Built with scalability, security, and reliability as core principles</p>
            </div>
          </div>
          
          {/* Primary CTA */}
          <div className="mt-6 mb-8 md:mt-8 md:mb-10">
            <button className="bg-white text-[var(--color-dark)] hover:bg-gray-100 px-12 py-6 rounded-lg text-xl font-bold transition-all duration-300 shadow-2xl hover:scale-105 transform">
              Hire Me
              <span className="ml-3">→</span>
            </button>
          </div>
          
          {/* Secondary Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-200">
            <a href="#projects" className="hover:text-white transition-colors duration-300 flex items-center space-x-2">
              <span>📋</span>
              <span>View Case Studies</span>
            </a>
            <span className="hidden sm:block">•</span>
            <a href="mailto:mrbaodk@hotmail.com" className="hover:text-white transition-colors duration-300 flex items-center space-x-2">
              <span>📧</span>
              <span>Send Direct Email</span>
            </a>
            <span className="hidden sm:block">•</span>
            <a href="tel:+84898678905" className="hover:text-white transition-colors duration-300 flex items-center space-x-2">
              <span>📞</span>
              <span>Schedule a Call</span>
            </a>
          </div>
        </div>
        
        {/* Trust Indicators */}
        {/* <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-gray-200 mb-4">Trusted by leading organizations</p>
          <div className="flex justify-center space-x-8 opacity-70">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center font-bold text-lg">
              TF
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center font-bold text-lg">
              DC
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center font-bold text-lg">
              CF
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center font-bold text-lg">
              IT
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CallToAction;
