import { Skill } from '@baodk-site/types';

export const skills: Skill[] = [
  {
    title: 'Data Engineering',
    description:
      'Designing scalable data pipelines, ETL/ELT workflows, and data warehouse architectures',
    technologies: [
      'Python',
      'SQL',
      'Apache Airflow',
      'Azure Data Factory',
      'Spark',
      'Kafka',
      'ETL/ELT',
      'Data Modeling',
    ],
    icon: '📊',
  },
  {
    title: 'Full Stack & Backend Development',
    description: 'Building end-to-end applications and backend services',
    technologies: ['React', 'FastAPI', 'Python', 'PostgreSQL'],
    icon: '💻',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Developing AI-driven applications and integrating LLM-based systems',
    technologies: ['OpenAI', 'LlamaIndex', 'PyTorch', 'RAG', 'DataOps'],
    icon: '🤖',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Managing cloud infrastructure, orchestration, and deployment automation',
    technologies: [
      'AWS',
      'Azure',
      'Docker',
      'Kubernetes',
      'Podman',
      'Jenkins',
      'Azure DevOps',
      'Azure SQL',
    ],
    icon: '☁️',
  },
  {
    title: 'Power Platform & Automation',
    description: 'Automating workflows and building enterprise-grade business applications',
    technologies: ['Power Automate', 'Power Apps', 'Logic Apps', 'Microsoft Fabric'],
    icon: '⚙️',
  },
  {
    title: 'BI & Analytics',
    description: 'Creating advanced BI solutions with data modeling and KPI-driven insights',
    technologies: ['Power BI', 'DAX', 'Power Query', 'RLS'],
    icon: '📈',
  },
  {
    title: 'Quality Assurance Engineering',
    description: 'Building automated testing frameworks and processes',
    technologies: ['PyTest', 'Playwright', 'CI/CD', 'Test Automation'],
    icon: '✅',
  },
  {
    title: 'Databases & Enterprise Platforms',
    description: 'Managing enterprise databases and optimizing large-scale data platforms',
    technologies: [
      'SQL Server',
      'PostgreSQL',
      'MySQL',
      'SAP',
      'AWS Redshift',
      'Supabase',
      'ODBC',
      'JDBC',
    ],
    icon: '🗄️',
  },
  {
    title: 'Manufacturing Intelligence',
    description:
      'Applying domain expertise in electronics manufacturing analytics and quality systems',
    technologies: ['Quality Reporting', 'Six Sigma', 'BOM Analysis', 'Statistical Analysis'],
    icon: '🏭',
  },
];
