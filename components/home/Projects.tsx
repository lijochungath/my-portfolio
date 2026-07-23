import React from 'react';

// --- DATA ---
const profileData = {
  name: "Lijo Chungath Jose",
  role: "Senior Data Engineer",
  tagline: "Designing scalable Azure Data Engineering solutions, Microsoft Fabric implementations, Enterprise Analytics, Power BI, Azure Synapse, SQL, Python and Cloud Data Platforms."
};

const projects = [
  {
    title: "Legal Data & Document Cloud Migration",
    client: "City of Calgary (Legal Department)",
    duration: "12 Months",
    technologies: ["Azure Data Factory", "Microsoft Dynamics", "Azure Functions", "SharePoint", "Azure SQL Database", "Power BI"],
    description: [
      "Spearheaded the legacy system migration for the City of Calgary's Legal Department into a modern, unified Microsoft cloud ecosystem.",
      "Architected a dedicated staging database environment to profile, clean, and rectify complex legacy data quality issues prior to downstream ingestion.",
      "Engineered robust Azure Data Factory (ADF) pipelines to seamlessly transport transformed structured datasets directly into Microsoft Dynamics.",
      "Developed custom serverless Azure Functions to automate the extraction, metadata indexing, and transfer of legal documents into SharePoint.",
      "Integrated Power BI reporting layers to deliver real-time operational metrics and tracking across legal document workflows."
    ]
  },
  {
    title: "Enterprise Data Warehouse Modernization",
    client: "MASC",
    duration: "24 Months",
    technologies: ["Microsoft Fabric (F64)", "Azure Synapse Analytics", "Azure Data Factory", "Azure Databricks", "Azure SQL DB", "Power BI", "Oracle", "IBM DB2"],
    description: [
      "Architected and delivered an end-to-end modern data warehouse platform to migrate legacy enterprise data from heterogeneous sources including Oracle and IBM DB2.",
      "Designed an Azure SQL staging layer for secure ingestion, landing, and consolidation of raw enterprise datasets.",
      "Built scalable ETL/ELT pipelines using Azure Data Factory and Azure Databricks to execute complex business logic and advanced transformations.",
      "Evolved the data warehouse foundation from Azure Synapse Analytics to a high-capacity Microsoft Fabric (F64 capacity) architecture for optimized compute and query performance.",
      "Empowered business stakeholders with high-throughput interactive reporting and executive analytics by connecting refined datasets to Power BI."
    ]
  },
  {
    title: "SQL Server Modernization & Cloud Assessment",
    client: "Niagara Region",
    duration: "16 Months",
    technologies: ["Azure SQL Managed Instance", "Azure SQL Database", "Microsoft Fabric", "SQL Server"],
    description: [
      "Conducted an extensive technical assessment of the Niagara Region’s legacy SQL Server infrastructure to map out a clear cloud modernization roadmap.",
      "Analyzed complex application dependencies, database workloads, and schema compatibility to mitigate upgrade risks across target cloud environments.",
      "Evaluated migration feasibility across Azure SQL Managed Instance, Azure SQL Database, and Microsoft Fabric paradigms.",
      "Authored strategic architecture blueprints detailing target state topologies, resource consolidation plans, and execution schedules.",
      "Delivered actionable recommendations that established a streamlined path toward cloud adoption while significantly lowering enterprise infrastructure risk."
    ]
  },
  {
    title: "ZBDM Enterprise Big Data Management",
    client: "Qatar Food Industries & National Food Company",
    duration: "36 Months",
    technologies: ["Azure Databricks", "Python", "SSIS", "KNIME", "SSAS OLAP Cubes", "Power BI", "Power Apps", "SQL Server"],
    description: [
      "Led the end-to-end big data architecture initiative across sales, production, finance, and operations domains for large-scale food manufacturing enterprises.",
      "Managed a 5-person engineering team to build complex ETL pipelines utilizing Azure Databricks, SSIS, KNIME, and optimized SQL stored procedures.",
      "Applied statistical modeling and data transformation scripts using Python within Databricks to extract deep operational and financial insights.",
      "Implemented SSAS multi-dimensional cubes and configured Power BI enterprise gateways with incremental refresh patterns for daily automated reporting.",
      "Formulated custom Power Apps interfaces and automated workflows to stream fresh operational data directly into central reporting repositories."
    ]
  },
  {
    title: "Enterprise Ticketing & Resource Allocation System",
    client: "Annalect India",
    duration: "Jan 2024 – Present",
    technologies: ["Power Apps", "Power Automate", "Power Platform", "Power BI", "SQL Server"],
    description: [
      "Designed and implemented a unified ticketing and resource allocation system to streamline internal operational workflows and approvals.",
      "Built intuitive canvas interfaces using Power Apps to enable seamless ticket creation and resource request submissions across departments.",
      "Engineered complex approval pipelines and automated routing rules utilizing Power Automate to accelerate resolution timelines.",
      "Integrated underlying transactional data stores with Power BI to monitor ticketing queues, bottlenecks, and team resource utilization.",
      "Significantly improved cross-team coordination and administrative efficiency through automated notifications and real-time status tracking."
    ]
  },
  {
    title: "ITSM Analytics & Jira Power BI Integration",
    client: "Annalect India",
    duration: "Oct 2023 – Dec 2023",
    technologies: ["Jira REST APIs", "Power BI", "Power Automate", "JSON Parsing", "Tabular Modeling"],
    description: [
      "Architected a cost-effective ITSM analytics solution by integrating Jira Service Management directly with Power BI reporting tools.",
      "Constructed automated data extraction pipelines using REST APIs and Power Automate to ingest ticket lifecycles and service metrics.",
      "Normalized raw JSON payload data and built custom tabular models to track service level agreements (SLAs) and incident trends.",
      "Developed interactive Power BI dashboards that provided leadership with actionable visibility into operational efficiency and agent performance.",
      "Streamlined administrative oversight by establishing automated refresh cycles and security-mapped reporting views."
    ]
  },
  {
    title: "Enterprise Application Integration (Pega CRM)",
    client: "Annalect India",
    duration: "Aug 2023 – Present",
    technologies: ["Pega CRM", "Database-to-Database ETL", "Power BI", "SQL Server"],
    description: [
      "Orchestrated direct database-to-database data pipelines to integrate Pega CRM operational data into enterprise analytics repositories.",
      "Established secure, high-throughput extraction layers to capture sales, marketing, and customer interaction telemetry in real time.",
      "Conducted rigorous data validation and transformation logic to ensure cross-system consistency across CRM and data warehouse stores.",
      "Designed interactive Power BI reporting suites that translated raw operational records into actionable business insights for stakeholders.",
      "Enabled commercial leadership to optimize customer engagement strategies through consolidated multi-touchpoint visibility."
    ]
  },
  {
    title: "Multi-Agency Operational Dashboards Suite",
    client: "Annalect India & Partner Agencies",
    duration: "May 2023 – Present",
    technologies: ["Power BI", "Data Modeling", "ETL Pipelines", "Row-Level Security (RLS)"],
    description: [
      "Designed and deployed a suite of executive dashboards spanning recruitment, portfolio management, administration, and resource allocation.",
      "Established end-to-end data pipelines to ingest, clean, and consolidate disparate data streams across multiple agency branches.",
      "Built scalable dimensional data models optimized for rapid visual aggregation and slice-and-dice exploratory analysis in Power BI.",
      "Enforced strict row-level security (RLS) rules to guarantee role-based data privacy and regulatory compliance across departments.",
      "Delivered clear visibility into operational expenses and resource utilization, directly driving evidence-based managerial decision-making."
    ]
  },
  {
    title: "ZPI Multi-Company Performance Index Engine",
    client: "Qatar Flour Mills",
    duration: "Jul 2014 – Oct 2023",
    technologies: ["C#", "ASP.NET", "MS SQL Server", "SSIS", "SSAS", "Power BI"],
    description: [
      "Directed a 6-person engineering team to build a multi-tenant KPI capture and analytics platform serving diverse operating companies.",
      "Engineered secure data entry web interfaces using C#, ASP.NET, and SQL Server to ingest periodic performance metrics into a cloud repository.",
      "Designed SSIS ETL packages and SSAS OLAP cubes to aggregate cross-company data sources into standardized performance benchmarks.",
      "Enforced rigorous data governance protocols to validate incoming metrics before publishing reporting suites for senior management.",
      "Built interactive Power BI executive dashboards enabling group-level leadership to evaluate division-wise growth and operational efficiency."
    ]
  },
  {
    title: "ZDS Automated Document Approval & Workflow Engine",
    client: "Gulf United Real Estate Investments Company",
    duration: "Feb 2013 – Mar 2017",
    technologies: [".NET (C#)", "SQL Server", "UML Modeling", "PDF Stamping Engine"],
    description: [
      "Designed the database architecture and workflow logic for an automated digital document approval system with cryptographic PDF signing.",
      "Authored High-Level (HLD) and Low-Level (LLD) design documentation using UML and flowcharts to guide the core engineering team.",
      "Built automated tracking mechanisms to log audit trails, including timestamps, user identity, and digital signatures on real estate contracts.",
      "Performed statistical analysis on collected workflow data to identify bottlenecks and calculate average approval turnaround times per user.",
      "Integrated real-time alert systems to notify stakeholders of pending approvals, significantly accelerating contract execution cycles."
    ]
  }
];

// --- COMPONENTS ---

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 text-center">
    {subtitle && <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">{subtitle}</p>}
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>
  </div>
);

export default function PortfolioOverview() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 pt-32 pb-24 sm:px-12 lg:px-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-lg font-medium text-blue-400">Hello, I'm</p>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            {profileData.name}
          </h1>
          <h2 className="mb-8 text-2xl font-bold text-slate-300 sm:text-3xl">
            {profileData.role}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
            {profileData.tagline}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Enterprise Case Studies" subtitle="Featured Work" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800/50 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                {/* flex-1 allows this section to grow, pushing the tags down */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                    <span className="font-semibold text-blue-400">{project.client}</span>
                    <span className="hidden text-slate-600 sm:inline">•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {project.duration}
                    </span>
                  </div>
                  
                  {/* Updated Description block to map bullet points */}
                  <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* mt-auto forces this container to the absolute bottom of the card */}
                <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-800/60 pt-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-300 transition-colors hover:bg-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}