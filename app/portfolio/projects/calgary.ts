import type { Project } from "../types";

const calgary: Project = {
  id: 3,
  client: "City of Calgary (Legal Department)",
  menuname: "City Of Calgary",
  category: "Data",
  title: "Data and Document Migration",
  role: "Data Engineering Lead",
  industry: "Government / Public Sector",
  duration: "12 Months",
  status: "Completed",
  
  // SECTION 1: THE PROBLEM
  businessChallenge: [
    "Legacy Fact tables contained severe repeating MatterId anomalies, threatening overall reporting integrity.",
    "Faced strict data type constraints when mapping legacy on-premises databases to the target Dynamics Dataverse.",
    "Encountered severe API source throttling and timeouts during Azure Data Factory (ADF) pipeline executions."
  ],
  
  // SECTION 2: THE EXECUTION (Merged Solution, Responsibilities, Architecture & Tech)
  solution: [
    "Spearheaded the legacy system migration for the Legal Department into a modern, unified Microsoft cloud ecosystem.",
    "Architected an Azure SQL staging layer to handle all casting, format validation, and truncation rules prior to pushing data to Dynamics.",
    "Engineered a SQL window function to create a ranked composite key, isolating Rank 1 records to guarantee strict early-stage deduplication.",
    "Mitigated ADF API throttling by strategically tuning Data Integration Units (DIUs) and reducing the degree of parallel copying.",
    "Developed custom serverless Azure Functions to automate the extraction and metadata indexing of legal documents directly into SharePoint.",
    "Tech Stack Used: Azure Data Factory, Microsoft Dynamics, Azure Functions, SharePoint, Azure SQL Database, Power BI."
  ],
  
  // SECTION 3: THE IMPACT
  businessOutcomes: [
    "Established a highly reliable, deduplicated single source of truth for all enterprise legal reporting.",
    "Eliminated API throttling timeouts during heavy batch processing and full historical loads.",
    "Delivered real-time operational metrics and tracking across complex legal document workflows via Power BI."
  ],

  architectureImage: "/images/calgary-arc.png",
};

export default calgary;