import React from 'react';
import { thoughtsData } from './thoughts';
import { ThoughtCard } from './component/thoughtcard';

export default function ThoughtsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16">

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Reflections from 20 years of building enterprise data platforms and scaling cloud migrations
            
          </p>
        </div>

        {/* Thoughts Feed */}
        <div className="space-y-12">
          {thoughtsData.map((thought) => (
            <ThoughtCard key={thought.id} thought={thought} />
          ))}
        </div>

      </div>
    </main>
  );
}