import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 lg:px-24 pt-20">
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center space-y-8 mt-12 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Lijo <span className="text-blue-500">Chungath Jose</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300">
           Transforming Complex Data into Strategic Assets
        </h2>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Designing scalable Azure Data Engineering solutions, Microsoft Fabric implementations, Enterprise Analytics, Power BI, Azure Synapse, SQL, Python, and Cloud Data Platforms. I specialize in transforming complex, legacy data silos into governed, high-performance data ecosystems.
        </p>

        {/* Call to Action Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <Link 
            href="/portfolio" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/30"
          >
            View Projects
          </Link>
          
          <Link 
            href="/experience" 
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold rounded-lg transition-all border border-slate-700"
          >
            Professional Experience
          </Link>
          
          {/* Update the href below to match whatever you named your AI/DQM route */}
          <Link 
            href="/ai-lab" 
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold rounded-lg transition-all border border-slate-700"
          >
            Explore AI & Data Quality Lab
          </Link>
        </div>
      </div>

      {/* Quick Highlights / Value Proposition Cards */}
      <div className="max-w-6xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
        
        {/* Card 1: Architecture */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Modern Data Platforms</h3>
          <p className="text-slate-400">
            Expertise in migrating legacy infrastructure (AS400, Oracle, DB2) to modern SaaS Lakehouse models using Microsoft Fabric, OneLake, and Azure Synapse.
          </p>
        </div>

        {/* Card 2: Governance */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Data Quality & Governance</h3>
          <p className="text-slate-400">
            Architecting robust profiling layers, automated row-count reconciliation, and deduplication frameworks ensuring 100% SLA adherence and financial audit compliance.
          </p>
        </div>

        {/* Card 3: Analytics */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Enterprise Analytics</h3>
          <p className="text-slate-400">
            Delivering governed semantic layers, row-level security (RLS), and high-performance Power BI operational reporting optimized for near-real-time synchronization.
          </p>
        </div>

      </div>
    </div>
  );
}