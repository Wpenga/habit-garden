
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HabitType } from '../types';

interface HomeProps {
  stats: {
    vitality: number;
    streak: number;
  };
}

const Home: React.FC<HomeProps> = ({ stats }) => {
  const navigate = useNavigate();

  const habits = [
    { type: HabitType.SLEEP, name: '早睡', target: '22:30', current: 80, icon: 'bedtime', color: 'text-primary', bg: 'bg-primary/10' },
    { type: HabitType.WATER, name: '饮水', target: '2.5升', current: 62, icon: 'water_drop', color: 'text-sky-400', bg: 'bg-sky-400/10' },
    { type: HabitType.RUNNING, name: '跑步', target: '5.0公里', current: 40, icon: 'fitness_center', color: 'text-orange-400', bg: 'bg-orange-400/10' },
  ];

  return (
    <div className="pt-16 space-y-6">
      {/* Garden Visualization */}
      <div 
        className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer active:scale-[0.98] transition-all"
        onClick={() => navigate('/monthly')}
      >
        <img 
          src="https://picsum.photos/seed/gardenmain/600/800" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Main Garden"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
        
        {/* Floating Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">eco</span>
            <span className="text-xs font-bold text-white">{stats.vitality}% 已盛开</span>
          </div>
          <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-yellow-400 text-sm">wb_sunny</span>
            <span className="text-xs font-bold text-white">坚持 {stats.streak} 天</span>
          </div>
        </div>

        {/* Plant Info */}
        <div className="absolute bottom-6 left-6 right-6">
          <h2 className="text-3xl font-black mb-1">翡翠百合</h2>
          <p className="text-primary/80 font-bold mb-4">阶段 3: 萌芽</p>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(48,232,122,0.6)]" style={{ width: `${stats.vitality}%` }}></div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card p-4 rounded-2xl">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">今日浇水</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black">5</span>
            <span className="text-slate-500 text-sm">/ 8</span>
          </div>
          <p className="text-primary text-[10px] font-bold mt-1">状态良好</p>
        </div>
        <div className="glass-card p-4 rounded-2xl">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">光照时长</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black">4.5h</span>
          </div>
          <p className="text-primary text-[10px] font-bold mt-1">吸收充分</p>
        </div>
      </div>

      {/* Habit Tasks */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black">每日养成</h3>
          <button className="text-primary text-sm font-bold">编辑目标</button>
        </div>
        
        <div className="space-y-3">
          {habits.map((habit) => (
            <div 
              key={habit.type}
              onClick={() => navigate(`/habit/${habit.type}`)}
              className="glass-card p-4 rounded-2xl flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`size-12 rounded-xl flex items-center justify-center ${habit.bg} ${habit.color} border border-white/5`}>
                  <span className="material-symbols-outlined">{habit.icon}</span>
                </div>
                <div>
                  <p className="font-bold">{habit.name}</p>
                  <p className="text-slate-500 text-xs">目标: {habit.target}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full ${habit.bg.replace('/10', '')}`} style={{ width: `${habit.current}%` }} />
                </div>
                <p className={`${habit.color} text-[10px] font-black`}>{habit.current}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
