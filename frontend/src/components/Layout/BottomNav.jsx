import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { motion } from 'framer-motion';
import { 
  Home, Trophy, MessageSquare, Brain, PlayCircle, User 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { profile } = useAppContext();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/', color: '#39FF14' },
    { id: 'banter', icon: MessageSquare, label: 'Banter', path: '/banter', color: '#FF007F' },
    { id: 'fantasy', icon: Trophy, label: 'Fantasy', path: '/fantasy', color: '#FFB800' },
    { id: 'ai', icon: Brain, label: 'AI', path: '/ai', color: '#00E5FF' },
    { id: 'match', icon: PlayCircle, label: 'Live', path: '/match', color: '#FF007F' }
  ];

  return (
    <nav 
      data-testid="bottom-navigation"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      {/* Glass bg */}
      <div className="backdrop-blur-2xl bg-[#08080A]/85 border-t border-white/10">
        <div className="flex items-center justify-around px-2 py-2 safe-area-bottom">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <motion.button
                key={item.id}
                data-testid={`bottom-nav-${item.id}`}
                onClick={() => navigate(item.path)}
                whileTap={{ scale: 0.85 }}
                className="flex flex-col items-center gap-0.5 px-3 py-1.5 relative min-w-[56px]"
              >
                <div 
                  className={`p-2 rounded-xl transition-all ${
                    isActive ? 'scale-110' : ''
                  }`}
                  style={isActive ? { 
                    backgroundColor: `${item.color}20`,
                    boxShadow: `0 0 20px ${item.color}30`
                  } : {}}
                >
                  <Icon 
                    className="w-5 h-5 transition-all" 
                    style={{ color: isActive ? item.color : '#71717a' }}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                </div>
                <span 
                  className="text-[10px] font-bold transition-all"
                  style={{ color: isActive ? item.color : '#52525b' }}
                >
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeBottomTab"
                    className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
