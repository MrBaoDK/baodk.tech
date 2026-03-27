import React, { useState } from 'react';

interface ChatHeroProps {
  onSelectTopic: (topic: string) => void;
  onSendMessage: (content: string) => void;
}

const ChatHero: React.FC<ChatHeroProps> = ({ onSelectTopic, onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const suggestions = [
    { label: "Technical Skills", query: "What are your core technical skills and toolstack?" },
    { label: "AI Experience", query: "Tell me about your experience building AI and MLOps systems." },
    { label: "Project Impact", query: "What has been the most impactful project you've built?" }
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
      id="chat-home"
      className="relative min-h-full py-16 flex flex-col items-center justify-center bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        {/* Centered Branding Header */}
        <div className="w-full max-w-2xl flex flex-col sm:flex-row justify-between items-center gap-6 mb-16 animate-in fade-in slide-in-from-top-4 duration-1000">
          <a href="/#/about" className="flex items-center gap-3 no-underline group scale-110">
            <img src="/logo/logo_head.svg" alt="Bao logo" className="w-10 h-10 group-hover:scale-110 transition-transform" />
            <span className="text-white font-black text-xl tracking-tighter uppercase">Bao <span className="text-[var(--color-primary)]">DK</span></span>
          </a>
          <a
            href="/#/about#contact"
            className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-[var(--color-primary)] hover:border-transparent transition-all shadow-2xl no-underline group"
          >
            Hire Me
            <span className="material-symbols-outlined text-base group-hover:rotate-12 transition-transform">work</span>
          </a>
        </div>

        {/* Avatar */}
        <div className="mb-10 relative animate-in fade-in zoom-in duration-700 delay-200">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl ring-4 ring-[var(--color-primary)]/10">
            <img
              src="/avatar/bao_ai_avatar.webp"
              alt="Bao AI Assistant"
              width={144}
              height={144}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-green-500 border-4 border-[#0a0a0a] shadow-lg" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-6 tracking-tight leading-tight max-w-2xl px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 italic">
          Bao <span className="text-[var(--color-primary)]">Assistant</span>
        </h1>

        <p className="text-white/40 text-sm md:text-base font-medium max-w-lg text-center mb-10 animate-in fade-in duration-700 delay-200">
          Neural link established. Access core competencies or query specific career milestones below.
        </p>

        {/* Chat Pill Input */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl relative group px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Query the engineering ecosystem..."
            className="w-full py-4 md:py-6 px-10 rounded-full bg-white/[0.03] border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--color-primary)]/50 transition-all text-sm md:text-lg pr-20"
          />
          <button
            type="submit"
            className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-[var(--color-primary)]/20 active:scale-95 disabled:opacity-50"
            disabled={!inputValue.trim()}
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl">arrow_forward</span>
          </button>
        </form>

        {/* Quick Suggestions */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => onSendMessage(s.query)}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10 text-white/60 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all"
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Navigation CTAs */}
        <div className="mt-16 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <button
            onClick={() => window.location.hash = '#/about'}
            className="flex items-center gap-3 text-white/20 hover:text-white transition-all group"
          >
            <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">close</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Close Assistant</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatHero;
