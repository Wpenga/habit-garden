
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MonthlyGarden: React.FC = () => {
  const navigate = useNavigate();
  
  // Generating a mock 30-day grid with varied status
  const days = Array.from({ length: 30 }, (_, i) => {
    const statuses = ['full', 'bud', 'sprout', 'withered', 'empty'];
    const randomStatus = statuses[Math.floor(Math.random() * (i > 15 ? 5 : 3))];
    return { day: i + 1, status: randomStatus };
  });

  const getPlantAsset = (status: string) => {
    switch(status) {
      case 'full': return 'https://picsum.photos/seed/flower-full/100/100';
      case 'bud': return 'https://picsum.photos/seed/flower-bud/80/80';
      case 'sprout': return 'https://picsum.photos/seed/flower-sprout/60/60';
      case 'withered': return 'https://picsum.photos/seed/withered/50/50';
      default: return null;
    }
  };

  return (
    <div className="pt-16 pb-10">
      <div className="flex items-center justify-center bg-white/5 rounded-2xl p-1 mb-8">
        <button className="flex-1 py-2 text-xs font-black text-slate-500">9月</button>
        <button className="flex-1 py-2 text-xs font-black bg-primary/20 text-primary rounded-xl shadow-lg">10月</button>
        <button className="flex-1 py-2 text-xs font-black text-slate-500">11月</button>
      </div>

      <div className="relative isometric-container aspect-[4/5] flex items-center justify-center bg-gradient-to-b from-sky-900/20 to-transparent rounded-[3rem] border border-white/5 overflow-hidden">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
          <h2 className="text-xl font-black text-white/50">2023 OCT</h2>
        </div>

        <div className="isometric-grid grid grid-cols-5 gap-2 p-6 bg-white/5 rounded-3xl border border-white/10 shadow-inner">
          {days.map((day) => (
            <div 
              key={day.day}
              className={`size-14 rounded-lg flex items-center justify-center relative border border-white/5 transition-all active:scale-110 cursor-pointer ${
                day.status === 'full' ? 'bg-primary/20 shadow-[0_4px_10px_rgba(48,232,122,0.2)]' : 'bg-white/5'
              }`}
            >
              <div className="absolute top-1 left-1 text-[8px] font-black text-white/30">{day.day}</div>
              {getPlantAsset(day.status) && (
                <img 
                  src={getPlantAsset(day.status)!} 
                  className={`w-10 h-10 object-contain -rotate-x-45 mb-2 transition-transform duration-500 hover:scale-125 ${day.status === 'withered' ? 'opacity-40 grayscale' : ''}`}
                  alt=""
                />
              )}
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 right-6 flex items-center gap-2 glass-card p-3 rounded-full text-primary shadow-lg animate-bounce">
          <span className="material-symbols-outlined">3d_rotation</span>
          <span className="text-[10px] font-bold">全景展示</span>
        </div>
      </div>

      <div className="mt-8 px-2 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black">当月成就</h3>
          <span className="text-primary text-xs font-bold">查看详情</span>
        </div>
        <div className="glass-card p-6 rounded-3xl flex justify-around">
          <div className="text-center">
            <p className="text-slate-500 text-[10px] font-black uppercase mb-1">总计盛开</p>
            <p className="text-2xl font-black text-primary">18 <span className="text-sm font-bold">朵</span></p>
          </div>
          <div className="w-px h-10 bg-white/5" />
          <div className="text-center">
            <p className="text-slate-500 text-[10px] font-black uppercase mb-1">目标达成率</p>
            <p className="text-2xl font-black">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyGarden;
