import React, { useEffect, useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import RecentlyEditWrapper from '@components/RecentlyEditWrapper';
import WikiHeader from '../WikiHeader';

interface ScrollPosition {
  prev: number;
  current: number;
}

const Layout = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    prev: window.scrollY,
    current: window.scrollY,
  });
  const [showHeader, setShowHeader] = useState(true);

  const handleScroll = () => {
    setScrollPosition({ prev: scrollPosition.current, current: window.scrollY });
    setShowHeader(scrollPosition.prev >= scrollPosition.current);
    if (window.scrollY < 50) {
      setShowHeader(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollY]);

  return (
    <div className="App">
      <WikiHeader isShown={showHeader} />
      <div className="flex items-center justify-center h-fit mt-20 max-[768px]:mt-12">
        <main className="flex gap-6 py-6 px-4 max-w-[1440px] w-full max-[768px]:py-2 max-[768px]:px-0">
          <div className="flex flex-col gap-6 w-full max-[768px]:gap-2">
            <Outlet />
          </div>
          <RecentlyEditWrapper />
        </main>
      </div>
    </div>
  );
};

export default Layout;
