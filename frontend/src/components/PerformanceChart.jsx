import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const PerformanceChart = ({ data }) => {
  const defaultData = [
    { name: 'Apriori', executionTime: 120, memoryMB: 45 },
    { name: 'FP-Growth', executionTime: 35, memoryMB: 28 },
    { name: 'ECLAT', executionTime: 50, memoryMB: 32 },
  ];

  const chartData = data || defaultData;

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
      <h3 className="text-sm font-semibold text-slate-200 mb-4">Algorithm Benchmark Comparison</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
            <YAxis yAxisId="left" stroke="#818cf8" fontSize={12} />
            <YAxis yAxisId="right" orientation="right" stroke="#34d399" fontSize={12} />
            <Tooltip
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }}
              itemStyle={{ fontSize: '12px' }}
            />
            <Bar yAxisId="left" dataKey="executionTime" fill="#6366f1" radius={[4, 4, 0, 0]} name="Time (ms)" />
            <Bar yAxisId="right" dataKey="memoryMB" fill="#10b981" radius={[4, 4, 0, 0]} name="Memory (MB)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
