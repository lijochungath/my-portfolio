"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Mermaid component with SSR disabled
const Mermaid = dynamic(() => import('../Mermaid'), { ssr: false });

// --- MERMAID DIAGRAM STRINGS (STYLED) ---

const mascDiagram = `
graph TD
    %% Custom Styles
    classDef source fill:#1e293b,stroke:#475569,stroke-width:2px,color:#f8fafc,rx:8,ry:8
    classDef staging fill:#0369a1,stroke:#0ea5e9,stroke-width:2px,color:#ffffff,rx:8,ry:8
    classDef fabric fill:#5b21b6,stroke:#8b5cf6,stroke-width:2px,color:#ffffff,rx:8,ry:8
    classDef gold fill:#ca8a04,stroke:#facc15,stroke-width:2px,color:#ffffff,rx:8,ry:8
    classDef cluster fill:#0f172a,stroke:#334155,stroke-width:2px,stroke-dasharray: 5 5,rx:10,ry:10

    subgraph Sources [Legacy & Cloud ERP]
        A[AS400 & DB2]:::source
        B[Great Plains SQL]:::source
        E[Dynamics 365 BC]:::source
    end
    
    subgraph Azure [Azure Data Factory]
        C[(Azure SQL Staging)]:::staging
    end
    
    subgraph Fabric [Microsoft Fabric Lakehouse]
        D[Bronze Layer: Raw]:::fabric
        F[Silver Layer: Cleansed]:::fabric
        G[Gold Layer: Curated]:::fabric
    end
    
    H[Power BI Executive Dashboards]:::gold

    A --> C
    B --> C
    E --> C
    C -- Delta Parquet --> D
    D --> F
    F --> G
    G -- Direct Lake Mode --> H

    class Sources,Azure,Fabric cluster
`;

const niagaraDiagram = `
graph LR
    %% Custom Styles
    classDef source fill:#1e293b,stroke:#475569,stroke-width:2px,color:#f8fafc,rx:8,ry:8
    classDef danger fill:#991b1b,stroke:#ef4444,stroke-width:2px,color:#ffffff,rx:8,ry:8
    classDef process fill:#0369a1,stroke:#0ea5e9,stroke-width:2px,color:#ffffff,rx:8,ry:8
    classDef target fill:#5b21b6,stroke:#8b5cf6,stroke-width:2px,color:#ffffff,rx:8,ry:8

    A[600+ Legacy Databases]:::source --> B(Manual Fit-Gap & PII Assessment):::danger
    B --> C{4-Pillar Methodology}:::process
    C -->|1. Stabilize| D[Upgrade SQL 2022/2025]:::process
    C -->|2. Standardize| E[Security & Patch Alignment]:::process
    C -->|3. Optimize| F[Consolidate Workloads]:::process
    C -->|4. Modernize| G{Target Cloud State}:::target
    
    G --> H[Azure SQL Managed Instance]:::target
    G --> I[Microsoft Fabric Analytics]:::target
`;

const calgaryDiagram = `
graph TD
    %% Custom Styles
    classDef source fill:#1e293b,stroke:#475569,stroke-width:2px,color:#f8fafc,rx:8,ry:8
    classDef azure fill:#0369a1,stroke:#0ea5e9,stroke-width:2px,color:#ffffff,rx:8,ry:8
    classDef func fill:#15803d,stroke:#22c55e,stroke-width:2px,color:#ffffff,rx:8,ry:8
    classDef target fill:#5b21b6,stroke:#8b5cf6,stroke-width:2px,color:#ffffff,rx:8,ry:8
    classDef pbi fill:#ca8a04,stroke:#facc15,stroke-width:2px,color:#ffffff,rx:8,ry:8
    classDef cluster fill:#0f172a,stroke:#334155,stroke-width:2px,stroke-dasharray: 5 5,rx:10,ry:10

    subgraph OnPrem [On-Premises Sources]
        A[(Legacy Structured DB)]:::source
        B[Unstructured Legal Docs]:::source
    end
    
    subgraph Transform [Transformation Layer]
        C[(Azure SQL Staging)]:::azure
        D[Azure Functions]:::func
    end
    
    subgraph Target [Microsoft Target Systems]
        E[Azure Data Factory]:::azure
        G[(Dynamics Dataverse)]:::target
        F[SharePoint Document Hub]:::target
    end
    
    I[Power BI Operations Dashboards]:::pbi

    A --> C
    C -- Deduplication & Profiling --> E
    E --> G
    B --> D
    D -- Metadata Indexing --> F
    G --> I
    F --> I
    
    class OnPrem,Transform,Target cluster
`;

const qbakeDiagram = `
graph TD
    %% Custom Styles
    classDef source fill:#1e293b,stroke:#475569,stroke-width:2px,color:#f8fafc,rx:8,ry:8
    classDef process fill:#0369a1,stroke:#0ea5e9,stroke-width:2px,color:#ffffff,rx:8,ry:8
    classDef databricks fill:#be123c,stroke:#f43f5e,stroke-width:2px,color:#ffffff,rx:8,ry:8
    classDef pbi fill:#ca8a04,stroke:#facc15,stroke-width:2px,color:#ffffff,rx:8,ry:8
    classDef cluster fill:#0f172a,stroke:#334155,stroke-width:2px,stroke-dasharray: 5 5,rx:10,ry:10

    subgraph Ops [Operations & Field]
        A[Mobile Sales Vans]:::source
        B[Production Planning]:::source
    end
    
    subgraph BigData [Big Data Engine]
        C[Azure Databricks / Python]:::databricks
        D[SSIS ETL Hub]:::process
        E[(Central SQL Warehouse)]:::process
    end
    
    subgraph Analytics [Analytics Layer]
        F[SSAS Multi-Dimensional Cubes]:::process
        G[Power BI Enterprise Gateway]:::pbi
    end
    
    A --> C
    B --> C
    C -- Temporal Alignment --> D
    D --> E
    E --> F
    F -- Incremental Refresh --> G
    
    class Ops,BigData,Analytics cluster
`;

// --- DATA STRUCTURE ---
const diagramData = [
  {
    id: 'masc',
    title: 'MASC - Fabric Lakehouse Architecture',
    description: 'Transition of disparate legacy systems (AS400, Great Plains) through an Azure SQL Staging layer into a unified Microsoft Fabric SaaS Lakehouse, culminating in Direct Lake Power BI reporting.',
    chart: mascDiagram
  },
  {
    id: 'niagara',
    title: 'Niagara Region - Migration Assessment Flow',
    description: 'Visualizing the manual, PII-compliant assessment process moving through the 4-pillar methodology (Stabilize, Standardize, Optimize, Modernize) toward a target state in Azure.',
    chart: niagaraDiagram
  },
  {
    id: 'calgary',
    title: 'City of Calgary - Legal Data Topology',
    description: 'Illustrating the dual-track migration path: structured database records flowing through ADF deduplication into Dataverse, while unstructured documents utilize Azure Functions for SharePoint indexing.',
    chart: calgaryDiagram
  },
  {
    id: 'qbake',
    title: 'Qbake - Big Data Logistical Engine',
    description: 'Mapping the integration of mobile sales van telemetry and back-dated financial entries through Databricks processing into SSAS Multi-Dimensional Cubes for near real-time BI refreshes.',
    chart: qbakeDiagram
  }
];

// --- MAIN COMPONENT ---
export default function ArchitectureDiagrams() {
  const [activeTab, setActiveTab] = useState(diagramData[0].id);

  const activeDiagram = diagramData.find(d => d.id === activeTab);

  return (
    <section id="about" className="bg-slate-950 py-24 text-slate-300 font-sans selection:bg-blue-500/30 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">System Design</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            High-Level Architecture Topologies
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Interactive, visually mapped data flows and integration points of my most complex enterprise deployments. Hover over any diagram to enlarge it.
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
              {tab.title.split(' - ')[0]} 
            </button>
          ))}
        </div>

        {/* Active Diagram Display */}
        {activeDiagram && (
          <div className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-500">
            <div className="mb-8 border-b border-slate-800 pb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {activeDiagram.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {activeDiagram.description}
              </p>
            </div>
            
            {/* The dynamically loaded Mermaid component */}
            <Mermaid chart={activeDiagram.chart} />
          </div>
        )}

      </div>
    </section>
  );
}