import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { WC_MATCHES, WORLD_CUP_TEAMS } from '@/data/mockData';

const STAGES = ['All', 'Group Stage', 'Round of 32', 'Round of 16', 'Quarter Final', 'Semi Final', '3rd Place', 'FINAL'];

const CalendarPage = () => {
  const [activeStage, setActiveStage] = useState('All');

  const getTeamData = (id) => WORLD_CUP_TEAMS.find(t => t.id === id);

  const filteredMatches = activeStage === 'All' 
    ? WC_MATCHES
    : WC_MATCHES.filter(m => 
        m.stage === activeStage || 
        (activeStage === 'Group Stage' && m.stage.startsWith('Group'))
      );

  const grouped = filteredMatches.reduce((acc, match) => {
    if (!acc[match.date]) acc[match.date] = [];
    acc[match.date].push(match);
    return acc;
  }, {});

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-[#08080A] pb-24">
      <div className="sticky top-0 z-40 bg-[#08080A]/90 backdrop-blur-xl border-b border-white/5">
        <div className="px-4 py-3">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-[#39FF14]" />
            Schedule
          </h1>
          <p className="text-xs text-zinc-500 mt-1">World Cup 2026 · USA, Canada, Mexico · 48 teams · 104 matches</p>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {STAGES.map((stage) => (
            <button
              key={stage}
              data-testid={`stage-filter-${stage.replace(/ /g, '-')}`}
              onClick={() => setActiveStage(stage)}
              className={`flex-shrink-0 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
                activeStage === stage
                  ? 'bg-gradient-to-r from-[#39FF14] to-[#00E5FF] text-black'
                  : 'bg-[#111115] text-zinc-400 border border-white/10'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 mt-4 space-y-6">
        {Object.entries(grouped).map(([date, matches]) => (
          <div key={date}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-5 bg-[#39FF14] rounded-full" />
              <h3 className="font-black text-sm uppercase tracking-wider">{formatDate(date)}</h3>
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs text-zinc-500 font-mono">{matches.length} {matches.length === 1 ? 'match' : 'matches'}</span>
            </div>

            <div className="space-y-3">
              {matches.map((match, idx) => {
                const home = getTeamData(match.homeTeam);
                const away = getTeamData(match.awayTeam);
                const isLive = match.status === 'live';
                const isFinal = match.stage === 'FINAL';

                return (
                  <motion.div
                    key={match.id}
                    data-testid={`match-${match.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(idx * 0.03, 0.3) }}
                    className={`rounded-2xl p-[2px] ${
                      isFinal 
                        ? 'bg-gradient-to-r from-[#FFD700] via-[#FFB800] to-[#FFD700]' 
                        : isLive 
                          ? 'bg-gradient-to-r from-[#FF007F] via-[#FFB800] to-[#FF007F] animate-pulse' 
                          : 'bg-white/5'
                    }`}
                  >
                    <div className="bg-[#111115] rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-3 text-xs">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded-md font-bold ${
                            isFinal ? 'bg-[#FFD700]/20 text-[#FFD700]' : 'bg-white/5 text-zinc-400'
                          }`}>
                            {isFinal && '🏆 '}{match.stage}
                          </span>
                          {isLive && (
                            <div className="flex items-center gap-1 px-2 py-0.5 bg-red-500/20 border border-red-500/40 rounded-md">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                              <span className="font-bold text-red-400">LIVE {match.mins}'</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-zinc-500">
                          <Clock className="w-3 h-3" />
                          {match.time}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <span className="text-2xl">{home?.flag}</span>
                          <span className="font-bold text-sm truncate">{home?.name}</span>
                        </div>
                        <div className="px-4 text-center">
                          {isLive || match.status === 'completed' ? (
                            <p className="text-2xl font-black font-mono">
                              {match.homeScore} - {match.awayScore}
                            </p>
                          ) : (
                            <p className="text-sm text-zinc-500 font-mono">VS</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 flex-1 justify-end min-w-0">
                          <span className="font-bold text-sm truncate">{away?.name}</span>
                          <span className="text-2xl">{away?.flag}</span>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-500">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{match.venue} · {match.city}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;
