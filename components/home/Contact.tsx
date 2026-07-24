"use client";

import React, { useState } from "react";
import AIChatBox from "../ai/AIChatBox"; // Adjust path if necessary
import DQM from "../ai/DQM"; // Adjust path if necessary
import { Database, MessageSquare } from "lucide-react";

export default function AILabIndex() {
  const [activeTab, setActiveTab] = useState<"chat" | "dqm">("chat");

  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-4">
      <div className="mx-auto max-w-4xl">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            AI <span className="text-blue-500">Lab</span> & Tools
          </h1>
          <p className="text-lg text-gray-400">
            Interactive demonstrations of Retrieval-Augmented Generation (RAG) concepts and automated Data Quality Engineering.
          </p>
        </div>

        {/* Custom Tab Navigation */}
        <div className="mb-8 flex justify-center space-x-4">
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
        </div>

        {/* Dynamic Component Rendering */}
        <div className="transition-all duration-500 ease-in-out">
          {activeTab === "chat" ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <AIChatBox />
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <DQM />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}