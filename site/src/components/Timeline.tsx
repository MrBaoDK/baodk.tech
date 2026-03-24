import React from 'react';

import { careerTimeline } from '@baodk-site/data/timeline';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="section bg-[var(--color-background)]">
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
                {/* Year Marker (Center) */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-[var(--color-background)] border-2 border-[var(--color-primary)] shadow-[0_0_15px_rgba(233,30,96,0.3)] flex items-center justify-center -translate-x-1/2 z-10 transition-transform hover:scale-110">
                  <span className="text-[10px] font-black text-white">{item.year}</span>
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-[45%]">
                  <div className="card group">
                    <div className="mb-6">
                      <h3 className="card-title text-[var(--color-primary)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white font-black text-[10px] uppercase tracking-widest opacity-40">
                        {item.company}
                      </p>
                    </div>

                    <p className="card-subtitle mb-8 opacity-70">
                      {item.description}
                    </p>

                    <div className="space-y-4">
                      <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">Key Accomplishments</p>
                      <ul className="space-y-3">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-[var(--color-primary)] text-sm mt-1">check_circle</span>
                            <span className="text-sm text-white/60 font-medium leading-relaxed">
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
