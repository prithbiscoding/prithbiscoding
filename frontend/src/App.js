import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from '@/context/AppContext';
import { Toaster } from '@/components/ui/sonner';
import MainLayout from '@/components/Layout/MainLayout';
import ProfileSetup from '@/components/Profile/ProfileSetup';
import Home from '@/pages/Home';
import SquadBuilder from '@/components/Fantasy/SquadBuilder';
import BanterFeed from '@/components/Banter/BanterFeed';
import PersonaGrid from '@/components/AI/PersonaGrid';
import MatchHub from '@/components/Match/MatchHub';
import StatsPage from '@/components/Stats/StatsPage';
import CalendarPage from '@/components/Calendar/CalendarPage';

const AppRoutes = () => {
  const { profile } = useAppContext();

  if (!profile) {
    return (
      <Routes>
        <Route path="/profile" element={<ProfileSetup />} />
        <Route path="*" element={<Navigate to="/profile" replace />} />
      </Routes>
    );
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fantasy" element={<SquadBuilder />} />
        <Route path="/banter" element={<BanterFeed />} />
        <Route path="/ai" element={<PersonaGrid />} />
        <Route path="/match" element={<MatchHub />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/profile" element={<ProfileSetup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
};

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
        <Toaster 
          position="top-right"
          theme="dark"
          toastOptions={{
            style: {
              background: '#111115',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff'
            }
          }}
        />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
