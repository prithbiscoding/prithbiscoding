import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Play, UserPlus, Bell, Search, Activity } from 'lucide-react';
import { FRIEND_ACTIVITY, WATCH_PARTIES, LEADERBOARD_FRIENDS } from '@/data/mockData';
import { toast } from 'sonner';

const FriendsPage = () => {
  const [activeTab, setActiveTab] = useState('activity');
  const [searchTerm, setSearchTerm] = useState('');

  const moodColors = {
    hyped: '#FF007F',
    'fired up': '#FFB800',
    analytical: '#00E5FF',
    celebrating: '#39FF14'
  };

  return (
    <div className="min-h-screen bg-[#08080A] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[#08080A]/90 backdrop-blur-xl border-b border-white/5">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
              <Users className="w-6 h-6 text-[#FF007F]" />
              Friends
            </h1>
            <button 
              data-testid="add-friend-button"
              onClick={() => toast.success('Friend invite link copied! Share it 🚀')}
              className="px-3 py-1.5 bg-gradient-to-r from-[#39FF14] to-[#00E5FF] text-black font-bold rounded-full text-xs flex items-center gap-1.5"
            >
              <UserPlus className="w-3.5 h-3.5" />
              Invite
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 pb-3 flex gap-1">
          {[
            { id: 'activity', label: 'Activity', icon: Activity },
            { id: 'parties', label: 'Watch Parties', icon: Play },
            { id: 'leaderboard', label: 'Rankings', icon: Users }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                data-testid={`friends-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-3 py-2 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-[#FF007F] to-[#FFB800] text-white' 
                    : 'bg-[#111115] text-zinc-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4">
        {activeTab === 'activity' && (
          <div className="space-y-3">
            <p className="text-xs text-zinc-500 mb-2">Live friend activity · {FRIEND_ACTIVITY.filter(f => f.online).length} online</p>
            {FRIEND_ACTIVITY.map((friend, idx) => (
              <motion.div
                key={friend.username}
                data-testid={`friend-${friend.username}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#111115] border border-white/10 rounded-2xl p-3 flex items-center gap-3"
              >
                <div className="relative flex-shrink-0">
                  <img src={friend.avatar} alt={friend.username} className="w-12 h-12 rounded-full" />
                  {friend.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#39FF14] rounded-full border-2 border-[#111115]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate">{friend.username}</p>
                  <p className="text-xs text-zinc-400 truncate">{friend.status}</p>
                </div>
                <span 
                  className="px-2 py-1 rounded-full text-[10px] font-bold capitalize"
                  style={{ 
                    backgroundColor: `${moodColors[friend.mood]}20`, 
                    color: moodColors[friend.mood] 
                  }}
                >
                  {friend.mood}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'parties' && (
          <div className="space-y-3">
            <p className="text-xs text-zinc-500 mb-2">Join friends watching live matches together</p>
            {WATCH_PARTIES.map((party, idx) => (
              <motion.button
                key={party.id}
                data-testid={`party-${party.id}`}
                onClick={() => toast.success(`Joined "${party.match}" party! 🎉`)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`w-full rounded-2xl p-[2px] bg-gradient-to-br ${party.gradient}`}
              >
                <div className="bg-[#111115] rounded-2xl p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-left">
                      <p className="font-black text-base mb-1">{party.match}</p>
                      <p className="text-xs text-zinc-400">{party.theme}</p>
                    </div>
                    {party.live && (
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-red-500/20 border border-red-500/40 rounded-full">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                        <span className="font-bold text-[10px] text-red-400">LIVE</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="text-left">
                      <p className="text-[10px] text-zinc-500">Hosted by</p>
                      <p className="text-xs font-bold">{party.host}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {LEADERBOARD_FRIENDS.slice(0, 4).map((f) => (
                          <img key={f.id} src={f.avatar} alt="" className="w-7 h-7 rounded-full border-2 border-[#111115]" />
                        ))}
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-black text-[#FF007F]">{party.viewers}</p>
                        <p className="text-[10px] text-zinc-500">watching</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="space-y-2">
            <p className="text-xs text-zinc-500 mb-2">Friend rankings this tournament</p>
            {LEADERBOARD_FRIENDS.map((friend, idx) => (
              <motion.div
                key={friend.id}
                data-testid={`leaderboard-${friend.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`p-3 rounded-xl border flex items-center gap-3 ${
                  friend.rank === 1 
                    ? 'border-[#FFB800] bg-[#FFB800]/5' 
                    : 'border-white/10'
                }`}
              >
                <div className="w-8 text-center font-black text-sm" style={{ color: friend.rank <= 3 ? '#FFB800' : '#a1a1aa' }}>
                  #{friend.rank}
                </div>
                <img src={friend.avatar} alt={friend.username} className="w-10 h-10 rounded-full border border-white/20" />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate">{friend.username}</p>
                  <p className="text-xs text-zinc-500">{friend.streak}🔥 streak · {friend.teamFlag}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-black text-sm text-[#39FF14]">{friend.points}</p>
                  <p className="text-[10px] text-zinc-500">pts</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;
