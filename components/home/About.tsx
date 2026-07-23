"use client";

import React from 'react';
import Link from 'next/link';

// --- DATA ---
const blogPosts = [
  {
    id: "fabric-app",
    title: "About Fabric App",
    date: "July 12, 2026",
    readTime: "5 min read",
    excerpt: "Explore the architecture and enterprise capabilities of Microsoft Fabric Apps. Discover how they unify data engineering, data science, and analytics into a single, cohesive SaaS platform for modern data teams.",
  },
  {
    id: "fabric-data-agents",
    title: "About Fabric Data Agents",
    date: "November 05, 2025",
    readTime: "7 min read",
    excerpt: "Dive into the world of AI-powered Data Agents within Microsoft Fabric. Learn how Copilot integrations and autonomous agents are transforming how we interact with, query, and govern enterprise data.",
  },
  {
    id: "dax-context",
    title: "Row Context and Filter Context in Power BI",
    date: "December 18, 2023",
    readTime: "8 min read",
    excerpt: "Understanding the difference between Row Context and Filter Context is the absolute key to mastering DAX. In this breakdown, we explore how evaluation contexts shape your calculations and dashboards.",
  }
];

// --- COMPONENTS ---
const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 text-center">
    {subtitle && <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">{subtitle}</p>}
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>
  </div>
);

export default function BlogSection() {
  return (
    <section id="about" className="bg-slate-950 px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        
        <SectionTitle 
          title="Insights & Articles" 
          subtitle="My Blog" 
        />

        {/* CSS Grid for Blog Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              {/* Card Header: Meta Info */}
              <div className="mb-4 flex items-center gap-3 text-xs font-medium text-slate-400">
                <span>{post.date}</span>
                <span className="h-1 w-1 rounded-full bg-slate-600"></span>
                <span>{post.readTime}</span>
              </div>

              {/* Card Body: Title and Excerpt (flex-1 forces the Read More button to the bottom) */}
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-bold leading-tight text-white transition-colors group-hover:text-blue-400">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer: Read More Link */}
              <div className="mt-8 border-t border-slate-800/60 pt-6">
                <Link 
                  href={`/blog/${post.id}`} // Points to a dynamic Next.js route (e.g., /blog/fabric-app)
                  className="inline-flex items-center text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  Read More
                  <svg 
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional: View All Posts Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex rounded-full border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-700 hover:text-blue-400"
          >
            View All Articles
          </Link>
        </div>

      </div>
    </section>
  );
}