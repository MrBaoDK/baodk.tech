import React from 'react';

import Footer from '@baodk-site/components/Footer';
import Header from '@baodk-site/components/Header';

interface LandingLayoutProps {
  children: React.ReactNode;
  onOpenChat: () => void;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children, onOpenChat }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header onOpenChat={onOpenChat} />
      <main className='flex-1 relative z-10 w-full max-w-screen-2xl mx-auto'>{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
