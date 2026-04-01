import React, { useState } from 'react';

interface ChatHeroProps {
  onSendMessage: (content: string) => void;
  onClose: () => void;
}

const ChatHero: React.FC<ChatHeroProps> = ({ onSendMessage, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const suggestions = [
    { label: 'Technical Skills', query: 'What are your core technical skills and toolstack?' },
    {
      label: 'AI Experience',
      query: 'Tell me about your experience building AI and MLOps systems.',
    },
    { label: 'Project Impact', query: "What has been the most impactful project you've built?" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <section
      id='chat-home'
      className='relative w-full h-full p-6 md:p-12 flex flex-col items-center justify-center bg-transparent overflow-hidden'
    >
      <div className='w-full max-w-4xl relative z-10 flex flex-col items-center justify-center'>
        {/* Centered Branding Header */}
        <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-8 mb-20 animate-in fade-in slide-in-from-top-6 duration-1000'>
          <a
            href='#about'
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className='flex items-center gap-4 no-underline group scale-125'
          >
            <div className='w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:border-transparent transition-all shadow-xl'>
              <img src='/logo/logo_head.svg' alt='Bao logo' className='w-8 h-8 ' />
            </div>
            <span className='text-white font-black text-2xl tracking-tighter uppercase italic'>
              Bao <span className='text-[var(--color-primary)]'>DK</span>
            </span>
          </a>
          <a
            href='#contact'
            onClick={(e) => {
              e.preventDefault();
              onClose();
              setTimeout(() => {
                window.location.hash = '#contact';
              }, 300);
            }}
            className='flex items-center gap-3 px-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-[var(--color-primary)] hover:border-transparent transition-all shadow-2xl no-underline group'
          >
            Direct Inquiry
            <span className='material-symbols-outlined text-base group-hover:rotate-12 transition-transform'>
              bolt
            </span>
          </a>
        </div>

        {/* Avatar */}
        <div className='mb-12 relative animate-in fade-in zoom-in duration-700 delay-200'>
          <div className='w-32 h-32 md:w-44 md:h-44 rounded-3xl overflow-hidden border-4 border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-500'>
            <img
              src='/avatar/bao_ai_avatar.webp'
              alt='Bao AI Assistant'
              width={176}
              height={176}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-[#0a0a0a] shadow-lg animate-pulse' />
        </div>

        {/* Heading */}
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-black text-white text-center mb-8 tracking-tighter leading-none max-w-3xl px-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 uppercase italic'>
          Bao <span className='text-[var(--color-primary)]'>Assistant</span>
        </h1>

        <p className='text-white/40 text-sm md:text-lg font-medium max-w-xl text-center mb-12 animate-in fade-in duration-700 delay-200 uppercase tracking-[0.2em] leading-relaxed'>
          Neural link established. Access core competencies or query specific career milestones
          below.
        </p>

        {/* Chat Pill Input */}
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-3xl relative group px-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300'
        >
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Query the engineering ecosystem...'
            className='w-full py-5 md:py-8 px-10 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-primary)]/50 transition-all text-sm md:text-xl pr-24 md:pr-40 font-medium shadow-inner'
          />
          <button
            type='submit'
            className='absolute right-8 top-1/2 -translate-y-1/2 px-6 md:px-10 py-2.5 md:py-4 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-2xl shadow-[var(--color-primary)]/30 active:scale-95 disabled:opacity-50 text-[10px] md:text-xs font-black uppercase tracking-widest'
            disabled={!inputValue.trim()}
          >
            Transmit
            <span className='material-symbols-outlined text-sm md:text-lg ml-2'>arrow_forward</span>
          </button>
        </form>

        {/* Quick Suggestions */}
        <div className='mt-12 flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400'>
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => onSendMessage(s.query)}
              className='px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10 text-white/40 hover:text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-sm'
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Navigation CTAs */}
        <div className='mt-20 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500'>
          <button
            onClick={onClose}
            className='flex items-center gap-4 text-white/10 hover:text-white transition-all group'
          >
            <span className='material-symbols-outlined text-2xl group-hover:-translate-x-2 transition-transform'>
              arrow_back
            </span>
            <span className='text-[10px] font-black uppercase tracking-[0.4em]'>
              Return to Interface
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatHero;
