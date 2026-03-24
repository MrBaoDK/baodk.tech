import React, { useEffect, useState } from 'react';

interface ChatAssistantProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  topic: string | null;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ isOpen, setIsOpen, topic }) => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    if (topic) {
      // Simulate AI response for the topic
      const topicResponses: any = {
        experience: "Great choice! I can tell you all about my technical stack. I specialize in Data & Quality Engineering, with deep expertise in Python, SQL, and automated testing frameworks like Pytest and Selenium. What specific area would you like to dive into?",
        skills: "I've built robust MLOps pipelines and integrated various LLMs (GPT-4, Claude) into production environments. My frontend skills focus on React 19 and Tailwind 4.0 for high-performance interfaces.",
        projects: "From building indie tools with 10K+ users to internal MLOps platforms, my projects focus on scalability and automation. Which one should we discuss?",
        testimonials: "I've had the pleasure of working with diverse teams. My focus is always on technical excellence and measurable business impact.",
        contact: "Ready to take the next step? You can book a call via Calendly or message me directly on LinkedIn!",
      };

      setMessages([
        { role: 'user', content: `Tell me about ${topic}...` },
        { role: 'ai', content: topicResponses[topic] || "How can I help you today?" }
      ]);
    }
  }, [topic]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[50] transition-all duration-700 ease-in-out ${
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{ height: 'calc(100dvh - 80px)' }}
    >
      <div className="absolute inset-x-0 top-0 bottom-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 rounded-t-[2.5rem] md:rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden pb-[140px] md:pb-[160px]">
        {/* Header */}
        <div className="p-4 md:p-8 border-b border-white/5 flex justify-between items-center bg-black/20">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-[var(--color-primary)]/30 shadow-lg shadow-[var(--color-primary)]/10">
              <img src="/avatar/bao_ai_avatar.webp" alt="Bao AI" className="w-full h-full object-cover" width={56} height={56} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase italic">Bao <span className="text-[var(--color-primary)]">Assistant</span></h3>
              <div className="flex items-center gap-2 mt-0.5 md:mt-1">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[7px] md:text-[9px] text-white/40 uppercase tracking-[0.2em] font-black">Neural Link Online</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:rotate-90"
          >
            <span className="material-symbols-outlined text-white/60">close</span>
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 md:p-10 space-y-6 md:space-y-10 custom-scrollbar">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="w-24 h-24 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-8 rotate-3">
                <span className="material-symbols-outlined text-5xl text-[var(--color-primary)]/30">terminal</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">System Initialized</h4>
              <p className="text-white/30 text-base max-w-sm font-medium leading-relaxed">
                Connect with the AI persona to explore technical capabilities, leadership history, and strategic projects.
              </p>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                {msg.role === 'ai' && (
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-[var(--color-primary)]/30 mt-1 shrink-0 bg-black">
                    <img src="/avatar/bao_ai_avatar.webp" alt="Bao AI" className="w-full h-full object-cover" width={40} height={40} />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-3xl p-6 text-base leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[var(--color-primary)] text-white rounded-tr-none shadow-xl shadow-[var(--color-primary)]/20 font-medium' 
                    : 'bg-white/[0.04] text-white/90 border border-white/10 rounded-tl-none font-medium'
                }`}>
                  {msg.content}
                  {msg.role === 'ai' && (
                    <div className="flex flex-wrap gap-2 mt-8">
                      {['Data Infrastructure', 'MLOps Strategy', 'Quality Systems'].map(chip => (
                        <button key={chip} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[var(--color-primary)] text-[10px] font-black uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-all">
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input Area - Fixed relative to the slide-up container */}
        <div className="p-4 md:p-10 bg-black/40 border-t border-white/10 backdrop-blur-md">
          <div className="max-w-4xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Query the engineering ecosystem..."
              className="w-full bg-white/[0.03] border border-white/20 rounded-2xl px-5 md:px-8 py-4 md:py-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-primary)]/50 transition-all pr-16 md:pr-24 text-sm md:text-lg font-medium"
            />
            <button className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-[var(--color-primary)] text-white font-black text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[var(--color-primary)]/20">
              Query
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
