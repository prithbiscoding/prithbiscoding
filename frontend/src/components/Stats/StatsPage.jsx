import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Shield } from 'lucide-react';
import { GOLDEN_BOOT, GOLDEN_GLOVE, GOLDEN_BALL, YOUNG_PLAYERS, GROUP_STANDINGS, WORLD_CUP_TEAMS } from '@/data/mockData';
import Flag from '@/components/Flag';

const CATEGORIES = [
  { id: 'boot', label: 'Golden Boot', icon: Trophy, color: '#FFB800', emoji: '🥇' },
  { id: 'glove', label: 'Golden Glove', icon: Shield, color: '#00E5FF', emoji: '🧤' },
  { id: 'ball', label: 'Golden Ball', icon: Award, color: '#FFD700', emoji: '⚽' },
  { id: 'young', label: 'Best Young', icon: Star, color: '#39FF14', emoji: '🌟' },
  { id: 'standings', label: 'Standings', icon: Target, color: '#FF007F', emoji: '📊' }
];

const StatsPage = () => {
  const [activeCategory, setActiveCategory] = useState('boot');

  const getCategoryData = () => {
    switch (activeCategory) {
      case 'boot': return GOLDEN_BOOT;
      case 'glove': return GOLDEN_GLOVE;
      case 'ball': return GOLDEN_BALL;
      case 'young': return YOUNG_PLAYERS;
      default: return [];
    }
  };

  const getStatLabel = (item) => {
    switch (activeCategory) {
      case 'boot': return { primary: `${item.goals} goals`, secondary: `${item.matches} matches · ${item.avg}/match` };
      case 'glove': return { primary: `${item.cleanSheets} CS`, secondary: `${item.saves} saves · ${item.savePercent}%` };
      case 'ball': return { primary: `${item.rating}⭐`, secondary: `${item.goals}G · ${item.assists}A` };
      case 'young': return { primary: `${item.rating}⭐`, secondary: `Age ${item.age}` };
      default: return { primary: '', secondary: '' };
    }
  };

  return (
    <div className="min-h-screen bg-[#08080A] pb-24">
      <div className="sticky top-0 z-40 bg-[#08080A]/90 backdrop-blur-xl border-b border-white/5">
        <div className="px-4 py-3">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
            <Trophy className="w-6 h-6 text-[#FFB800]" />
            Stats Center
          </h1>
          <p className="text-xs text-zinc-500 mt-1">World Cup 2026 · Live rankings</p>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              data-testid={`stats-category-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                activeCategory === cat.id ? 'text-black' : 'bg-[#111115] text-zinc-400 border border-white/10'
              }`}
              style={activeCategory === cat.id ? { backgroundColor: cat.color } : {}}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 mt-4">
        {activeCategory === 'standings' ? (
          <div className="space-y-4">
            {Object.entries(GROUP_STANDINGS).map(([groupName, teams]) => (
              <div key={groupName} className="bg-[#111115] border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-3 bg-gradient-to-r from-[#FF007F]/20 to-[#FFB800]/20 border-b border-white/10">
                  <h3 className="font-black text-sm">Group {groupName}</h3>
                </div>
                <div className="p-2">
                  <div className="grid grid-cols-9 gap-2 px-2 py-2 text-xs text-zinc-500 font-mono">
                    <div className="col-span-3">Team</div>
                    <div className="text-center">P</div>
                    <div className="text-center">W</div>
                    <div className="text-center">D</div>
                    <div className="text-center">L</div>
                    <div className="text-center">GD</div>
                    <div className="text-center text-[#39FF14] font-bold">PTS</div>
                  </div>
                  {teams.map((team, idx) => {
                    const teamData = WORLD_CUP_TEAMS.find(t => t.id === team.team);
                    const qualifies = idx < 2;
                    return (
                      <div
                        key={team.team}
                        data-testid={`standing-${team.team}`}
                        className={`grid grid-cols-9 gap-2 px-2 py-2.5 rounded-lg text-sm font-mono items-center ${
                          qualifies ? 'bg-[#39FF14]/5' : ''
                        }`}
                      >
                        <div className="col-span-3 flex items-center gap-2">
                          <span className="w-1 h-6 rounded" style={{ backgroundColor: qualifies ? '#39FF14' : 'transparent' }} />
                          <Flag teamId={teamData?.id} emoji={teamData?.flag} size="sm" />
                          <span className="font-bold truncate">{teamData?.name}</span>
                        </div>
                        <div className="text-center">{team.P}</div>
                        <div className="text-center text-[#39FF14]">{team.W}</div>
                        <div className="text-center text-yellow-400">{team.D}</div>
                        <div className="text-center text-red-400">{team.L}</div>
                        <div className="text-center">{team.GD > 0 ? '+' : ''}{team.GD}</div>
                        <div className="text-center font-black text-[#39FF14]">{team.Pts}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {/* Top 3 Podium */}
            {getCategoryData().length >= 3 && (
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[1, 0, 2].map((idx) => {
                  const item = getCategoryData()[idx];
                  const colors = ['#C0C0C0', '#FFD700', '#CD7F32'];
                  const podiumColor = colors[idx === 1 ? 1 : idx === 0 ? 0 : 2];
                  const heights = ['h-32', 'h-40', 'h-28'];
                  return (
                    <motion.div
                      key={item.rank}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <div className="relative mb-2">
                        <div 
                          className="w-16 h-16 rounded-full overflow-hidden border-2 bg-zinc-800"
                          style={{ borderColor: podiumColor, boxShadow: `0 0 20px ${podiumColor}50` }}
                        >
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div 
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-black"
                          style={{ backgroundColor: podiumColor }}
                        >
                          {item.rank}
                        </div>
                      </div>
                      <div className={`w-full ${heights[idx === 1 ? 1 : idx === 0 ? 0 : 2]} rounded-t-xl flex flex-col items-center justify-end pb-3 px-2`}
                        style={{ background: `linear-gradient(180deg, transparent 0%, ${podiumColor}30 100%)`, border: `1px solid ${podiumColor}40` }}
                      >
                        <p className="text-[10px] font-bold text-center mb-1 line-clamp-1">{item.name}</p>
                        <p className="text-base">{item.flag}</p>
                        <p className="font-mono font-black text-sm" style={{ color: podiumColor }}>
                          {activeCategory === 'boot' && `${item.goals}⚽`}
                          {activeCategory === 'glove' && `${item.cleanSheets}🧤`}
                          {activeCategory === 'ball' && `${item.rating}⭐`}
                          {activeCategory === 'young' && `${item.rating}⭐`}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Full ranking list */}
            {getCategoryData().slice(3).map((item, idx) => {
              const labels = getStatLabel(item);
              return (
                <motion.div
                  key={item.rank}
                  data-testid={`stats-rank-${item.rank}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-[#111115] border border-white/10 rounded-xl p-3 flex items-center gap-3"
                >
                  <div className="w-8 text-center">
                    <p className="font-black text-sm text-zinc-500">#{item.rank}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 flex-shrink-0 bg-zinc-800">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate flex items-center gap-1">
                      {item.name} <span>{item.flag}</span>
                    </p>
                    <p className="text-xs text-zinc-500">{labels.secondary}</p>
                  </div>
                  <p className="font-mono font-black text-sm text-[#FFB800]">{labels.primary}</p>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
