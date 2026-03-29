import type { Project } from '@baodk-site/types';

export const projects: Project[] = [
  {
    title: 'CDGA - AI-Assisted Document Gap Analysis',
    description:
      'End-to-end AI workflow integrating OCR, LLM parsing, classification, markdown processing, dashboards, and automated notifications.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'PostgreSQL', 'Redis', 'Docker'],
    impact: 'Reduced manual document handling by 60%; accelerated compliance reviews.',
    category: 'AI/Automation',
  },
  {
    title: 'NCM Helper - End-to-End Quality Tracking & Escalation System',
    description:
      'Centralized NCM (Non-Conformance Material) workflow platform combining standardized findings, escalation rules, trend analysis, and real-time visibility using both custom web app and Power Platform components.',
    technologies: [
      'FastAPI',
      'PostgreSQL',
      'Azure DevOps',
      'GitHub Actions',
      'Power Apps',
      'Power Automate',
      'Power BI',
      'SQL Server',
      'Power Query',
    ],
    impact:
      'Improved traceability by 80%; eliminated Excel-based tracking; reduced manual errors by 50% through unified digital workflow.',
    category: 'Analytics',
  },
  {
    title: 'FAIR Reaction - Automated FAI & Build Plan Tracking',
    description:
      'Unified automation system combining MES-based triggers, build plan validation, RegEx matching, alerts, and dashboards to proactively track First Article Inspection (FAI) progress.',
    technologies: [
      'Python',
      'MES Integration',
      'Grafana',
      'TimescaleDB',
      'Kafka',
      'Pandas',
      'Postgres',
      'Power Automate',
      'Power BI',
      'RegEx',
    ],
    impact:
      'Improved FAI timeliness by 50%; reduced inspection delays through proactive build plan notifications and automated monitoring.',
    category: 'AI/Automation',
  },
  {
    title: 'Direct-Labor Performance Evaluation',
    description:
      'Unified performance evaluation platform consolidating HR, attendance, productivity, and behavioral assessment into a single analytic model with visual quizzes, automated scoring, and near‑real‑time dashboards.',
    technologies: [
      'Power BI',
      'DAX',
      'Azure SQL',
      'Power Automate',
      'Power Query',
      'React',
      'FastAPI',
      'PostgreSQL',
      'Redis',
    ],
    impact:
      'Reduced evaluation time by 90%; improved scoring consistency by 40%; enabled granular insights by line, shift, and role.',
    category: 'Analytics',
  },
  {
    title: 'Common Data - Employee Data Crawler (Non-PII)',
    description:
      'Automated ingestion and normalization of non-PII employee data supporting analytics, operations, and cross-system integration.',
    technologies: ['Python', 'Airflow', 'dbt', 'PostgreSQL', 'Docker'],
    impact: 'Reduced data preparation time by 50%; improved clarity and availability.',
    category: 'Data Engineering',
  },
  {
    title: 'NXT Verification App',
    description:
      'Real-time detection system for configuration changes, parameter variations, and automated engineering checklists.',
    technologies: ['Python', 'Mendix', 'Postgres', 'Power BI', 'Kubernetes', 'RegEx'],
    impact: 'Runner-up in Delivery Best Practice Award; significantly reduced rework costs.',
    category: 'AI/Automation',
  },
  {
    title: 'BOM Comparison Tool',
    description:
      'Automated BOM revision comparison highlighting added/removed/updated parts to accelerate engineering review.',
    technologies: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'ERP Integration'],
    impact: 'Reduced manual comparison time and improved revision tracking accuracy.',
    category: 'Analytics',
  },
];
