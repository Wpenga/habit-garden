
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: '周一', value: 65 },
  { name: '周二', value: 45 },
  { name: '周三', value: 80 },
  { name: '周四', value: 95 },
  { name: '周五', value: 70 },
  { name: '周六', value: 40 },
  { name: '周日', value: 30 },
];

const Stats: React.FC = () => {
  return (
    <div className="pt-16 space-y-6 pb-10">
      <div className="glass-card p-6 rounded-3xl">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-slate-400 text-xs font-black uppercase mb-1">花园生命力</p>
            <h3 className="text-2xl font-black">本周概览</h3>
          </div>
          <div className="text-right">
            <p className="text-primary text-2xl font-black">85%</p>
            <p className="text-slate-400 text-[10px] font-bold">较上周 +12%</p>
          </div>
        </div>

        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }} 
              />
              <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ background: '#1a2c22', border: 'none', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}
              />
              <Bar dataKey="value" radius={[10, 10, 10, 10]}>
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.value > 80 ? '#30e87a' : 'rgba(48, 232, 122, 0.3)'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black px-1">各项习惯汇总</h3>
        <div className="grid grid-cols-1 gap-3">
          {[
            { name: '早睡', val: '22:45', status: '良好', icon: 'bedtime', color: 'text-primary' },
            { name: '饮水', val: '18.5 升', status: '本周累计', icon: 'water_drop', color: 'text-sky-400' },
            { name: '跑步', val: '24.2 公里', status: '本周累计', icon: 'fitness_center', color: 'text-orange-400' },
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`size-12 rounded-xl flex items-center justify-center ${item.color} bg-white/5 border border-white/5`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-slate-500 text-xs">平均数据</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-black">{item.val}</p>
                <p className={`${item.color} text-[10px] font-black uppercase`}>{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black px-1">成长简报</h3>
        <div className="glass-card p-5 rounded-2xl border-l-4 border-primary">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
            <p className="font-bold text-sm">月度成长</p>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            你的“翡翠百合”在这个月成长了 <span className="text-primary font-bold">45%</span>。保持现在的频率，下周就能迎来全面盛开。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
