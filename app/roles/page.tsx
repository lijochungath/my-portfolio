import React from "react";
import RoleCard, { RoleItem } from "./components/rolecard";

const careerRoles: RoleItem[] = [
  {
    id: "thoughtstorm",
    company: "Thoughtstorm Canada",
    functionalRole: "Lead Data & AI Architect",
    officialDesignation: "Data Analyst",
    period: "Jul 2024 – Present",
    scopeSummary:
      "Directing enterprise Microsoft Fabric adoptions, end-to-end RFP technical proposal architecture, and production Medallion implementations across public sector and provincial clients.",
    ownershipPillars: [
      {
        category: "Architectural Strategy & Governance",
        responsibilities: [
          "Architect scalable Hybrid Medallion Lakehouses (OneLake, Direct Lake, Spark) utilizing Microsoft Fabric F64 capacity.",
          "Lead technical bid governance, solution trade-off options, and system topologies for high-stakes public sector RFPs (e.g., Legal Aid BC, Humber Polytechnic).",
          "Formulate cross-tenant data governance protocols, PII masking rules, and standardized ingestion patterns.",
        ],
      },
      {
        category: "Client Engagement & Technical Delivery",
        responsibilities: [
          "Spearhead cloud migration pipelines for the City of Calgary, resolving complex API rate limits and matter deduplication via window functions.",
          "Lead reverse-engineering and modernization discovery assessments across 60+ SQL Server instances for the Niagara Region.",
          "Direct cross-functional squads across data engineering, QA, and business stakeholders.",
        ],
      },
    ],
    keyDeliverables: [
      "Microsoft Fabric F64 Medallion Migration",
      "Public Sector RFP Defense & Architecture",
      "Niagara SQL Estate 5-Year Modernization Roadmap",
      "Calgary Legal Data Ingestion Pipeline",
    ],
    environment: [
      "Microsoft Fabric",
      "Azure Synapse",
      "Azure Data Factory",
      "Direct Lake",
      "Power BI",
      "Python",
      "RAG / Agentic AI",
    ],
  },
  {
    id: "annalect",
    company: "Annalect India",
    functionalRole: "Project Manager / Lead BI Engineer",
    officialDesignation: "Project Manager",
    period: "May 2023 – Jul 2024",
    scopeSummary:
      "Led technical project delivery, enterprise dashboard design, and process automation suites across multi-agency operational branches.",
    ownershipPillars: [
      {
        category: "Delivery & Process Automation",
        responsibilities: [
          "Engineered enterprise Power Apps canvas tools and automated multi-tier approval workflows using Power Automate.",
          "Constructed automated REST API extractors to pull ticket lifecycle data from Jira Service Management directly into analytics stores.",
        ],
      },
      {
        category: "Data Modeling & Governance",
        responsibilities: [
          "Built normalized tabular data models enforcing Row-Level Security (RLS) across cross-agency leadership reports.",
          "Maintained SLA compliance monitors and capacity planning metrics for managerial decision-making.",
        ],
      },
    ],
    keyDeliverables: [
      "Unified Enterprise Ticketing & Allocation System",
      "ITSM Jira Power BI Analytical Suite",
      "Cross-Agency Operational Scorecards",
    ],
    environment: [
      "Power BI",
      "Power Apps",
      "Power Automate",
      "Jira REST APIs",
      "SQL Server",
      "Tabular Modeling",
    ],
  },
  {
    id: "zad",
    company: "Zad Holding (Qatar Food Industries)",
    functionalRole: "Lead Data Engineer & Analytics Specialist",
    officialDesignation: "Senior Executive",
    period: "Jul 2014 – Oct 2023",
    scopeSummary:
      "Directed data platform initiatives across manufacturing, sales, supply chain, and finance domains while resolving core enterprise ERP reporting challenges.",
    ownershipPillars: [
      {
        category: "Big Data & BI Engineering",
        responsibilities: [
          "Managed a 5-person engineering squad building multi-tenant ETL workflows using SSIS, KNIME, and Databricks.",
          "Designed SSAS multi-dimensional cubes and scheduled incremental refresh Power BI gateways.",
          "Constructed custom C# / ASP.NET operational KPI tracking engines serving multiple group subsidiaries.",
        ],
      },
      {
        category: "Enterprise ERP Data Integration",
        responsibilities: [
          "Spearheaded the analytics layer during the Ramco ERP implementation, extracting messy transactional pipelines into clean Qlik Sense models.",
          "Engineered custom SCD Type 2 tracking logic to restore point-in-time document visibility for executive management.",
        ],
      },
    ],
    keyDeliverables: [
      "ZPI Multi-Company Performance Index Engine",
      "Ramco ERP Analytics Layer & Reconciliation",
      "Enterprise Food Manufacturing Data Lakehouse",
    ],
    environment: [
      "SQL Server",
      "SSIS",
      "SSAS OLAP",
      "Azure Databricks",
      "Python",
      "Qlik Sense",
      "ASP.NET",
    ],
  },
];

export default function RolesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Career Ownership & Leadership Scope
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Roles & Responsibilities
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Strategic breakdown of architectural mandates, organizational ownership,
            and designation mappings across 20 years of enterprise data leadership.
          </p>
        </div>

        {/* Roles Feed */}
        <div className="space-y-10">
          {careerRoles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>
      </div>
    </main>
  );
}