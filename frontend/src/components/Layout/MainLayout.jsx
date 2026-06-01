import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const { profile } = useAppContext();

  // Don't show layout on profile setup page if no profile exists
  const showLayout = profile || location.pathname === '/profile';

  if (!showLayout) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="flex min-h-screen bg-[#08080A]">
      <Sidebar />
      <main className="flex-1 pb-20 md:pb-0 overflow-x-hidden">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default MainLayout;