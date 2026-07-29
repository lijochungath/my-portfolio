import type { Project } from "../types";

const zpi: Project = {
  id: 8,
  client: "Zad Holding (Qatar Flour Mills)",
  menuname: "Performance Index Engine",
  category: "Data",
  title: "ZPI Multi-Company Performance Index Engine",
  role: "Engineering Lead / Architect",
  industry: "Manufacturing / FMCG",
  duration: "3 Years (2015 – 2018)",
  status: "Completed",
  
  // SECTION 1: THE PROBLEM
  businessChallenge: [
    "Operating companies across the holding group lacked a standardized method to capture, aggregate, and report crucial performance metrics.",
    "Senior management required a secure, multi-tenant platform to ingest periodic KPIs from diverse, decentralized divisions.",
    "Manual metric reporting lacked rigorous data governance, resulting in validation bottlenecks prior to executive review."
  ],
  
  // SECTION 2: THE EXECUTION (Merged Solution, Responsibilities, Architecture & Tech)
  solution: [
    "Directed a 6-person engineering team to architect, build, and deploy a custom multi-tenant KPI capture and analytics platform.",
    "Engineered secure, custom data-entry web interfaces using C# and ASP.NET to seamlessly ingest divisional performance metrics into a centralized repository.",
    "Designed robust SSIS ETL pipelines and SSAS OLAP cubes to aggregate cross-company data sources into standardized, governable performance benchmarks.",
    "Enforced rigorous data governance protocols within the application layer to automatically validate incoming metrics before publishing reporting suites.",
    "Tech Stack Used: C#, ASP.NET, MS SQL Server, SSIS, SSAS OLAP Cubes, Power BI."
  ],
  
  // SECTION 3: THE IMPACT
  businessOutcomes: [
    "Built and delivered interactive Power BI executive dashboards, empowering group-level leadership to evaluate division-wise growth and operational efficiency instantly.",
    "Ensured 100% data validity and standardized benchmarking across the enterprise through strict front-end governance protocols.",
    "Successfully scaled and maintained the custom platform to support nearly a decade of continuous enterprise performance tracking."
  ],

  architectureImage: "/images/zpi-architecture.png",
};

export default zpi;