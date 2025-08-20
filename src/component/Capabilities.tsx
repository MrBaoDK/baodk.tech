import React from 'react';

export type Capability = {
  icon: string;
  label: string;
  desc: string;
  projects: string[];
};

export function CapabilityCard({icon,label,children,projects}:{icon:string,label:string,children:React.ReactNode,projects:string[]}){
  return (
    <article className="card">
      <div className="icon">{icon}</div>
      <h3>{label}</h3>
      <p>{children}</p>
      <ul className="projects">
        {projects.map((p,i)=>(<li key={i}>{p}</li>))}
      </ul>
    </article>
  );
}

export default function Capabilities(){
  const items: Capability[] = [
    {icon:'DB', label:'Data Engineering & Analytics', desc:'Scalable ETL, streaming systems, data modelling, warehouses, and BI dashboards.', projects:['Real-time fraud detection pipeline (Kafka, Spark)','Data warehouse optimization & ELT']},
    {icon:'AI', label:'LLM & AI Integration', desc:'Custom LLM pipelines, retrieval-augmented generation, and production model orchestration.', projects:['NLP document processing with RAG','LLM-assisted data quality monitoring']},
    {icon:'FE', label:'Fullstack Development', desc:'React front-ends, interactive visualizations, and resilient backends/APIs.', projects:['Real-time dashboards (WebSockets)','Reusable component libraries']},
    {icon:'Ops', label:'DevOps & Quality', desc:'CI/CD, infra as code, automated testing and monitoring for reliable delivery.', projects:['CI pipelines, integration tests, automated deployments','Observability and alerting (Prometheus/Grafana)']}
  ];

  return (
    <section id="capabilities" className="section container">
      <h2>Technical Capabilities</h2>
      <p className="section-sub">End-to-end expertise to build, validate and operate mission-critical data systems.</p>
      <div className="grid capabilities-grid">
        {items.map((it,idx)=> <CapabilityCard key={idx} icon={it.icon} label={it.label} projects={it.projects}>{it.desc}</CapabilityCard>)}
      </div>
    </section>
  );
}
