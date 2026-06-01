import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { motion } from 'framer-motion';
import { 
  Home, Trophy, MessageSquare, Brain, PlayCircle, User, Zap, Crown,
  BarChart3, Calendar, Users
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { profile } = useAppContext();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/', color: '#39FF14' },
    { id: 'banter', icon: MessageSquare, label: 'Banter', path: '/banter', color: '#FF007F', badge: '12K' },
    { id: 'match', icon: PlayCircle, label: 'Match Hub', path: '/match', color: '#FF007F', live: true },
    { id: 'stats', icon: BarChart3, label: 'Stats Center', path: '/stats', color: '#FFB800' },
    { id: 'calendar', icon: Calendar, label: 'Schedule', path: '/calendar', color: '#39FF14' },
    { id: 'fantasy', icon: Trophy, label: 'Fantasy', path: '/fantasy', color: '#FFB800' },
    { id: 'friends', icon: Users, label: 'Friends', path: '/friends', color: '#FF007F' },
    { id: 'ai', icon: Brain, label: 'AI Tactics', path: '/ai', color: '#00E5FF' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile', color: '#FFFFFF' }
  ];

  return (
    <aside 
      data-testid="sidebar"
      className="hidden md:flex flex-col w-72 h-screen bg-[#0A0A0F] border-r border-white/5 sticky top-0 left-0"
    >
      {/* Logo */}
      <div className="p-6 border-b border-white/5">
        <button onClick={() => navigate('/')} className="flex items-center gap-3 w-full">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#39FF14] via-[#00E5FF] to-[#FF007F] flex items-center justify-center shadow-lg shadow-[#39FF14]/30">
            <Zap className="w-6 h-6 text-black" strokeWidth={3} />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-black tracking-tighter">OffPitch</h1>
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">World Cup Hub</p>
          </div>
        </button>
      </div>

      {/* Profile Card */}
      {profile && (
        <div className="m-4">
          <div className="rounded-2xl p-[2px] bg-gradient-to-r from-[#39FF14] via-[#00E5FF] to-[#FF007F]">
            <div className="bg-[#111115] rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2" style={{ borderColor: profile.team?.color || '#39FF14' }}>
                  {profile.avatar ? (
                    <img src={profile.avatar} alt={profile.username} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-xl font-bold">
                      {profile.username?.[0]?.toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-black text-sm truncate flex items-center gap-1">
                    {profile.username}
                    <Crown className="w-3 h-3 text-[#FFB800] flex-shrink-0" />
                  </p>
                  <p className="text-xs text-zinc-400 truncate">{profile.team?.flag} {profile.team?.name}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1 pt-3 border-t border-white/5">
                <div className="text-center">
                  <p className="text-sm font-black font-mono text-[#39FF14]">0</p>
                  <p className="text-[9px] text-zinc-500 uppercase">Pts</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-black font-mono text-[#00E5FF]">--</p>
                  <p className="text-[9px] text-zinc-500 uppercase">Rank</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-black font-mono text-[#FF007F]">0</p>
                  <p className="text-[9px] text-zinc-500 uppercase">Streak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <motion.li key={item.id} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                <button
                  data-testid={`sidebar-nav-${item.id}`}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                    isActive 
                      ? 'bg-white/5' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                    style={{ 
                      backgroundColor: isActive ? `${item.color}30` : 'transparent',
                      border: isActive ? `1px solid ${item.color}50` : '1px solid transparent'
                    }}
                  >
                    <Icon 
                      className="w-4 h-4" 
                      style={{ color: isActive ? item.color : '#71717a' }}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  </div>
                  <span 
                    className="font-bold text-sm flex-1 text-left"
                    style={{ color: isActive ? item.color : '#a1a1aa' }}
                  >
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-zinc-400">
                      {item.badge}
                    </span>
                  )}
                  {item.live && (
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-red-500/20 border border-red-500/40 rounded-full">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-[9px] font-bold text-red-400">LIVE</span>
                    </div>
                  )}
                </button>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/5">
        <div className="bg-gradient-to-br from-[#FF007F]/10 to-[#39FF14]/10 rounded-xl p-3 border border-white/5">
          <p className="text-xs font-bold mb-1">2026 World Cup</p>
          <p className="text-[10px] text-zinc-500">USA · Canada · Mexico</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
