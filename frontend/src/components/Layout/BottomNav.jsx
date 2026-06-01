import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Trophy, MessageSquare, Brain, PlayCircle, MoreHorizontal, 
  Calendar, BarChart3, X
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);

  const primaryNav = [
    { id: 'home', icon: Home, label: 'Home', path: '/', color: '#39FF14' },
    { id: 'banter', icon: MessageSquare, label: 'Banter', path: '/banter', color: '#FF007F' },
    { id: 'match', icon: PlayCircle, label: 'Live', path: '/match', color: '#FF007F' },
    { id: 'stats', icon: BarChart3, label: 'Stats', path: '/stats', color: '#FFB800' },
  ];

  const moreNav = [
    { id: 'fantasy', icon: Trophy, label: 'Fantasy', path: '/fantasy', color: '#FFB800' },
    { id: 'calendar', icon: Calendar, label: 'Schedule', path: '/calendar', color: '#39FF14' },
    { id: 'ai', icon: Brain, label: 'AI Coach', path: '/ai', color: '#00E5FF' },
  ];

  const handleMoreClick = (path) => {
    navigate(path);
    setShowMore(false);
  };

  return (
    <>
      <nav 
        data-testid="bottom-navigation"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      >
        <div className="backdrop-blur-2xl bg-[#08080A]/85 border-t border-white/10">
          <div className="flex items-center justify-around px-2 py-2 safe-area-bottom">
            {primaryNav.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.button
                  key={item.id}
                  data-testid={`bottom-nav-${item.id}`}
                  onClick={() => navigate(item.path)}
                  whileTap={{ scale: 0.85 }}
                  className="flex flex-col items-center gap-0.5 px-2 py-1.5 relative min-w-[56px]"
                >
                  <div 
                    className={`p-2 rounded-xl transition-all ${isActive ? 'scale-110' : ''}`}
                    style={isActive ? { backgroundColor: `${item.color}20`, boxShadow: `0 0 20px ${item.color}30` } : {}}
                  >
                    <Icon 
                      className="w-5 h-5" 
                      style={{ color: isActive ? item.color : '#71717a' }}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  </div>
                  <span 
                    className="text-[10px] font-bold"
                    style={{ color: isActive ? item.color : '#52525b' }}
                  >
                    {item.label}
                  </span>
                </motion.button>
              );
            })}

            {/* More button */}
            <motion.button
              data-testid="bottom-nav-more"
              onClick={() => setShowMore(true)}
              whileTap={{ scale: 0.85 }}
              className="flex flex-col items-center gap-0.5 px-2 py-1.5 relative min-w-[56px]"
            >
              <div className="p-2 rounded-xl">
                <MoreHorizontal className="w-5 h-5 text-zinc-500" />
              </div>
              <span className="text-[10px] font-bold text-zinc-500">More</span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* More Menu */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl md:hidden flex items-end"
            onClick={() => setShowMore(false)}
          >
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              exit={{ y: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-[#111115] border-t border-white/10 rounded-t-3xl p-5 pb-8"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black text-lg">More Options</h3>
                <button
                  data-testid="close-more-menu"
                  onClick={() => setShowMore(false)}
                  className="p-2 hover:bg-white/5 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {moreNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      data-testid={`more-nav-${item.id}`}
                      onClick={() => handleMoreClick(item.path)}
                      className="flex flex-col items-center gap-2 p-4 bg-[#1A1A24] rounded-2xl border border-white/5 hover:border-white/20 transition-all"
                    >
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}50` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <span className="text-xs font-bold">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomNav;
