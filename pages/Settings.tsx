
import React from 'react';

interface SettingsProps {
  stats: {
    level: number;
    rank: string;
  };
}

const Settings: React.FC<SettingsProps> = ({ stats }) => {
  const sections = [
    {
      title: '习惯养成目标',
      items: [
        { label: '早睡目标', value: '22:30', icon: 'bedtime', color: 'text-primary' },
        { label: '每日饮水', value: '2.5 升', icon: 'water_drop', color: 'text-sky-400' },
        { label: '跑步里程', value: '5.0 公里', icon: 'fitness_center', color: 'text-orange-400' },
      ]
    },
    {
      title: '个性化与通知',
      items: [
        { label: '习惯提醒', value: '已开启', icon: 'notifications_active', color: 'text-yellow-400', toggle: true },
        { label: '主题风格', value: '翡翠森林', icon: 'palette', color: 'text-purple-400' },
      ]
    },
    {
      title: '账户',
      items: [
        { label: '账号与安全', value: '', icon: 'security', color: 'text-blue-400' },
      ]
    }
  ];

  return (
    <div className="pt-16 space-y-6 pb-10">
      {/* Profile Card */}
      <div className="glass-card p-5 rounded-3xl flex items-center gap-5">
        <img 
          src="https://picsum.photos/seed/userlarge/150/150" 
          className="size-16 rounded-full border-2 border-primary" 
          alt=""
        />
        <div>
          <h2 className="text-xl font-black">林间漫步者</h2>
          <p className="text-slate-400 text-sm font-bold">等级 {stats.level} · {stats.rank}</p>
        </div>
        <button className="ml-auto text-primary">
          <span className="material-symbols-outlined">edit</span>
        </button>
      </div>

      {sections.map((section, idx) => (
        <div key={idx} className="space-y-2">
          <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">{section.title}</h3>
          <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5">
            {section.items.map((item, itemIdx) => (
              <div key={itemIdx} className="p-4 flex items-center justify-between active:bg-white/5 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                  <span className="font-bold text-sm">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-xs font-bold">{item.value}</span>
                  {!item.toggle ? (
                    <span className="material-symbols-outlined text-slate-700 text-lg">chevron_right</span>
                  ) : (
                    <div className="w-10 h-5 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-0.5 size-4 bg-white rounded-full shadow-sm" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="space-y-3 pt-4">
        <button className="w-full py-4 bg-white/5 text-slate-400 font-black rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-xl">contact_support</span>
          联系技术支持
        </button>
        <button className="w-full py-4 bg-red-500/10 text-red-500 font-black rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-xl">logout</span>
          退出登录
        </button>
      </div>
    </div>
  );
};

export default Settings;
