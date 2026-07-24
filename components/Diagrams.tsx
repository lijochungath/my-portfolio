"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Mermaid component with SSR disabled
const Mermaid = dynamic(() => import('./Mermaid'), { ssr: false });

// --- MERMAID DIAGRAM STRINGS ---

const mascDiagram = `
graph TD
    subgraph Legacy Systems
        A[AS400 & DB2] --> C
        B[Great Plains SQL] --> C
    end
    subgraph Cloud ERP
        E[Dynamics 365 BC] --> C
    end
    subgraph Azure Data Factory
        C[(Azure SQL Staging)]
    end
    subgraph Microsoft Fabric Lakehouse
        C -- Delta Parquet --> D[Bronze Layer: Raw]
        D --> F[Silver Layer: Cleansed & Truncated]
        F --> G[Gold Layer: Facts & Dims]
    end
    G -- Direct Lake Mode --> H[Power BI Executive Dashboards]
    
    style C fill:#0f172a,stroke:#3b82f6,stroke-width:2px
    style G fill:#0f172a,stroke:#eab308,stroke-width:2px
`;

const niagaraDiagram = `
graph LR
    A[600+ Legacy SQL Databases] --> B(Manual Fit-Gap & PII Assessment)
    B --> C{4-Pillar Methodology}
    C -->|1. Stabilize| D[Upgrade to SQL 2022/2025]
    C -->|2. Standardize| E[Security & Patch Alignment]
    C -->|3. Optimize| F[Consolidate Workloads]
    C -->|4. Modernize| G{Target Cloud State}
    G --> H[Azure SQL Managed Instance]
    G --> I[Microsoft Fabric Analytics]
    
    style B fill:#0f172a,stroke:#ef4444,stroke-width:2px
    style G fill:#0f172a,stroke:#a855f7,stroke-width:2px
`;

const calgaryDiagram = `
graph TD
    subgraph On-Premises Sources
        A[(Legacy Structured DB)] --> C
        B[Unstructured Legal Docs] --> D
    end
    subgraph Transformation Layer
        C[(Azure SQL Staging)] -- Deduplication & Profiling --> E
        D[Azure Functions] -- Metadata Indexing --> F
    end
    subgraph Microsoft Target Systems
        E[Azure Data Factory] --> G[(Dynamics Dataverse)]
        F --> H[SharePoint Document Hub]
    end
    G --> I[Power BI Operations Dashboards]
    H --> I
    
    style C fill:#0f172a,stroke:#3b82f6,stroke-width:2px
    style G fill:#0f172a,stroke:#22c55e,stroke-width:2px
`;

const qbakeDiagram = `
graph TD
    subgraph Operations & Field
        A[Mobile Sales Vans] --> C
        B[Production Planning] --> C
    end
    subgraph Big Data Engine
        C[Azure Databricks / Python] -- Temporal Alignment --> D
        D[SSIS ETL Hub] --> E[(Central SQL Warehouse)]
    end
    subgraph Analytics Layer
        E --> F[SSAS Multi-Dimensional Cubes]
        F -- Incremental Refresh --> G[Power BI Enterprise Gateway]
    end
    
    style C fill:#0f172a,stroke:#f97316,stroke-width:2px
    style F fill:#0f172a,stroke:#0ea5e9,stroke-width:2px
`;

// --- DATA STRUCTURE ---
const diagramData = [
  {
    id: 'masc',
    title: 'MASC - Fabric Lakehouse Architecture',
    description: 'Shows the transition of disparate legacy systems (AS400, Great Plains) through an Azure SQL Staging layer into a unified Microsoft Fabric SaaS Lakehouse, culminating in Direct Lake Power BI reporting.',
    chart: mascDiagram
  },
  {
    id: 'niagara',
    title: 'Niagara Region - Migration Assessment Flow',
    description: 'Visualizes the manual, PII-compliant assessment process moving through the 4-pillar methodology (Stabilize, Standardize, Optimize, Modernize) toward a target state in Azure.',
    chart: niagaraDiagram
  },
  {
    id: 'calgary',
    title: 'City of Calgary - Legal Data Topology',
    description: 'Illustrates the dual-track migration path: structured database records flowing through ADF deduplication into Dataverse, while unstructured documents utilize Azure Functions for SharePoint indexing.',
    chart: calgaryDiagram
  },
  {
    id: 'qbake',
    title: 'Qbake - Big Data Logistical Engine',
    description: 'Maps the integration of mobile sales van telemetry and back-dated financial entries through Databricks processing into SSAS Multi-Dimensional Cubes for near real-time BI refreshes.',
    chart: qbakeDiagram
  }
];

// --- MAIN COMPONENT ---
export default function ArchitectureDiagrams() {
  const [activeTab, setActiveTab] = useState(diagramData[0].id);

  const activeDiagram = diagramData.find(d => d.id === activeTab);

  return (
    <section id="architecture" className="bg-slate-950 py-24 text-slate-300 font-sans selection:bg-blue-500/30 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">System Design</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            High-Level Architecture Topologies
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Interactive, code-generated diagrams mapping the data flows and integration points of my most complex enterprise deployments.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {diagramData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 border border-blue-500'
                  : 'bg-slate-900 text-slate-400 border border-slate-700 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {tab.title.split(' - ')[0]} {/* Just show the short client name on the button */}
            </button>
          ))}
        </div>

        {/* Active Diagram Display */}
        {activeDiagram && (
          <div className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-500">
            <h3 className="text-2xl font-bold text-white mb-3">
              {activeDiagram.title}
            </h3>
            <p className="text-slate-400 mb-8 border-b border-slate-800 pb-6 leading-relaxed">
              {activeDiagram.description}
            </p>
            
            {/* The dynamically loaded Mermaid component */}
            <Mermaid chart={activeDiagram.chart} />
          </div>
        )}

      </div>
    </section>
  );
}