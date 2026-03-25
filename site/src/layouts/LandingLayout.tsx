import React from 'react';
import Header from '@baodk-site/components/Header';
import Footer from '@baodk-site/components/Footer';

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 relative z-10 w-full max-w-screen-2xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
