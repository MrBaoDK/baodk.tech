import React from 'react';

interface LandingHeroProps {
  onStartChat: () => void;
}

const LandingHero: React.FC<LandingHeroProps> = ({ onStartChat }) => {
  return (
    <section
      id='hero'
      className='relative min-h-[90vh] flex flex-col items-center justify-center bg-transparent overflow-hidden'
    >
      <div className='container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center'>
        {/* Avatar */}
        <div className='mb-10 relative animate-in fade-in zoom-in duration-1000'>
          <div className='w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative z-10'>
            <img
              src='/avatar/bao_ai_avatar.webp'
              alt='Bao DK'
              width={192}
              height={192}
              className='w-full h-full object-cover'
            />
          </div>
          {/* Decorative rings */}
          <div className='absolute inset-0 -m-4 rounded-full border border-white/5 animate-ping duration-[3s]' />
          <div className='absolute inset-0 -m-8 rounded-full border border-white/5 animate-pulse duration-[4s]' />
        </div>

        {/* Heading */}
        <div className='space-y-6 max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 italic'>
            Engineering <br />
            <span className='text-[var(--color-primary)]'>Intelligence</span>
          </h1>

          <p className='text-lg md:text-2xl text-white/60 font-medium max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300'>
            Building scalable MLOps, robust data systems, and human-centric AI experiences.
          </p>
        </div>

        {/* CTAs */}
        <div className='flex flex-col sm:flex-row gap-4 mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 w-full max-w-md px-4'>
          <button
            onClick={onStartChat}
            className='flex-1 px-8 py-5 rounded-2xl bg-[var(--color-primary)] text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-[var(--color-primary)]/20 active:scale-95 flex items-center justify-center gap-3 group'
          >
            Ask AI Assistant
            <span className='material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform'>
              bolt
            </span>
          </button>

          <a
            href='/#/about#projects'
            className='flex-1 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-3 no-underline group'
          >
            Projects
            <span className='material-symbols-outlined text-xl group-hover:translate-y-1 transition-transform'>
              arrow_downward
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20'>
        <span className='material-symbols-outlined text-white text-3xl'>
          keyboard_double_arrow_down
        </span>
      </div>
    </section>
  );
};

export default LandingHero;
