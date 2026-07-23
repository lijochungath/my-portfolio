import React from 'react';
import SectionTitle from "../ui/SectionTitle";

// --- DATA ---
const skillCategories = [
  {
    title: "Data Engineering & Cloud Platforms",
    description: "Architecting scalable data pipelines, modern data warehouses, and cloud migration strategies.",
    skills: [
      "Microsoft Fabric (F64)",
      "Azure Data Factory (ADF)",
      "Azure Synapse Analytics",
      "Azure Databricks",
      "Azure SQL Database",
      "Azure SQL Managed Instance",
      "Azure Functions"
    ]
  },
  {
    title: "Analytics & Business Intelligence",
    description: "Transforming raw data into interactive, actionable enterprise insights.",
    skills: [
      "Power BI",
      "SSAS (OLAP Cubes)",
      "SSIS",
      "Tabular Modeling",
      "Data Modeling",
      "Row-Level Security (RLS)",
      "KNIME"
    ]
  },
  {
    title: "Languages & Programming",
    description: "Writing robust backend logic, data transformations, and statistical analysis scripts.",
    skills: [
      "Python",
      "SQL (T-SQL)",
      "C#",
      ".NET / ASP.NET",
      "JavaScript / TypeScript",
      "JSON"
    ]
  },
  {
    title: "Automation, Tools & Methodologies",
    description: "Streamlining workflows, integrating systems, and governing project lifecycles.",
    skills: [
      "Power Automate",
      "Power Apps",
      "Jira Service Management",
      "CI/CD Pipelines",
      "Git / GitHub",
      "REST APIs",
      "Agile / DataOps"
    ]
  }
];

// --- COMPONENT ---
export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle 
          title="Technical Arsenal" 
          subtitle="Core Competencies" 
        />

        {/* CSS Grid for Skill Categories */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800/50"
            >
              <div className="mb-6 border-b border-slate-800/60 pb-6">
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {category.description}
                </p>
              </div>

              {/* Flexbox container for individual skill badges */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-blue-300 transition-colors hover:bg-blue-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}