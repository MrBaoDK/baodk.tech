import React from 'react';

import { clientTestimonials } from '@baodk-site/data/testimonials';
import { handleNavClick } from '@baodk-site/utils/navigation';

const Testimonials: React.FC = () => {
  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    handleNavClick(e, id);
  };
  return (
    <section className='section'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='section-header max-w-3xl mx-auto mb-20'>
          <h2 className='text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight text-center'>
            Strategic <span className='text-[var(--color-primary)]'>Impact</span>
          </h2>
          <p className='text-lg text-white/50 font-medium text-center'>
            Trusted by industry leaders and recognized for technical excellence in AI engineering
            and high-performance system design.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-32'>
          {clientTestimonials.map((testimonial, index) => (
            <div key={index} className='card group relative overflow-hidden'>
              <div className='absolute top-0 right-0 p-6 text-6xl text-white/5 font-serif pointer-events-none'>
                "
              </div>

              <p className='text-white/80 italic leading-relaxed mb-8 relative z-10 font-medium'>
                {testimonial.content}
              </p>

              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl overflow-hidden'>
                  {testimonial.logo}
                </div>
                <div>
                  <h4 className='text-white font-bold text-sm'>{testimonial.name}</h4>
                  <p className='text-[var(--color-primary)] text-[10px] font-black uppercase tracking-widest'>
                    {testimonial.role}
                  </p>
                  <p className='text-white/30 text-[9px] font-bold'>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/5'>
          <div className='text-center group'>
            <div className='text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors'>
              50+
            </div>
            <div className='text-[10px] uppercase font-black tracking-[0.2em] text-white/40'>
              Projects Delivered
            </div>
          </div>
          <div className='text-center group'>
            <div className='text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors'>
              99.9%
            </div>
            <div className='text-[10px] uppercase font-black tracking-[0.2em] text-white/40'>
              Uptime Achieved
            </div>
          </div>
          <div className='text-center group'>
            <div className='text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors'>
              70%
            </div>
            <div className='text-[10px] uppercase font-black tracking-[0.2em] text-white/40'>
              Performance Gain
            </div>
          </div>
          <div className='text-center group'>
            <div className='text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors'>
              6+
            </div>
            <div className='text-[10px] uppercase font-black tracking-[0.2em] text-white/40'>
              Years Experience
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-32'>
          <p className='text-xl text-white/40 mb-10 font-medium'>
            Ready to join these satisfied partners?
          </p>
          <a
            href='/#/about#contact'
            onClick={(e) => onNavClick(e, 'contact')}
            className='px-12 py-5 rounded-full bg-[var(--color-primary)] text-white font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-[var(--color-primary)]/40 no-underline inline-block'
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
