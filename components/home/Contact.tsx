"use client";

import React, { useState } from "react";
import AIChatBox from "../ai/AIChatBox"; // Adjust path if necessary
import DQM from "../ai/DQM"; // Adjust path if necessary
import RFP from "../ai/rfp"; // Adjust path depending on where you saved rfp.tsx
import { Database, MessageSquare, FileText } from "lucide-react";

export default function AILabIndex() {
  // Added "rfp" to the state options
  const [activeTab, setActiveTab] = useState<"chat" | "dqm" | "rfp">("chat");

  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-4">
      <div className="mx-auto max-w-4xl">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            AI <span className="text-blue-500">Lab</span> & Tools
          </h1>
          <p className="text-lg text-gray-400">
            Interactive demonstrations of Retrieval-Augmented Generation (RAG) concepts, automated Data Quality Engineering, and Architecture Solutions.
          </p>
        </div>

        {/* Custom Tab Navigation */}
        {/* Added flex-wrap and gap-4 to handle mobile responsiveness better */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveTab("chat")}
            className={`flex items-center rounded-lg px-6 py-3 font-semibold transition ${
              activeTab === "chat" 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Resume Chatbot
          </button>
          
          <button
            onClick={() => setActiveTab("dqm")}
            className={`flex items-center rounded-lg px-6 py-3 font-semibold transition ${
              activeTab === "dqm" 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            <Database className="mr-2 h-5 w-5" />
            DQ Matrix Engine
          </button>

          {/* New RFP Solutions Tab */}
          <button
            onClick={() => setActiveTab("rfp")}
            className={`flex items-center rounded-lg px-6 py-3 font-semibold transition ${
              activeTab === "rfp" 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            <FileText className="mr-2 h-5 w-5" />
            RFP Solutions
          </button>
        </div>

        {/* Dynamic Component Rendering */}
        <div className="transition-all duration-500 ease-in-out">
          {activeTab === "chat" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <AIChatBox />
            </div>
          )}
          
          {activeTab === "dqm" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <DQM />
            </div>
          )}

          {activeTab === "rfp" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <RFP />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}