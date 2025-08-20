

interface ITestimonial{ logo: string; text: string; cite: string };

export default function Testimonials(){
  const items: ITestimonial[] = [
    {logo:'TF', text:'“Their LLM integration reduced manual processing by 85% and accelerated onboarding for new datasets.”', cite:'— Sarah Johnson, CTO, TechFlow Inc.'},
    {logo:'IL', text:'“The React dashboards delivered real-time insights and excellent UX across devices.”', cite:'— Michael Chen, Product Director, Industry Leaders Co.'},
    {logo:'DI', text:'“Automated QA and CI practices improved our data reliability and reduced incidents significantly.”', cite:'— David Rodriguez, Analytics Lead, DataInsights LLC'}
  ];

  return (
    <section id="testimonials" className="section container">
      <h2>What Clients & Teams Say</h2>
      <p className="section-sub">Selected testimonials from product and technical leaders.</p>
      <div className="testimonials-grid">
        {items.map((t, i)=> (
          <blockquote className="testimonial card" key={i}>
            <div className="logo">{t.logo}</div>
            <p>{t.text}</p>
            <cite>{t.cite}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}