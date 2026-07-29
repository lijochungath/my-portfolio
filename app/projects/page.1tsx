"use client";
import React, { useState } from 'react';

// --- INTERFACES ---
interface Project {
  title: string;
  client: string; 
  company: string; 
  duration: string;
  technologies: string[];
  description: string[];
  architectureImage?: string; 
}

// --- PROJECT DATA ARRAY ---
const projects: Project[] = [
  {
    title: "Legal Data & Document Cloud Migration",
    client: "City of Calgary",
    company: "Thoughtstorm",
    duration: "12 Months",
    technologies: ["Azure Data Factory", "Microsoft Dynamics", "Azure Functions", "SharePoint", "Azure SQL Database", "Power BI"],
    description: [
      "Spearheaded the legacy system migration for the City of Calgary's Legal Department into a modern, unified Microsoft cloud ecosystem.",
      "Architected a dedicated staging database environment to profile, clean, and rectify complex legacy data quality issues prior to downstream ingestion.",
      "Engineered robust Azure Data Factory (ADF) pipelines to seamlessly transport transformed structured datasets directly into Microsoft Dynamics.",
      "Developed custom serverless Azure Functions to automate the extraction, metadata indexing, and transfer of legal documents into SharePoint.",
      "Integrated Power BI reporting layers to deliver real-time operational metrics and tracking across legal document workflows."
    ],
    architectureImage: "/calgary-architecture.png"
  },
  {
    title: "Enterprise Data Warehouse Modernization",
    client: "MASC",
    company: "Thoughtstorm",
    duration: "24 Months",
    technologies: ["Microsoft Fabric (F64)", "Azure Synapse Analytics", "Azure Data Factory", "Azure Databricks", "Azure SQL DB", "Power BI", "Oracle", "IBM DB2"],
    description: [
      "Architected and delivered an end-to-end modern data warehouse platform to migrate legacy enterprise data from heterogeneous sources including Oracle and IBM DB2.",
      "Designed an Azure SQL staging layer for secure ingestion, landing, and consolidation of raw enterprise datasets.",
      "Built scalable ETL/ELT pipelines using Azure Data Factory and Azure Databricks to execute complex business logic and advanced transformations.",
      "Evolved the data warehouse foundation from Azure Synapse Analytics to a high-capacity Microsoft Fabric (F64 capacity) architecture for optimized compute and query performance.",
      "Empowered business stakeholders with high-throughput interactive reporting and executive analytics by connecting refined datasets to Power BI."
    ],
    architectureImage: "/masc-arc.png",
  },
  {
    title: "SQL Server Modernization & Cloud Assessment",
    client: "Niagara Region",
    company: "Thoughtstorm",
    duration: "16 Months",
    technologies: ["Azure SQL Managed Instance", "Azure SQL Database", "Microsoft Fabric", "SQL Server"],
    description: [
      "Conducted an extensive technical assessment of the Niagara Region’s legacy SQL Server infrastructure to map out a clear cloud modernization roadmap.",
      "Analyzed complex application dependencies, database workloads, and schema compatibility to mitigate upgrade risks across target cloud environments.",
      "Evaluated migration feasibility across Azure SQL Managed Instance, Azure SQL Database, and Microsoft Fabric paradigms.",
      "Authored strategic architecture blueprints detailing target state topologies, resource consolidation plans, and execution schedules.",
      "Delivered actionable recommendations that established a streamlined path toward cloud adoption while significantly lowering enterprise infrastructure risk."
    ],
    architectureImage: "/niagara-roadmap.png"
  },
  {
    title: "ZBDM Enterprise Big Data Management",
    client: "Qatar Food Industries",
    company: "Zad",
    duration: "36 Months",
    technologies: ["Azure Databricks", "Python", "SSIS", "KNIME", "SSAS OLAP Cubes", "Power BI", "Power Apps", "SQL Server"],
    description: [
      "Led the end-to-end big data architecture initiative across sales, production, finance, and operations domains for large-scale food manufacturing enterprises.",
      "Managed a 5-person engineering team to build complex ETL pipelines utilizing Azure Databricks, SSIS, KNIME, and optimized SQL stored procedures.",
      "Applied statistical modeling and data transformation scripts using Python within Databricks to extract deep operational and financial insights.",
      "Implemented SSAS multi-dimensional cubes and configured Power BI enterprise gateways with incremental refresh patterns for daily automated reporting.",
      "Formulated custom Power Apps interfaces and automated workflows to stream fresh operational data directly into central reporting repositories."
    ],
    architectureImage: "/zbdm-architecture.png"
  },
  {
    title: "Enterprise Ticketing & Resource Allocation System",
    client: "Annalect India",
    company: "Annalect India",
    duration: "Jan 2024 – Present",
    technologies: ["Power Apps", "Power Automate", "Power Platform", "Power BI", "SQL Server"],
    description: [
      "Designed and implemented a unified ticketing and resource allocation system to streamline internal operational workflows and approvals.",
      "Built intuitive canvas interfaces using Power Apps to enable seamless ticket creation and resource request submissions across departments.",
      "Engineered complex approval pipelines and automated routing rules utilizing Power Automate to accelerate resolution timelines.",
      "Integrated underlying transactional data stores with Power BI to monitor ticketing queues, bottlenecks, and team resource utilization.",
      "Significantly improved cross-team coordination and administrative efficiency through automated notifications and real-time status tracking."
    ],
    architectureImage: "/ticketing-architecture.png"
  },
  {
    title: "ITSM Analytics & Jira Power BI Integration",
    client: "Annalect India",
    company: "Annalect India",
    duration: "Oct 2023 – Dec 2023",
    technologies: ["Jira REST APIs", "Power BI", "Power Automate", "JSON Parsing", "Tabular Modeling"],
    description: [
      "Architected a cost-effective ITSM analytics solution by integrating Jira Service Management directly with Power BI reporting tools.",
      "Constructed automated data extraction pipelines using REST APIs and Power Automate to ingest ticket lifecycles and service metrics.",
      "Normalized raw JSON payload data and built custom tabular models to track service level agreements (SLAs) and incident trends.",
      "Developed interactive Power BI dashboards that provided leadership with actionable visibility into operational efficiency and agent performance.",
      "Streamlined administrative oversight by establishing automated refresh cycles and security-mapped reporting views."
    ],
    architectureImage: "/itsm-jira-architecture.png"
  },
  {
    title: "Enterprise Application Integration (Pega CRM)",
    client: "Annalect India",
    company: "Annalect India",
    duration: "Aug 2023 – Present",
    technologies: ["Pega CRM", "Database-to-Database ETL", "Power BI", "SQL Server"],
    description: [
      "Orchestrated direct database-to-database data pipelines to integrate Pega CRM operational data into enterprise analytics repositories.",
      "Established secure, high-throughput extraction layers to capture sales, marketing, and customer interaction telemetry in real time.",
      "Conducted rigorous data validation and transformation logic to ensure cross-system consistency across CRM and data warehouse stores.",
      "Designed interactive Power BI reporting suites that translated raw operational records into actionable business insights for stakeholders.",
      "Enabled commercial leadership to optimize customer engagement strategies through consolidated multi-touchpoint visibility."
    ],
    architectureImage: "/pega-integration.png"
  },
  {
    title: "Multi-Agency Operational Dashboards Suite",
    client: "Annalect India",
    company: "Annalect India",
    duration: "May 2023 – Present",
    technologies: ["Power BI", "Data Modeling", "ETL Pipelines", "Row-Level Security (RLS)"],
    description: [
      "Designed and deployed a suite of executive dashboards spanning recruitment, portfolio management, administration, and resource allocation.",
      "Established end-to-end data pipelines to ingest, clean, and consolidate disparate data streams across multiple agency branches.",
      "Built scalable dimensional data models optimized for rapid visual aggregation and slice-and-dice exploratory analysis in Power BI.",
      "Enforced strict row-level security (RLS) rules to guarantee role-based data privacy and regulatory compliance across departments.",
      "Delivered clear visibility into operational expenses and resource utilization, directly driving evidence-based managerial decision-making."
    ],
    architectureImage: "/dashboards-architecture.png"
  },
  {
    title: "ZPI Multi-Company Performance Index Engine",
    client: "Qatar Flour Mills",
    company: "Zad",
    duration: "Jul 2014 – Oct 2023",
    technologies: ["C#", "ASP.NET", "MS SQL Server", "SSIS", "SSAS", "Power BI"],
    description: [
      "Directed a 6-person engineering team to build a multi-tenant KPI capture and analytics platform serving diverse operating companies.",
      "Engineered secure data entry web interfaces using C#, ASP.NET, and SQL Server to ingest periodic performance metrics into a cloud repository.",
      "Designed SSIS ETL packages and SSAS OLAP cubes to aggregate cross-company data sources into standardized performance benchmarks.",
      "Enforced rigorous data governance protocols to validate incoming metrics before publishing reporting suites for senior management.",
      "Built interactive Power BI executive dashboards enabling group-level leadership to evaluate division-wise growth and operational efficiency."
    ],
    architectureImage: "/zpi-architecture.png"
  },
  {
    title: "ZDS Automated Document Approval & Workflow Engine",
    client: "Gulf United Real Estate",
    company: "Zad",
    duration: "Feb 2013 – Mar 2017",
    technologies: [".NET (C#)", "SQL Server", "UML Modeling", "PDF Stamping Engine"],
    description: [
      "Designed the database architecture and workflow logic for an automated digital document approval system with cryptographic PDF signing.",
      "Authored High-Level (HLD) and Low-Level (LLD) design documentation using UML and flowcharts to guide the core engineering team.",
      "Built automated tracking mechanisms to log audit trails, including timestamps, user identity, and digital signatures on real estate contracts.",
      "Performed statistical analysis on collected workflow data to identify bottlenecks and calculate average approval turnaround times per user.",
      "Integrated real-time alert systems to notify stakeholders of pending approvals, significantly accelerating contract execution cycles."
    ],
    architectureImage: "/zds-architecture.png"
  }
];

// --- COMPONENTS ---
const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-8 text-center">
    {subtitle && <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">{subtitle}</p>}
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>
  </div>
);

export default function PortfolioOverview() {
  const [activeTab, setActiveTab] = useState("Thoughtstorm");
  
  // State to hold the active image path for the modal popup (null means modal is closed)
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");

  const openModal = (imagePath: string, projectTitle: string) => {
    setModalImage(imagePath);
    setModalTitle(projectTitle);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalTitle("");
  };

  const companies = Array.from(new Set(projects.map((p) => p.company)));
  const filteredProjects = projects.filter((p) => p.company === activeTab);

  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 pt-6 pb-20 relative">
      <section id="projects" className="px-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Enterprise Portfolio" subtitle="Extensive Project History" />

          {/* Dynamic Tab Navigation */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setActiveTab(company)}
                className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === company
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700/50"
                }`}
              >
                {company}
              </button>
            ))}
          </div>

          {/* Filtered Projects Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800/50 hover:shadow-2xl hover:shadow-blue-900/20 animate-fade-in"
              >
                <div className="flex-1">
                  {/* Header: Title on left, View Topology button on right */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>

                    {project.architectureImage && (
                      <button
                        onClick={() => openModal(project.architectureImage!, project.title)}
                        className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition bg-blue-950/40 border border-blue-500/30 px-3 py-1.5 rounded-lg shrink-0 cursor-pointer"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        View Topology
                      </button>
                    )}
                  </div>

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
                  
                  <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-800/60 pt-6 mt-8">
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

      {/* --- POP-UP MODAL OVERLAY --- */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal box
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div>
                <h4 className="text-lg font-bold text-white">{modalTitle}</h4>
                <p className="text-xs text-slate-400 font-mono">System Architecture & Data Flow Transformation</p>
              </div>
              <button 
                onClick={closeModal}
                className="rounded-lg bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Image Display Area */}
            <div className="relative w-full h-[60vh] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center overflow-hidden">
              {/* Replace the span below with a standard Next.js <Image /> component once your graphic is uploaded */}
              <div className="text-center p-6">
                <svg className="w-12 h-12 text-blue-500/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-slate-300 font-medium mb-1">Architecture Graphic Placeholder</p>
                <p className="text-xs text-slate-500">
                  Target file path: <code className="text-blue-400 font-mono">{modalImage}</code>
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-4 text-right">
              <button
                onClick={closeModal}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold rounded-lg transition"
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}