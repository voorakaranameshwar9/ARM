import React from 'react';
import { Play } from 'lucide-react';

const AlgorithmCard = ({ title, description, params = [], onRun, isRunning }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex flex-col justify-between">
      <div>
        <h3 className="text-base font-semibold text-slate-100">{title}</h3>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{description}</p>
        <div className="mt-4 space-y-2 border-t border-slate-800/60 pt-3">
          {params.map((p, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs">
              <span className="text-slate-400">{p.label}</span>
              <span className="font-mono text-indigo-300 bg-slate-800 px-2 py-0.5 rounded">{p.value}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={onRun}
        disabled={isRunning}
        className="mt-5 w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors"
      >
        <Play className="w-3.5 h-3.5 fill-current" />
        {isRunning ? 'Processing...' : 'Run Algorithm'}
      </button>
    </div>
  );
};

export default AlgorithmCard;
