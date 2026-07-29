import type { Project } from "../types";

const calgary: Project = {
  id: 3,
  client: "City of Calgary (Legal Department)",
  title: "Legal Data & Document Cloud Migration",
  role: "Data Engineering Lead",
  industry: "Government / Public Sector",
  duration: "12 Months",
  status: "Completed",
  businessChallenge: ["The legacy Fact table contained severely repeating MatterId anomalies", 
    "threatening reporting integrity." ,
    "There were strict data type constraints mapping legacy on-premises databases to Dynamics Dataverse", 
    "Aalongside severe API source throttling during Azure Data Factory pipeline executions.",
  ],
  solution: [
    "Engineered a SQL window function creating a composite key ranked descending to isolate Rank 1 and guarantee strict uniqueness.",
    "Architected an Azure SQL staging layer to handle all casting, format validation, and truncation rules before pushing data to Dynamics.",
    "Mitigated ADF API throttling by strategically tuning Data Integration Units (DIUs) and reducing the degree of parallel copying."
  ],
  responsibilities: [
    "Spearheaded the legacy system migration for the Legal Department into a modern, unified Microsoft cloud ecosystem.",
    "Architected a dedicated staging database environment to profile, clean, and rectify complex legacy data quality issues.",
    "Engineered robust Azure Data Factory (ADF) pipelines to seamlessly transport transformed datasets.",
    "Developed custom serverless Azure Functions to automate the extraction and metadata indexing of legal documents into SharePoint."
  ],
  businessOutcomes: [
    "Established a highly reliable, deduplicated single source of truth for legal reporting.",
    "Eliminated API throttling timeouts during batch processing.",
    "Delivered real-time operational metrics and tracking across legal document workflows via Power BI."
  ],
  technologies: ["Azure Data Factory", "Microsoft Dynamics", "Azure Functions", "SharePoint", "Azure SQL Database", "Power BI"],
  architectureHighlights: [
    "Isolated staging environments for data quality enforcement.",
    "Window function logic for early-stage deduplication.",
    "Throughput tuning via Data Integration Units (DIUs)."
  ],
  architectureImage: "/images/calgary-arc.png",
};

export default calgary;