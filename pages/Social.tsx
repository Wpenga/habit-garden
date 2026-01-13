
import React from 'react';

const Social: React.FC = () => {
  const friends = [
    { name: '苏菲的森林', time: '2小时前', status: '新花盛开!', avatar: 'https://picsum.photos/seed/sophy/100/100', bloom: '翡翠百合' },
    { name: '阿强', time: '5小时前', status: '阶段 3: 萌芽', avatar: 'https://picsum.photos/seed/aqiang/100/100', bloom: '能量仙人掌' },
  ];

  return (
    <div className="pt-16 space-y-8 pb-10">
      {/* Leaderboard Snippet */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-black">全球繁茂榜</h2>
          <button className="text-primary text-sm font-bold">全部</button>
        </div>
        <div className="glass-card rounded-2xl overflow-hidden p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-xs font-black">1</div>
              <img src="https://picsum.photos/seed/rank1/100/100" className="size-10 rounded-full border-2 border-primary" alt="" />
              <div>
                <p className="text-sm font-bold">林间小鹿</p>
                <p className="text-[10px] text-slate-500 font-bold">124 朵已盛开</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-yellow-400">workspace_premium</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-black">2</div>
              <img src="https://picsum.photos/seed/rank2/100/100" className="size-10 rounded-full border-2 border-slate-500" alt="" />
              <div>
                <p className="text-sm font-bold">习惯达人</p>
                <p className="text-[10px] text-slate-500 font-bold">98 朵已盛开</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="space-y-6">
        <h2 className="text-xl font-black">好友动态</h2>
        {friends.map((friend, idx) => (
          <div key={idx} className="glass-card rounded-3xl overflow-hidden border border-white/5">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={friend.avatar} className="size-10 rounded-full border border-primary/30" alt="" />
                <div>
                  <p className="text-sm font-bold">{friend.name}</p>
                  <p className="text-[10px] text-slate-500 font-bold">{friend.time}</p>
                </div>
              </div>
              <div className="bg-primary/10 px-3 py-1 rounded-full text-[10px] font-black text-primary border border-primary/20">
                {friend.status}
              </div>
            </div>
            
            <div className="mx-4 aspect-video bg-gradient-to-br from-secondary to-background rounded-2xl flex flex-col items-center justify-center border border-white/5">
              <span className="material-symbols-outlined text-primary text-5xl mb-2">local_florist</span>
              <p className="font-bold">{friend.bloom}</p>
              <p className="text-[10px] text-primary font-black uppercase tracking-widest mt-1">Consistency Streak: 30 Days</p>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => <img key={i} src={`https://picsum.photos/seed/p${i+idx}/40/40`} className="size-6 rounded-full border-2 border-background" alt="" />)}
                </div>
                <p className="text-[10px] text-slate-500 font-bold">等 8 人已助力浇水</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all active:scale-95">
                  <span className="material-symbols-outlined text-sm">water_drop</span>
                  浇水助力
                </button>
                <button className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all active:scale-95">
                  <span className="material-symbols-outlined text-sm">chat_bubble</span>
                  说点什么
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
