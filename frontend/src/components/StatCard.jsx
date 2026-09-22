import React from 'react';

const StatCard = ({ title, value, change, icon: Icon }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center justify-between">
      <div>
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{title}</p>
        <h3 className="text-2xl font-bold text-slate-100 mt-1">{value}</h3>
        {change && <p className="text-xs text-emerald-400 mt-1 font-medium">{change}</p>}
      </div>
      {Icon && (
        <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-lg">
          <Icon className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default StatCard;
