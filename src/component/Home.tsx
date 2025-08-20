import React from "react";
import "../index.css";
import Hero from './Hero';
import Capabilities from './Capabilities';
import Timeline from './Timeline';
import Testimonials from './Testimonials';

export default function Home(): JSX.Element {
  return (
    <main className="home-root">
      <header className="site-header">
        <div className="container nav-container">
          <div className="brand">
            <a href="/" className="logo">Data<span>Engineer</span></a>
          </div>
          <nav className="main-nav">
            <a href="#capabilities">Capabilities</a>
            <a href="#timeline">Experience</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <Hero />
      <Capabilities />
      <Timeline />
      <Testimonials />

      <section id="contact" className="section cta-section">
        <div className="container cta-grid">
          <div>
            <h2>Ready for Scalable, AI‑Powered Solutions?</h2>
            <p>Let's discuss how I can help your team ship reliable, observable, and test-driven data systems.</p>
          </div>
          <div>
            <a href="mailto:contact@dataengineer.com" className="btn btn-primary large">Request a Consultation</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-row">
            <div>© {new Date().getFullYear()} Michelle Rodriguez</div>
            <div className="socials">• <a href="#">GitHub</a> • <a href="#">LinkedIn</a></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
