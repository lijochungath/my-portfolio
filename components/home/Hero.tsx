"use client";

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 lg:px-8 border-b border-slate-800">
      {/* Background Ambient Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(2,6,23,1))]"></div>

      <div className="mx-auto max-w-4xl text-center z-10 relative">
        {/* Intro */}
        <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase drop-shadow-sm">
          Hello, I am
        </h2>
        
        {/* Name */}
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-7xl drop-shadow-lg">
          Lijo Chungath Jose
        </h1>
        
        {/* Title */}
        <p className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
          Architecting Scalable Data Solutions
        </p>
        
        {/* Bio summary */}
        <p className="mt-6 text-lg leading-8 text-slate-400 max-w-3xl mx-auto">
          Designing scalable Azure Data Engineering solutions, Microsoft Fabric implementations, 
          Enterprise Analytics, Power BI, Azure Synapse, SQL, Python, and Cloud Data Platforms. 
          Transforming legacy silos into modern, governed enterprise architectures.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="#case-studies"
            className="rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition-all duration-300 shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
          >
            Explore Case Studies
          </Link>
          
          <Link
            href="/tools" // Adjust this link to wherever you put your AI Lab / DQM page
            className="group rounded-lg px-8 py-3.5 text-sm font-semibold text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-300"
          >
            View AI Tools <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
      
      {/* Optional Tech Stack Badges at the bottom of the hero */}
      <div className="mt-16 flex justify-center gap-4 flex-wrap opacity-60">
        {['Fabric', 'Azure Synapse', 'Power BI', 'ADF', 'SQL Server'].map((tech) => (
          <span key={tech} className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}