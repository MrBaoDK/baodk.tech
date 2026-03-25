import type { Project } from '@baodk-site/types';

export const projects: Project[] = [
  {
    title: 'CDGA – AI‑Assisted Document Gap Analysis',
    description:
      'End‑to‑end system for automated document classification, OCR + LLM parsing, markdown processing, dashboards, and notifications.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'PostgreSQL', 'Redis', 'Docker'],
    impact: 'Reduced manual document handling by 60%; accelerated compliance reviews',
    category: 'AI/Automation',
  },
  {
    title: 'NCM Helper – Quality Findings & Escalation',
    description:
      'Standardized workflows for findings across workcells with aging reports, escalation flows, and real‑time monitoring.',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Azure DevOps', 'GitHub Actions'],
    impact: 'Cut manual errors and improved traceability by 50%; real‑time visibility',
    category: 'Quality Engineering',
  },
  {
    title: 'FAIR Reaction – FAI Tracking Automation',
    description:
      'MES‑integrated triggers, alerts, and dashboards to proactively track First Article Inspection progress.',
    technologies: ['Python', 'MES Integration', 'Grafana', 'TimescaleDB', 'Kafka'],
    impact: 'Improved FAI timeliness by 50%; reduced inspection delays',
    category: 'Manufacturing Analytics',
  },
  {
    title: 'Quality DL Evaluation – Monthly Performance System',
    description:
      'Standardized evaluation platform using six criteria with visual quizzes to improve engagement and recall.',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Redis'],
    impact: 'Increased evaluation efficiency by 40%; better scoring consistency',
    category: 'People Systems',
  },
  {
    title: 'Common Data – Employee Data Crawler (Non‑PII)',
    description:
      'Model for extracting and normalizing non‑PII employee data to support operational systems and analytics.',
    technologies: ['Python', 'Airflow', 'dbt', 'PostgreSQL', 'Docker'],
    impact: 'Reduced data prep time by 50%; improved data clarity and availability',
    category: 'Data Engineering',
  },
  {
    title: 'Enterprise Data Platform – Real‑time + Batch',
    description:
      'Reliable ingestion, transformation, and monitoring for cross‑system analytics with auto‑healing jobs and observability.',
    technologies: ['Airflow', 'Spark', 'Kafka', 'S3', 'Python', 'dbt'],
    impact: '2M+ records/day at 99.9% uptime; <5 min recovery time',
    category: 'Data Engineering',
  },
];

// Export with legacy name for backward compatibility
export const sampleProjects = projects;
