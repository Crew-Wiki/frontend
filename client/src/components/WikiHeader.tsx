import React, { useState, useEffect, FormEvent, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchCircleSmall } from '@assets/image/search-circle.svg';
import LogoImage from '@assets/image/hangseong-white.png';
import RandomButton from '@assets/image/RandomButton';
import { twMerge } from 'tailwind-merge';
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


  const ESTIMATED_HEADER_HEIGHT = 160;
  useEffect(() => {
    if (showHeader) {
      setY(0);
    } else {
      setY(-ESTIMATED_HEADER_HEIGHT);
    }
  }, [showHeader]);

  const [isVisibleSmallSearchBar, setVisibleSmallSearchBar] = useState(false);

  useEffect(() => {
    const inputField = document.querySelector('#mobile-input-field') as HTMLInputElement
    inputField?.focus();
  }, [isVisibleSmallSearchBar])

  const toggleVisibility = () => {
    setVisibleSmallSearchBar(!isVisibleSmallSearchBar);
  };

  const onSubmit = (e: FormEvent) => {
    setVisibleSmallSearchBar(false);
  }

  return (
    <motion.div className="sticky top-0 w-full bg-primary-primary " animate={{ y }} transition={{ duration: 0.3 }}>
      <div className="flex flex-col justify-center items-center py-2">
        <div className="flex flex-row justify-between items-center px-4 header-container max-w-[1440px] w-full">
          <Link to="/" className="flex gap-2 items-center">
            <img src={LogoImage} alt="logo" className="h-10 md:h-16" />
            <h1 className="font-bm text-2xl md:text-[40px] text-white font-normal">크루위키</h1>
          </Link>

          <div className="flex items-center">
            <RandomButton className="mr-4 cursor-pointer" />
            <WikiInputField className="w-80 hidden md:flex" handleSubmit={onSubmit} />
            <SearchCircleSmall className="cursor-pointer md:hidden" onClick={toggleVisibility} />
          </div>
        </div>
        <div className={twMerge('flex px-4 pt-4 pb-2 w-full items-center md:hidden', isVisibleSmallSearchBar ? '' : 'hidden')}>
          <WikiInputField id="mobile-input-field" className="w-full" handleSubmit={onSubmit} />
        </div>
      </div>
    </motion.div>
  );
};

export default WikiHeader;
