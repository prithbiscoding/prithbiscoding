import React, { useState } from 'react';
import { AI_PERSONAS } from '@/data/mockData';
import { motion } from 'framer-motion';
import { Brain, MessageCircle, Sparkles } from 'lucide-react';
import ChatInterface from './ChatInterface';

const PersonaGrid = () => {
  const [selectedPersona, setSelectedPersona] = useState(null);

  if (selectedPersona) {
    return (
      <ChatInterface
        persona={selectedPersona}
        onBack={() => setSelectedPersona(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#08080A] pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-[#08080A]/90 backdrop-blur-xl border-b border-white/5">
        <div className="px-4 py-3">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
            <Brain className="w-6 h-6 text-[#00E5FF]" />
            Tactics Room
          </h1>
          <p className="text-xs text-zinc-500 mt-1">Chat with football legends · AI-powered</p>
        </div>
      </div>

      {/* Hero */}
      <div className="px-4 pt-6 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00E5FF]/20 via-[#FF007F]/10 to-[#39FF14]/10 border border-white/10 p-5"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF] rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF007F] rounded-full blur-3xl opacity-20" />
          <div className="relative">
            <Sparkles className="w-8 h-8 text-[#FFB800] mb-3" />
            <h2 className="text-2xl font-black mb-2">Chat with Legends 🐐</h2>
            <p className="text-sm text-zinc-300">
              Talk tactics with Pep, get sarcasm from Mou, or just receive divine wisdom from Zlatan.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Persona Grid */}
      <div className="px-4 mt-2">
        <h2 className="text-lg font-black mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full animate-pulse" />
          Available Coaches
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {AI_PERSONAS.map((persona, index) => (
            <motion.button
              key={persona.id}
              data-testid={`persona-card-${persona.id}`}
              onClick={() => setSelectedPersona(persona)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${persona.gradient} p-[2px] group`}
            >
              <div className="bg-[#111115] rounded-2xl p-4 h-full">
                {/* Avatar */}
                <div className="relative mb-3 mx-auto w-20 h-20">
                  <div 
                    className="w-full h-full rounded-full overflow-hidden border-2 transition-all group-hover:scale-110"
                    style={{ borderColor: persona.color, boxShadow: `0 0 20px ${persona.color}40` }}
                  >
                    <img 
                      src={persona.avatar} 
                      alt={persona.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  {/* Online indicator */}
                  <div className="absolute bottom-0 right-1 w-4 h-4 bg-[#39FF14] rounded-full border-2 border-[#111115] animate-pulse" />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-black text-sm mb-1 truncate">{persona.name}</h3>
                  <p 
                    className="text-[10px] font-bold uppercase tracking-wider mb-2 truncate"
                    style={{ color: persona.color }}
                  >
                    {persona.title}
                  </p>
                  <p className="text-[10px] text-zinc-500 italic line-clamp-2">"{persona.catchphrase}"</p>
                </div>

                {/* CTA */}
                <div className="mt-3 flex items-center justify-center gap-1 text-xs font-bold" style={{ color: persona.color }}>
                  <MessageCircle className="w-3 h-3" />
                  Chat
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Info card */}
      <div className="px-4 mt-6">
        <div className="bg-[#111115] border border-white/10 rounded-2xl p-4 flex items-start gap-3">
          <Brain className="w-5 h-5 text-[#00E5FF] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold mb-1">Powered by real quotes & catchphrases</p>
            <p className="text-xs text-zinc-400">Each persona has unique vocabulary, tactical philosophy, and that iconic ego. Have fun!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaGrid;
