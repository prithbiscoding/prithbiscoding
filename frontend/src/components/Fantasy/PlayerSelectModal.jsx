import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PLAYERS } from '@/data/mockData';

const PlayerSelectModal = ({ position, onSelect, onClose, currentBudget, selectedPlayerIds }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const positionMap = {
    GK: 'GK',
    DEF: 'DF',
    MID: 'MF',
    FWD: 'FW'
  };

  const availablePlayers = PLAYERS
    .filter(p => p.position === positionMap[position])
    .filter(p => !selectedPlayerIds.includes(p.id))
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[80vh] bg-[#111115] border border-neon-cyan rounded-md overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Select {position}</h2>
            <p className="text-sm text-zinc-400">Budget Remaining: £{currentBudget.toFixed(1)}M</p>
          </div>
          <button
            data-testid="player-modal-close"
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-white/10">
          <input
            data-testid="player-search-input"
            type="text"
            placeholder="Search players..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-[#08080A] border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-cyan"
          />
        </div>

        {/* Players List */}
        <div className="overflow-y-auto max-h-[calc(80vh-180px)] p-4">
          <div className="space-y-3">
            {availablePlayers.map((player) => {
              const canAfford = player.price <= currentBudget;
              
              return (
                <motion.button
                  key={player.id}
                  data-testid={`player-card-${player.id}`}
                  onClick={() => canAfford && onSelect(player)}
                  disabled={!canAfford}
                  whileHover={canAfford ? { x: 4 } : {}}
                  className={`w-full p-4 rounded-md border flex items-center gap-4 transition-all ${
                    canAfford
                      ? 'border-white/10 hover:border-neon-cyan bg-[#1A1A24] cursor-pointer'
                      : 'border-white/5 bg-zinc-900/50 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20">
                    <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="font-bold text-lg">{player.name}</h3>
                        <p className="text-sm text-zinc-400">{player.team} • {player.position}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold font-mono text-neon-lime">£{player.price}M</p>
                        <p className="text-xs text-zinc-500">Form: {player.form}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs text-zinc-400 font-mono">
                      {player.goals !== undefined && <span>G: {player.goals}</span>}
                      {player.assists !== undefined && <span>A: {player.assists}</span>}
                      {player.saves !== undefined && <span>Saves: {player.saves}</span>}
                      {player.cleanSheets !== undefined && <span>CS: {player.cleanSheets}</span>}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PlayerSelectModal;