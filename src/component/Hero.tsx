interface IHeroProps {
  name?: string
  title?: string
  headline?: string
  subheadline?: string
};

const defaultHero: IHeroProps = {
  name: 'Bao DK', 
  title: 'Fullstack Data & Quality Engineer', 
  headline: 'Scalable, AI‑Powered, Test‑Driven Data & Quality Engineering', 
  subheadline:'Delivering enterprise-grade solutions with Python, React, LLM integration and DevOps automation — production-ready, observable, and built for scale.'
};

export default function Hero(props = defaultHero) {
  const {name, title, headline, subheadline} = props;

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>{headline}</h1>
          <p className="lead">{subheadline}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact">Request a Consultation</a>
            <a className="btn btn-outline" href="#capabilities">View Capabilities</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="profile">
            <div className="profile-photo" aria-hidden="true"></div>
            <div className="profile-info">
              <h3>{name}</h3>
              <p className="muted">{title}</p>
              <ul className="meta-list">
                <li>Python • React • LLMs</li>
                <li>Data pipelines • QA • DevOps</li>
                <li>Availability: Consulting & Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
