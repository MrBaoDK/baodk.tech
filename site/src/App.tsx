import React from 'react';
import Header from '@baodk-site/components/Header';
import Hero from '@baodk-site/components/Hero';
import Skills from '@baodk-site/components/Skills';
import Projects from '@baodk-site/components/Projects';
import Timeline from '@baodk-site/components/Timeline';
import Testimonials from '@baodk-site/components/Testimonials';
import CallToAction from '@baodk-site/components/CallToAction';
import Contact from '@baodk-site/components/Contact';
import Footer from '@baodk-site/components/Footer';
import '@baodk-site/styles/globals.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
