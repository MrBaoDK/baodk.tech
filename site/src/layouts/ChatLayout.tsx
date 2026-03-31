import React from 'react';

import NavigationDock from '@baodk-site/components/NavigationDock';

interface ChatLayoutProps {
  children: React.ReactNode;
  onSelectTopic: (topic: string) => void;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ children, onSelectTopic }) => {
  return (
    <div className='h-[100dvh] flex flex-col overflow-hidden bg-[var(--color-dark)]'>
      <main className='flex-1 relative z-10 w-full overflow-hidden flex flex-col'>{children}</main>

      {/* Integrated Navigation Dock - No longer floating */}
      <div className='shrink-0 bg-black/40 border-t border-white/5 pt-2 flex justify-center'>
        <NavigationDock onSelectTopic={onSelectTopic} />
      </div>

      {/* Legal Footer (Copyright/Terms) - Minimal version for chat */}
      <div className='shrink-0 p-2 border-t border-white/5 bg-black/60 text-center'>
        <p className='text-[10px] font-black uppercase tracking-[0.2em] text-white/20'>
          © 2026 Bao DK. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default ChatLayout;
