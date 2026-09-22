import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Dataset from './pages/Dataset';
import Mining from './pages/Mining';
import Comparison from './pages/Comparison';
import Rules from './pages/Rules';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-950 text-slate-100">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dataset" element={<Dataset />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
