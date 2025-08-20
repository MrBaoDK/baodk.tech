

interface IEvent { date: string; title: string; body: string };

export default function Timeline(){
  const events: IEvent[] = [
    {date:'2023 — Present', title:'Senior Data & Quality Engineer', body:'Leading development of an AI-powered data quality platform integrating LLMs for anomaly triage and automated remediation.'},
    {date:'2021 — 2023', title:'Fullstack Data Engineer', body:'Built scalable ETL pipelines and React dashboards; implemented infra-as-code and CI/CD for multiple products.'},
    {date:'2019 — 2021', title:'Data Engineering Specialist', body:'Delivered real-time streaming solutions and automated testing frameworks for financial clients.'}
  ];

  return (
    <section id="timeline" className="section timeline-section">
      <div className="container">
        <h2>Career Timeline</h2>
        <div className="timeline">
          {events.map((e, i)=> (
            <div className="timeline-item" key={i}>
              <div className="date">{e.date}</div>
              <div className="body">
                <h4>{e.title}</h4>
                <p>{e.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}