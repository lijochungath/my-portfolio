"use client";

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const [svgContent, setSvgContent] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Generate a unique ID for this specific chart instance
  const chartId = useRef(`mermaid-${Math.random().toString(36).substring(2, 10)}`);

  useEffect(() => {
    // 1. Initialize Mermaid
    mermaid.initialize({
      startOnLoad: false, // CRITICAL: Prevents double-render crashes in React
      theme: 'dark',
      securityLevel: 'loose',
      fontFamily: 'inherit',
    });

    // 2. Asynchronously render the chart in memory
    const renderChart = async () => {
      try {
        const { svg } = await mermaid.render(chartId.current, chart);
        setSvgContent(svg);
      } catch (error) {
        console.error("Mermaid syntax error:", error);
      }
    };

    if (chart) {
      renderChart();
    }
  }, [chart]); // Only re-render if the chart code actually changes

  return (
    <>
      {/* Background blur when modal is open */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-sm" 
          onClick={() => setIsFullscreen(false)}
        ></div>
      )}

      {/* Main Container - Toggles between standard box and fixed fullscreen */}
      <div
        className={`group relative flex justify-center overflow-x-auto transition-all duration-300 ease-in-out ${
          isFullscreen
            ? 'fixed inset-4 z-50 items-center rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-8 overflow-auto'
            : 'w-full rounded-xl bg-slate-900/80 p-6 border border-slate-700 shadow-inner'
        }`}
      >
        
        {/* Enlarge / Close Button */}
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className={`absolute top-4 right-4 p-2 rounded-lg transition-all z-50 flex items-center gap-2 text-sm font-semibold
            ${isFullscreen
              ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 opacity-100'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-600 opacity-0 group-hover:opacity-100'
            }
          `}
          title={isFullscreen ? "Close Fullscreen" : "Enlarge Diagram"}
        >
          {isFullscreen ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              Close
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              Enlarge
            </>
          )}
        </button>

        {/* Mermaid Target Element */}
        <div
          className={`text-sm transition-all duration-500 flex justify-center ${
            isFullscreen
              ? 'w-full max-w-6xl [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-h-[80vh]' 
              : 'w-full [&>svg]:max-w-full [&>svg]:h-auto'
          }`}
          // We safely inject the generated SVG string here
          dangerouslySetInnerHTML={{ __html: svgContent }} 
        />
      </div>
    </>
  );
}