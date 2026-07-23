"use client";

import React, { useEffect, useState } from 'react';

// --- DATA ---
const profileData = {
  name: "Lijo Chungath Jose",
  role: "The Architect Behind The Data",
  tagline: "Designing scalable Azure Data Engineering solutions, Microsoft Fabric implementations, Enterprise Analytics, Power BI, Azure Synapse, SQL, Python and Cloud Data Platforms."
};

const highlights = [
  { metric: "20+", label: "Years Experience" },
  { metric: "10+", label: "Enterprise Projects" },
  { metric: "Migration", label: "Fabric/Azure" },
  { metric: "Integration", label: "RAG/Dynamics" }
];

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  // Safe mount effect that runs exactly once to trigger entry animations
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 py-24 sm:px-12 lg:px-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
      
      <div 
        className={`relative z-10 mx-auto w-full max-w-5xl text-center transition-all duration-1000 ease-out ${
          isMounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        {/* Main Introduction */}
        <p className="mb-4 text-lg font-medium tracking-wide text-blue-400">Hello, I'm</p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          {profileData.name}
        </h1>
        <h2 className="mb-8 text-2xl font-bold text-slate-300 sm:text-4xl">
          {profileData.role}
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400">
          {profileData.tagline}
        </p>
        
        {/* Call to Action */}
        <div className="mt-10 mb-20 flex justify-center gap-4">
          <a href="#projects" className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-500 hover:shadow-blue-500/30">
            View Case Studies
          </a>
        </div>

        {/* Highlights / Stats Grid integrated directly into the Hero */}
        <div 
          className={`grid grid-cols-2 gap-6 md:grid-cols-4 transition-all delay-500 duration-1000 ease-out ${
            isMounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {highlights.map((stat, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center shadow-lg transition-all hover:-translate-y-2 hover:border-blue-500/50 hover:bg-slate-800/80 hover:shadow-blue-500/20"
            >
              <span className="text-4xl font-extrabold text-white transition-colors group-hover:text-blue-400 sm:text-5xl">
                {stat.metric}
              </span>
              <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-400 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}