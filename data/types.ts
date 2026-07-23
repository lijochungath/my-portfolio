import React from "react";

export interface Metric {
  label: string;
  value: string;
}

export interface ArchitectureNode {
  title: string;
}

export interface TimelineStep {
  phase: string;
  description: string;
}

export interface CaseStudyData {
  title: string;
  client: string;
  duration: string;

  summary: string;

  metrics: Metric[];

  technologies: string[];

  architecture: ArchitectureNode[];

  timeline: TimelineStep[];

  challenge: React.ReactNode;

  solution: React.ReactNode;

  outcomes: string[];

  lessonsLearned?: string[];

  futureRoadmap?: string[];
}