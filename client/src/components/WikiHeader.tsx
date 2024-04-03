import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchCircleSmall } from '@assets/image/search-circle.svg';
import LogoImage from '@assets/image/hangseong-white.png';
import WikiInputField from './WikiInputField';

interface ScrollPosition {
  prev: number;
  current: number;
}

const WikiHeader = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    prev: window.scrollY,
    current: window.scrollY,
  });
  const [showHeader, setShowHeader] = useState(true);
  const [y, setY] = useState(0);

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

  useEffect(() => {
    if (showHeader) {
      setY(0);
    } else {
      setY(-80);
    }
  }, [showHeader]);

  return (
    <motion.div
      className="fixed top-0 flex w-full h-12 md:h-20 bg-primary-primary justify-center"
      animate={{ y }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center px-4 header-container max-w-[1440px] w-full">
        <Link to="/" className="flex gap-2 items-center">
          <img src={LogoImage} alt="logo" className="h-10 md:h-16" />
          <h1 className="font-bm text-2xl md:text-[40px] text-white font-normal">크루위키</h1>
        </Link>
        <WikiInputField className="w-20 md:w-[20.25rem] hidden md:flex" />
        <SearchCircleSmall className="cursor-pointer md:hidden" />
      </div>
    </motion.div>
  );
};

export default WikiHeader;
