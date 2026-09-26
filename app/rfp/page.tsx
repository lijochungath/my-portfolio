import React from "react";
import { RfpCard, RfpProcessItem } from "./components/rfpcard";

const rfpRegistryData: RfpProcessItem[] = [
  {
    id: "rfp-labc-01",
    client: "Legal Aid BC",
    rfpNumber: "RFP 26-001",
    title: "Enterprise BI & Data Warehouse Transformation",
    bidManager: "",
    bidTeam: [
      { role: "Solution Architect", name: "Technical Lead SME" },
      { role: "Commercial Lead", name: "Pricing & Rate Card Specialist" },
    ],
    status: "Submitted",
    addendaCount: 3,
    addendaLog: [
      {
        id: "Addendum #1",
        details: "Clarified source system APIs & daily ingestion frequency.",
        impact: "Adjusted pipeline scheduler scope",
      },
      {
        id: "Addendum #2",
        details: "Submission deadline extended by 5 business days.",
        impact: "Extended red-team review window",
      },
      {
        id: "Addendum #3",
        details: "Mandated separate rate cards for ongoing SLA support.",
        impact: "Separated Schedule F costing sheet",
      },
    ],
    solutionOptions: [
      {
        badge: "Option A (Primary)",
        title: "Microsoft Fabric Lakehouse Unified Target Architecture",
        pros: [
          "Zero-ETL Direct Lake reporting with Power BI",
          "OneLake eliminates dual storage duplication",
          "Consolidated tenant capacity management",
        ],
        cons: [
          "Requires platform governance onboarding",
          "F-SKU capacity sizing planning needed",
        ],
        diagramFlow: [
          "Source APIs / DBs",
          "OneLake Ingestion",
          "Bronze Delta",
          "Silver Cleanse",
          "Gold Star Schema",
          "Power BI Direct Lake",
        ],
      },
      {
        badge: "Option B (Stepped)",
        title: "Hybrid Modernization: Azure Data Factory + Managed Lakehouse",
        pros: [
          "Leverages legacy self-hosted integration runtimes",
          "Lower initial migration risk profile",
        ],
        cons: [
          "Multiple administrative portals and billings",
          "Higher pipeline maintenance overhead",
        ],
        diagramFlow: [
          "On-Prem Sources",
          "Azure Data Factory",
          "ADLS Gen2",
          "Synapse SQL",
          "Import / DirectQuery BI",
        ],
      },
    ],
  },
  {
    id: "rfp-humber-02",
    client: "Humber Polytechnic",
    rfpNumber: "RFSQ-2025-EDU",
    title: "Next-Gen Analytics & Data Governance Modernization",
    bidManager: "Bid Manager: Senior Pre-Sales Consultant",
    bidTeam: [
      { role: "Security & Compliance Lead", name: "Risk SME" },
      { role: "Data Architect", name: "Fabric Specialist" },
    ],
    status: "Won",
    addendaCount: 2,
    addendaLog: [
      {
        id: "Addendum #1",
        details: "Privacy compliance matrix updated for student records.",
        impact: "Included Purview RBAC & Sensitivity Labels",
      },
      {
        id: "Addendum #2",
        details: "Cost format restructured to time-and-materials task authorization.",
        impact: "Blended rate matrix applied",
      },
    ],
    solutionOptions: [
      {
        badge: "Option A (Recommended)",
        title: "Fabric Medallion Lakehouse with Microsoft Purview Integration",
        pros: [
          "Automated lineage tracking across Lakehouse artifacts",
          "Role-based row/column security for academic data",
        ],
        cons: ["Requires initial Purview configuration setup"],
        diagramFlow: [
          "Student Information Systems",
          "Fabric Data Pipelines",
          "Medallion Storage (Delta)",
          "Purview Governance",
          "Curated Power BI Semantic Models",
        ],
      },
      {
        badge: "Option B (Alternative)",
        title: "Azure Synapse Serverless Dedicated Migration",
        pros: ["Traditional T-SQL tooling familiarity"],
        cons: [
          "Lacks unified OneLake governance features",
          "Higher storage egress overhead",
        ],
        diagramFlow: [
          "SIS & LMS Feeds",
          "Azure Synapse Pipelines",
          "Parquet Lake",
          "Dedicated Pools",
          "Power BI Reporting",
        ],
      },
    ],
  },
];

export default function RfpPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
            Governance & Pre-Sales Engineering
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            RFP Handling & Technical Bid Strategy
          </h1>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Structured bid governance, continuous addenda ingestion, and multi-option
            architectural evaluations designed for enterprise procurements.
          </p>
        </div>

        {/* RFP Feed */}
        <div className="space-y-12">
          {rfpRegistryData.map((rfp) => (
            <RfpCard key={rfp.id} rfp={rfp} />
          ))}
        </div>
      </div>
    </main>
  );
}