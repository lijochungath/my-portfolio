import React from 'react';

// --- DATA ---
const projectSolutions = [
  {
    id: 'niagara',
    title: 'Niagara Region - Database Modernization',
    challenges: [
      'Tasked with performing a massive fit-gap analysis on a highly fragmented, undocumented legacy estate comprising 60 on-premises servers and over 1,000 individual databases.',
      'The initial strategy to utilize automated Azure Migrate tools was completely blocked due to strict municipal PII (Personally Identifiable Information) security policies.',
      'Critical applications were tightly coupled to unsupported legacy SQL Server instances (2014/2016) with strict uptime dependencies.'
    ],
    solutions: [
      'Pivoted to a highly secure, manual reverse-engineering assessment framework to map legacy dependencies without triggering PII security blockers.',
      'Introduced a phased architectural lifecycle methodology focusing on: Stabilize → Standardize → Optimize → Modernize.',
      'Mandated a strict Side-by-Side Rebuild and Migration model for production upgrades to guarantee zero-risk rollback capabilities.'
    ],
    lessons: [
      'Precaution: Never rely solely on automated discovery tools in government or healthcare environments; manual assessment protocols are mandatory to safely bypass PII blockers.',
      'Lesson: Cloud migration decisions must remain strictly workload-driven, as not every legacy application inherently belongs in a PaaS database.'
    ]
  },
  {
    id: 'masc',
    title: 'MASC - Enterprise Data Warehouse',
    challenges: [
      'Faced critical referential mismatches between Policy Numbers and Policy IDs when integrating historical AS400 and Great Plains data with new Business Central data.',
      'Encountered strict string limitations within the target Dynamics database (VARCHAR 4000), causing pipeline failures on large text fields.',
      'Needed to manage high-volume historical loads alongside daily incremental updates, requiring complex temporal tracking.'
    ],
    solutions: [
      'Implemented a centralized dimension table using structural dummy records to bridge referential gaps without losing legacy transactional data.',
      'Architected a Bronze-Silver-Gold pipeline framework that applied controlled text truncation strategies during the Silver transformation phase.',
      'Designed a dynamic Watermark Table mechanism using the lastModifiedDateTime column to accurately orchestrate incremental data loads.'
    ],
    lessons: [
      'Precaution: When consolidating fragmented silos, prioritize referential integrity by using dummy dimension records to preserve historical data that would otherwise be orphaned.',
      'Lesson: Hard schema limits must be proactively intercepted at the transformation layer rather than relying on reactive error handling at the destination layer.'
    ]
  },
  {
    id: 'calgary',
    title: 'City of Calgary - Legal Data Migration',
    challenges: [
      'The legacy Fact table contained severely repeating MatterId anomalies, threatening the integrity of downstream reporting and dashboards.',
      'Faced strict data type and size constraints when attempting to map legacy on-premises databases directly into Microsoft Dynamics Dataverse.',
      'Encountered severe API source throttling and timeout failures during heavy Azure Data Factory pipeline executions.'
    ],
    solutions: [
      'Engineered a SQL window function creating a composite key ranked descending to isolate Rank 1 and guarantee strict uniqueness.',
      'Architected an Azure SQL staging layer to handle all casting, format validation, and truncation rules before pushing data to Dynamics.',
      'Mitigated ADF API throttling by strategically tuning Data Integration Units (DIUs) and intentionally reducing the degree of parallel copying.'
    ],
    lessons: [
      'Precaution: Never push legacy data directly to a target SaaS schema; an isolated staging environment is mandatory to enforce data quality and structural integrity.',
      'Lesson: Deduplication must occur at the earliest possible staging layer to prevent cascading data quality issues in downstream BI tools.'
    ]
  },
  {
    id: 'qbake',
    title: 'Qbake (Zad Holding) - Big Data Management',
    challenges: [
      'Required the seamless logistical syncing of transactional data directly from mobile sales vans into centralized production planning systems.',
      'Complex back-dated financial entries threatened to disrupt closed audit periods and skew historical reporting accuracy.',
      'Needed to aggregate high-frequency sales, production, and operations data across domains without causing database deadlocks.'
    ],
    solutions: [
      'Automated Demand-to-Production pipelines that mapped daily field sales orders directly to bakery manufacturing systems to align production volumes with actual demand.',
      'Implemented Slowly Changing Dimensions (SCD Type 2) to successfully isolate the transaction\'s effective business date from the system\'s recorded processing date.',
      'Directed the engineering of SSAS multi-dimensional cubes and configured Power BI enterprise gateways utilizing incremental refresh patterns.'
    ],
    lessons: [
      'Precaution: For financial architectures, it is critical to always separate the transaction date from the system entry date to maintain strict, audit-ready point-in-time accuracy.',
      'Lesson: Route optimization and logistics data require strict spatial validation to ensure GPS coordinates fall within expected operational boundaries.'
    ]
  }
];

// --- COMPONENTS ---
export default function Solutions() {
  return (
    <section id="skills" className="bg-slate-950 py-24 text-slate-300 selection:bg-blue-500/30 font-sans">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">Methodology & Execution</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Challenges, Solutions & <span className="text-blue-500">Lessons Learned</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            A transparent look into the technical hurdles faced across enterprise data engineering initiatives, the strategic solutions deployed, and the architectural principles carried forward.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded bg-blue-500"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projectSolutions.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col rounded-2xl bg-slate-900/50 p-8 shadow-xl border border-slate-800 transition-all hover:border-blue-500/50 hover:bg-slate-800/50"
            >
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
                {item.title}
              </h3>
              
              <div className="space-y-8 flex-1">
                
                {/* Challenges */}
                <div>
                  <h4 className="flex items-center text-sm font-bold text-red-400 uppercase tracking-wider mb-3">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    The Challenges
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                    {item.challenges.map((challenge, idx) => (
                      <li key={idx} className="leading-relaxed">{challenge}</li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="flex items-center text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    The Solutions
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                    {item.solutions.map((solution, idx) => (
                      <li key={idx} className="leading-relaxed">{solution}</li>
                    ))}
                  </ul>
                </div>

                {/* Lessons Learned */}
                <div className="bg-slate-950/80 p-5 rounded-xl border-l-4 border-amber-500 mt-auto">
                  <h4 className="flex items-center text-sm font-bold text-amber-500 uppercase tracking-wider mb-3">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Lessons & Precautions
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    {item.lessons.map((lesson, idx) => {
                      // Bold the first word (Precaution/Lesson) for better scannability
                      const [prefix, ...rest] = lesson.split(':');
                      return (
                        <li key={idx} className="leading-relaxed">
                          <strong className="text-slate-200">{prefix}:</strong> {rest.join(':')}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}