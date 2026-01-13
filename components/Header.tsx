
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  stats: {
    level: number;
    rank: string;
  };
}

const Header: React.FC<HeaderProps> = ({ stats }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-md mx-auto flex items-center justify-between p-4 pb-2">
        <div 
          className="size-10 rounded-full border-2 border-primary bg-cover bg-center cursor-pointer active:scale-95 transition-transform"
          style={{ backgroundImage: 'url("https://picsum.photos/seed/gardenuser/100/100")' }}
          onClick={() => navigate('/settings')}
        />
        
        <div className="flex flex-col items-center">
          <p className="text-[10px] font-black text-primary uppercase tracking-widest">LEVEL {stats.level}</p>
          <h1 className="text-lg font-bold">我的花园</h1>
        </div>

        <button className="size-10 flex items-center justify-center glass-card rounded-xl text-primary active:scale-95 transition-all">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
