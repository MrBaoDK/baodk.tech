import { Capability } from '@baodk-site/types';

export const capabilities: Capability[] = [
  {
    title: 'Data Engineering',
    description:
      'Designing scalable data pipelines, ETL/ELT workflows, and data warehouse architectures',
    core: [
      { name: 'Python', logoSlug: 'SiPython' },
      { name: 'PostgreSQL', logoSlug: 'SiPostgresql' },
      { name: 'Apache Airflow', logoSlug: 'SiApacheairflow' },
      { name: 'Apache Spark', logoSlug: 'SiApachespark' },
      { name: 'Apache Kafka', logoSlug: 'SiApachekafka' },
      { name: 'Snowflake', logoSlug: 'SiSnowflake' },
      { name: 'MySQL', logoSlug: 'SiMysql' },
    ],
    utility: ['SQL', 'ETL/ELT', 'Data Modeling', 'Azure Data Factory', 'dbt'],
    icon: 'database',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Developing AI-driven applications and integrating LLM-based systems',
    core: [
      { name: 'PyTorch', logoSlug: 'SiPytorch' },
      { name: 'TensorFlow', logoSlug: 'SiTensorflow' },
      { name: 'OpenAI', logoSlug: 'SiOpenai' },
    ],
    utility: ['LlamaIndex', 'RAG', 'DataOps', 'LangChain'],
    icon: 'smart_toy',
  },
  {
    title: 'Full Stack & Backend',
    description: 'Building end-to-end applications and robust backend services',
    core: [
      { name: 'React', logoSlug: 'SiReact' },
      { name: 'FastAPI', logoSlug: 'SiFastapi' },
      { name: 'TypeScript', logoSlug: 'SiTypescript' },
      { name: 'Node.js', logoSlug: 'SiNodedotjs' },
    ],
    utility: ['PostgreSQL', 'Python', 'REST APIs'],
    icon: 'developer_board',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Managing cloud infrastructure, orchestration, and deployment automation',
    core: [
      { name: 'AWS', logoSlug: 'FaAws' },
      { name: 'Azure', logoSlug: 'VscAzure' },
      { name: 'Docker', logoSlug: 'SiDocker' },
      { name: 'Kubernetes', logoSlug: 'SiKubernetes' },
      { name: 'Terraform', logoSlug: 'SiTerraform' },
    ],
    utility: ['Podman', 'Jenkins', 'Azure DevOps', 'CI/CD'],
    icon: 'cloud',
  },
  {
    title: 'Quality Engineering',
    description:
      'Ensuring reliability through testing, automation, and quality assurance practices',
    core: [
      { name: 'PyTest', logoSlug: 'SiPytest' },
      { name: 'Playwright', logoSlug: 'SiPlaywright' },
    ],
    utility: ['Test Automation', 'CI/CD', 'Quality Gates', 'Selenium'],
    icon: 'verified_user',
  },
  {
    title: 'BI & Analytics',
    description: 'Creating advanced BI solutions with data modeling and KPI insights',
    core: [
      { name: 'Power BI', logoSlug: 'SiPowerbi' },
      { name: 'Grafana', logoSlug: 'SiGrafana' },
    ],
    utility: ['DAX', 'Power Query', 'Data Analysis', 'Tableau'],
    icon: 'leaderboard',
  },
  {
    title: 'Enterprise & Automation',
    description: 'Managing enterprise-scale platforms and automated business workflows',
    core: [
      { name: 'Microsoft', logoSlug: 'SiMicrosoft' },
      { name: 'SAP', logoSlug: 'SiSap' },
      { name: 'Power Automate', logoSlug: 'SiPowerautomate' },
      { name: 'Power Apps', logoSlug: 'SiPowerapps' },
    ],
    utility: ['SQL Server', 'Logic Apps', 'Six Sigma', 'VBA', 'Quality Reporting'],
    icon: 'factory',
  },
];
