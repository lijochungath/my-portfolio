import type { Project } from "../types";

const niagara: Project = {
  id: 2,
  client: "Niagara Region",
  menuname: "Miagara Region",
  category: "Data",
  title: "Enterprise Cloud Migration Roadmap",
  role: "Enterprise Architect",
  industry: "Government / Public Sector",
  duration: "16 Months",
  status: "Current",
  
  // SECTION 1: THE PROBLEM
  businessChallenge: [
    "Tasked with assessing a highly fragmented, undocumented legacy estate comprising 60 servers and over 1,000 databases.",
    "Automated discovery tools were strictly blocked due to rigorous internal PII data security and privacy policies.",
    "Critical applications were tightly coupled to unsupported legacy SQL Server instances with rigid uptime dependencies."
  ],
  
  // SECTION 2: THE EXECUTION (Merged Solution, Responsibilities, Architecture & Tech)
  solution: [
    "Acted as Lead Enterprise Architect to conduct an extensive technical assessment and author strategic target-state architecture blueprints.",
    "Pivoted to a highly secure, manual reverse-engineering framework to safely map complex application dependencies, workloads, and schema compatibility.",
    "Introduced a Four-Pillar architectural execution methodology (Stabilize -> Standardize -> Optimize -> Modernize) to evaluate cloud migration feasibility.",
    "Mandated a strict Side-by-Side Rebuild and Migration modeling strategy for production upgrades to guarantee zero-risk rollback capabilities.",
    "Target Tech Stack & Platforms: Azure SQL Managed Instance, Azure SQL Database, Microsoft Fabric, Legacy SQL Server."
  ],
  
  // SECTION 3: THE IMPACT
  businessOutcomes: [
    "Designed a roadmap to eliminate unsupported legacy platforms, significantly reducing enterprise security vulnerabilities.",
    "Established a highly actionable, secure cloud migration blueprint fully aligned with strict government data privacy regulations.",
    "Paved the way for operational consistency through standardized patching, security configurations, and audit-ready governance."
  ],

  architectureImage: "/images/niagara-arc.png",
};

export default niagara;