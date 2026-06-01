import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const FormationView = ({ formations }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const mockPlayerStats = {
    passing: Math.floor(Math.random() * 20) + 80,
    shots: Math.floor(Math.random() * 5) + 1,
    distance: (Math.random() * 3 + 8).toFixed(1)
  };

  return (
    <div data-testid="formation-view" className="space-y-6">
      {/* France Formation */}
      <div className="bg-[#111115] border border-white/10 rounded-md p-6">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <span>🇫🇷</span>
          France Formation
        </h3>
        <div 
          className="relative w-full aspect-[3/4] bg-gradient-to-b from-green-900/20 to-green-800/20 rounded-md border border-green-500/20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10%, rgba(34, 197, 94, 0.05) 10%, rgba(34, 197, 94, 0.05) 20%)'
          }}
        >
          {formations.france.map((player) => (
            <motion.button
              key={player.id}
              data-testid={`formation-player-${player.id}`}
              onClick={() => setSelectedPlayer({ ...player, ...mockPlayerStats, team: 'France' })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${player.x}%`, top: `${player.y}%` }}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-xs font-bold shadow-lg">
                  {player.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="bg-black/80 px-2 py-0.5 rounded text-xs font-bold backdrop-blur-sm whitespace-nowrap">
                  {player.name}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* England Formation */}
      <div className="bg-[#111115] border border-white/10 rounded-md p-6">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <span>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
          England Formation
        </h3>
        <div 
          className="relative w-full aspect-[3/4] bg-gradient-to-b from-red-900/20 to-red-800/20 rounded-md border border-red-500/20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10%, rgba(239, 68, 68, 0.05) 10%, rgba(239, 68, 68, 0.05) 20%)'
          }}
        >
          {formations.england.map((player) => (
            <motion.button
              key={player.id}
              data-testid={`formation-player-${player.id}`}
              onClick={() => setSelectedPlayer({ ...player, ...mockPlayerStats, team: 'England' })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${player.x}%`, top: `${player.y}%` }}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-red-600 flex items-center justify-center text-xs font-bold text-red-600 shadow-lg">
                  {player.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="bg-black/80 px-2 py-0.5 rounded text-xs font-bold backdrop-blur-sm whitespace-nowrap">
                  {player.name}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Player Stats Modal */}
      <AnimatePresence>
        {selectedPlayer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPlayer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-[#111115] border border-neon-cyan rounded-md p-6"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-black mb-1">{selectedPlayer.name}</h3>
                  <p className="text-sm text-zinc-400">{selectedPlayer.team} • {selectedPlayer.position}</p>
                </div>
                <button
                  data-testid="player-stats-close"
                  onClick={() => setSelectedPlayer(null)}
                  className="p-2 hover:bg-white/10 rounded-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#1A1A24] rounded-md">
                  <p className="text-xs text-zinc-500 mb-1">Passing Accuracy</p>
                  <p className="text-2xl font-bold font-mono text-neon-lime">{selectedPlayer.passing}%</p>
                </div>
                <div className="p-4 bg-[#1A1A24] rounded-md">
                  <p className="text-xs text-zinc-500 mb-1">Shots</p>
                  <p className="text-2xl font-bold font-mono text-neon-cyan">{selectedPlayer.shots}</p>
                </div>
                <div className="p-4 bg-[#1A1A24] rounded-md">
                  <p className="text-xs text-zinc-500 mb-1">Distance Run (km)</p>
                  <p className="text-2xl font-bold font-mono text-neon-magenta">{selectedPlayer.distance} km</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormationView;