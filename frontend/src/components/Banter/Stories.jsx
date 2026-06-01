import React, { useState } from 'react';
import { MATCH_STORIES } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

const Stories = () => {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <>
      <div className="bg-gradient-to-r from-[#111115] via-[#1A1A24] to-[#111115] border-y border-white/10 py-4">
        <div className="px-4">
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-500 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            Live Match Stories
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {MATCH_STORIES.map((story, idx) => (
              <motion.button
                key={story.id}
                data-testid={`story-${story.id}`}
                onClick={() => setActiveStory(story)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 flex-shrink-0"
              >
                <div className="relative">
                  {/* Gradient ring */}
                  <div 
                    className={`w-20 h-20 rounded-full p-[2.5px] ${story.isLive ? 'animate-pulse' : ''}`}
                    style={{
                      background: story.isLive 
                        ? `conic-gradient(from 0deg, #39FF14, #00E5FF, #FF007F, #39FF14)` 
                        : `linear-gradient(135deg, ${story.color}, #FFFFFF20)`
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-[#08080A] p-[2px]">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img 
                          src={story.preview} 
                          alt={story.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Live indicator */}
                  {story.isLive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-red-500 rounded-full text-[10px] font-black text-white">
                      LIVE
                    </div>
                  )}
                </div>
                <span className="text-xs font-bold flex items-center gap-1">
                  <span>{story.flag}</span>
                  <span className="max-w-[60px] truncate">{story.label}</span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Story Viewer */}
      <AnimatePresence>
        {activeStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black"
            onClick={() => setActiveStory(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full h-full max-w-md mx-auto"
            >
              {/* Progress bar */}
              <div className="absolute top-4 left-4 right-4 z-10">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5 }}
                  onAnimationComplete={() => setActiveStory(null)}
                  className="h-1 bg-white rounded-full"
                />
              </div>

              {/* Header */}
              <div className="absolute top-8 left-4 right-4 z-10 flex items-center gap-3">
                <span className="text-3xl">{activeStory.flag}</span>
                <div>
                  <p className="font-bold text-white">{activeStory.label}</p>
                  {activeStory.isLive && (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-xs text-red-400 font-bold">LIVE NOW</span>
                    </div>
                  )}
                </div>
                <button
                  data-testid="close-story"
                  onClick={() => setActiveStory(null)}
                  className="ml-auto p-2 bg-black/50 rounded-full"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Story Image */}
              <img 
                src={activeStory.preview}
                alt={activeStory.label}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

              {/* Bottom content */}
              <div className="absolute bottom-8 left-4 right-4 z-10">
                <div className="p-4 bg-black/70 backdrop-blur-xl rounded-2xl border border-white/10">
                  <p className="text-white font-bold text-lg mb-2">
                    🔥 {activeStory.label} match coverage
                  </p>
                  <p className="text-zinc-300 text-sm">
                    Tap to view all match highlights, key moments and live commentary
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Stories;
