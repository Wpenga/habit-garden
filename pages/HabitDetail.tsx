
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HabitType } from '../types';

const HabitDetail: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(750);

  const isWater = type === HabitType.WATER;
  const isSleep = type === HabitType.SLEEP;
  const isRun = type === HabitType.RUNNING;

  const renderContent = () => {
    if (isWater) {
      return (
        <div className="space-y-8 pt-10">
          <div className="flex flex-col items-center justify-center">
            <div className="relative size-64 rounded-full border-8 border-slate-800 flex items-center justify-center overflow-hidden bg-[#1a2e21]">
              <div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-sky-400 transition-all duration-1000 ease-in-out" 
                style={{ height: `${(amount / 2000) * 100}%` }}
              >
                <div className="absolute top-0 left-0 right-0 h-4 bg-white/20 blur-sm animate-pulse" />
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-5xl font-black text-white">{amount}</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">毫升已记录</span>
                <div className="mt-4 h-px w-12 bg-white/10" />
                <span className="mt-2 text-xs text-slate-500 font-bold uppercase">目标: 2000ml</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end px-1">
              <p className="font-bold">今日进度</p>
              <p className="text-primary font-bold">{(amount/2000*100).toFixed(0)}%</p>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${(amount/2000*100)}%` }} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[200, 500, 750].map(v => (
              <button 
                key={v}
                onClick={() => setAmount(prev => Math.min(prev + v, 3000))}
                className="glass-card p-4 rounded-2xl flex flex-col items-center gap-2 active:scale-95 transition-all border border-white/5"
              >
                <span className="material-symbols-outlined text-sky-400">local_drink</span>
                <span className="text-sm font-black">+ {v}ml</span>
              </button>
            ))}
          </div>

          <div className="glass-card p-6 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
             <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">potted_plant</span>
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">花园生长</span>
             </div>
             <h4 className="text-lg font-black mb-1">睡莲盛开</h4>
             <p className="text-slate-400 text-xs">你的花朵今日水分充足度为{(amount/2000*100).toFixed(0)}%。再饮用{2000-amount > 0 ? 2000-amount : 0}ml即可到达下一阶段！</p>
          </div>
        </div>
      );
    }

    if (isSleep) {
      return (
        <div className="space-y-8 pt-10">
          <div className="relative aspect-square rounded-[2rem] bg-gradient-to-b from-sky-900 to-background flex flex-col items-center justify-center border border-white/10 shadow-2xl">
            <div className="size-32 rounded-full bg-slate-100/10 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
               <span className="material-symbols-outlined text-white text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>dark_mode</span>
            </div>
            <div className="text-center">
               <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">目标入睡时间</p>
               <h2 className="text-5xl font-black tracking-tight">22:30</h2>
               <div className="mt-4 flex items-center justify-center gap-1 text-primary text-[10px] font-black bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                  <span className="material-symbols-outlined text-xs">auto_awesome</span>
                  已坚持 14 天
               </div>
            </div>
          </div>

          <button className="w-full bg-primary text-background font-black py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(48,232,122,0.3)] active:scale-95 transition-all">
            <span className="material-symbols-outlined font-black">bedtime</span>
            <span className="text-lg">开始睡眠</span>
          </button>

          <div className="glass-card p-5 rounded-2xl flex items-center justify-between border border-white/5">
             <div className="flex items-center gap-4">
                <div className="size-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                   <span className="material-symbols-outlined">waves</span>
                </div>
                <div>
                   <p className="font-bold">环境音</p>
                   <p className="text-slate-500 text-[10px] font-bold">雨声 · 森林</p>
                </div>
             </div>
             <div className="w-10 h-5 bg-primary rounded-full relative">
                <div className="absolute right-1 top-0.5 size-4 bg-white rounded-full" />
             </div>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-20 text-center space-y-4">
        <span className="material-symbols-outlined text-6xl text-orange-400">directions_run</span>
        <h2 className="text-2xl font-black">跑步追踪</h2>
        <p className="text-slate-500">此功能正在连接 GPS 传感器...</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-primary/20 text-primary px-8 py-3 rounded-xl font-bold"
        >
          返回主页
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen pb-32">
      <div className="flex items-center justify-between py-4">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center glass-card rounded-xl active:scale-90 transition-all">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h2 className="text-lg font-black">{isWater ? '饮水记录' : isSleep ? '早睡管理' : '跑步记录'}</h2>
        <button className="size-10 flex items-center justify-center glass-card rounded-xl active:scale-90 transition-all">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default HabitDetail;
