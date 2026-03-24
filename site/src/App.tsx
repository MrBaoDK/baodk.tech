import React, { useEffect, Suspense } from 'react';

import Header from '@baodk-site/components/Header';
import ChatAssistant from '@baodk-site/components/chat/ChatAssistant';
import Hero from '@baodk-site/components/Hero';
import Footer from '@baodk-site/components/Footer';
import NavigationDock from '@baodk-site/components/NavigationDock';
import LiquidGrid from '@baodk-site/components/effects/LiquidGrid';

// Lazy load below-the-fold components
const Skills = React.lazy(() => import('@baodk-site/components/Skills'));
const Projects = React.lazy(() => import('@baodk-site/components/Projects'));
const Timeline = React.lazy(() => import('@baodk-site/components/Timeline'));
const Testimonials = React.lazy(() => import('@baodk-site/components/Testimonials'));
const CallToAction = React.lazy(() => import('@baodk-site/components/CallToAction'));
const Contact = React.lazy(() => import('@baodk-site/components/Contact'));
import '@baodk-site/styles/globals.css';

// Helper for lazy loading states
const SectionLoader: React.FC = () => (
  <div className="h-40 flex items-center justify-center opacity-50">
    <div className="w-6 h-6 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
  </div>
);

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [activeTopic, setActiveTopic] = React.useState<string | null>(null);
  const [showDock, setShowDock] = React.useState(true);

  const handleSelectTopic = (topic: string) => {
    setActiveTopic(topic);
    setIsChatOpen(true);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.01, // Lower threshold for fast, reliable triggers
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before appearing
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Scroll-aware dock visibility
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowDock(false);
      } else {
        setShowDock(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-dark)] relative overflow-x-hidden">
      <LiquidGrid />
      <Header />

      <main className="relative z-10">
        <Hero
          onSelectTopic={handleSelectTopic}
          isChatOpen={isChatOpen}
        />

        <ChatAssistant
          isOpen={isChatOpen}
          setIsOpen={setIsChatOpen}
          topic={activeTopic}
        />

        {/* Lazy Loaded Sections with stable reveal containers */}
        <div id="skills" className="reveal min-h-[300px]">
          <Suspense fallback={<SectionLoader />}>
            <Skills />
          </Suspense>
        </div>
        <div id="projects" className="reveal min-h-[300px]">
          <Suspense fallback={<SectionLoader />}>
            <Projects />
          </Suspense>
        </div>
        <div id="experience" className="reveal min-h-[300px]">
          <Suspense fallback={<SectionLoader />}>
            <Timeline />
          </Suspense>
        </div>
        <div id="testimonials" className="reveal min-h-[300px]">
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
        </div>
        <div className="reveal min-h-[100px]">
          <Suspense fallback={<SectionLoader />}>
            <CallToAction />
          </Suspense>
        </div>
        <div id="contact" className="reveal min-h-[300px]">
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </div>
      </main>

      <Footer />

      {/* Persistent Navigation Dock - Scroll aware */}
      <div className={`fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none transition-all duration-500 transform ${
        showDock ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="container mx-auto flex justify-center pointer-events-auto">
          <NavigationDock onSelectTopic={handleSelectTopic} />
        </div>
      </div>
    </div>
  );
};

export default App;
