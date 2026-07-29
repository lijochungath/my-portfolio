export interface DQMCase {
  id: number;

  // Basic Information
  title: string;
  category: string;
  project: string;
  domain: string;

  // Overview
  summary: string;

  // Business Context
  challenge: string;
  rootCauses: string[];

  // Solution
  solution: string[];

  // Business Rules
  businessRules: string[];

  // Technical Implementation
  implementation: string[];

  // Technologies Used
  technologies: string[];

  // Lessons Learned
  lessonsLearned: string[];

  // Business Outcomes
  outcomes: string[];

  // Optional Architecture Diagram
  architectureImage?: string;

  // Metrics
  metrics?: {
    label: string;
    value: string;
  }[];
}