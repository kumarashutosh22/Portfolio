import React from 'react';
import './PipelineAnimation.css';

const PipelineAnimation = () => {
  return (
    <div className="pipeline-container animate-fade-in delay-2">
      <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--accent-cyan)' }}>End-to-End ML Pipeline Architecture</h3>
      <svg className="pipeline-svg" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cyan-indigo" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines */}
        <path d="M 150 100 C 250 100, 350 200, 400 200" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 150 300 C 250 300, 350 200, 400 200" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 400 200 C 500 200, 600 100, 650 100" fill="none" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 400 200 C 500 200, 600 300, 650 300" fill="none" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="4 4" />

        {/* Animated Particles */}
        <circle r="4" fill="#06b6d4" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 150 100 C 250 100, 350 200, 400 200" />
        </circle>
        <circle r="4" fill="#06b6d4" filter="url(#glow)">
          <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M 150 100 C 250 100, 350 200, 400 200" />
        </circle>
        
        <circle r="4" fill="#06b6d4" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 150 300 C 250 300, 350 200, 400 200" />
        </circle>
        <circle r="4" fill="#06b6d4" filter="url(#glow)">
          <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M 150 300 C 250 300, 350 200, 400 200" />
        </circle>

        <circle r="4" fill="#6366f1" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 400 200 C 500 200, 600 100, 650 100" />
        </circle>
        <circle r="4" fill="#6366f1" filter="url(#glow)">
          <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M 400 200 C 500 200, 600 100, 650 100" />
        </circle>

        <circle r="4" fill="#6366f1" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 400 200 C 500 200, 600 300, 650 300" />
        </circle>
        <circle r="4" fill="#6366f1" filter="url(#glow)">
          <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M 400 200 C 500 200, 600 300, 650 300" />
        </circle>

        {/* Data Sources Nodes */}
        <g transform="translate(30, 75)" className="node-box">
          <rect width="120" height="50" rx="8" fill="rgba(30, 41, 59, 0.8)" stroke="#06b6d4" strokeWidth="2" />
          <text x="60" y="30" textAnchor="middle" fill="#f8fafc" fontSize="14" fontFamily="monospace">Relational DB</text>
        </g>
        <g transform="translate(30, 275)" className="node-box">
          <rect width="120" height="50" rx="8" fill="rgba(30, 41, 59, 0.8)" stroke="#06b6d4" strokeWidth="2" />
          <text x="60" y="30" textAnchor="middle" fill="#f8fafc" fontSize="14" fontFamily="monospace">Hadoop Data</text>
        </g>

        {/* Processing Node */}
        <g transform="translate(340, 175)" className="node-box">
          <rect width="120" height="50" rx="8" fill="rgba(30, 41, 59, 0.9)" stroke="url(#cyan-indigo)" strokeWidth="2" />
          <text x="60" y="30" textAnchor="middle" fill="#f8fafc" fontSize="14" fontFamily="monospace" fontWeight="bold">ML Pipeline</text>
        </g>

        {/* Destination Nodes */}
        <g transform="translate(650, 75)" className="node-box-indigo">
          <rect width="120" height="50" rx="8" fill="rgba(30, 41, 59, 0.8)" stroke="#6366f1" strokeWidth="2" />
          <text x="60" y="30" textAnchor="middle" fill="#f8fafc" fontSize="14" fontFamily="monospace">Forecasting</text>
        </g>
        <g transform="translate(650, 275)" className="node-box-indigo">
          <rect width="120" height="50" rx="8" fill="rgba(30, 41, 59, 0.8)" stroke="#6366f1" strokeWidth="2" />
          <text x="60" y="30" textAnchor="middle" fill="#f8fafc" fontSize="14" fontFamily="monospace">RAG / GenAI</text>
        </g>
      </svg>
    </div>
  );
};

export default PipelineAnimation;
