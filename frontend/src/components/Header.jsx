import React from 'react';
import { Bell, Activity } from 'lucide-react';

const Header = ({ title }) => {
  return (
    <header className="h-16 bg-slate-900/50 border-b border-slate-800 px-6 flex items-center justify-between sticky top-0 backdrop-blur-md z-10">
      <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
          <Activity className="w-3.5 h-3.5" />
          Engine Online
        </div>
        <button className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
