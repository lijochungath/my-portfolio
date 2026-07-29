// data/projects.ts

export interface Project {
  id: number;
  title: string;
  client: string;
  company: string;
  role: string;
  industry: string;
  duration: string;
  status: string;

  businessChallenge: string;

  solution: string[];

  businessOutcomes: string[];

  technologies: string[];

  architectureImage: string;

  architectureHighlights: string[];

  responsibilities: string[];

  projectType: string;

  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,

    title: "Legal Data & Document Cloud Migration",

    client: "City of Calgary",

    company: "Thoughtstorm",

    role: "Enterprise Solution Architect",

    industry: "Government",

    duration: "12 Months",

    status: "Completed",

    projectType: "Cloud Migration",

    featured: true,

    businessChallenge:
      "Modernize the Legal Department by migrating legacy applications and document repositories into a secure Microsoft cloud platform while improving governance and reporting.",

    solution: [
      "Designed Azure landing architecture.",
      "Created Azure SQL staging environment.",
      "Built Azure Data Factory migration pipelines.",
      "Developed Azure Functions for document processing.",
      "Integrated Microsoft Dynamics.",
      "Migrated legal documents into SharePoint.",
      "Implemented enterprise Power BI reporting."
    ],

    architectureHighlights: [
      "Azure Landing Zone",
      "Azure SQL Staging",
      "Azure Data Factory",
      "Azure Functions",
      "Microsoft Dynamics",
      "SharePoint Online",
      "Power BI"
    ],

    responsibilities: [
      "Enterprise Solution Architecture",
      "Cloud Migration Strategy",
      "Data Migration Design",
      "Azure Integration",
      "Technical Leadership",
      "Solution Governance"
    ],

    businessOutcomes: [
      "Modernized legacy platform",
      "Improved enterprise data quality",
      "Automated document migration",
      "Centralized legal records",
      "Real-time reporting",
      "Reduced operational risk"
    ],

    technologies: [
      "Azure Data Factory",
      "Azure Functions",
      "Azure SQL Database",
      "Microsoft Dynamics",
      "SharePoint",
      "Power BI"
    ],

    architectureImage: "/architecture/calgary.png"
  },

  {
    id: 2,

    title: "Enterprise Data Warehouse Modernization",

    client: "MASC",

    company: "Thoughtstorm",

    role: "Enterprise Data Architect",

    industry: "Government",

    duration: "24 Months",

    status: "Completed",

    projectType: "Data Platform",

    featured: true,

    businessChallenge:
      "Modernize enterprise reporting by replacing legacy Oracle and IBM DB2 data warehouses with Microsoft Fabric.",

    solution: [
      "Designed Azure SQL staging layer.",
      "Implemented Azure Data Factory pipelines.",
      "Developed Databricks transformations.",
      "Migrated Synapse workloads to Microsoft Fabric.",
      "Published enterprise Power BI semantic models."
    ],

    architectureHighlights: [
      "Oracle",
      "IBM DB2",
      "Azure SQL",
      "Azure Data Factory",
      "Azure Databricks",
      "Microsoft Fabric",
      "Power BI"
    ],

    responsibilities: [
      "Enterprise Architecture",
      "Data Warehouse Design",
      "Fabric Architecture",
      "Migration Planning",
      "Performance Optimization"
    ],

    businessOutcomes: [
      "Unified enterprise analytics",
      "Improved query performance",
      "Reduced infrastructure costs",
      "Modern reporting platform",
      "Scalable architecture"
    ],

    technologies: [
      "Microsoft Fabric",
      "Azure Synapse",
      "Azure SQL",
      "Azure Data Factory",
      "Azure Databricks",
      "Power BI",
      "Oracle",
      "IBM DB2"
    ],

    architectureImage: "/architecture/masc.png"
  }
];