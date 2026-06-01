import React, { useState } from 'react';
import { CHAT_ROOMS, MEME_GIFS } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Send, Image as ImageIcon, Smile } from 'lucide-react';
import { toast } from 'sonner';

const ChatRooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(CHAT_ROOMS[0]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showMemeGrid, setShowMemeGrid] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      author: 'You',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages([...messages, newMessage]);
    setMessage('');
    toast.success('Message sent!');
  };

  const handleSendMeme = (meme) => {
    const newMessage = {
      id: Date.now(),
      gif: meme.url,
      author: 'You',
      timestamp: new Date(),
      type: 'gif'
    };

    setMessages([...messages, newMessage]);
    setShowMemeGrid(false);
    toast.success('GIF sent! 😂');
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Room List */}
      <div className="lg:col-span-1">
        <div className="bg-[#111115] border border-white/10 rounded-md overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <h3 className="font-bold flex items-center gap-2">
              <Users className="w-5 h-5 text-neon-magenta" />
              Chat Rooms
            </h3>
          </div>
          <div className="p-2">
            {CHAT_ROOMS.map((room) => (
              <button
                key={room.id}
                data-testid={`chat-room-${room.id}`}
                onClick={() => setSelectedRoom(room)}
                className={`w-full p-3 rounded-md text-left transition-all mb-2 ${
                  selectedRoom.id === room.id
                    ? 'bg-neon-magenta/20 border border-neon-magenta/50'
                    : 'hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="font-bold text-sm">{room.name}</span>
                  {room.unread > 0 && (
                    <span className="px-2 py-0.5 bg-neon-magenta text-black text-xs font-bold rounded-full">
                      {room.unread}
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-500 truncate">{room.lastMessage}</p>
                <p className="text-xs text-zinc-600 mt-1">{room.members} members</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="lg:col-span-3">
        <div className="bg-[#111115] border border-white/10 rounded-md overflow-hidden flex flex-col h-[600px]">
          {/* Room Header */}
          <div className="p-4 border-b border-white/10 bg-[#1A1A24]">
            <h3 className="font-bold">{selectedRoom.name}</h3>
            <p className="text-xs text-zinc-500">{selectedRoom.members} members online</p>
          </div>

          {/* Messages */}
          <div 
            data-testid="chat-messages-area"
            className="flex-1 p-4 overflow-y-auto space-y-3"
          >
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <p className="text-zinc-500 text-center">
                  No messages yet. Start the conversation! 👋
                </p>
              </div>
            ) : (
              messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-neon-magenta/20 border border-neon-magenta flex items-center justify-center text-sm font-bold">
                    {msg.author[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-sm">{msg.author}</span>
                      <span className="text-xs text-zinc-500">{formatTime(msg.timestamp)}</span>
                    </div>
                    {msg.type === 'text' ? (
                      <p className="text-sm bg-[#1A1A24] px-3 py-2 rounded-md inline-block">{msg.text}</p>
                    ) : (
                      <img src={msg.gif} alt="GIF" className="max-w-xs rounded-md" />
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Meme Grid */}
          <AnimatePresence>
            {showMemeGrid && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-white/10 bg-[#1A1A24] overflow-hidden"
              >
                <div className="p-4">
                  <p className="text-sm font-bold mb-3">Select a GIF</p>
                  <div className="grid grid-cols-3 gap-2">
                    {MEME_GIFS.map((meme) => (
                      <button
                        key={meme.id}
                        data-testid={`meme-gif-${meme.id}`}
                        onClick={() => handleSendMeme(meme)}
                        className="aspect-square rounded-md overflow-hidden border border-white/10 hover:border-neon-magenta transition-all"
                      >
                        <img src={meme.url} alt={meme.label} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-[#1A1A24]">
            <div className="flex items-center gap-2">
              <button
                type="button"
                data-testid="toggle-meme-grid"
                onClick={() => setShowMemeGrid(!showMemeGrid)}
                className={`p-2 rounded-md transition-all ${
                  showMemeGrid ? 'bg-neon-magenta/20 text-neon-magenta' : 'hover:bg-white/10'
                }`}
              >
                <Smile className="w-5 h-5" />
              </button>
              <input
                data-testid="chat-message-input"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-[#08080A] border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-magenta"
              />
              <button
                data-testid="send-message-button"
                type="submit"
                disabled={!message.trim()}
                className="p-2 bg-neon-magenta text-black rounded-md hover:bg-neon-magenta/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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

export default ChatRooms;