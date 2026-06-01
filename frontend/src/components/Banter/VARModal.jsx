import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

const VARModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, rotate: -2 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0.8, rotate: 2 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#111115] border-2 border-neon-magenta rounded-md overflow-hidden glow-magenta"
        style={{
          backgroundImage: `url(https://static.prod-images.emergentagent.com/jobs/0dc3c1f4-3ca6-4897-8760-a412a7a2ce56/images/a784347d287ffe7ff96c79089ac2ee5da3040f760375f353c8d8b607cbcfa60a.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="bg-black/80 backdrop-blur-md p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-neon-magenta/20 border border-neon-magenta flex items-center justify-center animate-pulse">
                <AlertTriangle className="w-6 h-6 text-neon-magenta" />
              </div>
              <div>
                <h2 className="text-xl font-black text-neon-magenta">VAR REVIEW</h2>
                <p className="text-xs text-zinc-400">Toxicity Check In Progress</p>
              </div>
            </div>
            <button
              data-testid="var-modal-close"
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-md">
              <p className="text-sm font-bold text-red-400 mb-2">⚠️ FOUL DETECTED</p>
              <p className="text-sm text-zinc-300">
                Your post contains language that violates our banter guidelines.
              </p>
            </div>

            <div className="p-4 bg-[#1A1A24] border border-white/10 rounded-md">
              <p className="text-sm text-zinc-300 mb-2">
                <span className="font-bold text-neon-lime">Keep it witty.</span> Keep it creative. Keep it healthy.
              </p>
              <p className="text-xs text-zinc-500">
                We're all here for the banter, but let's keep the conversation fun and respectful. Try rephrasing your take!
              </p>
            </div>
          </div>

          {/* Action */}
          <motion.button
            data-testid="var-modal-understand"
            onClick={onClose}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 py-4 bg-neon-magenta text-black font-bold rounded-md transition-all"
          >
            I Understand
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VARModal;