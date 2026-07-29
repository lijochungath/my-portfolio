import type { Project } from "../types";

const annalectDashboards: Project = {
  id: 7,
  client: "Annalect India",
  menuname: "Multi-Agency Dashboards",
  category: "Data",
  title: "Multi-Agency Operational Dashboards Suite",
  role: "BI Architect / Data Engineer",
  industry: "Technology / Operations",
  duration: "8 Months",
  status: "Current",
  
  // SECTION 1: THE PROBLEM
  businessChallenge: [
    "Operational data was scattered across disparate agency branches, making enterprise-wide visibility into recruitment, portfolio management, and administration highly disjointed.",
    "Lacked scalable dimensional models, causing slow reporting aggregations and hindering exploratory slice-and-dice analysis by leadership.",
    "Required rigorous role-based data privacy and governance to ensure regulatory compliance across multiple internal departments."
  ],
  
  // SECTION 2: THE EXECUTION (Merged Solution, Responsibilities, Architecture & Tech)
  solution: [
    "Designed and deployed a comprehensive suite of executive Power BI dashboards to unify recruitment, administration, and resource allocation metrics.",
    "Architected end-to-end ETL data pipelines to ingest, clean, and consolidate multi-agency data streams into a centralized repository.",
    "Engineered optimized dimensional data models designed specifically to support rapid visual aggregation and dynamic exploratory analysis.",
    "Implemented strict Row-Level Security (RLS) frameworks within Power BI to guarantee data privacy and governance.",
    "Tech Stack Used: Power BI, Data Modeling, ETL Pipelines, Row-Level Security (RLS)."
  ],
  
  // SECTION 3: THE IMPACT
  businessOutcomes: [
    "Delivered unprecedented executive visibility into operational expenses and cross-agency resource utilization.",
    "Directly empowered leadership to transition from reactive reporting to proactive, evidence-based managerial decision-making.",
    "Ensured strict data governance and compliance across the enterprise through scalable role-based access controls."
  ],

  architectureImage: "/images/dashboards-architecture.png",
};

export default annalectDashboards;