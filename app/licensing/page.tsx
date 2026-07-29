"use client";

import React from "react";
import {
  Server,
  Cloud,
  Calculator,
  Layers,
  Zap,
  HardDrive,
  BarChart4,
  ArrowRightLeft
} from "lucide-react";

const licensingData = [
  {
    tool: "Microsoft Fabric",
    icon: <Layers className="h-6 w-6 text-purple-400" />,
    model: "Capacity-Based (F-SKUs)",
    details: "Unified compute billing. Instead of paying separately for pipelines, notebooks, and SQL, you provision a single compute capacity (e.g., F64) that is shared across all workloads. Pausable to save costs."
  },
  {
    tool: "Azure Databricks",
    icon: <Zap className="h-6 w-6 text-red-400" />,
    model: "DBUs + VM Compute",
    details: "Billed on Databricks Units (DBUs) for the processing engine, plus the underlying Azure VM compute costs. Optimized via automated cluster termination and Spot Instances for non-critical ELT."
  },
  {
    tool: "Azure Synapse Analytics",
    icon: <BarChart4 className="h-6 w-6 text-cyan-400" />,
    model: "DWUs & Serverless TB",
    details: "Dedicated SQL Pools are billed hourly based on Data Warehouse Units (DWUs). Serverless SQL is highly cost-effective for exploratory analytics, billed strictly at ~$5 per Terabyte of data processed."
  },
  {
    tool: "Azure Data Factory (ADF)",
    icon: <ArrowRightLeft className="h-6 w-6 text-blue-400" />,
    model: "Pay-Per-Execution & DIUs",
    details: "Micro-billing based on pipeline activity, execution time, and Data Integration Units (DIUs). Cost optimization focuses on reducing parallel copies and mapping data flows effectively."
  },
  {
    tool: "Azure Data Lake (ADLS Gen2)",
    icon: <HardDrive className="h-6 w-6 text-emerald-400" />,
    model: "Storage Tiers & Transactions",
    details: "Billed by data volume at rest and Read/Write operations. Costs are aggressively managed by implementing Lifecycle Management policies to move stale data from 'Hot' to 'Cool' or 'Archive' tiers."
  }
];

export default function CloudEconomicsPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20 text-white md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl space-y-16">
        
        {/* HEADER */}
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            FinOps & Cloud Economics
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Architecture Cost Strategy
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Enterprise architecture is not just about moving data; it is about managing the Total Cost of Ownership (TCO). I design scalable cloud environments that maximize performance while rigorously controlling operational expenditure.
          </p>
        </div>

        {/* SECTION 1: ON-PREM VS CLOUD */}
        <div className="grid gap-8 md:grid-cols-2">
          
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-slate-800 p-3">
                <Server className="h-6 w-6 text-slate-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">On-Premises (CapEx)</h2>
            </div>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                <span>High upfront Capital Expenditure for servers, cooling, and real estate.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                <span>Hardware depreciation over 3-5 years, requiring costly refresh cycles.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                <span>Over-provisioning is mandatory to handle peak loads, leaving costly compute sitting idle 80% of the time.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/50 p-8 shadow-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-emerald-500/10 p-3">
                <Cloud className="h-6 w-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Cloud Migration (OpEx)</h2>
            </div>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span className="text-slate-200">Zero upfront capital. Shift to agile Operational Expenditure (Pay-as-you-go).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span className="text-slate-200">Elastic scalability allows compute engines to auto-pause during non-business hours, drastically reducing TCO.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span className="text-slate-200">Delegated maintenance: Security, patching, and hardware management are handled by Azure.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* SECTION 2: LICENSING STRATEGY */}
        <div className="space-y-8 pt-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Calculator className="h-8 w-8 text-cyan-400" />
              Azure Data Product Licensing Matrix
            </h2>
            <p className="mt-2 text-slate-400">My approach to provisioning and optimizing resource costs across the Microsoft Data stack.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {licensingData.map((item) => (
              <div key={item.tool} className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-600 hover:bg-slate-800/50">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-slate-950 p-2 shadow-inner">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-white">{item.tool}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.details}
                  </p>
                </div>
                <div className="mt-6 rounded-xl bg-slate-950 p-3 border border-slate-800 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Billing Model: <span className="text-cyan-400">{item.model}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}