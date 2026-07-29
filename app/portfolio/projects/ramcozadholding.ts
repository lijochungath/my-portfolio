import type { Project } from "../types";

const ramcozadholding: Project = {
  id: 4, // Adjust this ID as needed to match your sequence
  client: "Zad Holding",
  menuname: "Ramco ERP",
  category: "ERP",
  title: "Enterprise ERP Implementation & Analytics",
  role: "Lead Analytics & Reporting Developer",
  industry: "Manufacturing / FMCG",
  duration: "2 Years (2019 - 2021)",
  status: "Completed",
  
  // SECTION 1: THE PROBLEM
  businessChallenge: [
    "Enterprise data was heavily siloed across distinct departments and business units, preventing holistic organizational visibility.",
    "Lacked standardized reporting processes across multiple subsidiaries, forcing a heavy reliance on manual inter-company reconciliations.",
    "Required a unified enterprise reporting strategy capable of consolidating fragmented subsidiary data into a single, reliable source of truth."
  ],

  // SECTION 2: THE EXECUTION (Merged Solution, Responsibilities, Architecture & Tech)
  solution: [
    "Led the enterprise reporting architecture design for a large-scale Ramco ERP implementation.",
    "Engineered a centralized SQL reporting database to ingest, map, and consolidate departmental data from various Ramco modules.",
    "Developed custom temporal data models to accurately support complex historical and point-in-time reporting requirements.",
    "Architected an advanced Qlik Sense analytics layer, designing executive KPI dashboards and presenting actionable insights directly to senior stakeholders.",
    "Tech Stack Used: Ramco ERP, SQL Server, Qlik Sense, Enterprise Data Modeling."
  ],

  // SECTION 3: THE IMPACT
  businessOutcomes: [
    "Successfully standardized reporting processes and significantly reduced manual data reconciliation efforts across multiple business units.",
    "Established a robust data architecture that provided executives with accurate, consistent, and cross-subsidiary analytical capabilities.",
    "Delivered a highly structured technical data foundation that ultimately prepared the organization for its future enterprise SAP migration initiative."
  ],

  architectureImage: "/images/ramco-zad-enterprise-architecture.png",
};

export default ramcozadholding;