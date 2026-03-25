import React, { useState } from 'react';

interface ChatAssistantProps {
  messages: any[];
  onSendMessage: (content: string) => void;
  isProcessing?: boolean;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ messages, onSendMessage, isProcessing }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (inputValue.trim() && !isProcessing) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Header */}
      <div className="p-4 md:p-8 border-b border-white/5 flex justify-between items-center bg-black/20">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.location.hash = '#/about'}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all group"
            title="Back to Portfolio"
          >
            <span className="material-symbols-outlined text-white/40 group-hover:text-white transition-colors">arrow_back</span>
          </button>
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
        </div>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 space-y-6 md:space-y-10 custom-scrollbar pb-32">
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
        {isProcessing && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-white/[0.04] text-white/40 p-4 rounded-2xl border border-white/5 text-xs font-black uppercase tracking-widest">
              AI Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-10 bg-black/40 border-t border-white/10 backdrop-blur-md sticky bottom-0 z-20">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto relative group">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Query the engineering ecosystem..."
            className="w-full bg-white/[0.03] border border-white/20 rounded-2xl px-5 md:px-8 py-4 md:py-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-primary)]/50 transition-all pr-16 md:pr-24 text-sm md:text-lg font-medium"
          />
          <button 
            type="submit"
            disabled={isProcessing || !inputValue.trim()}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-[var(--color-primary)] text-white font-black text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[var(--color-primary)]/20 disabled:opacity-50 disabled:hover:scale-100"
          >
            Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatAssistant;
