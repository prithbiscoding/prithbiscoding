import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';
import { MATCH_DATA, SOCIAL_TRENDING, TRIVIA_FACTS, MOTM_CANDIDATES, BROADCASTERS, WATCH_PARTIES } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, Activity, Users, Flame, Radio, Tv, Award, Play } from 'lucide-react';
import FormationView from './FormationView';
import LiveStats from './LiveStats';
import TriviaTicker from './TriviaTicker';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import Flag from '@/components/Flag';

const MatchHub = () => {
  const { matchPredictions, setMatchPredictions } = useAppContext();
  const [spicyMode, setSpicyMode] = useState(false);
  const [activeTab, setActiveTab] = useState('stats');
  const [motmVote, setMotmVote] = useState(null);

  const handlePredictionVote = (type, value) => {
    setMatchPredictions({ ...matchPredictions, [type]: value });
    toast.success(`Voted for ${value}!`);
  };

  const getCommentary = () => {
    return MATCH_DATA.commentary.map(c => ({
      ...c,
      displayText: spicyMode ? c.spicy : c.text
    }));
  };

  return (
    <div className="min-h-screen bg-[#08080A] pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-[#08080A]/90 backdrop-blur-xl border-b border-white/5">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
            <Radio className="w-6 h-6 text-[#FF007F] animate-pulse" />
            Live Hub
          </h1>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-red-400">{MATCH_DATA.minute}'</span>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Trivia Ticker */}
        <TriviaTicker />

        {/* Match Score Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-2xl p-[2px] bg-gradient-to-r from-[#0055A4] via-[#FFFFFF] to-[#CE1124]"
        >
          <div className="bg-[#111115] rounded-2xl p-5 relative overflow-hidden">
            {/* Animated bg */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative">
              <div className="text-center mb-3">
                <p className="text-xs text-zinc-500 font-mono">{MATCH_DATA.stadium}</p>
                <p className="text-[10px] text-zinc-600 mt-0.5">{MATCH_DATA.attendance} fans · {MATCH_DATA.weather}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <div className="flex justify-center mb-2">
                    <Flag teamId="FRA" emoji="🇫🇷" size="2xl" />
                  </div>
                  <p className="font-black text-white text-sm md:text-base">{MATCH_DATA.homeTeam.name}</p>
                </div>
                
                <div className="text-center px-4">
                  <p className="text-5xl md:text-6xl font-black font-mono leading-none">
                    <span className="text-white">{MATCH_DATA.homeTeam.score}</span>
                    <span className="text-zinc-600 mx-2">-</span>
                    <span className="text-white">{MATCH_DATA.awayTeam.score}</span>
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/20 border border-red-500/40 rounded-full">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs font-black text-red-400">LIVE · {MATCH_DATA.minute}'</span>
                  </div>
                </div>

                <div className="text-center flex-1">
                  <div className="flex justify-center mb-2">
                    <Flag teamId="ENG" emoji="🏴" size="2xl" />
                  </div>
                  <p className="font-black text-white text-sm md:text-base">{MATCH_DATA.awayTeam.name}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Spicy Mode Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`mt-4 rounded-2xl p-4 border transition-all ${
            spicyMode 
              ? 'bg-gradient-to-r from-[#FF007F]/20 via-[#FFB800]/20 to-[#FF007F]/20 border-[#FF007F]/40' 
              : 'bg-[#111115] border-white/10'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-2xl ${
                spicyMode ? 'bg-[#FF007F]/20' : 'bg-white/5'
              }`}>
                {spicyMode ? '🌶️' : '🎙️'}
              </div>
              <div>
                <p className="font-black text-sm">{spicyMode ? 'Spicy Mode' : 'Professional Mode'}</p>
                <p className="text-xs text-zinc-400">{spicyMode ? 'Banter commentary 🔥' : 'Traditional analysis'}</p>
              </div>
            </div>
            <Switch
              data-testid="spicy-mode-toggle"
              checked={spicyMode}
              onCheckedChange={(checked) => {
                setSpicyMode(checked);
                toast.success(checked ? '🌶️ Spicy Mode ON!' : 'Professional Mode ON');
              }}
              className="data-[state=checked]:bg-[#FF007F]"
            />
          </div>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
          <TabsList className="w-full bg-[#111115] border border-white/10 p-1 rounded-xl">
            <TabsTrigger 
              value="stats" 
              data-testid="tab-stats"
              className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#39FF14] data-[state=active]:to-[#00E5FF] data-[state=active]:text-black font-bold rounded-lg"
            >
              <Activity className="w-4 h-4 mr-2" />
              Stats
            </TabsTrigger>
            <TabsTrigger 
              value="formations" 
              data-testid="tab-formations"
              className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FF007F] data-[state=active]:to-[#FFB800] data-[state=active]:text-white font-bold rounded-lg"
            >
              <Users className="w-4 h-4 mr-2" />
              Formations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stats" className="mt-4">
            <LiveStats stats={MATCH_DATA.stats} />
          </TabsContent>

          <TabsContent value="formations" className="mt-4">
            <FormationView formations={MATCH_DATA.formations} />
          </TabsContent>
        </Tabs>

        {/* Live Commentary */}
        <div className="mt-4 bg-[#111115] border border-white/10 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-white/5 flex items-center gap-2">
            <Flame className={`w-5 h-5 ${spicyMode ? 'text-[#FF007F]' : 'text-[#00E5FF]'}`} />
            <h3 className="font-black">Live Commentary</h3>
          </div>
          <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
            {getCommentary().map((comment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-3 rounded-xl border ${
                  spicyMode 
                    ? 'bg-gradient-to-r from-[#FF007F]/10 to-[#FFB800]/10 border-[#FF007F]/20' 
                    : 'bg-[#1A1A24] border-white/5'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`font-mono text-xs font-black px-2 py-0.5 rounded-md flex-shrink-0 ${
                    spicyMode ? 'bg-[#FF007F]/20 text-[#FF007F]' : 'bg-[#39FF14]/20 text-[#39FF14]'
                  }`}>
                    {comment.minute}'
                  </span>
                  <p className="text-sm flex-1 leading-relaxed">{comment.displayText}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fan Predictions */}
        <div data-testid="fan-predictions" className="mt-4 bg-[#111115] border border-white/10 rounded-2xl p-4">
          <h3 className="font-black mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#FFB800]" />
            Fan Predictions
          </h3>
          <div className="space-y-2">
            {[
              { name: MATCH_DATA.homeTeam.name, flag: MATCH_DATA.homeTeam.flag, votes: 45, color: '#0055A4' },
              { name: 'Draw', flag: '🤝', votes: 20, color: '#71717a' },
              { name: MATCH_DATA.awayTeam.name, flag: MATCH_DATA.awayTeam.flag, votes: 35, color: '#CE1124' }
            ].map((option) => {
              const voted = matchPredictions.winner === option.name;
              return (
                <button
                  key={option.name}
                  data-testid={`vote-winner-${option.name.toLowerCase().replace(' ', '-')}`}
                  onClick={() => handlePredictionVote('winner', option.name)}
                  className={`w-full p-3 rounded-xl border transition-all overflow-hidden relative ${
                    voted 
                      ? 'border-[#39FF14] bg-[#39FF14]/10' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Background bar */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ 
                      background: `linear-gradient(90deg, ${option.color} ${option.votes}%, transparent ${option.votes}%)` 
                    }}
                  />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{option.flag}</span>
                      <span className="font-bold text-sm">{option.name}</span>
                    </div>
                    <span className="font-mono text-sm font-black" style={{ color: option.color === '#71717a' ? '#a1a1aa' : option.color }}>
                      {option.votes}%
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* MOTM Voting */}
        <div data-testid="motm-voting" className="mt-4 bg-[#111115] border border-white/10 rounded-2xl p-4">
          <h3 className="font-black mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#FFB800]" />
            Man of the Match
          </h3>
          <p className="text-xs text-zinc-400 mb-3">Vote for the standout player · {MOTM_CANDIDATES.reduce((sum, c) => sum + c.votes, 0).toLocaleString()} votes cast</p>
          <div className="space-y-2">
            {MOTM_CANDIDATES.map((player) => {
              const totalVotes = MOTM_CANDIDATES.reduce((sum, c) => sum + c.votes, 0);
              const pct = ((player.votes / totalVotes) * 100).toFixed(0);
              const voted = motmVote === player.id;
              return (
                <button
                  key={player.id}
                  data-testid={`motm-vote-${player.id}`}
                  onClick={() => {
                    setMotmVote(player.id);
                    toast.success(`Voted for ${player.name}! 🌟`);
                  }}
                  className={`w-full p-3 rounded-xl border transition-all relative overflow-hidden ${
                    voted ? 'border-[#FFB800] bg-[#FFB800]/10' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div 
                    className="absolute inset-0 opacity-15"
                    style={{ background: `linear-gradient(90deg, #FFB800 ${pct}%, transparent ${pct}%)` }}
                  />
                  <div className="relative flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-zinc-800 flex-shrink-0">
                      <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <Flag teamId={player.team} size="sm" />
                        <p className="font-bold text-sm truncate">{player.name}</p>
                      </div>
                      <p className="text-xs text-zinc-500">Rating {player.rating} · {player.goals}G {player.assists}A</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-mono font-black text-sm text-[#FFB800]">{pct}%</p>
                      <p className="text-[10px] text-zinc-500">{player.votes.toLocaleString()}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Watch Parties */}
        <div data-testid="watch-parties" className="mt-4">
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="font-black flex items-center gap-2">
              <Play className="w-5 h-5 text-[#FF007F]" />
              Live Watch Parties
            </h3>
            <span className="text-xs text-zinc-500 font-mono">{WATCH_PARTIES.filter(p => p.live).length} active</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {WATCH_PARTIES.map((party) => (
              <button
                key={party.id}
                data-testid={`watch-party-${party.id}`}
                onClick={() => toast.success(`Joining ${party.match} party! 🎉`)}
                className={`flex-shrink-0 w-64 rounded-2xl p-[2px] bg-gradient-to-br ${party.gradient}`}
              >
                <div className="bg-[#111115] rounded-2xl p-4 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-black text-sm">{party.match}</p>
                    {party.live && (
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-red-500/20 border border-red-500/40 rounded-md">
                        <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                        <span className="font-bold text-[9px] text-red-400">LIVE</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 mb-3">{party.theme}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-zinc-500">Hosted by</p>
                      <p className="text-xs font-bold">{party.host}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black text-[#FF007F]">{party.viewers}</p>
                      <p className="text-[10px] text-zinc-500">viewers</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Where to Watch */}
        <div data-testid="broadcasters" className="mt-4 bg-[#111115] border border-white/10 rounded-2xl p-4">
          <h3 className="font-black mb-3 flex items-center gap-2">
            <Tv className="w-5 h-5 text-[#00E5FF]" />
            Where to Watch
          </h3>
          <p className="text-xs text-zinc-400 mb-3">Live telecast info for major countries</p>
          <div className="grid grid-cols-2 gap-2">
            {BROADCASTERS.map((b) => (
              <div
                key={b.country}
                data-testid={`broadcaster-${b.country}`}
                className="p-3 bg-[#1A1A24] border border-white/5 rounded-xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src={`https://flagcdn.com/w40/${b.flag}.png`} 
                    alt={b.country}
                    className="w-6 h-4 rounded-sm object-cover"
                  />
                  <p className="text-xs font-bold">{b.country}</p>
                </div>
                <div className="space-y-1">
                  {b.channels.slice(0, 3).map((ch) => (
                    <p key={ch} className="text-[10px] text-zinc-400">📺 {ch}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Trending */}
        <div className="mt-4 bg-[#111115] border border-white/10 rounded-2xl p-4">
          <h3 className="font-black mb-4 flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#FF007F]" />
            Trending from Socials
          </h3>
          <div className="space-y-3">
            {SOCIAL_TRENDING.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-3 bg-[#1A1A24] border border-white/5 rounded-xl"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span 
                    className="text-xs font-black px-2 py-1 rounded-md flex-shrink-0" 
                    style={{ backgroundColor: social.color, color: '#fff' }}
                  >
                    {social.icon}
                  </span>
                  <p className="text-xs flex-1 leading-relaxed">{social.content}</p>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  <span className="text-xs text-zinc-500 font-mono">❤️ {social.likes}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchHub;
