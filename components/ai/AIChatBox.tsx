"use client";

import React, { useState, useRef, useEffect } from 'react';

// --- 1. THE RESUME DATA (INTERNAL KNOWLEDGE BASE) ---
const RESUME_DATA = `
LIJO CHUNGATH JOSE
Senior Data Engineer / Lead Data and AI
Location: Thrissur, India
Experience: 18 Years

WORK EXPERIENCE:
1. Lead Data and AI | Thoughtstorm Canada (Jul 2024 - Present)
- Architect and implement Microsoft Fabric solutions, Azure Data Factory pipelines, and RAG architectures.
- Conducted SQL Server assessments for Niagara Region.

2. Project Manager | Zad Holding Company S.A.Q, Qatar (Mar 2023 - May 2024)
- Directed a cross-functional engineering team to implement an enterprise data warehouse using ADF, SQL, and Power BI.

3. Senior Data Analysis Executive (Jun 2010 - Oct 2022)
- Designed end-to-end data pipelines using Azure Data Factory and Synapse.

4. Software Engineer | QBurst Technologies (Oct 2005 - Mar 2007)
- Designed and developed web applications with .NET (C#, ASP.NET) and SQL Server.

EDUCATION:
- MBA/PGDM Systems: Anna University (2009)
- B.Sc Computer Science: Calicut University (2005)

SKILLS: Azure Synapse, Microsoft Fabric, SQL, Python, Power BI, ADF.
`;

// --- 2. THE LOCAL "AI" ENGINE (PATTERN MATCHING) ---
// This function replaces the need for a real LLM API call.
const generateLocalResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();

  // Greeting
  if (lowerInput.includes('hello') || lowerInput.includes('hi ') || lowerInput === 'hi') {
    return "Hello! I am a local bot answering questions based on Lijo's resume. What would you like to know?";
  }

  // Current Role
  if (lowerInput.includes('now') || lowerInput.includes('current') || lowerInput.includes('today')) {
    return "Currently, Lijo works as the **Lead Data and AI at Thoughtstorm Canada** (Since July 2024), where he architects Microsoft Fabric solutions and RAG pipelines.";
  }

  // QBurst Specific
  if (lowerInput.includes('qburst')) {
    return "Yes! Lijo worked as a **Software Engineer at QBurst Technologies** from October 2005 to March 2007, focusing on .NET (C#) and SQL Server applications.";
  }

  // Zad Holding Specific
  if (lowerInput.includes('zad') || lowerInput.includes('qatar')) {
    return "Lijo worked as a **Project Manager at Zad Holding Company** in Qatar from March 2023 to May 2024, leading an enterprise data warehouse implementation.";
  }

  // Skills
  if (lowerInput.includes('skill') || lowerInput.includes('technolog')) {
    return "Lijo's key skills include **Azure Synapse Analytics, Microsoft Fabric, SQL, Python, Power BI, Power Apps, Power Automate, KNIME, and Azure Data Factory**.";
  }

  // Education
  if (lowerInput.includes('education') || lowerInput.includes('degree') || lowerInput.includes('university') || lowerInput.includes('college')) {
    return "Lijo holds an **MBA/PGDM in Systems from Anna University (2009)** and a **B.Sc in Computer Science and Technology from Calicut University (2005)**.";
  }

  // Experience Total
  if (lowerInput.includes('how many years') || lowerInput.includes('experience')) {
    return "Lijo has **18 Years** of strategic and results-driven experience in Data Engineering, BI, Data Architecture, and Analytics.";
  }

  // MASC / Niagara
  if (lowerInput.includes('masc')) {
    return "For MASC, Lijo architected an end-to-end modern data warehouse, migrating legacy data from Oracle and DB2 using Azure Data Factory and Databricks.";
  }
  if (lowerInput.includes('niagara')) {
    return "For the Niagara Region, Lijo conducted a comprehensive technical assessment of legacy SQL Server infrastructure to establish a 5-year cloud modernization roadmap.";
  }

  // Default Catch-all
  return "I'm sorry, I couldn't find a specific answer to that in the resume. You can ask about his current role, skills, education, or specific companies like QBurst or Thoughtstorm.";
};


// --- 3. THE UI COMPONENT ---
type Message = { id: string; role: 'user' | 'assistant'; content: string };

export default function AILab() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      role: 'assistant', 
      content: 'Hello! I am a deterministic chatbot loaded with Lijo\'s resume. Ask me things like "Where does Lijo work now?" or "Did he work at QBurst?"' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // 1. Add User Message
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // 2. Simulate network delay, then generate local response
    setTimeout(() => {
      const responseText = generateLocalResponse(userMsg.content);
      const aiMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: responseText };
      
      setMessages(prev => [...prev, aiMsg]);
      setIsLoading(false);
    }, 800); // 800ms delay to feel realistic
  };

  return (
    <section id="ai-lab" className="bg-slate-950 py-24 text-slate-300 font-sans min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">Interactive Resume</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Portfolio Chatbot
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A fast, serverless pattern-matching engine that queries my embedded resume data. 
          </p>
        </div>

        {/* Demo Container */}
        <div className="flex flex-col md:flex-row gap-6 bg-slate-900/50 rounded-2xl border border-slate-700 p-4 shadow-2xl h-[600px]">
          
          {/* Sidebar - Context Viewer */}
          <div className="w-full md:w-1/3 bg-slate-900 rounded-xl border border-slate-800 p-6 hidden md:flex flex-col">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Internal Knowledge Base
            </h3>
            <p className="text-xs text-slate-400 mb-4 border-b border-slate-800 pb-4">
              The bot is securely scanning a hardcoded static string representing the resume.
            </p>
            
            {/* Displaying a preview of the raw text to the user */}
            <div className="flex-1 overflow-y-auto bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-[10px] text-slate-500 whitespace-pre-wrap">
              {RESUME_DATA}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="w-full md:w-2/3 flex flex-col bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
            
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700 whitespace-pre-wrap'
                  }`}>
                    {/* Simple parser to render markdown bold tags (**) from the bot */}
                    {msg.content.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-white font-bold">{part}</strong> : part
                    )}
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-none p-4 flex space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
              <form onSubmit={handleSendMessage} className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g. Did Lijo work at QBurst?"
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
                >
                  Send
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}