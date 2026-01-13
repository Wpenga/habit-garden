
import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Social from './pages/Social';
import Settings from './pages/Settings';
import MonthlyGarden from './pages/MonthlyGarden';
import HabitDetail from './pages/HabitDetail';
import Navbar from './components/Navbar';
import Header from './components/Header';

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // App-wide state
  const [stats] = useState({
    level: 12,
    rank: '园艺大师',
    vitality: 65,
    streak: 14,
    monthlyGrowth: 45
  });

  return (
    <div className="min-h-screen bg-background text-white pb-32">
      <Header stats={stats} />
      
      <main className="max-w-md mx-auto px-4 pt-4">
        <Routes>
          <Route path="/" element={<Home stats={stats} />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/social" element={<Social />} />
          <Route path="/settings" element={<Settings stats={stats} />} />
          <Route path="/monthly" element={<MonthlyGarden />} />
          <Route path="/habit/:type" element={<HabitDetail />} />
        </Routes>
      </main>

      <Navbar currentPath={location.pathname} />
    </div>
  );
};

export default App;
