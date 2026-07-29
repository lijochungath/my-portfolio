"use client";

import React from "react";
import {
  ShieldCheck,
  Cpu,
  DatabaseZap,
  Code2,
  FileWarning,
  CheckCircle2,
  Clock,
  Lock,
  Scale,
  Ban
} from "lucide-react";

// --- DATA ---
const customEngines = [
  {
    id: 1,
    title: "Entity Resolution & Deduplication Index",
    context: "City of Calgary (Legal Domain)",
    icon: <DatabaseZap className="h-6 w-6 text-cyan-400" />,
    problem: "Legacy legal databases contained severely repeating MatterId records, threatening reporting integrity.",
    solution: "Engineered a zero-cost deduplication engine within Azure SQL staging using advanced T-SQL Window Functions to isolate 'Rank 1' records, avoiding expensive MDM software.",
    metric: "Strict Uniqueness (100% duplicate elimination prior to API injection)."
  },
  {
    id: 2,
    title: "Temporal SLA Consistency Parser",
    context: "Annalect India (ITSM Domain)",
    icon: <Clock className="h-6 w-6 text-emerald-400" />,
    problem: "Jira Service Management ticket data was trapped in heavily nested JSON payloads, making SLA breach reporting impossible natively.",
    solution: "Built a serverless parser using Power Automate to intercept REST API JSON payloads, flattening deeply nested timestamp arrays into a standardized tabular model.",
    metric: "Temporal Consistency (Ensuring 100% accuracy of Incident SLA violation tracking)."
  },
  {
    id: 3,
    title: "Referential Integrity Orphan Bridging",
    context: "MASC (Agri-Finance Domain)",
    icon: <Code2 className="h-6 w-6 text-purple-400" />,
    problem: "Migrating 24 months of legacy AS400/DB2 data into a Fabric Lakehouse resulted in orphan fact records missing parent dimensions.",
    solution: "Wrote PySpark logic in the Silver Layer to detect missing keys and dynamically generate 'Structural Dummy Records' to bridge the gap without dropping financial transactions.",
    metric: "Referential Integrity (Maintained 100% financial transaction completeness)."
  },
  {
    id: 4,
    title: "Point-of-Entry Telemetry Validation",
    context: "Zad Holding (Manufacturing Domain)",
    icon: <ShieldCheck className="h-6 w-6 text-yellow-400" />,
    problem: "Factory floor operational data was plagued by typos and schema mismatches due to manual Excel entry, crashing ETL pipelines.",
    solution: "Scrapped Excel and built a custom Power Apps front-end validation layer enforcing strict Regex constraints and dynamic type-casting before database insertion.",
    metric: "Schema Conformity & Accuracy (Reduced downstream ETL failures by 99%)."
  },
  {
    id: 5,
    title: "API Payload Truncation & Throttling",
    context: "City of Calgary (Enterprise Integration)",
    icon: <FileWarning className="h-6 w-6 text-rose-400" />,
    problem: "Legacy on-premise string data exceeded Dynamics Dataverse schema limits, causing ADF API timeouts.",
    solution: "Built a metadata-driven data profiler in Azure SQL staging to identify string violations, applying controlled truncation and tuning ADF Data Integration Units (DIUs).",
    metric: "Format Conformity & Pipeline SLA (Zero API timeout failures)."
  }
];

const coreMetrics = [
  {
    id: 6,
    title: "Incremental Load Freshness",
    icon: <Cpu className="h-5 w-5 text-slate-400" />,
    desc: "Measured refresh SLA latency using dynamic Watermark Tables, ensuring point-in-time financial data syncs via Power BI Direct Lake mode."
  },
  {
    id: 7,
    title: "Source-to-Target Reconciliation",
    icon: <CheckCircle2 className="h-5 w-5 text-slate-400" />,
    desc: "Automated row-count checksums between 600+ legacy SQL Servers and the Cloud Data Warehouse, guaranteeing zero data loss."
  },
  {
    id: 8,
    title: "PII Anonymization Rate",
    icon: <Lock className="h-5 w-5 text-slate-400" />,
    desc: "Leveraged Azure SQL Column/Row-Level Security and Dynamic Data Masking to hide sensitive citizen data, ensuring 100% privacy compliance."
  },
  {
    id: 9,
    title: "Cross-Company Unit Standardization",
    icon: <Scale className="h-5 w-5 text-slate-400" />,
    desc: "Monitored the conversion accuracy of differing units of measure (UOM) and currencies into standardized global benchmarks within SSAS OLAP cubes."
  },
  {
    id: 10,
    title: "Critical Dimension Null-Tolerance",
    icon: <Ban className="h-5 w-5 text-slate-400" />,
    desc: "Established a <0.01% tolerance for NULLs in critical fields, triggering automated ETL pipeline halts to protect executive dashboard integrity."
  }
];

// --- COMPONENT ---
export default function DataQualityPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20 text-white md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl space-y-16">
        
        {/* HEADER */}
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Architecture & Governance
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Data Quality Engineering
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Beyond standard data movement, I engineer custom, cost-optimized data quality engines and enforce rigorous enterprise governance protocols to ensure absolute reporting integrity.
          </p>
        </div>

        {/* SECTION 1: SOPHISTICATED CUSTOM ENGINES */}
        <div className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-semibold text-white">Custom DQM Engines (Cost-Optimized)</h2>
            <p className="mt-2 text-slate-400">Proprietary logic engineered to bypass expensive third-party MDM software.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {customEngines.map((engine) => (
              <div key={engine.id} className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition-all hover:border-slate-700">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="rounded-xl bg-slate-950 p-3 shadow-inner">
                      {engine.icon}
                    </div>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                      {engine.context}
                    </span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">{engine.title}</h3>
                  <div className="mb-6 space-y-4 text-sm leading-relaxed text-slate-400">
                    <p><strong className="text-slate-300">The Problem:</strong> {engine.problem}</p>
                    <p><strong className="text-slate-300">The Engine:</strong> {engine.solution}</p>
                  </div>
                </div>
                <div className="mt-auto rounded-2xl bg-cyan-500/10 p-4 border border-cyan-500/20">
                  <p className="text-sm font-medium text-cyan-300">
                    <span className="font-bold text-cyan-400">Metric Tracked:</span> {engine.metric}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: CORE ENTERPRISE METRICS */}
        <div className="space-y-8 pt-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-semibold text-white">Core Enterprise DQM Standards</h2>
            <p className="mt-2 text-slate-400">Standardized operational metrics implemented across enterprise pipelines.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coreMetrics.map((metric) => (
              <div key={metric.id} className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:bg-slate-800">
                <div className="flex items-center gap-3">
                  {metric.icon}
                  <h4 className="font-semibold text-white">{metric.title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}