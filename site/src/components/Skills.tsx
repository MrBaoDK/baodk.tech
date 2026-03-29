import React from 'react';

import { skills } from '@baodk-site/data/skills';

const Skills: React.FC = () => {
  return (
    <section id='skills' className='section'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='section-header max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight'>
            Technical <span className='text-[var(--color-primary)]'>Capabilities</span>
          </h2>
          <p className='text-lg text-white/50 font-medium'>
            Core expertise areas delivering enterprise-grade solutions with measurable business
            impact. Specialized in AI integration and scale-focused engineering.
          </p>
        </div>

        <div className='grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skill, index) => (
            <div key={index} className='card group'>
              <div className='w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-8 border border-white/5 group-hover:bg-[var(--color-primary)]/10 group-hover:border-[var(--color-primary)]/20 transition-all'>
                {skill.icon}
              </div>
              <h3 className='card-title mb-4 group-hover:text-[var(--color-primary)] transition-colors'>
                {skill.title}
              </h3>
              <p className='card-subtitle mb-8 opacity-80'>{skill.description}</p>
              <div className='flex flex-wrap gap-2'>
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-3 py-1 rounded-md bg-white/5 text-white/40 text-[10px] font-bold border border-white/5 uppercase tracking-tighter'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-32'>
          <div className='max-w-5xl mx-auto p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/5 blur-[100px] pointer-events-none' />

            <h3 className='text-3xl font-extrabold mb-12 text-white text-center'>
              Strategic <span className='text-[var(--color-primary)]'>Advantage</span>
            </h3>

            <div className='grid gap-12 md:grid-cols-3'>
              <div className='text-center group'>
                <div className='text-4xl mb-6 transform group-hover:scale-110 transition-transform'>
                  🎯
                </div>
                <h4 className='text-xl font-bold mb-3 text-white'>Business-Focused</h4>
                <p className='text-sm text-white/40 leading-relaxed font-medium'>
                  Solutions aligned with business objectives and measurable ROI outcomes.
                </p>
              </div>
              <div className='text-center group'>
                <div className='text-4xl mb-6 transform group-hover:scale-110 transition-transform'>
                  ⚡
                </div>
                <h4 className='text-xl font-bold mb-3 text-white'>Performance-Driven</h4>
                <p className='text-sm text-white/40 leading-relaxed font-medium'>
                  Optimized for speed, scalability, and reliability at enterprise level.
                </p>
              </div>
              <div className='text-center group'>
                <div className='text-4xl mb-6 transform group-hover:scale-110 transition-transform'>
                  🔒
                </div>
                <h4 className='text-xl font-bold mb-3 text-white'>Quality-First</h4>
                <p className='text-sm text-white/40 leading-relaxed font-medium'>
                  Comprehensive testing and QA built into the engineering lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
