import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '@/context/AppContext';
import { PERSONA_RESPONSES } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';

const ChatInterface = ({ persona, onBack }) => {
  const { chatHistory, setChatHistory } = useAppContext();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Load chat history for this persona
    const history = chatHistory[persona.id] || [];
    setMessages(history);
  }, [persona.id, chatHistory]);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getPersonaResponse = (userMessage) => {
    const responses = PERSONA_RESPONSES[persona.id] || [];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || isTyping) return;

    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: getPersonaResponse(inputText),
        sender: 'ai',
        timestamp: new Date()
      };

      const updatedMessages = [...newMessages, aiResponse];
      setMessages(updatedMessages);
      
      // Save to chat history
      setChatHistory({
        ...chatHistory,
        [persona.id]: updatedMessages
      });
      
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  return (
    <div className="min-h-screen bg-[#08080A] p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            data-testid="back-to-personas"
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-zinc-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Tactics Room
          </button>
          
          <div className="bg-[#111115] border rounded-md p-4 flex items-center gap-4"
            style={{ borderColor: persona.color }}
          >
            <div 
              className="w-16 h-16 rounded-full overflow-hidden border-2"
              style={{ borderColor: persona.color }}
            >
              <img src={persona.avatar} alt={persona.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black">{persona.name}</h2>
              <p className="text-sm text-zinc-400">{persona.title}</p>
            </div>
            <div 
              className="px-3 py-1 rounded-full text-xs font-bold text-black"
              style={{ backgroundColor: persona.color }}
            >
              AI Coach
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="bg-[#111115] border border-white/10 rounded-md overflow-hidden flex flex-col h-[600px]">
          <div 
            data-testid="chat-messages"
            className="flex-1 p-4 overflow-y-auto space-y-4"
          >
            {messages.length === 0 && (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-zinc-500 mb-2">Start a conversation with {persona.name}</p>
                  <p className="text-xs text-zinc-600 italic">"{persona.catchphrase}"</p>
                </div>
              </div>
            )}

            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${
                  msg.sender === 'user'
                    ? 'bg-neon-cyan/20 border border-neon-cyan/50'
                    : 'bg-[#1A1A24] border border-white/10'
                } rounded-lg p-3`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <span className="text-xs text-zinc-500 mt-1 block">
                    {new Date(msg.timestamp).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-[#1A1A24] border border-white/10 rounded-lg p-3">
                  <div className="flex items-center gap-1 animate-bounce-dots">
                    <span className="w-2 h-2 bg-zinc-500 rounded-full"></span>
                    <span className="w-2 h-2 bg-zinc-500 rounded-full"></span>
                    <span className="w-2 h-2 bg-zinc-500 rounded-full"></span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-[#1A1A24]">
            <div className="flex items-center gap-2">
              <input
                data-testid="ai-chat-input"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Ask ${persona.name} about tactics, games, or life...`}
                disabled={isTyping}
                className="flex-1 px-4 py-3 bg-[#08080A] border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-cyan disabled:opacity-50"
              />
              <button
                data-testid="ai-chat-send"
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="p-3 rounded-md text-black font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                style={{ backgroundColor: persona.color }}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;