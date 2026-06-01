import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // Load initial state from localStorage or defaults
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('offpitch_profile');
    return saved ? JSON.parse(saved) : null;
  });

  const [squad, setSquad] = useState(() => {
    const saved = localStorage.getItem('offpitch_squad');
    return saved ? JSON.parse(saved) : { players: [], locked: false };
  });

  const [banterPosts, setBanterPosts] = useState(() => {
    const saved = localStorage.getItem('offpitch_banter');
    if (saved) return JSON.parse(saved);
    return [];
  });

  const [bookmarkedPosts, setBookmarkedPosts] = useState(() => {
    const saved = localStorage.getItem('offpitch_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const [matchPredictions, setMatchPredictions] = useState(() => {
    const saved = localStorage.getItem('offpitch_predictions');
    return saved ? JSON.parse(saved) : { winner: null, motm: null };
  });

  const [chatHistory, setChatHistory] = useState(() => {
    const saved = localStorage.getItem('offpitch_chat_history');
    return saved ? JSON.parse(saved) : {};
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    if (profile) {
      localStorage.setItem('offpitch_profile', JSON.stringify(profile));
    }
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('offpitch_squad', JSON.stringify(squad));
  }, [squad]);

  useEffect(() => {
    localStorage.setItem('offpitch_banter', JSON.stringify(banterPosts));
  }, [banterPosts]);

  useEffect(() => {
    localStorage.setItem('offpitch_bookmarks', JSON.stringify(bookmarkedPosts));
  }, [bookmarkedPosts]);

  useEffect(() => {
    localStorage.setItem('offpitch_predictions', JSON.stringify(matchPredictions));
  }, [matchPredictions]);

  useEffect(() => {
    localStorage.setItem('offpitch_chat_history', JSON.stringify(chatHistory));
  }, [chatHistory]);

  const value = {
    profile,
    setProfile,
    squad,
    setSquad,
    banterPosts,
    setBanterPosts,
    bookmarkedPosts,
    setBookmarkedPosts,
    matchPredictions,
    setMatchPredictions,
    chatHistory,
    setChatHistory
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};