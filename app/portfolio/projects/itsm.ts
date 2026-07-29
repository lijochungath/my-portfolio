import type { Project } from "../types";

const itsm: Project = {
  id: 6,
  client: "Annalect India",
    menuname: "ITSM",
  category: "Data",
  title: "ITSM Analytics & Jira Power BI Integration",
  role: "Data Engineer / BI Architect",
  industry: "Technology / Operations",
  duration: "3 Months",
  status: "Completed",
  
  // SECTION 1: THE PROBLEM
  businessChallenge: [
    "IT leadership lacked clear, actionable visibility into Jira Service Management ticket lifecycles, operational efficiency, and agent performance.",
    "Required a highly customized and cost-effective analytics solution without purchasing expensive, out-of-the-box Jira reporting plugins.",
    "Raw incident data was trapped in heavily nested JSON payloads within REST APIs, making direct analytical querying and SLA tracking nearly impossible."
  ],
  
  // SECTION 2: THE EXECUTION (Merged Solution, Responsibilities, Architecture & Tech)
  solution: [
    "Architected a custom, cost-effective ITSM analytics solution integrating Jira Service Management directly with Power BI reporting tools.",
    "Constructed automated data extraction pipelines utilizing Jira REST APIs and Power Automate to reliably ingest ticket lifecycles and service metrics.",
    "Engineered robust data transformations to normalize raw JSON payload data, building custom tabular models specifically designed to track SLAs and incident trends.",
    "Tech Stack Used: Jira REST APIs, Power BI, Power Automate, JSON Parsing, Tabular Data Modeling."
  ],
  
  // SECTION 3: THE IMPACT
  businessOutcomes: [
    "Delivered interactive Power BI dashboards, granting leadership immediate, actionable insights into IT operational efficiency.",
    "Streamlined administrative oversight by establishing automated data refresh cycles and rigorous security-mapped reporting views.",
    "Significantly optimized reporting costs by leveraging existing Power Platform infrastructure instead of acquiring third-party ITSM analytics add-ons."
  ],

  architectureImage: "/images/itsm-jira-architecture.png",
};

export default itsm;