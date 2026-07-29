import React from 'react';
import { Thought } from '../thoughts';
import { Layers, CloudLightning, Cpu, Users, Quote, AlertTriangle } from 'lucide-react';

interface ThoughtCardProps {
  thought: Thought;
}

// Map category or ID to relevant Lucide icons
const getCategoryIcon = (id: string) => {
  switch (id) {
    case 'erp-reality-check':
      return <Layers className="w-5 h-5 text-sky-400" />;
    case 'lift-and-shift-myth':
      return <CloudLightning className="w-5 h-5 text-sky-400" />;
    case 'ai-data-foundations':
      return <Cpu className="w-5 h-5 text-sky-400" />;
    case 'human-element':
      return <Users className="w-5 h-5 text-sky-400" />;
    default:
      return <Layers className="w-5 h-5 text-sky-400" />;
  }
};

export const ThoughtCard: React.FC<ThoughtCardProps> = ({ thought }) => {
  return (
    <article className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 transition-all hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10 flex flex-col justify-between relative overflow-hidden">
      
      {/* Subtle accent glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Category Header with Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 bg-sky-500/10 text-sky-400 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-sky-500/20">
            {getCategoryIcon(thought.id)}
            <span>{thought.category}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100 mb-6 tracking-tight leading-snug">
          {thought.title}
        </h2>

        {/* Excerpt / Main Paragraphs */}
        <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 font-normal">
          {thought.excerpt}
        </p>

        {/* Highlighted Stat / Quote Box with Icon */}
        {thought.statCallout && (
          <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/30 border-l-4 border-sky-400 p-6 md:p-8 rounded-r-xl my-6 shadow-inner border border-slate-800/60">
            <div className="absolute top-4 right-4 text-sky-500/10 pointer-events-none">
              <Quote className="w-16 h-16" />
            </div>
            <p className="text-lg md:text-xl italic font-semibold leading-relaxed relative z-10 text-sky-200">
              &ldquo;{thought.statCallout.stat}&rdquo;
            </p>
            <div className="mt-4 flex items-center space-x-3 relative z-10">
              <span className="h-px w-8 bg-sky-400" />
              <span className="text-xs text-sky-400 font-bold tracking-widest uppercase">
                {thought.statCallout.source}
              </span>
            </div>
          </div>
        )}

        {/* Optional Conceptual Flow Diagram (ASCII / UI Box representation for AI Ontology) */}
        {thought.id === 'ai-data-foundations' && (
          <div className="my-6 bg-slate-950 border border-slate-800 p-5 rounded-xl text-xs md:text-sm font-mono">
            <div className="text-sky-400 font-bold uppercase tracking-wider mb-3 flex items-center space-x-2">
              <Cpu className="w-4 h-4" />
              <span>Architectural Data Flow for Agentic AI</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-slate-300">
                <span className="block text-sky-400 font-bold mb-1">[ 1. Raw Silos ]</span>
                Legacy SQL / AS400 / Files
              </div>
              <div className="bg-slate-900 border border-sky-500/30 p-3 rounded-lg text-slate-200 relative">
                <span className="block text-sky-300 font-bold mb-1">[ 2. Fabric Ontology ]</span>
                Semantic Graph & Entity Mapping
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-slate-300">
                <span className="block text-sky-400 font-bold mb-1">[ 3. AI Agents ]</span>
                Governed RAG & Autonomous Logic
              </div>
            </div>
          </div>
        )}

        {/* Optional Key Takeaways List with Icon */}
        {thought.keyTakeaways && (
          <div className="my-6 bg-slate-950/40 p-5 rounded-xl border border-slate-800/50">
            <div className="flex items-center space-x-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-sky-400" />
              <h4 className="text-xs font-bold text-sky-400 uppercase tracking-widest">Key Architectural Risks:</h4>
            </div>
            <ul className="space-y-2">
              {thought.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-300">
                  <span className="text-sky-400 mr-2 font-bold">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Expanded Content Body Snippets */}
      <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-4">
        {thought.content.slice(1).map((paragraph, idx) => (
          <p key={idx} className="text-slate-400 text-sm md:text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};