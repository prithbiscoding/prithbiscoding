import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, MessageSquare, Brain, PlayCircle, Zap, TrendingUp, 
  Flame, Users, Bell, Search, Sparkles, Star, Crown 
} from 'lucide-react';
import { MATCH_DATA, TRENDING_HASHTAGS, MATCH_STORIES, BANTER_POSTS, HERO_IMAGES } from '@/data/mockData';
import Stories from '@/components/Banter/Stories';

const Home = () => {
  const navigate = useNavigate();
  const { profile } = useAppContext();
  const [liveCount, setLiveCount] = useState(12847);

  // Simulate live viewer count
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 20) - 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 'fantasy',
      icon: Trophy,
      title: 'Fantasy',
      subtitle: 'Build & Compete',
      gradient: 'from-[#39FF14] via-emerald-400 to-cyan-400',
      iconBg: '#39FF14',
      path: '/fantasy',
      emoji: '🏆'
    },
    {
      id: 'banter',
      icon: MessageSquare,
      title: 'Banter',
      subtitle: 'Hot Takes',
      gradient: 'from-[#FF007F] via-fuchsia-500 to-purple-500',
      iconBg: '#FF007F',
      path: '/banter',
      emoji: '🔥'
    },
    {
      id: 'ai',
      icon: Brain,
      title: 'AI Coach',
      subtitle: 'Chat Legends',
      gradient: 'from-[#00E5FF] via-sky-500 to-blue-600',
      iconBg: '#00E5FF',
      path: '/ai',
      emoji: '🧠'
    },
    {
      id: 'match',
      icon: PlayCircle,
      title: 'Live',
      subtitle: 'Match Hub',
      gradient: 'from-[#FFB800] via-orange-500 to-red-500',
      iconBg: '#FFB800',
      path: '/match',
      emoji: '⚽'
    }
  ];

  return (
    <div className="min-h-screen bg-[#08080A] pb-20 md:pb-6">
      {/* Top Header - Mobile */}
      <div className="md:hidden sticky top-0 z-40 bg-[#08080A]/90 backdrop-blur-xl border-b border-white/5">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#39FF14] via-[#00E5FF] to-[#FF007F] flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" strokeWidth={3} />
            </div>
            <h1 className="text-xl font-black tracking-tight">OffPitch</h1>
          </div>
          <div className="flex items-center gap-2">
            <button data-testid="search-button" className="p-2 hover:bg-white/5 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button data-testid="notifications-button" className="p-2 hover:bg-white/5 rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF007F] rounded-full" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section - Mobile First */}
      <div className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-20 w-72 h-72 bg-[#39FF14] rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-20 -right-20 w-72 h-72 bg-[#FF007F] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-[#00E5FF] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 px-4 pt-6 pb-8 md:pt-12 md:pb-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Live Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Live Now</span>
              <span className="text-xs text-zinc-400">·</span>
              <span className="text-xs font-mono text-white">{liveCount.toLocaleString()} fans</span>
            </div>

            {/* Greeting */}
            {profile && (
              <p className="text-sm text-zinc-400 mb-2">
                Yo, <span className="font-bold text-white">{profile.username}</span> {profile.team?.flag} ✨
              </p>
            )}

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-3 leading-none">
              <span className="text-white">World Cup</span>
              <br />
              <span className="bg-gradient-to-r from-[#39FF14] via-[#00E5FF] to-[#FF007F] bg-clip-text text-transparent">
                vibes only.
              </span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg max-w-xl">
              The only place worth being during matchday. Forget Twitter. ⚽🔥
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stories Bar */}
      <Stories />

      {/* Live Match Card - Vibrant */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-4 mt-6"
      >
        <button
          data-testid="live-match-card"
          onClick={() => navigate('/match')}
          className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF007F]/20 via-[#0055A4]/20 to-[#CE1124]/20 border border-white/10 p-5 hover:border-white/30 transition-all"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <img src={HERO_IMAGES.fansCrowd} alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Live · {MATCH_DATA.minute}'</span>
              </div>
              <span className="text-xs text-zinc-400 font-mono">{MATCH_DATA.stadium}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="text-4xl mb-1">{MATCH_DATA.homeTeam.flag}</div>
                <p className="font-bold text-white text-sm">{MATCH_DATA.homeTeam.name}</p>
              </div>
              
              <div className="text-center px-4">
                <p className="text-4xl md:text-5xl font-black font-mono bg-gradient-to-br from-[#39FF14] to-[#00E5FF] bg-clip-text text-transparent">
                  {MATCH_DATA.homeTeam.score} - {MATCH_DATA.awayTeam.score}
                </p>
                <p className="text-xs text-zinc-400 mt-1 font-mono">VS</p>
              </div>

              <div className="text-center flex-1">
                <div className="text-4xl mb-1">{MATCH_DATA.awayTeam.flag}</div>
                <p className="font-bold text-white text-sm">{MATCH_DATA.awayTeam.name}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-400">
              <Flame className="w-3 h-3 text-[#FF007F]" />
              <span>Tap for live stats & spicy commentary</span>
            </div>
          </div>
        </button>
      </motion.div>

      {/* Feature Grid - Colorful */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-black mb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#FFB800]" />
          Quick Access
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.button
                key={feature.id}
                data-testid={`home-feature-${feature.id}`}
                onClick={() => navigate(feature.path)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.gradient} p-[2px] group`}
              >
                <div className="bg-[#08080A] rounded-2xl p-4 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{feature.emoji}</span>
                    <div 
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${feature.iconBg}20`, border: `1px solid ${feature.iconBg}40` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: feature.iconBg }} />
                    </div>
                  </div>
                  <p className="font-black text-xl text-left">{feature.title}</p>
                  <p className="text-xs text-zinc-400 text-left">{feature.subtitle}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Trending Hashtags */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-black mb-3 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#00E5FF]" />
          Trending Now
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
          {TRENDING_HASHTAGS.map((tag, idx) => (
            <motion.button
              key={tag.tag}
              data-testid={`trending-${tag.tag}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex-shrink-0 px-4 py-3 rounded-full border bg-[#111115] hover:scale-105 transition-transform"
              style={{ borderColor: `${tag.color}40` }}
            >
              <p className="font-black text-sm" style={{ color: tag.color }}>{tag.tag}</p>
              <p className="text-xs text-zinc-500 font-mono">{tag.posts} posts</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Hot Takes Preview */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-black flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#FF007F]" />
            Hot Takes
          </h2>
          <button 
            data-testid="see-all-banter"
            onClick={() => navigate('/banter')}
            className="text-xs font-bold text-[#39FF14] hover:underline"
          >
            See All →
          </button>
        </div>

        <div className="space-y-3">
          {BANTER_POSTS.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate('/banter')}
              className="bg-[#111115] border border-white/10 rounded-2xl p-4 cursor-pointer hover:border-white/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full border border-white/20" />
                <div className="flex-1">
                  <p className="font-bold text-sm flex items-center gap-1">
                    {post.author} <span>{post.teamFlag}</span>
                  </p>
                  <p className="text-xs text-zinc-500">{post.cheers.toLocaleString()} cheers</p>
                </div>
                {post.reactions && (
                  <div className="flex -space-x-1">
                    {Object.keys(post.reactions).slice(0, 3).map((emoji) => (
                      <span key={emoji} className="text-lg">{emoji}</span>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-sm leading-relaxed">{post.content}</p>
              {post.image && (
                <div className="mt-3 rounded-xl overflow-hidden">
                  <img src={post.image} alt="" className="w-full h-40 object-cover" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Stats Card - if profile */}
      {profile && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="px-4 mt-6"
        >
          <div className="rounded-2xl p-[2px] bg-gradient-to-r from-[#39FF14] via-[#00E5FF] to-[#FF007F]">
            <div className="bg-[#08080A] rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2" style={{ borderColor: profile.team?.color || '#39FF14' }}>
                  {profile.avatar ? (
                    <img src={profile.avatar} alt={profile.username} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center font-bold text-lg">
                      {profile.username?.[0]?.toUpperCase()}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-black text-lg">{profile.username}</p>
                  <p className="text-xs text-zinc-400">{profile.team?.flag} {profile.team?.name} fan</p>
                </div>
                <Crown className="w-5 h-5 text-[#FFB800] ml-auto" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#111115] rounded-xl p-3 text-center">
                  <p className="text-2xl font-black font-mono text-[#39FF14]">0</p>
                  <p className="text-xs text-zinc-500 mt-1">Points</p>
                </div>
                <div className="bg-[#111115] rounded-xl p-3 text-center">
                  <p className="text-2xl font-black font-mono text-[#00E5FF]">--</p>
                  <p className="text-xs text-zinc-500 mt-1">Rank</p>
                </div>
                <div className="bg-[#111115] rounded-xl p-3 text-center">
                  <p className="text-2xl font-black font-mono text-[#FF007F]">0</p>
                  <p className="text-xs text-zinc-500 mt-1">Streak</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Bottom CTA */}
      <div className="px-4 mt-8 mb-6 text-center">
        <p className="text-xs text-zinc-500">
          Built for fans. By fans. <span className="text-[#39FF14]">⚡</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
