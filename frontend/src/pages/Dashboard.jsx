import React from 'react';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import PerformanceChart from '../components/PerformanceChart';
import { Database, Layers, Network, Zap } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex-1 bg-slate-950 flex flex-col">
      <Header title="Analytics Dashboard" />
      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Transactions" value="128,450" change="+12.4% vs last run" icon={Database} />
          <StatCard title="Frequent Itemsets" value="4,320" icon={Layers} />
          <StatCard title="Discovered Rules" value="892" icon={Network} />
          <StatCard title="Avg Exec Speed" value="42 ms" change="-18% execution time" icon={Zap} />
        </div>
        <PerformanceChart />
      </main>
    </div>
  );
};

export default Dashboard;
