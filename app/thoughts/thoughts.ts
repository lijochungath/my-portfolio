export interface Thought {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
  statCallout?: {
    stat: string;
    source: string;
  };
  keyTakeaways?: string[];
}

export const thoughtsData: Thought[] = [
    {
    id: "human-element",
    title: "The Human Element of Architecture",
    category: "Leadership & Adoption",
    date: "April 2026",
    excerpt: "The most sophisticated data architecture in the world will fail if the end-users and business teams find it too cumbersome to adopt.",
    content: [
      "Technical excellence must always be paired with intuitive design, effective change management, and user enablement.",
      "Making adoption seamless is just as important as writing optimized ETL code. If the business cannot easily interact with the semantic layers or dashboards we build, the architecture has failed its ultimate test."
    ]
  },
  {
    id: "ai-data-foundations",
    title: "Data Quality vs. Speed: The Foundation of Reliable AI & Ontologies",
    category: "Data & Agentic AI",
    date: "May 2026",
    excerpt: "When building datasets that will feed Retrieval-Augmented Generation (RAG) pipelines and autonomous AI agents in the future, speed without governance leads to failure.",
    statCallout: {
      stat: "Approximately 80% of enterprise AI projects fail to deliver their promised business value due to inadequate data foundations.",
      source: "RAND Corporation & Gartner"
    },
    content: [
      "Feeding raw, siloed, or uncleaned data directly into agent loops causes severe context degradation and hallucinations. Without structured semantic mapping, agents cannot reliably reason over legacy data estates.",
      "When technical teams build pipelines without defining clear semantic rules, different departments use conflicting definitions for the same metric (e.g., 'Revenue'). AI agents inherit these conflicts, rendering automated multi-system decisions unreliable.",
      "To bridge this gap, modern platforms like Microsoft Fabric introduce a business context layer (Fabric IQ and Ontology features) that provides standardized entity types, explicit relationship graphs, and OneLake data bindings so AI agents operate under governed guardrails."
    ],
    keyTakeaways: [
      "The 'Garbage In, Agentic Hallucination Out' Problem",
      "Lack of Unified Business Context Across Silos",
      "Treating AI as an Architecture, Not Just a Software Bolt-On"
    ]
  },
  {
    id: "erp-reality-check",
    title: "The ERP Reality Check: Why Technology Must Serve the Business Goal",
    category: "Enterprise Architecture",
    date: "July 2026",
    excerpt: "Early in my career, I witnessed firsthand how enterprise resource planning (ERP) implementations can completely derail when technology choices become disconnected from actual business realities.",
    statCallout: {
      stat: "Gartner predicts that over 70% of ERP initiatives fail to fully meet their original business case goals, with a quarter failing catastrophically.",
      source: "Gartner Research"
    },
    content: [
      "Early in my career, I witnessed a major ERP implementation fail—not because the technology was flawed, but because it didn’t align with actual operational workflows. The system solved for data storage, but it ignored human behavior and core business outcomes.",
      "That failure fundamentally shaped my architectural philosophy today: Never design a data or enterprise platform in a vacuum. Every pipeline, lakehouse, or warehouse must trace a direct, measurable line back to a business objective.",
      "The root cause is rarely the syntax or the cloud infrastructure. It happens when projects skip deep discovery phases, ignore human behavior, and fail to align software capabilities with day-to-day operations. True enterprise architecture isn't about deploying a platform; it's about building a bridge between technical execution and measurable business outcomes."
    ]
  },
  {
    id: "lift-and-shift-myth",
    title: "The Myth of 'Lift and Shift' in Cloud Migrations",
    category: "Cloud Modernization",
    date: "June 2026",
    excerpt: "Moving legacy SQL databases straight to the cloud without restructuring data models is one of the fastest ways to stall a modernization initiative.",
    content: [
      "A literal 'lift and shift' approach simply replicates existing technical debt into a more expensive cloud environment. True modernization requires re-evaluating architectural patterns, optimizing query structures, and aligning data flows with target state consumption models rather than just changing the hosting server.",
      "Without re-architecting, organizations end up paying premium cloud compute costs while maintaining the same underlying performance bottlenecks they had on-premises."
    ]
  },


];