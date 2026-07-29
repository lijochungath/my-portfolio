import type { Project } from "../types";

const annalect: Project = {
  id: 5,
  client: "Annalect India",
  menuname: "Resource Allocation System",
  category: "Data",
  title: "Ticketing & Resource Allocation System",
  role: "Platform Architect",
  industry: "Operations",
  duration: "3 Months",
  status: "Current",
  
  // SECTION 1: THE PROBLEM
  businessChallenge: [
    "Internal operational workflows and resource approvals were disjointed, relying on manual requests that hindered cross-departmental coordination.",
    "Lacked a centralized tracking system, making it difficult to monitor ticketing queues, isolate process bottlenecks, and measure actual team resource utilization.",
    "Required a highly accessible, low-friction application that employees could adopt instantly for submitting requests."
  ],
  
  // SECTION 2: THE EXECUTION (Merged Solution, Responsibilities, Architecture & Tech)
  solution: [
    "Architected and deployed a unified enterprise ticketing and resource allocation system leveraging the Microsoft Power Platform ecosystem.",
    "Built intuitive, front-end canvas interfaces using Power Apps to enable seamless ticket creation and resource request submissions.",
    "Engineered complex automated routing rules and multi-tier approval pipelines utilizing Power Automate to eliminate manual administrative overhead.",
    "Integrated the underlying SQL Server transactional data stores with Power BI to create live operational dashboards.",
    "Tech Stack Used: Power Apps, Power Automate, Power BI, Power Platform, SQL Server."
  ],
  
  // SECTION 3: THE IMPACT
  businessOutcomes: [
    "Significantly accelerated resolution timelines by replacing manual routing with automated notifications and real-time status tracking.",
    "Empowered leadership with full transparency into team resource utilization and ticketing bottlenecks via embedded Power BI analytics.",
    "Dramatically improved cross-team coordination and administrative efficiency across the enterprise."
  ],

  architectureImage: "/images/ticketing-architecture.png",
};

export default annalect;