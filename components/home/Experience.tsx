import SectionTitle from "../ui/SectionTitle";

const experiences = [
  {
    company: "Thoughtstorm",
    location: "Canada",
    role: "Lead Data & AI",
    period: "Jul 2024 – Present",
    skills: [
      "Microsoft Fabric",
      "Azure Data Factory",
      "Azure Synapse",
      "Azure Databricks",
      "Power BI",
    ],
    achievements: [
      "Lead the integration of AI into enterprise data platforms using Retrieval-Augmented Generation (RAG) and Agentic AI.",
      "Architect Microsoft Fabric solutions for unified data engineering, real-time analytics, and enterprise reporting.",
      "Build scalable Azure Data Factory ETL/ELT pipelines across cloud and on-premises environments.",
      "Led enterprise data and document migration initiatives for the City of Calgary.",
      "Designed the MASC Data Warehouse with point-in-time reporting for Accounts Payable and Accounts Receivable.",
      "Delivered SQL Server architecture assessments focusing on security, encryption, and consolidation.",
      "Develop Azure Synapse views and automate enterprise workflows using Fabric, ADF, and FME.",
    ],
  },
  {
    company: "Annalect India",
    location: "India",
    role: "Project Manager",
    period: "Mar 2023 – May 2024",
    skills: [
      "Azure Data Factory",
      "SQL Server",
      "Power BI",
      "Power Apps",
      "Power Automate",
      "JIRA",
    ],
    achievements: [
      "Led cross-functional teams delivering enterprise data warehouse solutions.",
      "Managed project scope, timelines, risks, and stakeholder communication.",
      "Implemented workflow automation using Power Apps and Power Automate, improving productivity by 30%.",
      "Delivered executive dashboards and analytics solutions using Power BI.",
    ],
  },
  {
    company: "ZAD Holding Company",
    location: "Qatar",
    role: "Senior Executive – Data Analysis Engineering",
    period: "Jun 2010 – Oct 2022",
    skills: [
      "Azure Data Factory",
      "Azure Synapse",
      "Azure SQL",
      "Python",
      "CI/CD",
      "SQL Server",
    ],
    achievements: [
      "Designed enterprise Azure Data Factory pipelines for large-scale ETL workloads.",
      "Built Azure Synapse data warehouse solutions integrating multiple business systems.",
      "Developed enterprise data architecture documentation and governance standards.",
      "Improved enterprise data quality through Python-based preprocessing and automation.",
      "Implemented CI/CD pipelines for reliable deployment of data engineering solutions.",
      "Partnered with business stakeholders to deliver data-driven decision support.",
    ],
  },
  {
    company: "QBurst Technologies",
    location: "India",
    role: "Software Engineer",
    period: "Oct 2005 – Mar 2007",
    skills: [
      ".NET",
      "C#",
      "ASP.NET",
      "ADO.NET",
      "SQL Server",
    ],
    achievements: [
      "Developed enterprise web and desktop applications using the .NET Framework.",
      "Built efficient SQL Server data access layers using ADO.NET.",
      "Provided production support and resolved critical application issues.",
      "Participated throughout the Software Development Life Cycle (SDLC).",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container py-24">
      <SectionTitle
        title="Professional Experience"
        subtitle="16+ Years of Building Enterprise Data Solutions"
      />

      <div className="relative mx-auto max-w-5xl border-l-2 border-blue-600 pl-8">
        {experiences.map((job) => (
          <div key={`${job.company}-${job.role}`} className="relative mb-16">
            <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-slate-950 bg-blue-500"></div>

            <div className="card p-8">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-bold">{job.role}</h3>

                  <p className="text-lg text-blue-400">
                    {job.company} • {job.location}
                  </p>
                </div>

                <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-300">
                  {job.period}
                </span>
              </div>

              <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-300">
                {job.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-500/40 bg-slate-800 px-3 py-1 text-sm text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}