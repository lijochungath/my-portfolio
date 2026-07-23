"use client";

import React, { useState } from "react";

interface Contact {
  id: string;
  title: string;
  client: string;
  duration: string;
  excerpt: string;
  fullContent: React.ReactNode;
}

const caseStudiesData: Contact[] = [
  {
    id: "niagara",
    title: "5-Year Strategic Roadmap (Database & Infrastructure)",
    client: "Niagara Region (Regional Municipality of Niagara)",
    duration: "16 Months",
    excerpt:
      "A comprehensive current state assessment and 5-year strategic roadmap for an enterprise SQL Server and database landscape to mitigate risk and optimize performance.",
    fullContent: (
      <div className="space-y-6 text-gray-300">
        <div>
          <h4 className="text-xl font-semibold text-white">1. Client Overview & Project Background</h4>
          <p className="mt-2 text-sm leading-relaxed">
            The Niagara Region engaged Thoughtstorm INC to perform a comprehensive current state assessment and formulate a 5-year strategic roadmap for its enterprise SQL Server and database landscape[cite: 1]. The primary objectives of the engagement were to stabilize and upgrade legacy systems within Year 1, optimize platform performance, availability, and security, and align the data platform with long-term cloud and analytics strategies[cite: 3].
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white">2. Current State Assessment & Key Challenges</h4>
          <p className="mt-2 text-sm leading-relaxed">
            The scoped environment comprises an enterprise-scale infrastructure consisting of 53 Windows Server VMs, 678 Total SQL Server Instances / Databases, and a 24-hour database backup cadence[cite: 4].
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-2">
            <li><strong>Legacy Version Concentration:</strong> SQL Server 2016/2014 accounts for a major portion of the estate (258 instances), introducing significant lifecycle, security, and operational risks[cite: 5].</li>
            <li><strong>Patch and Version Drift:</strong> Patch and cumulative update (CU) levels are not consistently standardized across all servers and instances[cite: 7].</li>
            <li><strong>Limited High Availability (HA):</strong> The environment predominantly relies on backup-and-restore recovery (via Veeam) rather than active SQL-level High Availability configurations, increasing downtime risk[cite: 8].</li>
            <li><strong>Tight Application Coupling:</strong> A diverse portfolio of COTS and custom-built applications exhibits tight coupling with SQL databases, raising migration and testing complexity[cite: 9].</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white">3. Modernization Approach & Framework</h4>
          <p className="mt-2 text-sm leading-relaxed">
            Thoughtstorm INC established a structured lifecycle model designed to minimize risk before undertaking architectural transformation: <strong>Stabilize &rarr; Standardize &rarr; Optimize &rarr; Modernize</strong>[cite: 10].
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-2">
            <li><strong>Target Baseline Standards:</strong> Windows Server 2022/2025 and SQL Server 2022[cite: 12].</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white">4. Phased Implementation Roadmap</h4>
          <p className="mt-2 font-medium text-white">Phase 1: Upgrade & Standardization (Year 1)</p>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-2">
            <li>Upgrade Windows Server hosts and migrate SQL Server legacy instances to SQL Server 2022/2025[cite: 15].</li>
            <li>Enforce security baselines, including TLS 1.2+ connectivity and cumulative update alignment[cite: 16].</li>
          </ul>
          
          <p className="mt-4 font-medium text-white">Phase 2: Hybrid Optimization & Platform Alignment (Waves 1–3)</p>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-2">
            <li>Align analytics and reporting workloads with existing Microsoft Fabric capacity[cite: 18].</li>
            <li>Evaluate application database optimization and selective migration to Azure[cite: 19].</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white">5. Governance, Data Integration, and AI Readiness</h4>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-2">
            <li><strong>Microsoft Purview Integration:</strong> Integrated across the data ecosystem to establish centralized governance and metadata cataloging[cite: 21].</li>
            <li><strong>AI Readiness Pathway:</strong> Built progressively through Foundation (Phase 1), Governance (Phase 2), and AI Enablement (Phase 3) using Azure-native services[cite: 22].</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white">6. Program Outcomes & Business Benefits</h4>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-2">
            <li><strong>Lifecycle Risk Mitigation:</strong> Elimination of unsupported legacy platforms and reduction of security vulnerabilities[cite: 25].</li>
            <li><strong>Operational Consistency:</strong> Standardized patching, security configurations, and audit-ready governance controls[cite: 26].</li>
            <li><strong>Enhanced Resilience:</strong> Improved backup verification, disaster recovery preparedness, and tiered high-availability adoption[cite: 27].</li>
            <li><strong>Hybrid & Future-Ready Scalability:</strong> An "On-Premises first, cloud-selective" model aligning infrastructure with long-term analytics goals[cite: 28].</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "masc",
    title: "Architecting a Modern Data Ecosystem",
    client: "Manitoba Agricultural Services Corporation (MASC)",
    duration: "24 Months",
    excerpt:
      "An end-to-end modernization of an enterprise data warehouse, transitioning from legacy fragmented systems (AS400, Great Plains) to a Microsoft Fabric Lakehouse.",
    fullContent: (
      <div className="space-y-6 text-gray-300">
        <div>
          <h4 className="text-xl font-semibold text-white">1. Client Overview</h4>
          <p className="mt-2 text-sm leading-relaxed">
            Manitoba Agricultural Services Corporation (MASC) is a provincial Crown corporation dedicated to supporting the sustainability and development of agriculture and the rural economy in Manitoba[cite: 522]. Managing well over a billion dollars in insurance coverage and a massive loan portfolio, MASC requires highly accurate, timely, and secure financial data to support its operations and the province's farmers[cite: 524].
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white">2. The Business Challenge: Fragmented Agricultural Financials</h4>
          <p className="mt-2 text-sm leading-relaxed">
            MASC's financial and operational data was heavily fragmented across legacy on-premises systems and newer cloud deployments, creating significant hurdles for comprehensive reporting, audit reconciliation, and compliance[cite: 525]. The data landscape included:
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-2">
            <li><strong>AS400 (DB2/400):</strong> Storing legacy operational data across schemas like DATALIB1 and DATALIB2[cite: 526].</li>
            <li><strong>Great Plains (GP):</strong> An on-premises SQL Server housing historical General Ledger, Payables, Receivables, and Budgets[cite: 527].</li>
            <li><strong>Dynamics 365 Business Central (BC):</strong> The modern cloud ERP handling current Vendors, Customers, Ledger Entries, and Tax Slips[cite: 528].</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white">3. Solution Architecture: A Two-Phased Modernization Approach</h4>
          
          <p className="mt-4 font-medium text-white">Phase 1: The Azure Synapse Analytics Foundation</p>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-2">
            <li><strong>Orchestration & Ingestion:</strong> Azure Data Factory (ADF) pipelines were engineered to extract data from AS400, GP, and BC[cite: 532].</li>
            <li><strong>Staging Layer (Azure SQL):</strong> Dedicated Azure SQL Staging databases were deployed to handle raw data ingestion, supporting idempotency and reprocessing[cite: 533].</li>
            <li><strong>Synapse Bronze Layer:</strong> Stored cleansed, source-granular data mapped to dedicated schemas[cite: 536].</li>
            <li><strong>Synapse Gold Layer:</strong> Contained business-aligned Facts and Dimensions[cite: 537].</li>
          </ul>

          <p className="mt-4 font-medium text-white">Phase 2: Evolution to Microsoft Fabric & OneLake</p>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-2">
            <li><strong>Unified Storage:</strong> The disparate Azure SQL staging databases and Synapse dedicated pools were consolidated into OneLake[cite: 540].</li>
            <li><strong>Direct Ingestion & Compute Separation:</strong> Business Central data pipelines were refactored to land data directly into the Fabric Bronze Lakehouse[cite: 541].</li>
            <li><strong>Direct Lake Mode:</strong> The Gold layer schemas were converted into Delta tables, enabling Power BI to query the data natively via Direct Lake mode[cite: 543].</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white">4. Deep Dive: Technical Implementation & Data Flow</h4>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-2">
            <li><strong>AS400 Historical Segregation:</strong> Extraction rules were applied to split data based on historical boundaries[cite: 544].</li>
            <li><strong>Business Central Incremental Loads:</strong> Pipelines utilized a watermark column (lastModifiedDateTime) for incremental loading of BC tables, ensuring point-in-time consistency[cite: 545].</li>
            <li><strong>Security & Governance:</strong> Access control was strictly defined, providing IT and Data Engineering exclusive write access to staging, while granting business users read-only access to governed layers[cite: 546].</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white">5. Business Outcomes & Future Readiness</h4>
          <p className="mt-2 text-sm leading-relaxed">
            By unifying the AS400, Great Plains, and Business Central data into a cohesive Microsoft Fabric Lakehouse, MASC successfully achieved a single source of truth for their finance and operational reporting[cite: 548]. The architecture supports idempotent loads, extensive error handling, and pipeline retries, ensuring high data reliability[cite: 549]. Furthermore, this extensible design positions MASC to easily onboard additional APIs, flat files, or new CRM modules with minimal architectural rework[cite: 550].
          </p>
        </div>
      </div>
    ),
  },
];

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Enterprise Case Studies
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Deep-dive explorations of complex architectural challenges, end-to-end execution strategies, and measured business impact.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-sm transition-all hover:border-gray-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                <span className="mt-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 sm:mt-0">
                  {study.duration}
                </span>
              </div>
              
              <p className="mb-6 text-sm font-semibold text-blue-500 uppercase tracking-wide">
                {study.client}
              </p>

              {/* Conditional Content Rendering */}
              <div className="transition-all duration-500 ease-in-out">
                {expandedId === study.id ? (
                  <div className="mt-4 border-t border-gray-800 pt-6">
                    {study.fullContent}
                  </div>
                ) : (
                  <p className="text-gray-400 text-base leading-relaxed">
                    {study.excerpt}
                  </p>
                )}
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => toggleExpand(study.id)}
                className="mt-8 flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-blue-400 focus:outline-none"
              >
                {expandedId === study.id ? "Read Less" : "Read Full Case Study"}
                <svg
                  className={`h-4 w-4 transform transition-transform ${
                    expandedId === study.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}