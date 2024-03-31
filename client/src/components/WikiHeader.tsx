import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchCircleSmall } from '@assets/image/search-circle.svg';
import WikiInputField from './WikiInputField';

interface WikiHeaderProps {
  isShown: boolean;
}

const WikiHeader = ({ isShown }: WikiHeaderProps) => {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (isShown) {
      setY(0);
    } else {
      setY(-80);
    }
  }, [isShown]);

  return (
    <motion.div
      className="fixed top-0 flex w-full h-12 md:h-20 bg-primary-primary justify-center"
      animate={{ y }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center px-4 header-container max-w-[1440px] w-full">
        <Link to="/">
          <h1 className="font-bm text-2xl text-white font-normal">크루위키</h1>
        </Link>
        <WikiInputField className="w-20 md:w-[20.25rem] hidden md:flex" />
        <SearchCircleSmall className="cursor-pointer md:hidden" />
      </div>
    </motion.div>
  );
};

export default WikiHeader;
