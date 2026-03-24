import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="gradient-bg text-white py-16 md:py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Full Stack Data &{' '}
             <span className="text-[var(--color-accent)]">Quality Engineer</span>
          </h1>
          
          {/* Compelling Subheadline */}
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto text-gray-300">
             Delivering <strong className="text-[var(--color-primary)]">scalable</strong>, 
            <strong className="text-[var(--color-accent)]"> AI-powered</strong>, and 
            <strong className="text-[var(--color-primary)]"> test-driven</strong> enterprise solutions 
            that transform data into actionable insights and drive business growth
          </p>
          
          {/* Key Value Props */}
           <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 mb-8 md:mb-10 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <span className="text-[var(--color-accent)]">🚀</span>
              <span>Python & React Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[var(--color-accent)]">🤖</span>
              <span>LLM Integration Specialist</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[var(--color-accent)]">☁️</span>
              <span>DevOps & Cloud Architecture</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[var(--color-accent)]">✅</span>
              <span>Quality Engineering</span>
            </div>
          </div>
          
          {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center">
            <button className="btn-primary btn-xl shadow-2xl hover:scale-105 transition-all">
              Hire Me
              <span className="ml-2">→</span>
            </button>
            <button className="btn-secondary btn-xl hover:scale-105 transition-all">
              View Projects
            </button>
          </div>
          
          {/* Social Proof Indicator */}
          {/* <div className="mt-12 text-gray-300">
            <p className="text-sm mb-4">Trusted by leading tech companies</p>
             <div className="flex justify-center space-x-8 opacity-60">
               <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold bg-white/10">
                TF
              </div>
               <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold bg-white/10">
                DC
              </div>
               <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold bg-white/10">
                CF
              </div>
               <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold bg-white/10">
                IT
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
