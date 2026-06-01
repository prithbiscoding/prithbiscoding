import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TRIVIA_FACTS } from '@/data/mockData';
import { Lightbulb } from 'lucide-react';

const TriviaTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TRIVIA_FACTS.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      data-testid="trivia-ticker"
      className="bg-gradient-to-r from-neon-lime/10 to-neon-cyan/10 border border-neon-lime/30 rounded-md p-4 overflow-hidden"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-neon-lime/20 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-neon-lime" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold uppercase tracking-wider text-neon-lime mb-2">Did You Know?</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-sm leading-relaxed text-zinc-300"
            >
              {TRIVIA_FACTS[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TriviaTicker;