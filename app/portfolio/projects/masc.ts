import type { Project } from "../types";

const masc: Project = {
  id: 1,
  client: "MASC (Manitoba Agricultural Services Corporation)",
   menuname: "MASC",
  category: "Data",
  title: "Enterprise Data Warehouse ",
  role: "Data Architect",
  industry: "Agriculture",
  duration: "24 Months",
  status: "Completed",
businessChallenge: [
    "Enterprise data was heavily fragmented across multiple legacy systems from different vendors, creating severe vendor lock-in.",
    "Required a centralized Data Warehouse to consolidate data and streamline enterprise reporting from all legacy sources.",
    "Needed a modernized financial system to handle complex Accounts Payable (AP) and Accounts Receivable (AR) operational requirements."
  ],
 solution: [
    "Acted as Lead Data Architect to design the end-to-end enterprise data model and consult with engineering teams on cloud infrastructure.",
    "Architected a Hybrid Medallion Architecture in Microsoft Fabric, leveraging Bronze and Silver Lakehouse layers alongside a Gold Data Warehouse.",
    "Built and integrated a modern AP/AR financial system based on Dynamics 365 Business Central, utilizing incremental loads for point-in-time accuracy.",
    "Established an Azure SQL Database repository as a fallback strategy to securely archive and retain all historical legacy data.",
    "Tech Stack Used: Microsoft Fabric, Azure SQL Database, Dynamics 365 Business Central, Data Lakehouse, ETL/ELT."
  ],
businessOutcomes: [
    "Delivered a fully-fledged enterprise database empowering the organization with robust, centralized reporting capabilities.",
    "Enabled accurate point-in-time temporal reporting for finance, including complex backdated transactional visibility.",
    "Successfully safeguarded and archived all legacy system data within a secure, queryable database.",
    "Provided flexible storage capable of handling unstructured data by leveraging the new Bronze and Silver Lakehouse architecture."
  ],

  architectureImage: "/images/masc-arc.png",
};

export default masc;