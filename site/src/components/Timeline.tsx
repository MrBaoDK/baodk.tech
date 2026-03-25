import React from 'react';

import { careerTimeline } from '@baodk-site/data/timeline';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Professional <span className="text-[var(--color-primary)]">Journey</span>
          </h2>
          <p className="text-lg text-white/50 font-medium">
            A career dedicated to excellence in data engineering, quality assurance, and AI integration.
            From enterprise systems to cutting-edge AI automation.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative px-4 md:px-0">
          {/* Main Timeline Path */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)]/0 via-[var(--color-primary)]/50 to-[var(--color-primary)]/0 -translate-x-1/2 hidden md:block" />

          <div className="space-y-20">
            {careerTimeline.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Interactive Pulse Node (Center) */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-sm bg-[var(--color-primary)] shadow-[0_0_20px_rgba(233,30,96,0.5)] rotate-45 -translate-x-1/2 z-10 transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_30px_rgba(233,30,96,0.8)]">
                  <div className="absolute inset-0 bg-[var(--color-primary)] animate-ping opacity-20" />
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-[45%] group/card">
                  <div className="card group relative overflow-hidden backdrop-blur-sm border-white/5 hover:border-[var(--color-primary)]/30 transition-all duration-500">
                    {/* Big Stylized Year Background */}
                    <div className="absolute -top-4 -right-2 text-7xl font-black text-white/[0.03] select-none pointer-events-none group-hover/card:text-[var(--color-primary)]/5 transition-colors duration-700">
                      {item.year}
                    </div>

                    <div className="mb-6 relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[var(--color-primary)] font-black text-[10px] uppercase tracking-[0.3em] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full border border-[var(--color-primary)]/20 shadow-sm">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="card-title text-white group-hover/card:text-[var(--color-primary)] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white font-black text-[10px] uppercase tracking-widest opacity-40 mt-1">
                        {item.company}
                      </p>
                    </div>

                    <p className="card-subtitle mb-8 opacity-70 leading-relaxed relative z-10">
                      {item.description}
                    </p>

                    <div className="space-y-4 relative z-10">
                      <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">Core Impact</p>
                      <ul className="space-y-3">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-4 group/li">
                            <span className="material-symbols-outlined text-[var(--color-primary)] text-sm mt-1 transition-transform group-hover/li:scale-125">check_circle</span>
                            <span className="text-sm text-white/60 font-medium leading-relaxed group-hover/li:text-white/80 transition-colors">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-32 reveal">
          <p className="text-xl text-white/40 mb-8 font-medium">
            Ready to add your success story to this timeline?
          </p>
          <a href="#contact" className="px-8 py-4 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-all no-underline">
            Let's Scale Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
