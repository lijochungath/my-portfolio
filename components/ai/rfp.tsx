import React, { useState } from 'react';

const RfpShowcase = () => {
  const [activeTab, setActiveTab] = useState('rationale');

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl text-gray-800 font-sans">
      
      {/* Header Section */}
      <div className="mb-8 border-b pb-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Public Sector Data Modernization</h2>
        <p className="text-gray-600 text-lg">
          Responding to strategic BI Transformation initiatives for Legal Aid BC and Humber Polytechnic.
        </p>
      </div>

      {/* RFP Context Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-5 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">RFP 1: Legal Aid BC</h3>
          <p className="text-sm text-gray-700 mb-3">
            Seeking a modern enterprise Business Intelligence (BI) and analytics platform using Microsoft Power BI and Azure Fabric Data Warehouse.
          </p>
          <a href="/RFP_26-001_BI_Transformation.pdf" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
            📄 View LABC RFP
          </a>
        </div>
        <div className="p-5 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">RFP 2: Humber Polytechnic</h3>
          <p className="text-sm text-gray-700 mb-3">
            Seeking implementation partners for Advanced Data Analytics utilizing Microsoft Fabric as their foundational technology for enterprise data.
          </p>
          <a href="/RFSQ_2025-346SQ_Document.pdf" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
            📄 View Humber RFP
          </a>
        </div>
      </div>

      {/* Interactive Solutioning Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Proposed Solution: Microsoft Fabric Lakehouse</h3>
        
        {/* Tabs */}
        <div className="flex space-x-4 border-b mb-6">
          <button 
            className={`pb-2 px-1 font-medium ${activeTab === 'rationale' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
            onClick={() => setActiveTab('rationale')}
          >
            Why Fabric?
          </button>
          <button 
            className={`pb-2 px-1 font-medium ${activeTab === 'architecture' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
            onClick={() => setActiveTab('architecture')}
          >
            High-Level Architecture
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'rationale' && (
          <div className="animate-fadeIn">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <div>
                  <strong>100% Client Alignment:</strong> Both organizations explicitly mandate Microsoft Fabric and Azure environments as their strategic platforms.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <div>
                  <strong>Unified SaaS Platform:</strong> Eliminates the complexity of stitching together disparate PaaS services. It unifies Data Engineering, Data Warehousing, and BI into a single governed environment.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <div>
                  <strong>OneLake & Delta Parquet:</strong> Centralized logical data lake reduces data duplication and supports open formats, easing the migration of legacy on-premises databases.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <div>
                  <strong>AI-Readiness:</strong> Natively integrates with Azure OpenAI, setting a robust foundation for future predictive analytics and machine learning initiatives.
                </div>
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="animate-fadeIn p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="text-center font-bold text-gray-700 mb-6">Fabric Lakehouse Data Flow</h4>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              
              {/* Ingest */}
              <div className="flex-1 w-full bg-white p-4 text-center rounded shadow-sm border border-indigo-100">
                <div className="text-indigo-600 font-bold mb-1">1. Ingest</div>
                <div className="text-xs text-gray-500">Data Factory / Pipelines</div>
                <div className="text-xs mt-2">Legacy DBs & SaaS</div>
              </div>
              
              <div className="hidden md:block text-gray-400">➔</div>
              
              {/* Store */}
              <div className="flex-1 w-full bg-white p-4 text-center rounded shadow-sm border border-cyan-100">
                <div className="text-cyan-600 font-bold mb-1">2. Store</div>
                <div className="text-xs text-gray-500">OneLake</div>
                <div className="text-xs mt-2">Bronze ➔ Silver ➔ Gold</div>
              </div>

              <div className="hidden md:block text-gray-400">➔</div>

              {/* Process */}
              <div className="flex-1 w-full bg-white p-4 text-center rounded shadow-sm border border-purple-100">
                <div className="text-purple-600 font-bold mb-1">3. Process</div>
                <div className="text-xs text-gray-500">Synapse Data Engineering</div>
                <div className="text-xs mt-2">Spark Notebooks / T-SQL</div>
              </div>

              <div className="hidden md:block text-gray-400">➔</div>

              {/* Serve */}
              <div className="flex-1 w-full bg-white p-4 text-center rounded shadow-sm border border-emerald-100">
                <div className="text-emerald-600 font-bold mb-1">4. Serve</div>
                <div className="text-xs text-gray-500">Power BI</div>
                <div className="text-xs mt-2">DirectLake Mode</div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RfpShowcase;