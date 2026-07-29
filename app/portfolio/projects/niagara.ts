import type { Project } from "../types";

const niagara: Project = {
  id: 2,
  client: "Niagara Region",
  title: "Enterprise Cloud Migration",
  role: "Enterprise Architect",
  industry: "Government / Public Sector",
  duration: "16 Months",
  status: "current",
  businessChallenge: [
    "Tasked with assessing a highly fragmented, undocumented legacy estate of 60 servers and over 1,000 databases.",
     "Automated discovery tools were blocked due to strict PII security policies."
     ,"Critical applications were tightly coupled to unsupported legacy SQL Server instances with strict uptime dependencies.",
  ],
  solution: [
    "Pivoted to a highly secure, manual reverse-engineering assessment framework to map legacy dependencies safely.",
    "Introduced a phased architectural lifecycle methodology: Stabilize -> Standardize -> Optimize -> Modernize.",
    "Mandated a strict Side-by-Side Rebuild and Migration model for production upgrades to guarantee zero-risk rollback capabilities."
  ],
  responsibilities: [
    "Conducted an extensive technical assessment of the legacy SQL Server infrastructure.",
    "Analyzed complex application dependencies, database workloads, and schema compatibility.",
    "Evaluated migration feasibility across Azure SQL Managed Instance, Azure SQL Database, and Microsoft Fabric.",
    "Authored strategic architecture blueprints detailing target state topologies and execution schedules."
  ],
  businessOutcomes: [
    "Eliminated unsupported legacy platforms and significantly reduced security vulnerabilities.",
    "Established a highly actionable, secure cloud migration roadmap that aligned with strict data privacy regulations.",
    "Achieved operational consistency via standardized patching, security configurations, and audit-ready governance."
  ],
  technologies: ["Azure SQL Managed Instance", "Azure SQL Database", "Microsoft Fabric", "SQL Server"],
  architectureHighlights: [
    "Four-Pillar execution framework.",
    "Manual reverse-engineering mapping.",
    "Side-by-side migration modeling."
  ],
  architectureImage: "/images/niagara-arc.png",
};

export default niagara;