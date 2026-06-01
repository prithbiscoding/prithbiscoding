import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const LiveStats = ({ stats }) => {
  const statItems = [
    {
      label: 'Possession',
      home: stats.possession.home,
      away: stats.possession.away,
      color: '#39FF14'
    },
    {
      label: 'Expected Goals (xG)',
      home: stats.xG.home,
      away: stats.xG.away,
      color: '#00E5FF',
      decimal: true
    },
    {
      label: 'Shots on Target',
      home: stats.shotsOnTarget.home,
      away: stats.shotsOnTarget.away,
      color: '#FF007F'
    }
  ];

  return (
    <div data-testid="live-stats" className="bg-[#111115] border border-white/10 rounded-md p-6">
      <h3 className="font-bold text-lg mb-6">Match Statistics</h3>
      
      <div className="space-y-8">
        {statItems.map((stat, index) => {
          const total = stat.home + stat.away;
          const homePercent = (stat.home / total) * 100;
          const awayPercent = (stat.away / total) * 100;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-3"
            >
              {/* Label and Values */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-lg font-bold" style={{ color: stat.color }}>
                  {stat.decimal ? stat.home.toFixed(1) : stat.home}
                </span>
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="font-mono text-lg font-bold" style={{ color: stat.color }}>
                  {stat.decimal ? stat.away.toFixed(1) : stat.away}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-4 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${homePercent}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="absolute left-0 top-0 h-full"
                  style={{ backgroundColor: stat.color }}
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${awayPercent}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="absolute right-0 top-0 h-full opacity-50"
                  style={{ backgroundColor: stat.color }}
                />
              </div>

              {/* Percentage */}
              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>{homePercent.toFixed(0)}%</span>
                <span>{awayPercent.toFixed(0)}%</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveStats;