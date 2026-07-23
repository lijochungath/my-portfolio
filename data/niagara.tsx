import { CaseStudyData } from "./types";

export const niagara: CaseStudyData = {
  title: "5-Year Strategic Database & Infrastructure Roadmap",

  client: "Niagara Region (Regional Municipality of Niagara)",

  duration: "16 Months",

  summary:
    "Led a comprehensive enterprise assessment of Niagara Region's SQL Server infrastructure and developed a five-year modernization roadmap focused on platform standardization, Microsoft Fabric adoption, Azure cloud readiness, governance, security, and AI enablement.",

  metrics: [
    {
      label: "Duration",
      value: "16 Months",
    },
    {
      label: "Servers",
      value: "53",
    },
    {
      label: "Databases",
      value: "678",
    },
    {
      label: "Roadmap",
      value: "5 Years",
    },
    {
      label: "Target SQL",
      value: "2022",
    },
    {
      label: "Cloud",
      value: "Hybrid",
    },
  ],

  technologies: [
    "SQL Server 2022",
    "Windows Server 2022",
    "Microsoft Fabric",
    "Azure SQL Managed Instance",
    "Azure SQL Database",
    "Microsoft Purview",
    "Power BI",
    "Azure OpenAI",
    "Azure Machine Learning",
    "Terraform",
    "Azure DevOps",
    "TLS 1.2",
    "Always On",
    "Azure Monitor",
    "Veeam",
  ],

  architecture: [
    {
      title: "Legacy SQL",
    },
    {
      title: "Assessment",
    },
    {
      title: "Standardize",
    },
    {
      title: "Optimize",
    },
    {
      title: "Microsoft Fabric",
    },
    {
      title: "Power BI",
    },
  ],

  timeline: [
    {
      phase: "Assessment",
      description:
        "Enterprise discovery of SQL Server estate, applications, risks and dependencies.",
    },
    {
      phase: "Planning",
      description:
        "Developed a phased five-year modernization roadmap.",
    },
    {
      phase: "Standardization",
      description:
        "Defined Windows Server and SQL Server upgrade standards.",
    },
    {
      phase: "Optimization",
      description:
        "Recommended consolidation, HA, monitoring and governance improvements.",
    },
    {
      phase: "Modernization",
      description:
        "Roadmap for Microsoft Fabric, Azure SQL and AI readiness.",
    },
  ],

  challenge: (
    <>
      <p className="mb-4">
        Niagara Region manages a large enterprise SQL Server environment
        supporting public services, finance, GIS, healthcare,
        transportation, emergency services, public works,
        and numerous departmental applications.
      </p>

      <p className="mb-4">
        Over many years, independent application deployments resulted in
        multiple SQL Server versions, inconsistent security standards,
        aging infrastructure and increasing operational risk.
      </p>

      <h3 className="font-bold text-blue-400 mt-6 mb-3">
        Key Challenges
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>53 Windows Server virtual machines</li>
        <li>678 SQL Server databases</li>
        <li>Large SQL Server 2014/2016 footprint</li>
        <li>Limited High Availability implementation</li>
        <li>Complex application dependencies</li>
        <li>End-of-life operating systems</li>
        <li>Growing cybersecurity concerns</li>
        <li>Need for centralized governance</li>
        <li>Cloud migration uncertainty</li>
        <li>Future AI adoption requirements</li>
      </ul>
    </>
  ),

  solution: (
    <>
      <p className="mb-4">
        Designed a structured modernization framework based on Microsoft's
        Cloud Adoption Framework while minimizing operational disruption.
      </p>

      <h3 className="font-bold text-blue-400 mt-6 mb-3">
        Phase 1 – Stabilize
      </h3>

      <ul className="list-disc pl-6 mb-5 space-y-2">
        <li>Infrastructure assessment</li>
        <li>Application dependency mapping</li>
        <li>Security assessment</li>
        <li>Risk analysis</li>
      </ul>

      <h3 className="font-bold text-blue-400 mt-6 mb-3">
        Phase 2 – Standardize
      </h3>

      <ul className="list-disc pl-6 mb-5 space-y-2">
        <li>Windows Server 2022</li>
        <li>SQL Server 2022</li>
        <li>TLS 1.2+</li>
        <li>Side-by-side upgrades</li>
      </ul>

      <h3 className="font-bold text-blue-400 mt-6 mb-3">
        Phase 3 – Optimize
      </h3>

      <ul className="list-disc pl-6 mb-5 space-y-2">
        <li>Server consolidation</li>
        <li>Always On Availability Groups</li>
        <li>Performance tuning</li>
        <li>Monitoring strategy</li>
        <li>Backup modernization</li>
      </ul>

      <h3 className="font-bold text-blue-400 mt-6 mb-3">
        Phase 4 – Modernize
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>Microsoft Fabric Analytics</li>
        <li>Azure SQL Managed Instance</li>
        <li>Microsoft Purview</li>
        <li>Power BI modernization</li>
        <li>Azure OpenAI readiness</li>
        <li>Machine Learning roadmap</li>
      </ul>
    </>
  ),

  outcomes: [
    "Complete SQL Server estate assessment",
    "5-Year enterprise modernization roadmap",
    "Reduced infrastructure risk",
    "Standardized SQL Server upgrade strategy",
    "Improved security posture",
    "Defined Microsoft Fabric adoption roadmap",
    "Enterprise governance strategy with Microsoft Purview",
    "AI-ready cloud architecture",
    "Improved disaster recovery strategy",
    "Future-proof enterprise platform",
  ],

  lessonsLearned: [
    "Large enterprise environments require phased modernization.",
    "Application dependency mapping is critical.",
    "Side-by-side upgrades minimize operational risk.",
    "Governance should begin before cloud migration.",
    "Modern analytics platforms should be planned alongside infrastructure modernization.",
  ],

  futureRoadmap: [
    "Microsoft Fabric Lakehouse",
    "Microsoft Purview Governance",
    "Azure SQL Managed Instance",
    "Azure OpenAI",
    "Machine Learning",
    "Power BI Direct Lake",
    "Enterprise Data Catalog",
    "Real-Time Analytics",
  ],
};