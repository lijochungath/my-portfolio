import type { ArchitecturePattern } from "./types";

export const architecturePatterns: ArchitecturePattern[] = [
  {
    id: 1,
    title: "Microsoft Fabric Medallion Architecture",
    category: "Data Platform",
    project: "City of Calgary",
    domain: "Enterprise Asset Management",

    summary:
      "Designed a Medallion Architecture using Microsoft Fabric to standardize, validate and publish enterprise data for reporting and analytics.",

    businessProblem:
      "Data was collected from multiple enterprise systems including GIS, SAP and legacy applications, resulting in duplicate records, inconsistent formats and unreliable reporting.",

    whyThisPattern: [
      "Supports scalable data processing",
      "Separates raw and curated data",
      "Improves governance",
      "Simplifies troubleshooting",
      "Reusable across projects"
    ],

    components: [
      "Bronze Layer",
      "Silver Layer",
      "Gold Layer",
      "Lakehouse",
      "Notebook",
      "Pipeline",
      "Power BI Semantic Model"
    ],

    implementation: [
      "Ingest source data into Bronze",
      "Cleanse and validate in Silver",
      "Apply business transformations",
      "Publish curated Gold tables",
      "Expose semantic model to Power BI"
    ],

    designDecisions: [
      "Use Lakehouse instead of traditional warehouse",
      "Separate validation from transformation",
      "Centralize business rules",
      "Automate incremental refresh"
    ],

    advantages: [
      "Scalable",
      "Easy maintenance",
      "Supports governance",
      "Improved data quality"
    ],

    disadvantages: [
      "Higher storage usage",
      "More initial setup",
      "Additional transformation layers"
    ],

    technologies: [
      "Microsoft Fabric",
      "Lakehouse",
      "SQL",
      "PySpark",
      "Power BI"
    ],

    lessonsLearned: [
      "Validate data before transformation",
      "Keep Bronze immutable",
      "Gold should contain business-ready data"
    ],

    businessValue: [
      "Single source of truth",
      "99.8% reporting accuracy",
      "Reduced manual effort"
    ],

    architectureImage: "/architecture/medallion.png",

    metrics: [
      { label: "Accuracy", value: "99.8%" },
      { label: "Automation", value: "80%" },
      { label: "Layers", value: "3" }
    ]
  },

  {
    id: 2,
    title: "Incremental Data Loading",
    category: "Data Integration",
    project: "Municipal Data Platform",
    domain: "ETL",

    summary:
      "Designed an incremental loading framework to reduce processing time and improve pipeline efficiency.",

    businessProblem:
      "Daily full data loads increased execution time and infrastructure costs.",

    whyThisPattern: [
      "Process only changed records",
      "Reduce execution time",
      "Lower compute cost"
    ],

    components: [
      "Watermark Table",
      "Pipeline",
      "SQL Stored Procedure",
      "Lakehouse"
    ],

    implementation: [
      "Track last successful load",
      "Read changed records",
      "Merge updates",
      "Audit execution"
    ],

    designDecisions: [
      "Use watermark instead of full reload",
      "Maintain audit history"
    ],

    advantages: [
      "Fast execution",
      "Reduced compute",
      "Scalable"
    ],

    disadvantages: [
      "Requires change tracking",
      "More monitoring"
    ],

    technologies: [
      "Microsoft Fabric",
      "SQL Server",
      "Pipeline"
    ],

    lessonsLearned: [
      "Maintain audit tables",
      "Handle late arriving data"
    ],

    businessValue: [
      "70% faster pipelines",
      "Reduced execution cost"
    ]
  },

  {
    id: 3,
    title: "Enterprise Data Validation Framework",
    category: "Data Quality",
    project: "City of Calgary",
    domain: "Data Governance",

    summary:
      "Centralized framework for validating enterprise data before publishing to downstream systems.",

    businessProblem:
      "Different applications implemented inconsistent validation rules.",

    whyThisPattern: [
      "Reusable",
      "Consistent validation",
      "Supports governance"
    ],

    components: [
      "Validation Rules",
      "Error Table",
      "Audit Log",
      "Quality Dashboard"
    ],

    implementation: [
      "Run validation rules",
      "Capture failed records",
      "Generate quality reports"
    ],

    designDecisions: [
      "Centralize validation logic",
      "Separate business and technical rules"
    ],

    advantages: [
      "Reusable",
      "Improved quality",
      "Consistent reporting"
    ],

    disadvantages: [
      "Requires governance",
      "Business rule maintenance"
    ],

    technologies: [
      "SQL",
      "Microsoft Fabric",
      "Power BI"
    ],

    lessonsLearned: [
      "Business rules evolve",
      "Automation is essential"
    ],

    businessValue: [
      "Reduced production issues",
      "Improved trust in data"
    ]
  },

  {
    id: 4,
    title: "Power BI Semantic Model",
    category: "Reporting",
    project: "Executive Reporting",
    domain: "Analytics",

    summary:
      "Created a reusable semantic model for enterprise dashboards.",

    businessProblem:
      "Different reports calculated KPIs differently.",

    whyThisPattern: [
      "Reusable KPIs",
      "Centralized calculations",
      "Consistent reporting"
    ],

    components: [
      "Fact Tables",
      "Dimensions",
      "Measures",
      "Relationships"
    ],

    implementation: [
      "Create star schema",
      "Develop DAX measures",
      "Publish semantic model"
    ],

    designDecisions: [
      "Use star schema",
      "Centralize business calculations"
    ],

    advantages: [
      "Fast reporting",
      "Reusable",
      "Simple maintenance"
    ],

    disadvantages: [
      "Requires modelling expertise"
    ],

    technologies: [
      "Power BI",
      "DAX",
      "SQL"
    ],

    lessonsLearned: [
      "Good modelling improves performance"
    ],

    businessValue: [
      "Consistent executive reporting"
    ]
  },

  {
    id: 5,
    title: "Metadata-Driven ETL Framework",
    category: "Data Integration",
    project: "Enterprise Data Platform",
    domain: "Automation",

    summary:
      "Developed a metadata-driven ETL framework to reduce repetitive pipeline development.",

    businessProblem:
      "Each new pipeline required manual coding and deployment.",

    whyThisPattern: [
      "Reusable",
      "Configuration driven",
      "Rapid development"
    ],

    components: [
      "Metadata Tables",
      "Pipeline",
      "Configuration",
      "Audit Logs"
    ],

    implementation: [
      "Read metadata",
      "Generate pipeline logic",
      "Execute dynamically"
    ],

    designDecisions: [
      "Separate configuration from code",
      "Support multiple source systems"
    ],

    advantages: [
      "Rapid development",
      "Reusable",
      "Easy maintenance"
    ],

    disadvantages: [
      "More complex initial design"
    ],

    technologies: [
      "Microsoft Fabric",
      "SQL Server",
      "Power BI"
    ],

    lessonsLearned: [
      "Invest in reusable frameworks early"
    ],

    businessValue: [
      "Reduced development effort",
      "Standardized ETL processes"
    ]
  }
];