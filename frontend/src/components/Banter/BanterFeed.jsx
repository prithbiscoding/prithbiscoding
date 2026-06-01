import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import { BANTER_POSTS, TOXIC_WORDS, REACTION_EMOJIS, TRENDING_HASHTAGS } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, ThumbsDown, Bookmark, Send, Sparkles, TrendingUp, Flame } from 'lucide-react';
import { toast } from 'sonner';
import VARModal from './VARModal';
import ChatRooms from './ChatRooms';
import Stories from './Stories';

const FILTER_OPTIONS = [
  { id: 'hot_takes', label: 'Hot Takes', emoji: '🔥', color: '#FF007F' },
  { id: 'my_matches', label: 'My Matches', emoji: '⚽', color: '#39FF14' },
  { id: 'meme_wars', label: 'Meme Wars', emoji: '💀', color: '#00E5FF' }
];

const BanterFeed = () => {
  const { profile, banterPosts, setBanterPosts, bookmarkedPosts, setBookmarkedPosts } = useAppContext();
  const [activeFilter, setActiveFilter] = useState('hot_takes');
  const [newPostText, setNewPostText] = useState('');
  const [showVARModal, setShowVARModal] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');
  const [showComposer, setShowComposer] = useState(false);
  const [reactedPosts, setReactedPosts] = useState({});

  const allPosts = [...BANTER_POSTS, ...banterPosts];
  const filteredPosts = allPosts.filter(post => {
    if (activeFilter === 'hot_takes') return post.category === 'hot_takes';
    if (activeFilter === 'meme_wars') return post.category === 'meme_wars';
    return true;
  });

  const checkToxicity = (text) => {
    const lowerText = text.toLowerCase();
    return TOXIC_WORDS.some(word => lowerText.includes(word));
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    if (checkToxicity(newPostText)) {
      setShowVARModal(true);
      return;
    }

    const newPost = {
      id: `bp${Date.now()}`,
      author: profile?.username || 'Anonymous',
      avatar: profile?.avatar || 'https://api.dicebear.com/7.x/notionists/svg?seed=user',
      teamFlag: profile?.team?.flag || '🏁',
      content: newPostText,
      image: null,
      cheers: 0,
      jeers: 0,
      bookmarked: false,
      timestamp: new Date(),
      category: activeFilter,
      reactions: {}
    };

    setBanterPosts([newPost, ...banterPosts]);
    setNewPostText('');
    setShowComposer(false);
    toast.success('Post published! 🚀');
  };

  const handleCheer = (postId) => {
    const postIndex = banterPosts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      const updated = [...banterPosts];
      updated[postIndex] = { ...updated[postIndex], cheers: updated[postIndex].cheers + 1 };
      setBanterPosts(updated);
    }
    toast.success('🔥 Cheered!');
  };

  const handleJeer = (postId) => {
    const postIndex = banterPosts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      const updated = [...banterPosts];
      updated[postIndex] = { ...updated[postIndex], jeers: updated[postIndex].jeers + 1 };
      setBanterPosts(updated);
    }
    toast.success('💀 Jeered!');
  };

  const handleBookmark = (postId) => {
    if (bookmarkedPosts.includes(postId)) {
      setBookmarkedPosts(bookmarkedPosts.filter(id => id !== postId));
      toast.success('Bookmark removed');
    } else {
      setBookmarkedPosts([...bookmarkedPosts, postId]);
      toast.success('Bookmarked! 🔖');
    }
  };

  const handleReaction = (postId, emoji) => {
    setReactedPosts(prev => ({
      ...prev,
      [postId]: emoji
    }));
    toast.success(`${emoji} Reacted!`);
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const diff = Math.floor((now - new Date(timestamp)) / 1000);
    if (diff < 60) return `${diff}s`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
    return `${Math.floor(diff / 86400)}d`;
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-[#08080A] pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-[#08080A]/90 backdrop-blur-xl border-b border-white/5">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
              <Flame className="w-6 h-6 text-[#FF007F]" />
              Banter
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FF007F]/10 border border-[#FF007F]/30 rounded-full">
                <span className="w-1.5 h-1.5 bg-[#FF007F] rounded-full animate-pulse" />
                <span className="text-xs font-bold text-[#FF007F]">12.4K online</span>
              </div>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex gap-1">
            <button
              data-testid="tab-feed"
              onClick={() => setActiveTab('feed')}
              className={`flex-1 px-4 py-2 rounded-full font-bold text-sm transition-all ${
                activeTab === 'feed' 
                  ? 'bg-gradient-to-r from-[#FF007F] to-[#FFB800] text-white' 
                  : 'bg-[#111115] text-zinc-400'
              }`}
            >
              Feed
            </button>
            <button
              data-testid="tab-chat"
              onClick={() => setActiveTab('chat')}
              className={`flex-1 px-4 py-2 rounded-full font-bold text-sm transition-all ${
                activeTab === 'chat' 
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#39FF14] text-black' 
                  : 'bg-[#111115] text-zinc-400'
              }`}
            >
              Chat Rooms
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'feed' ? (
        <>
          {/* Stories */}
          <Stories />

          {/* Trending Hashtags Bar */}
          <div className="px-4 mt-4">
            <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
              {TRENDING_HASHTAGS.map((tag) => (
                <button
                  key={tag.tag}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border"
                  style={{ borderColor: `${tag.color}40`, color: tag.color, backgroundColor: `${tag.color}10` }}
                >
                  {tag.tag}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Chips */}
          <div className="px-4 mt-3">
            <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
              {FILTER_OPTIONS.map((filter) => (
                <button
                  key={filter.id}
                  data-testid={`filter-${filter.id}`}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? 'text-black'
                      : 'bg-[#111115] text-zinc-400 border border-white/10'
                  }`}
                  style={activeFilter === filter.id ? { backgroundColor: filter.color } : {}}
                >
                  <span>{filter.emoji}</span>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Feed */}
          <div className="px-4 mt-4 space-y-4">
            {filteredPosts.map((post, idx) => {
              const userReaction = reactedPosts[post.id];
              return (
                <motion.div
                  key={post.id}
                  data-testid={`banter-post-${post.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(idx * 0.05, 0.3) }}
                  className="bg-[#111115] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
                >
                  {/* Author Row */}
                  <div className="p-4 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={post.avatar} alt={post.author} className="w-11 h-11 rounded-full border-2 border-white/10" />
                        <div className="absolute -bottom-1 -right-1 text-lg">{post.teamFlag}</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm truncate">{post.author}</p>
                        <p className="text-xs text-zinc-500">{formatTimestamp(post.timestamp)} ago</p>
                      </div>
                      <button
                        data-testid={`bookmark-${post.id}`}
                        onClick={() => handleBookmark(post.id)}
                        className={`p-2 rounded-full transition-all ${
                          bookmarkedPosts.includes(post.id) ? 'text-[#00E5FF]' : 'text-zinc-500'
                        }`}
                      >
                        <Bookmark className="w-4 h-4" fill={bookmarkedPosts.includes(post.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 pb-3">
                    <p className="text-base leading-relaxed">{post.content}</p>
                  </div>

                  {/* Image */}
                  {post.image && (
                    <div className="aspect-video overflow-hidden bg-zinc-900">
                      <img src={post.image} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}

                  {/* Reactions Row */}
                  {post.reactions && Object.keys(post.reactions).length > 0 && (
                    <div className="px-4 py-3 flex items-center gap-2 border-t border-white/5">
                      <div className="flex items-center gap-1.5">
                        {Object.entries(post.reactions).map(([emoji, count]) => (
                          <button
                            key={emoji}
                            data-testid={`reaction-${post.id}-${emoji}`}
                            onClick={() => handleReaction(post.id, emoji)}
                            className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 transition-all ${
                              userReaction === emoji 
                                ? 'bg-[#FF007F]/20 border border-[#FF007F]/50' 
                                : 'bg-white/5 hover:bg-white/10 border border-white/10'
                            }`}
                          >
                            <span>{emoji}</span>
                            <span className="font-mono">{formatNumber(count)}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        data-testid={`cheer-${post.id}`}
                        onClick={() => handleCheer(post.id)}
                        className="flex items-center gap-1.5 text-zinc-400 hover:text-[#39FF14] transition-colors"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm font-mono font-bold">{formatNumber(post.cheers)}</span>
                      </button>
                      <button
                        data-testid={`jeer-${post.id}`}
                        onClick={() => handleJeer(post.id)}
                        className="flex items-center gap-1.5 text-zinc-400 hover:text-[#FF007F] transition-colors"
                      >
                        <ThumbsDown className="w-4 h-4" />
                        <span className="text-sm font-mono font-bold">{formatNumber(post.jeers)}</span>
                      </button>
                    </div>

                    {/* Quick reactions */}
                    <div className="flex items-center gap-1">
                      {['🔥', '💀', '🐐'].map((emoji) => (
                        <button
                          key={emoji}
                          data-testid={`quick-react-${post.id}-${emoji}`}
                          onClick={() => handleReaction(post.id, emoji)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-base transition-all ${
                            userReaction === emoji ? 'bg-[#FF007F]/20 scale-110' : 'hover:bg-white/10'
                          }`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="px-4 mt-4">
          <ChatRooms />
        </div>
      )}

      {/* Floating Compose Button */}
      {activeTab === 'feed' && (
        <motion.button
          data-testid="open-composer"
          onClick={() => setShowComposer(true)}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-30 w-14 h-14 rounded-full bg-gradient-to-br from-[#FF007F] via-[#FFB800] to-[#39FF14] shadow-2xl shadow-[#FF007F]/50 flex items-center justify-center group"
        >
          <Sparkles className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" strokeWidth={3} />
        </motion.button>
      )}

      {/* Compose Modal */}
      <AnimatePresence>
        {showComposer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-end md:items-center justify-center p-0 md:p-4"
            onClick={() => setShowComposer(false)}
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-[#111115] border-t md:border border-white/10 md:rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-black text-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FF007F]" />
                  Drop your take
                </h3>
                <button
                  data-testid="close-composer"
                  onClick={() => setShowComposer(false)}
                  className="text-zinc-500 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handlePostSubmit} className="space-y-4">
                <div className="flex items-start gap-3">
                  {profile?.avatar ? (
                    <img src={profile.avatar} alt="" className="w-10 h-10 rounded-full" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#FF007F]/20 flex items-center justify-center font-bold">
                      {profile?.username?.[0]?.toUpperCase() || 'U'}
                    </div>
                  )}
                  <textarea
                    data-testid="new-post-textarea"
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    placeholder="What's the hot take? 🔥"
                    rows={5}
                    maxLength={280}
                    autoFocus
                    className="flex-1 px-3 py-2 bg-[#08080A] border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#FF007F] resize-none"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono ${
                    newPostText.length > 240 ? 'text-[#FF007F]' : 'text-zinc-500'
                  }`}>
                    {newPostText.length} / 280
                  </span>
                  <button
                    data-testid="submit-post-button"
                    type="submit"
                    disabled={!newPostText.trim()}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#FF007F] to-[#FFB800] text-white font-bold rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Post
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VAR Toxicity Modal */}
      <AnimatePresence>
        {showVARModal && (
          <VARModal onClose={() => {
            setShowVARModal(false);
            setNewPostText('');
          }} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BanterFeed;
