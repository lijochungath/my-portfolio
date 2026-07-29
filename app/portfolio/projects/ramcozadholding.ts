import { Project } from "../types";

const ramcozadholding: Project = {
  id: 4,
  client: "Zad Holding",
  category: "ERP",
  title: "Ramco ERP Implementation",
  role: "Lead Analytics & Reporting Developer",
  industry:
    "Manufacturing",
  duration: "2019 - 2021",
  status: "Completed",
  businessChallenge: [
    " Consolidated reporting across multiple subsidiaries.",
    " Data silo's are present Depertment and BU wise.",
    "Lack of standardized reporting processes across subsidiaries.",
    "Manual reconciliation of inter-company transactions.",
  
  ],

  solution: [
    "By using Ramco different modules to migrate all departmental data into a single platform.",
    "Single source of truth for all enterprise data, enabling accurate and consistent reporting.",
    "Engineered custom temporal data models supporting historical (point-in-time) reporting.",
    "Standardized enterprise reporting across all Zad Holding subsidiaries.",
  ],

  responsibilities: [
    "Led enterprise reporting architecture design for the Ramco ERP implementation.",
    "Developed Qlik Sense executive dashboards and analytical reports.",
    "Collaborated with finance, operations, and ERP implementation consultants.",
    "Explained the dashboards to executive stakeholders.",

  ],

  businessOutcomes: [
    "Reduced manual reconciliation activities across subsidiaries.",
    "Standardized reporting processes across multiple business units.",
    "Delivered the technical foundation for the organization's SAP migration initiative.",
    "The project was not completed on time and within budget.",
    "Consolidated reporting across all Zad Holding subsidiaries not achieved.",
    "The project failed to deliver intercompany transaction reporting."

  ],

  technologies: [
    "Ramco ERP",
    "SQL Server",
    "Qlik Sense" ],

  architectureHighlights: [
    "Enterprise Reporting Architecture",
    "SQL Reporting Database",
    "Qlik Sense Analytics Layer",
    "Cross-Company Reconciliation",
    "Executive KPI Dashboards",
    "SAP Migration Readiness",

  ],

  architectureImage: "/architecture/ramco-zad-enterprise-architecture.png",
};
export default ramcozadholding;