import React from 'react';
import { LEADERBOARD_FRIENDS } from '@/data/mockData';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Trophy, Medal, Award } from 'lucide-react';

const Leaderboard = () => {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-300" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="text-sm font-bold text-zinc-500">#{rank}</span>;
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-zinc-500" />;
    }
  };

  return (
    <div data-testid="leaderboard" className="bg-[#111115] border border-white/10 rounded-md overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-gradient-to-r from-neon-lime/10 to-neon-cyan/10">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Trophy className="w-5 h-5 text-neon-lime" />
          Friend Leaderboard
        </h2>
        <p className="text-xs text-zinc-400 mt-1">Top fantasy managers this week</p>
      </div>

      {/* Leaderboard List */}
      <div className="p-4">
        <div className="space-y-3">
          {LEADERBOARD_FRIENDS.map((friend, index) => (
            <motion.div
              key={friend.id}
              data-testid={`leaderboard-rank-${friend.rank}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 4 }}
              className={`p-3 rounded-md border transition-all ${
                friend.rank <= 3
                  ? 'border-neon-lime/30 bg-neon-lime/5'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Rank */}
                <div className="w-8 flex items-center justify-center">
                  {getRankIcon(friend.rank)}
                </div>

                {/* Avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                  <img src={friend.avatar} alt={friend.username} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-sm truncate">{friend.username}</p>
                    <span className="text-xs">{friend.teamFlag}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-xs text-neon-lime font-bold">{friend.points} pts</span>
                    {getTrendIcon(friend.trend)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-white/10 bg-[#1A1A24]">
        <p className="text-xs text-center text-zinc-500">Rankings update every matchday</p>
      </div>
    </div>
  );
};

export default Leaderboard;