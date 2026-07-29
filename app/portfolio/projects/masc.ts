import type { Project } from "../types";

const masc: Project = {
  id: 1,
  client: "Manitoba Agricultural Services Corporation (MASC)",
  title: "Enterprise Data Warehouse Modernization",
  role: "Senior Data Architect",
  industry: "Agriculture / Finance",
  duration: "24 Months",
  status: "current",
  businessChallenge:[ "Financial and operational data was heavily fragmented across legacy systems",
    "Faced strict string limitations within target databases and needed to manage high-volume historical loads", 
    "alongside daily incremental updates without losing referential integrity.",],
  solution: [
    "Implemented a centralized dimension table using structural dummy records to bridge referential gaps without losing legacy transactional data.",
    "Architected a Bronze-Silver-Gold pipeline framework that applied controlled text truncation strategies during transformation.",
    "Designed a dynamic Watermark Table mechanism using lastModifiedDateTime to accurately orchestrate incremental data loads."
  ],
  responsibilities: [
    "Architected and delivered an end-to-end modern data warehouse platform migrating data from heterogeneous sources like Oracle and IBM DB2.",
    "Designed an Azure SQL staging layer for secure ingestion and consolidation.",
    "Built scalable ETL/ELT pipelines using Azure Data Factory and Databricks.",
    "Evolved the data warehouse foundation from Azure Synapse Analytics to a high-capacity Microsoft Fabric (F64) Lakehouse architecture."
  ],
  businessOutcomes: [
    "Achieved a single source of truth for finance and operational reporting across the enterprise.",
    "Eliminated massive data movement and duplication by utilizing Microsoft Fabric's OneLake.",
    "Reduced reporting latency to near-zero by transitioning Power BI to Direct Lake mode on Delta Parquet files."
  ],
  technologies: ["Microsoft Fabric (F64)", "Azure Synapse Analytics", "Azure Data Factory", "Azure Databricks", "Azure SQL DB", "Power BI", "Oracle", "IBM DB2"],
  architectureHighlights: [
    "Medallion data architecture (Bronze, Silver, Gold).",
    "Fabric OneLake unified storage integration.",
    "Direct Lake semantic reporting models."
  ],
  architectureImage: "/images/masc-arc.png",
};

export default masc;