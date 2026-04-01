import React, { Suspense, useCallback, useEffect, useState } from 'react';

import ChatAssistant from '@baodk-site/components/chat/ChatAssistant';
import ChatHero from '@baodk-site/components/ChatHero';
import LiquidGrid from '@baodk-site/components/effects/LiquidGrid';
import LandingHero from '@baodk-site/components/LandingHero';
import ChatLayout from '@baodk-site/layouts/ChatLayout';
import LandingLayout from '@baodk-site/layouts/LandingLayout';

export interface Message {
  role: 'user' | 'ai';
  content: string;
}

// Lazy load section components
const Capabilities = React.lazy(() => import('@baodk-site/components/Capabilities'));
const Projects = React.lazy(() => import('@baodk-site/components/Projects'));
const Timeline = React.lazy(() => import('@baodk-site/components/Timeline'));
const Testimonials = React.lazy(() => import('@baodk-site/components/Testimonials'));
const Contact = React.lazy(() => import('@baodk-site/components/Contact'));

import { scrollToSection } from '@baodk-site/utils/navigation';

import '@baodk-site/styles/globals.css';

const SectionLoader: React.FC = () => (
  <div className='h-40 flex items-center justify-center opacity-50'>
    <div className='w-6 h-6 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin' />
  </div>
);

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#/about');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Hash Routing & Animation Logic
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/about';
      setCurrentRoute(hash);

      // Handle scroll to anchor if present (e.g., #/about#projects)
      if (hash.includes('#', 2)) {
        const anchorId = hash.split('#').pop();
        if (anchorId) {
          // Use setTimeout to ensure lazy elements are rendered or layout is stable
          setTimeout(() => {
            scrollToSection(anchorId);
          }, 100);
        }
      } else if (hash === '#/about') {
        window.scrollTo({ top: 0 });
      }
    };

    const isRootPath =
      window.location.pathname === '/' || window.location.pathname === '/index.html';
    if (isRootPath && (!window.location.hash || window.location.hash === '#/')) {
      window.location.hash = '#/about';
    }

    window.addEventListener('hashchange', handleHashChange);

    // Initial check for hash on load
    handleHashChange();

    // Reveal animations & Hash synchronization on scroll
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '-100px 0px -20% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');

          // Update hash as user scrolls through sections
          if (window.location.hash.startsWith('#/about')) {
            const id = entry.target.id;
            if (id && id !== 'about' && id !== 'hero') {
              window.history.replaceState(null, '', `#/about#${id}`);
            } else if (id === 'about' || id === 'hero') {
              window.history.replaceState(null, '', `#/about`);
            }
          }
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Also observe the #about wrapper specifically for scroll tracking
    const aboutElement = document.getElementById('about');
    if (aboutElement && !Array.from(revealElements).includes(aboutElement)) {
      observer.observe(aboutElement);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, [currentRoute]); // Re-run when route changes to catch new elements

  const handleSendMessage = useCallback((content: string) => {
    setMessages((prev) => [...prev, { role: 'user', content }]);
    setIsProcessing(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          content:
            "I've processed your query. As an AI assistant, I can help you explore Bao's technical ecosystem, from MLOps to high-performance frontend engineering. What specific details can I uncover for you?",
        },
      ]);
      setIsProcessing(false);
    }, 1000);
  }, []);

  const handleSelectTopic = useCallback((topic: string) => {
    if (topic === 'contact') {
      window.location.hash = '#/about#contact';
      return;
    }
    const topicResponses: Record<string, string> = {
      experience:
        'Bao specializes in Data & Quality Engineering, with deep expertise in Python, SQL, and automated testing frameworks.',
      skills:
        'Technical stack includes React 19, Tailwind 4.0, Python, and cloud-native MLOps architectures.',
      projects: 'From building indie tools with 10K+ users to internal enterprise platforms.',
      testimonials:
        'Known for technical excellence and measurable business impact across diverse teams.',
      contact: 'You can book a call via Calendly or message Bao directly on LinkedIn!',
    };

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: `Tell me about ${topic}...` },
      { role: 'ai', content: topicResponses[topic] || 'How can I help you today?' },
    ]);

    if (window.location.hash !== '#/chat') {
      window.location.hash = '#/chat';
    }
  }, []);

  const renderLandingContent = () => {
    if (currentRoute.startsWith('#/about')) {
      return (
        <div className='landing-page-content'>
          <div id='about'>
            <LandingHero onStartChat={() => (window.location.hash = '#/chat')} />
          </div>
          <div id='capabilities' className='reveal'>
            <Suspense fallback={<SectionLoader />}>
              <Capabilities />
            </Suspense>
          </div>
          <div id='projects' className='reveal'>
            <Suspense fallback={<SectionLoader />}>
              <Projects />
            </Suspense>
          </div>
          <div id='experience' className='reveal'>
            <Suspense fallback={<SectionLoader />}>
              <Timeline />
            </Suspense>
          </div>
          <div id='testimonials' className='reveal'>
            <Suspense fallback={<SectionLoader />}>
              <Testimonials />
            </Suspense>
          </div>
          <div id='contact' className='reveal'>
            <Suspense fallback={<SectionLoader />}>
              <Contact />
            </Suspense>
          </div>
        </div>
      );
    }

    // Fallback for direct section access if needed, though they are now part of #/about
    return <LandingHero onStartChat={() => (window.location.hash = '#/chat')} />;
  };

  const isChatMode = currentRoute.startsWith('#/chat');

  const isRootPath = window.location.pathname === '/' || window.location.pathname === '/index.html';

  if (!isRootPath) {
    return null;
  }

  return (
    <div className='min-h-screen bg-[var(--color-dark)] relative'>
      <LiquidGrid />

      {isChatMode ? (
        <ChatLayout onSelectTopic={handleSelectTopic}>
          {messages.length === 0 ? (
            <ChatHero onSendMessage={handleSendMessage} />
          ) : (
            <ChatAssistant
              messages={messages}
              onSendMessage={handleSendMessage}
              isProcessing={isProcessing}
            />
          )}
        </ChatLayout>
      ) : (
        <LandingLayout>{renderLandingContent()}</LandingLayout>
      )}
    </div>
  );
};

export default App;
