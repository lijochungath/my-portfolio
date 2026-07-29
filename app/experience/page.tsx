"use client";

import React from 'react';

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

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-slate-950 py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(37,99,235,0.1),rgba(2,6,23,1))]"></div>

      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase drop-shadow-sm">
            Career Journey
          </h2>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Professional Experience
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            16+ Years of Building Enterprise Data Solutions
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-600/50 pl-8 sm:pl-12 ml-4 sm:ml-0">
          {experiences.map((job) => (
            <div key={`${job.company}-${job.role}`} className="relative mb-16 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[43px] sm:-left-[59px] top-2 h-5 w-5 rounded-full border-4 border-slate-950 bg-blue-500 group-hover:bg-blue-400 transition-colors duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

              {/* Experience Card */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-xl rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {job.role}
                    </h3>
                    <p className="text-lg text-slate-300 mt-1 font-medium">
                      {job.company} <span className="text-slate-500 px-2">•</span> {job.location}
                    </p>
                  </div>

                  <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 border border-blue-500/20">
                    {job.period}
                  </span>
                </div>

                {/* Achievements List */}
                <ul className="mt-8 space-y-3 text-slate-300">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1.5 shrink-0">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Badges */}
                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-slate-700/50">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-950 border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}