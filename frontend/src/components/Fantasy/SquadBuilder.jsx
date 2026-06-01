import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Lock, Unlock, DollarSign } from 'lucide-react';
import PlayerSelectModal from './PlayerSelectModal';
import Leaderboard from './Leaderboard';
import { toast } from 'sonner';

const FORMATION = [
  { id: 'gk1', position: 'GK', x: 50, y: 90, label: 'GK' },
  { id: 'def1', position: 'DEF', x: 20, y: 70, label: 'LB' },
  { id: 'def2', position: 'DEF', x: 37, y: 73, label: 'CB' },
  { id: 'def3', position: 'DEF', x: 63, y: 73, label: 'CB' },
  { id: 'def4', position: 'DEF', x: 80, y: 70, label: 'RB' },
  { id: 'mid1', position: 'MID', x: 25, y: 48, label: 'LM' },
  { id: 'mid2', position: 'MID', x: 50, y: 50, label: 'CM' },
  { id: 'mid3', position: 'MID', x: 75, y: 48, label: 'RM' },
  { id: 'fwd1', position: 'FWD', x: 30, y: 25, label: 'LW' },
  { id: 'fwd2', position: 'FWD', x: 50, y: 20, label: 'ST' },
  { id: 'fwd3', position: 'FWD', x: 70, y: 25, label: 'RW' }
];

const MAX_BUDGET = 100;

const SquadBuilder = () => {
  const { squad, setSquad } = useAppContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const totalSpent = squad.players?.reduce((sum, p) => sum + (p?.price || 0), 0) || 0;
  const remainingBudget = MAX_BUDGET - totalSpent;
  const selectedPlayerIds = squad.players?.filter(p => p).map(p => p.id) || [];

  const handleSlotClick = (slot) => {
    if (squad.locked) {
      toast.error('Squad is locked! Unlock to make changes.');
      return;
    }
    setSelectedSlot(slot);
    setModalOpen(true);
  };

  const handlePlayerSelect = (player) => {
    const newPlayers = [...(squad.players || [])];
    const slotIndex = FORMATION.findIndex(f => f.id === selectedSlot.id);
    newPlayers[slotIndex] = player;
    
    setSquad({ ...squad, players: newPlayers });
    setModalOpen(false);
    toast.success(`${player.name} added to your squad!`);
  };

  const handleLockSquad = () => {
    if (squad.players?.filter(p => p).length !== 11) {
      toast.error('Please select all 11 players before locking!');
      return;
    }
    setSquad({ ...squad, locked: !squad.locked });
    toast.success(squad.locked ? 'Squad unlocked!' : 'Squad locked! Good luck!');
  };

  const getPlayerInSlot = (slotId) => {
    const slotIndex = FORMATION.findIndex(f => f.id === slotId);
    return squad.players?.[slotIndex];
  };

  return (
    <div className="min-h-screen bg-[#08080A] p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
            <span className="text-neon-cyan">⚡</span> Fantasy Tournament
          </h1>
          <p className="text-zinc-400">Build your ultimate World Cup squad</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Squad Builder Pitch */}
          <div className="lg:col-span-2">
            <div className="bg-[#111115] border border-white/10 rounded-md p-4 md:p-6">
              {/* Budget Bar */}
              <div className="mb-6 p-4 bg-[#1A1A24] rounded-md border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold uppercase tracking-wider">Budget</span>
                  <span className="font-mono text-lg font-bold">
                    <span className="text-neon-lime">£{remainingBudget.toFixed(1)}M</span>
                    <span className="text-zinc-500"> / £{MAX_BUDGET}M</span>
                  </span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(totalSpent / MAX_BUDGET) * 100}%` }}
                    className="h-full bg-neon-lime"
                  />
                </div>
                <div className="mt-2 text-xs text-zinc-500 text-center">
                  {squad.players?.filter(p => p).length || 0} / 11 players selected
                </div>
              </div>

              {/* Pitch */}
              <div 
                data-testid="squad-builder-pitch"
                className="relative w-full aspect-[3/4] rounded-md overflow-hidden"
                style={{
                  backgroundImage: `url(https://static.prod-images.emergentagent.com/jobs/0dc3c1f4-3ca6-4897-8760-a412a7a2ce56/images/8baf78383732f6b2412de0dd27bab19c0afe9caec553ffe44de5619a037e0102.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
                
                {FORMATION.map((slot) => {
                  const player = getPlayerInSlot(slot.id);
                  
                  return (
                    <motion.button
                      key={slot.id}
                      data-testid={`squad-slot-${slot.id}`}
                      onClick={() => handleSlotClick(slot)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${slot.x}%`, top: `${slot.y}%` }}
                    >
                      {player ? (
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-neon-lime glow-lime">
                            <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="bg-black/80 px-2 py-1 rounded text-xs font-bold backdrop-blur-sm">
                            {player.name.split(' ').pop()}
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-dashed border-white/30 bg-black/50 backdrop-blur-sm flex items-center justify-center hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all">
                            <Plus className="w-6 h-6 text-white/50" />
                          </div>
                          <div className="bg-black/80 px-2 py-1 rounded text-xs font-bold backdrop-blur-sm text-zinc-400">
                            {slot.label}
                          </div>
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Lock Button */}
              <motion.button
                data-testid="lock-squad-button"
                onClick={handleLockSquad}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full mt-6 py-4 rounded-md font-bold flex items-center justify-center gap-2 transition-all ${
                  squad.locked
                    ? 'bg-zinc-800 text-white border border-white/20'
                    : 'bg-neon-lime text-black'
                }`}
              >
                {squad.locked ? (
                  <>
                    <Unlock className="w-5 h-5" />
                    Unlock Squad
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    Lock Squad
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="lg:col-span-1">
            <Leaderboard />
          </div>
        </div>
      </div>

      {/* Player Selection Modal */}
      <AnimatePresence>
        {modalOpen && selectedSlot && (
          <PlayerSelectModal
            position={selectedSlot.position}
            onSelect={handlePlayerSelect}
            onClose={() => setModalOpen(false)}
            currentBudget={remainingBudget}
            selectedPlayerIds={selectedPlayerIds}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SquadBuilder;