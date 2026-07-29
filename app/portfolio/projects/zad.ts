import type { Project } from "../types";

const zad: Project = {
  id: 4,
  client: "Zad Holding",
  menuname: "Zad Holding",
  category: "Data",
  title: "Enterprise Big Data Architecture & Analytics",
  role: "Lead Data Engineer",
  industry: "FMCG / Manufacturing",
  duration: "36 Months",
  status: "Completed",
  
  // SECTION 1: THE PROBLEM
  businessChallenge: [
    "Enterprise data was heavily siloed across sales, production, finance, and operations domains within a large-scale food manufacturing environment.",
    "Required a centralized big data architecture capable of processing complex, high-volume datasets to deliver daily automated reporting.",
    "Faced significant bottlenecks in capturing fresh, real-time operational data directly from the factory floor into centralized analytical repositories."
  ],
  
  // SECTION 2: THE EXECUTION (Merged Solution, Responsibilities, Architecture & Tech)
  solution: [
    "Led a 5-person engineering team to design, build, and deploy an end-to-end enterprise big data architecture.",
    "Engineered complex ETL/ELT pipelines utilizing Azure Databricks, SSIS, and KNIME, supported by highly optimized SQL stored procedures.",
    "Developed statistical models and data transformation scripts .",
    "Formulated custom Power Apps interfaces and automated workflows to stream live operational data directly into the central reporting layer.",
    "Tech Stack Used:SSAS OLAP Cubes, SSIS, KNIME, Power BI, Power Apps, SQL Server."
  ],
  
  // SECTION 3: THE IMPACT
  businessOutcomes: [
    "Successfully established a unified data foundation, empowering executive stakeholders with comprehensive cross-domain analytics.",
    "Implemented SSAS multi-dimensional cubes and configured Power BI enterprise gateways with incremental refresh patterns, achieving fully automated daily reporting.",
    "Eliminated manual data entry latency on the factory floor by deploying real-time Power Apps integration.",
    "Extracted deep, actionable financial insights through advanced statistical modeling, driving strategic operational improvements."
  ],

  architectureImage: "/images/zbdm-architecture.png",
};

export default zad;