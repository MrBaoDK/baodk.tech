import NavigationDock from '@baodk-site/components/NavigationDock';

interface HeroProps {
  onSelectTopic: (topic: string) => void;
  isChatOpen: boolean;
}

const Hero: React.FC<HeroProps> = ({ onSelectTopic, isChatOpen }) => {
  return (
    <section 
      id="about" 
      className={`relative min-h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden transition-all duration-700 ease-in-out ${
        isChatOpen ? '-translate-y-1/2 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        {/* Avatar */}
        <div className="mb-8 relative animate-in fade-in zoom-in duration-700">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl">
            <img
              src="/avatar/bao_ai_avatar.webp"
              alt="Bao AI Assistant"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-[var(--color-background)]" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-10 tracking-tight leading-tight max-w-2xl px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Hey, I'm Bao, your <br className="hidden md:block" />
          AI Engineering Assistant
        </h1>

        {/* Chat Pill Input */}
        <div className="w-full max-w-2xl relative group px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <input
            type="text"
            placeholder="Ask me about my experience, skills, or projects..."
            className="w-full py-4 md:py-6 px-10 rounded-full bg-white/[0.03] border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--color-primary)]/50 transition-all text-sm md:text-lg pr-20"
          />
          <button className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-[var(--color-primary)]/20">
            <span className="material-symbols-outlined text-2xl md:text-3xl">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
