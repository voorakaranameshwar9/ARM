import React from 'react';
import Header from '../components/Header';

const Rules = () => {
  const rules = [
    { id: 1, antecedent: 'Milk, Bread', consequent: 'Butter', support: '0.12', confidence: '0.85', lift: '1.42' },
    { id: 2, antecedent: 'Diaper', consequent: 'Beer', support: '0.08', confidence: '0.72', lift: '1.89' },
    { id: 3, antecedent: 'Coffee', consequent: 'Sugar', support: '0.19', confidence: '0.91', lift: '2.05' },
  ];

  return (
    <div className="flex-1 bg-slate-950 flex flex-col">
      <Header title="Association Rules" />
      <main className="p-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-800/50 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="p-4 font-semibold">Antecedent</th>
                <th className="p-4 font-semibold">Consequent</th>
                <th className="p-4 font-semibold">Support</th>
                <th className="p-4 font-semibold">Confidence</th>
                <th className="p-4 font-semibold">Lift</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {rules.map((rule) => (
                <tr key={rule.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-mono text-indigo-300">{rule.antecedent}</td>
                  <td className="p-4 font-mono text-cyan-300">{rule.consequent}</td>
                  <td className="p-4">{rule.support}</td>
                  <td className="p-4">{rule.confidence}</td>
                  <td className="p-4 text-emerald-400 font-medium">{rule.lift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Rules;
