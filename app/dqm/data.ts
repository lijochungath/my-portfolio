import type { DQMCase } from "./types";

export const dqmCases: DQMCase[] = [
  {
    id: 1,
    title: "Matter ID Duplication",
    category: "Master Data",
    project: "City of Calgary",
    domain: "Asset Management",

    summary:
      "Duplicate Matter IDs from multiple enterprise systems caused inconsistent reporting, duplicate work orders and incorrect ownership information.",

    challenge:
      "Matter records originated from SAP, GIS, CRM and legacy applications. Multiple systems generated duplicate Matter IDs during migration into the enterprise data platform.",

    rootCauses: [
      "Multiple source systems",
      "No enterprise master data",
      "Manual data entry",
      "Legacy migration",
      "No duplicate detection",
      "Different identifier formats"
    ],

    solution: [
      "Implemented enterprise duplicate detection",
      "Standardized Matter ID format",
      "Created survivorship rules",
      "Introduced validation before ingestion",
      "Automated duplicate monitoring"
    ],

    businessRules: [
      "Matter ID cannot be NULL",
      "Matter ID must be unique",
      "Matter ID must follow enterprise format",
      "Inactive Matter IDs cannot be reused",
      "Every Matter ID must belong to one asset"
    ],

    implementation: [
      "SQL duplicate validation",
      "Microsoft Fabric Notebook",
      "Dataflow Gen2",
      "Power BI quality dashboard",
      "Automated exception reporting"
    ],

    technologies: [
      "Microsoft Fabric",
      "SQL Server",
      "Power BI",
      "PySpark",
      "Azure Data Factory"
    ],

    lessonsLearned: [
      "Validate data before ingestion",
      "Business ownership is essential",
      "Automation reduces manual effort",
      "Monitoring should be continuous"
    ],

    outcomes: [
      "99.8% Matter ID accuracy",
      "Zero duplicate Matter IDs",
      "Improved reporting consistency",
      "Reduced manual corrections"
    ],

    architectureImage: "/images/matterid-framework.png",

    metrics: [
      { label: "Accuracy", value: "99.8%" },
      { label: "Duplicates Removed", value: "15,000+" },
      { label: "Validation Rules", value: "32" }
    ]
  },

  {
    id: 2,
    title: "Customer Master Matching",
    category: "Master Data",
    project: "Enterprise CRM",
    domain: "Customer Management",

    summary:
      "Duplicate customer records existed across CRM, ERP and online systems.",

    challenge:
      "The same customer appeared multiple times using different names, phone numbers and email addresses.",

    rootCauses: [
      "No Master Data Management",
      "Manual customer creation",
      "Different naming conventions"
    ],

    solution: [
      "Implemented customer matching",
      "Created survivorship rules",
      "Standardized customer records"
    ],

    businessRules: [
      "Email should be unique",
      "Phone number validation",
      "Mandatory customer name",
      "Duplicate detection"
    ],

    implementation: [
      "SQL procedures",
      "Fabric Notebook",
      "Power BI Monitoring"
    ],

    technologies: [
      "Microsoft Fabric",
      "SQL Server",
      "Power BI"
    ],

    lessonsLearned: [
      "Master Data should have a single owner",
      "Matching algorithms require business validation"
    ],

    outcomes: [
      "Reduced duplicate customers",
      "Improved customer reporting"
    ],

    metrics: [
      { label: "Duplicate Reduction", value: "96%" },
      { label: "Accuracy", value: "99%" }
    ]
  },

  {
    id: 3,
    title: "GIS Coordinate Validation",
    category: "Spatial Data",
    project: "City of Calgary",
    domain: "GIS",

    summary:
      "Invalid latitude and longitude values affected spatial analysis.",

    challenge:
      "Asset locations were imported from multiple GIS systems with inconsistent coordinate formats.",

    rootCauses: [
      "Missing coordinates",
      "Incorrect CRS",
      "Manual updates"
    ],

    solution: [
      "Coordinate validation",
      "Range validation",
      "Spatial integrity checks"
    ],

    businessRules: [
      "Latitude must be valid",
      "Longitude must be valid",
      "Coordinates cannot be NULL"
    ],

    implementation: [
      "FME validation",
      "Fabric Notebook",
      "Spatial SQL"
    ],

    technologies: [
      "FME",
      "Microsoft Fabric",
      "SQL Server"
    ],

    lessonsLearned: [
      "Always validate CRS",
      "Spatial validation should be automated"
    ],

    outcomes: [
      "Improved GIS accuracy",
      "Reliable mapping"
    ],

    metrics: [
      { label: "Spatial Accuracy", value: "99.5%" }
    ]
  },

  {
    id: 4,
    title: "Financial Reconciliation",
    category: "Finance",
    project: "MASC",
    domain: "Finance",

    summary:
      "Financial balances from multiple systems required reconciliation before reporting.",

    challenge:
      "Different financial systems produced inconsistent balances.",

    rootCauses: [
      "Timing differences",
      "Manual adjustments",
      "Missing transactions"
    ],

    solution: [
      "Automated reconciliation",
      "Exception reporting",
      "Business rule validation"
    ],

    businessRules: [
      "Debit equals Credit",
      "GL Account mandatory",
      "Posting Date validation"
    ],

    implementation: [
      "SQL procedures",
      "Fabric pipelines",
      "Power BI"
    ],

    technologies: [
      "Microsoft Fabric",
      "SQL Server",
      "Power BI"
    ],

    lessonsLearned: [
      "Automate reconciliation",
      "Daily monitoring is critical"
    ],

    outcomes: [
      "Reduced reconciliation effort",
      "Improved financial trust"
    ],

    metrics: [
      { label: "Automation", value: "85%" }
    ]
  },

  {
    id: 5,
    title: "Mandatory Field Validation",
    category: "Validation",
    project: "Enterprise Platform",
    domain: "Data Governance",

    summary:
      "Critical business attributes were missing before ingestion.",

    challenge:
      "Business users submitted incomplete records causing downstream failures.",

    rootCauses: [
      "Manual entry",
      "Missing validation",
      "Poor governance"
    ],

    solution: [
      "Mandatory field framework",
      "Pre-load validation",
      "Quality scorecards"
    ],

    businessRules: [
      "Name cannot be NULL",
      "Department mandatory",
      "Status required",
      "Created Date mandatory"
    ],

    implementation: [
      "Fabric Dataflow",
      "SQL validation",
      "Power BI dashboard"
    ],

    technologies: [
      "Microsoft Fabric",
      "SQL Server",
      "Power BI"
    ],

    lessonsLearned: [
      "Validate early",
      "Reject incomplete records"
    ],

    outcomes: [
      "Higher data completeness",
      "Fewer ETL failures"
    ],

    metrics: [
      { label: "Completeness", value: "99.6%" }
    ]
  }
];