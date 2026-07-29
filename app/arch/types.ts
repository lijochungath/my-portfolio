export interface ArchitecturePattern {
  id: number;

  // Basic Information
  title: string;
  category: string;
  project: string;
  domain: string;

  // Short Description
  summary: string;

  // Problem Statement
  businessProblem: string;

  // Why this architecture was selected
  whyThisPattern: string[];

  // Core building blocks
  components: string[];

  // High-level implementation steps
  implementation: string[];

  // Design decisions
  designDecisions: string[];

  // Benefits
  advantages: string[];

  // Trade-offs
  disadvantages: string[];

  // Technologies
  technologies: string[];

  // Lessons learned
  lessonsLearned: string[];

  // Business outcomes
  businessValue: string[];

  // Optional architecture diagram
  architectureImage?: string;

  // Optional KPIs
  metrics?: {
    label: string;
    value: string;
  }[];
}