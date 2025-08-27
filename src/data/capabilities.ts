import { TechnicalCapability } from '../types';

export const technicalCapabilities: TechnicalCapability[] = [
  {
    title: "Full Stack Development",
    description: "Building robust applications with Python backends and React frontends, delivering end-to-end solutions",
    technologies: ["Python", "React", "FastAPI", "PostgreSQL", "Node.js"],
    icon: "💻"
  },
  {
    title: "LLM Integration & AI",
    description: "Implementing cutting-edge AI solutions with large language models and machine learning frameworks",
    technologies: ["OpenAI", "LangChain", "Hugging Face", "Vector DBs", "RAG"],
    icon: "🤖"
  },
  {
    title: "Data Engineering",
    description: "Designing scalable data pipelines, ETL processes, and analytics infrastructure for enterprise solutions",
    technologies: ["Apache Airflow", "Spark", "Kafka", "Snowflake", "dbt"],
    icon: "📊"
  },
  {
    title: "Quality Engineering",
    description: "Ensuring reliability through comprehensive testing strategies, automation, and quality assurance practices",
    technologies: ["PyTest", "Selenium", "Test Automation", "CI/CD", "Quality Gates"],
    icon: "✅"
  },
  {
    title: "DevOps & Cloud",
    description: "Automating deployments, managing cloud infrastructure, and implementing scalable DevOps practices",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    icon: "☁️"
  }
];
