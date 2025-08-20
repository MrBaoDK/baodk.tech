import { useState } from 'react';

const capabilities = [
  { title: 'Design Systems', desc: 'Design tokens, components, and documentation.' },
  { title: 'Web Apps', desc: 'React, Vite, TypeScript and performant SPAs.' },
  { title: 'UX & Research', desc: 'User interviews, flows and accessibility.' },
  { title: 'Brand & Visuals', desc: 'Identity, illustration and motion.' },
];

const timeline = [
  { date: '2024', title: 'Senior UI Engineer', body: 'Led frontend at Example Corp.' },
  { date: '2022', title: 'Frontend Engineer', body: 'Built component library and design system.' },
  { date: '2020', title: 'Designer', body: 'Freelance product design work.' },
];

const testimonials = [
  { name: 'Acme Inc', quote: 'Delivered a beautiful, fast web product.' },
  { name: 'Beta LLC', quote: 'Great collaboration and clear thinking.' },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <div>
      <header className="site-header">
        <div className="container nav-container">
          <a className="logo" href="#">Bao<span>DK</span></a>
          <nav className="nav-root">
            <button className="btn nav-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-navigation" aria-label="Toggle navigation">
              <svg className={`hamburger ${open? 'open':''}`} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path className="line line1" d="M4 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path className="line line2" d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path className="line line3" d="M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div id="site-navigation" className={`main-nav ${open ? 'is-open' : ''}`}>
              <a onClick={() => scrollTo('capabilities')}>Capabilities</a>
              <a onClick={() => scrollTo('work')}>Work</a>
              <a onClick={() => scrollTo('testimonials')}>Testimonials</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Hi — I’m Bao. I build delightful product experiences.</h1>
              <p className="lead">Designing interfaces, systems and teams that help products scale while staying human.</p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#contact">Get in touch</a>
                <a className="btn btn-outline" href="#work">See work</a>
              </div>
            </div>

            <aside className="hero-card">
              <div className="profile">
                <div className="profile-photo" />
                <div className="profile-info">
                  <h3>Bao DK</h3>
                  <div className="muted">Product Engineer & Designer</div>
                  <ul className="meta-list">
                    <li>Based in Vietnam</li>
                    <li>Available for freelance</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="capabilities" className="section">
          <div className="container">
            <h2>Capabilities</h2>
            <div className="section-sub">Core skills and what I bring to teams.</div>
            <div className="capabilities-grid">
              {capabilities.map((c) => (
                <div key={c.title} className="card">
                  <div className="icon">{c.title.charAt(0)}</div>
                  <h4>{c.title}</h4>
                  <div className="projects">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section timeline-section">
          <div className="container">
            <h2>Selected Work</h2>
            <div className="section-sub">A sampling of projects and roles.</div>
            <div className="timeline">
              {timeline.map((t) => (
                <div key={t.date} className="timeline-item">
                  <span className="dot" aria-hidden />
                  <div className="date">{t.date}</div>
                  <div className="body">
                    <h4>{t.title}</h4>
                    <div className="muted">{t.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section">
          <div className="container">
            <h2>Testimonials</h2>
            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <div key={t.name} className="testimonial card">
                  <div className="logo">{t.name.charAt(0)}</div>
                  <div className="muted">{t.quote}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container cta-grid">
            <div>
              <h3>Interested in working together?</h3>
              <div className="muted">I’m available for freelance and contract work.</div>
            </div>
            <div>
              <a className="btn btn-primary large" href="#contact">Contact</a>
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>© {new Date().getFullYear()} BaoDK</div>
          <div className="muted">Built with React + Vite</div>
        </div>
      </footer>
    </div>
  );
}
