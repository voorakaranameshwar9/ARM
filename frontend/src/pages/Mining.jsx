import React, { useState } from 'react';
import Header from '../components/Header';

const Mining = () => {
  const [aprioriSupport, setAprioriSupport] = useState(0.005);
  const [aprioriConfidence, setAprioriConfidence] = useState(0.10);

  const [fpSupport, setFpSupport] = useState(0.005);
  const [fpConfidence, setFpConfidence] = useState(0.10);

  const [eclatSupport, setEclatSupport] = useState(0.005);
  const [eclatConfidence, setEclatConfidence] = useState(0.10);

  const [loading, setLoading] = useState(null);
  const [executionResult, setExecutionResult] = useState(null);

  const handleRun = async (algorithm, minSupport, minConfidence) => {
    setLoading(algorithm);
    try {
      const response = await fetch('http://localhost:5000/api/mining', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          algorithm,
          minSupport: parseFloat(minSupport),
          minConfidence: parseFloat(minConfidence),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setExecutionResult(data);
      } else {
        alert(`Execution error: ${data.message || 'Server error occurred'}`);
      }
    } catch (err) {
      console.error(err);
      alert(`Error connecting to backend server on port 5000.`);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="flex-1 bg-slate-950 flex flex-col min-h-screen">
      <Header title="Mining Execution" />
      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Apriori Card */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Apriori Algorithm</h3>
              <p className="text-slate-400 text-sm mb-6">Breadth-first search generating candidate itemsets level-by-level.</p>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Min Support</label>
                  <input type="number" step="0.001" min="0.0001" max="1" value={aprioriSupport} onChange={(e) => setAprioriSupport(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Min Confidence</label>
                  <input type="number" step="0.01" min="0.01" max="1" value={aprioriConfidence} onChange={(e) => setAprioriConfidence(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white" />
                </div>
              </div>
            </div>
            <button onClick={() => handleRun('Apriori', aprioriSupport, aprioriConfidence)} disabled={loading === 'Apriori'} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition-colors">
              {loading === 'Apriori' ? 'Executing...' : 'Run Algorithm'}
            </button>
          </div>

          {/* FP-Growth Card */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">FP-Growth Algorithm</h3>
              <p className="text-slate-400 text-sm mb-6">Tree-based frequent pattern mining avoiding candidate generation.</p>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Min Support</label>
                  <input type="number" step="0.001" min="0.0001" max="1" value={fpSupport} onChange={(e) => setFpSupport(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Min Confidence</label>
                  <input type="number" step="0.01" min="0.01" max="1" value={fpConfidence} onChange={(e) => setFpConfidence(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white" />
                </div>
              </div>
            </div>
            <button onClick={() => handleRun('FP-Growth', fpSupport, fpConfidence)} disabled={loading === 'FP-Growth'} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition-colors">
              {loading === 'FP-Growth' ? 'Executing...' : 'Run Algorithm'}
            </button>
          </div>

          {/* ECLAT Card */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">ECLAT Algorithm</h3>
              <p className="text-slate-400 text-sm mb-6">Vertical layout intersection method for itemset counting.</p>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Min Support</label>
                  <input type="number" step="0.001" min="0.0001" max="1" value={eclatSupport} onChange={(e) => setEclatSupport(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Min Confidence</label>
                  <input type="number" step="0.01" min="0.01" max="1" value={eclatConfidence} onChange={(e) => setEclatConfidence(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white" />
                </div>
              </div>
            </div>
            <button onClick={() => handleRun('ECLAT', eclatSupport, eclatConfidence)} disabled={loading === 'ECLAT'} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition-colors">
              {loading === 'ECLAT' ? 'Executing...' : 'Run Algorithm'}
            </button>
          </div>
        </div>

        {/* Results Panel */}
        {executionResult && (
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-bold text-emerald-400 mb-4">
              ✔ {executionResult.algorithm} Execution Results
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <p className="text-slate-500 text-xs uppercase mb-1">Execution Time</p>
                <p className="text-xl font-bold text-white">{executionResult.executionTimeMs} ms</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <p className="text-slate-500 text-xs uppercase mb-1">Memory Used</p>
                <p className="text-xl font-bold text-white">{executionResult.memoryUsedMB} MB</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <p className="text-slate-500 text-xs uppercase mb-1">Frequent Itemsets</p>
                <p className="text-xl font-bold text-white">{executionResult.itemsetsCount}</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                <p className="text-slate-500 text-xs uppercase mb-1">Rules Generated</p>
                <p className="text-xl font-bold text-white">{executionResult.rulesCount}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Mining;