import React from 'react';
import Header from '../components/Header';
import PerformanceChart from '../components/PerformanceChart';

const Comparison = () => {
  return (
    <div className="flex-1 bg-slate-950 flex flex-col">
      <Header title="Algorithm Comparison" />
      <main className="p-6 space-y-6">
        <PerformanceChart />
      </main>
    </div>
  );
};

export default Comparison;
