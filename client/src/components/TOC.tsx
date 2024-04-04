import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface TOCProps {
  headTags: Element[];
}

interface IToc {
  text: string | null;
  level: number;
}

const LEVEL_DEPTH: Record<number, string> = {
  1: 'pl-[5px]',
  2: 'pl-[10px]',
  3: 'pl-[15px]',
  4: 'pl-[20px]',
  5: 'pl-[25px]',
  6: 'pl-[30px]',
};

const TOC = ({ headTags }: TOCProps) => {
  const tocList: IToc[] = [];

  headTags.forEach((heading) => {
    const text = heading.textContent;
    const level = parseInt(heading.tagName.substring(1), 10);
    tocList.push({ text, level });
  });

  return (
    <ul>
      {tocList.map((element, index) => (
        <li key={index} className={`px-3 border-l-4 py-1 text-sm ${LEVEL_DEPTH[element.level]}`}>
          {`${index}. ${element.text}`}
        </li>
      ))}
    </ul>
  );
};

export default TOC;
