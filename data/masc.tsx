import { CaseStudyData } from "./types";

export const masc: CaseStudyData = {
  title: "Enterprise Data Warehouse Modernization",

  client: "Manitoba Agricultural Services Corporation (MASC)",

  duration: "24 Months",

  summary:
    "Architected and delivered a modern enterprise data platform by integrating legacy AS400, Great Plains, and Dynamics 365 Business Central into Microsoft Azure and Microsoft Fabric. The solution established a scalable Lakehouse architecture, enabling enterprise reporting, governance, and future AI initiatives.",

  metrics: [
    { label: "Duration", value: "24 Months" },
    { label: "Source Systems", value: "3" },
    { label: "Cloud Platform", value: "Azure" },
    { label: "Analytics", value: "Fabric" },
    { label: "Reporting", value: "Power BI" },
    { label: "Architecture", value: "Lakehouse" },
  ],

  technologies: [
    "Microsoft Fabric",
    "Azure Data Factory",
    "Azure Synapse Analytics",
    "Azure SQL Database",
    "OneLake",
    "Power BI",
    "Delta Lake",
    "Azure Key Vault",
    "Azure DevOps",
    "SQL Server",
    "Python",
    "GitHub",
  ],

  architecture: [
    { title: "AS400" },
    { title: "Great Plains" },
    { title: "Business Central" },
    { title: "Azure Data Factory" },
    { title: "Azure SQL Staging" },
    { title: "Microsoft Fabric" },
    { title: "OneLake" },
    { title: "Power BI" },
  ],

  timeline: [
    {
      phase: "Discovery",
      description:
        "Assessed legacy financial systems, integrations and reporting processes.",
    },
    {
      phase: "Architecture",
      description:
        "Designed Azure Synapse based enterprise data warehouse.",
    },
    {
      phase: "Migration",
      description:
        "Migrated legacy data into Azure using Azure Data Factory pipelines.",
    },
    {
      phase: "Modernization",
      description:
        "Transitioned enterprise analytics platform to Microsoft Fabric.",
    },
    {
      phase: "Deployment",
      description:
        "Implemented enterprise dashboards and knowledge transfer.",
    },
  ],

  challenge: (
    <>
      <p className="mb-4">
        MASC's enterprise data landscape consisted of multiple disconnected
        operational systems supporting finance, insurance, lending, and
        agricultural programs.
      </p>

      <p className="mb-4">
        Financial reporting required significant manual effort because data
        originated from independent applications with different data models.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Legacy AS400 (DB2)</li>
        <li>Great Plains ERP</li>
        <li>Dynamics 365 Business Central</li>
        <li>Fragmented reporting</li>
        <li>Complex reconciliation</li>
        <li>No enterprise data warehouse</li>
        <li>Slow reporting performance</li>
        <li>Growing analytics requirements</li>
      </ul>
    </>
  ),

  solution: (
    <>
      <p className="mb-4">
        Designed a phased enterprise modernization strategy that minimized
        operational risk while gradually introducing cloud-native
        technologies.
      </p>

      <h3 className="font-bold text-blue-400 mt-6 mb-2">
        Phase 1 – Azure Synapse
      </h3>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Azure Data Factory ingestion pipelines</li>
        <li>Azure SQL staging databases</li>
        <li>Bronze and Gold warehouse layers</li>
        <li>Enterprise dimensional model</li>
        <li>Power BI semantic models</li>
      </ul>

      <h3 className="font-bold text-blue-400 mt-6 mb-2">
        Phase 2 – Microsoft Fabric
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>Migration to Microsoft Fabric Lakehouse</li>
        <li>OneLake unified storage</li>
        <li>Delta Lake implementation</li>
        <li>Direct Lake mode for Power BI</li>
        <li>Enterprise governance</li>
        <li>Scalable analytics platform</li>
      </ul>
    </>
  ),

  outcomes: [
    "Single source of truth for enterprise reporting",
    "Integrated legacy and cloud applications",
    "Reduced reporting latency",
    "Modern Lakehouse architecture",
    "Power BI Direct Lake implementation",
    "Improved scalability",
    "Improved governance",
    "Future-ready AI platform",
  ],

  lessonsLearned: [
    "Incremental modernization significantly reduced project risk.",
    "OneLake simplified enterprise data management.",
    "ADF pipelines improved maintainability.",
    "Power BI Direct Lake reduced reporting latency.",
    "Enterprise governance should begin early in modernization.",
  ],

  futureRoadmap: [
    "Microsoft Fabric Real-Time Intelligence",
    "Copilot integration",
    "Azure OpenAI",
    "Predictive Analytics",
    "Machine Learning",
    "Data Quality Automation",
    "Self-Service Analytics",
  ],
};