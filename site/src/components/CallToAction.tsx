import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="section bg-[var(--color-background)] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(233,30,99,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Main CTA Content */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white tracking-tighter">
            Ready to <span className="text-[var(--color-primary)]">Scale</span> Your <br className="hidden md:block" />
            AI Engineering <span className="text-white/20">Impact?</span>
          </h2>

          <p className="text-xl md:text-2xl mb-16 text-white/50 leading-relaxed font-medium max-w-3xl mx-auto">
            Let's bridge the gap between complex engineering and measurable ROI.
            From MLOps pipelines to high-impact AI integrations.
          </p>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-left">
            <div className="card group">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-white">Rapid Deployment</h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium">Get solutions live quickly with automation-first methodologies.</p>
            </div>
            <div className="card group">
              <div className="text-4xl mb-6">📈</div>
              <h3 className="text-xl font-bold mb-3 text-white">Measurable ROI</h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium">Focus on business metrics, cost reduction, and scale efficiency.</p>
            </div>
            <div className="card group">
              <div className="text-4xl mb-6">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-white">Built for Scale</h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium">Enterprise-grade architecture with reliability at its core.</p>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mb-20">
            <button className="px-12 py-6 rounded-full bg-white text-black font-black text-xl uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-all hover:scale-105 shadow-2xl hover:shadow-[var(--color-primary)]/40">
              Hire Me
              <span className="material-symbols-outlined ml-3 text-2xl align-middle">arrow_forward</span>
            </button>
          </div>

          {/* Secondary Options */}
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <a href="/#/about#projects" className="text-white/40 hover:text-white font-bold text-xs uppercase tracking-widest no-underline flex items-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-sm">list_alt</span>
              View Engineering Deep Dives
            </a>
            <a href="mailto:mrbaodk@hotmail.com" className="text-white/40 hover:text-white font-bold text-xs uppercase tracking-widest no-underline flex items-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-sm">mail</span>
              Direct Inquiry
            </a>
            <a href="tel:+84898678905" className="text-white/40 hover:text-white font-bold text-xs uppercase tracking-widest no-underline flex items-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-sm">call</span>
              Schedule Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
