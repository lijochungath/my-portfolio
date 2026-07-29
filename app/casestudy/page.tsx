"use client";
import React, { useState } from "react";

export default function CaseStudiesPage() {
  // State to track which case study is currently active
  const [activeTab, setActiveTab] = useState("masc");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Enterprise Case Studies</h1>
          <p className="text-lg text-slate-400">
            Deep dives into data modernization, cloud architecture, and enterprise analytics.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("masc")}
            className={`rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${
              activeTab === "masc"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
            }`}
          >
            MASC (Manitoba)
          </button>
          
          <button
            onClick={() => setActiveTab("niagara")}
            className={`rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${
              activeTab === "niagara"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
            }`}
          >
            Niagara Region
          </button>

          <button
            onClick={() => setActiveTab("calgary")}
            className={`rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${
              activeTab === "calgary"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
            }`}
          >
            City of Calgary
          </button>
        </div>

        {/* Content Area - Conditionally Rendered */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl">
          
          {activeTab === "masc" && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-4">Modernizing Agricultural Financial Systems</h2>
              <p className="mb-4"><strong>Client:</strong> Manitoba Agricultural Services Corporation (MASC)</p>
              <p>
                {/* We will drop your full MASC text and DiagramViewer component here */}
                Content for MASC goes here...
              </p>
            </div>
          )}

          {activeTab === "niagara" && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-4">5-Year Strategic Roadmap (Database & Infrastructure)</h2>
              <p className="mb-4"><strong>Client:</strong> Regional Municipality of Niagara</p>
              <p>
                {/* We will drop your full Niagara text and DiagramViewer component here */}
                Content for Niagara Region goes here...
              </p>
            </div>
          )}

          {activeTab === "calgary" && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-4">Data Quality & Deduplication Architecture</h2>
              <p className="mb-4"><strong>Client:</strong> City of Calgary</p>
              <p>
                {/* We will drop your full Calgary text here */}
                Content for City of Calgary goes here...
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}