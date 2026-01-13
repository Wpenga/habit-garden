
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const navigate = useNavigate();

  const navItems = [
    { path: '/', icon: 'potted_plant', label: '花园' },
    { path: '/stats', icon: 'monitoring', label: '统计' },
    { path: null, icon: 'add', label: '记录', special: true },
    { path: '/social', icon: 'group', label: '社交' },
    { path: '/settings', icon: 'settings', label: '设置' },
  ];

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50">
      <div className="max-w-md mx-auto glass-card rounded-2xl flex items-center justify-between px-6 py-3 shadow-2xl">
        {navItems.map((item, idx) => (
          item.special ? (
            <div 
              key={idx}
              className="-mt-12 bg-primary rounded-full p-4 shadow-[0_8px_20px_rgba(48,232,122,0.4)] border-4 border-background active:scale-90 transition-transform cursor-pointer flex items-center justify-center"
              onClick={() => navigate('/')}
            >
              <span className="material-symbols-outlined text-background font-bold text-3xl">add</span>
            </div>
          ) : (
            <button 
              key={idx}
              className={`flex flex-col items-center gap-1 transition-colors ${currentPath === item.path ? 'text-primary' : 'text-slate-500'}`}
              onClick={() => item.path && navigate(item.path)}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-[10px] font-bold">{item.label}</span>
            </button>
          )
        ))}
      </div>
    </div>
  );
};

export default Navbar;
