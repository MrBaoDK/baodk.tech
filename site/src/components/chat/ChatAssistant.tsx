import React, { useState } from 'react';

import { Message } from '@baodk-site/App';

interface ChatAssistantProps {
  messages: Message[];
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
    <div className='h-full flex flex-col items-center justify-center p-0 md:p-4 md:pb-8 overflow-hidden'>
      <div className='w-full max-w-5xl h-full flex flex-col bg-white/[0.01] backdrop-blur-3xl border border-white/10 md:rounded-[0.5rem] shadow-2xl shadow-black/80 overflow-hidden relative'>
        {/* Technical Status Bar */}
        <div className='h-4 bg-white/[0.03] border-b border-white/5 flex items-center justify-between px-6 md:px-10 pointer-events-none select-none shrink-0'>
          <div className='flex gap-4 md:gap-8'>
            <span className='text-[5px] md:text-[7px] font-black text-white/10 uppercase tracking-[0.3em]'>
              Session://BAO-NTEL-V4.0
            </span>
            <span className='text-[5px] md:text-[7px] font-black text-white/10 uppercase tracking-[0.3em] hidden sm:inline'>
              Protocol: Neural-TLS 1.3
            </span>
          </div>
          <div className='flex gap-4 md:gap-8'>
            <span className='text-[5px] md:text-[7px] font-black text-[var(--color-primary)]/30 uppercase tracking-[0.3em]'>
              Secure_Channel: Active
            </span>
            <span className='text-[5px] md:text-[7px] font-black text-white/10 uppercase tracking-[0.3em]'>
              Latency: 14ms
            </span>
          </div>
        </div>

        {/* Header */}
        <div className='p-2 md:p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02] relative z-20 shrink-0'>
          <div className='flex items-center gap-3 md:gap-4'>
            <button
              onClick={() => (window.location.hash = '#/about')}
              className='w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white/5 hover:bg-[var(--color-primary)] hover:text-white flex items-center justify-center transition-all group border border-white/5'
              title='Back to Portfolio'
            >
              <span className='material-symbols-outlined text-xs md:text-sm text-white/40 group-hover:text-white transition-colors'>
                arrow_back
              </span>
            </button>
            <div className='flex items-center gap-3 md:gap-4'>
              <div className='w-8 h-8 md:w-10 md:h-10 rounded-lg overflow-hidden border-2 border-[var(--color-primary)]/30 shadow-2xl shadow-[var(--color-primary)]/10'>
                <img
                  src='/avatar/bao_ai_avatar.webp'
                  alt='Bao AI'
                  className='w-full h-full object-cover'
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className='text-base md:text-lg font-black text-white tracking-tighter uppercase italic leading-none'>
                  Bao <span className='text-[var(--color-primary)]'>Intelligence</span>
                </h3>
                <div className='flex items-center gap-2 mt-1'>
                  <div className='w-1 h-1 rounded-full bg-green-500 animate-pulse' />
                  <span className='text-[5px] md:text-[7px] text-white/40 uppercase tracking-[0.3em] font-black'>
                    Neural Core Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat History */}
        <div className='flex-1 overflow-y-auto p-3 md:p-6 space-y-3 md:space-y-4 custom-scrollbar pb-32 relative z-10'>
          {messages.length === 0 ? (
            <div className='h-full flex flex-col items-center justify-center text-center p-8 opacity-40'>
              <div className='w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 rotate-6'>
                <span className='material-symbols-outlined text-2xl text-[var(--color-primary)]'>
                  terminal
                </span>
              </div>
              <h4 className='text-base font-black text-white mb-2 tracking-tighter uppercase italic'>
                System Initialized
              </h4>
              <p className='text-white/60 text-[10px] max-w-sm font-medium leading-relaxed'>
                Connect with the AI persona to explore technical capabilities.
              </p>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 md:gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-6 duration-700`}
              >
                <div
                  className={`max-w-[90%] md:max-w-[95%] rounded-xl md:rounded-2xl p-3 md:p-5 text-sm md:text-base leading-relaxed relative ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-[var(--color-primary)] to-[#c41551] text-white rounded-tr-none shadow-[0_5px_20px_rgba(233,30,96,0.15)] font-bold'
                      : 'bg-white/[0.03] text-white/90 border border-white/10 rounded-tl-none font-medium backdrop-blur-md'
                  }`}
                >
                  {/* AI Scanline Overlay */}
                  {msg.role === 'ai' && (
                    <div className='absolute inset-0 pointer-events-none opacity-[0.03] rounded-xl md:rounded-2xl overflow-hidden bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.1)_3px)]' />
                  )}

                  <div className='relative z-10'>
                    {msg.content}
                    {msg.role === 'ai' && (
                      <div className='flex flex-wrap gap-2 mt-3 md:mt-4'>
                        {['Architecture', 'MLOps', 'Systems'].map((chip) => (
                          <button
                            key={chip}
                            onClick={() => onSendMessage(chip)}
                            className='px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white/5 border border-white/5 text-[var(--color-primary)] text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-sm cursor-pointer'
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
          {isProcessing && (
            <div className='flex justify-start'>
              <div className='bg-white/5 text-[var(--color-primary)] px-4 py-2 rounded-lg border border-[var(--color-primary)]/10 text-[8px] font-black uppercase tracking-[0.3em] animate-pulse'>
                Processing Transmission...
              </div>
            </div>
          )}
        </div>

        {/* Input Area - Integrated */}
        <div className='p-3 md:p-5 bg-white/[0.01] border-t border-white/10 backdrop-blur-xl relative z-20 shrink-0'>
          <form onSubmit={handleSubmit} className='max-w-4xl mx-auto relative group'>
            <input
              type='text'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder='Query the engineering ecosystem...'
              className='w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-4 md:px-6 py-3 md:py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-primary)]/50 transition-all pr-16 md:pr-28 text-sm md:text-base font-medium shadow-inner'
            />
            <button
              type='submit'
              disabled={isProcessing || !inputValue.trim()}
              className='absolute right-2 md:right-3 top-1/2 -translate-y-1/2 px-4 md:px-6 py-1.5 md:py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl shadow-[var(--color-primary)]/40 disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-1 md:gap-1.5'
            >
              Transmit
              <span className='material-symbols-outlined text-sm md:text-base'>bolt</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
