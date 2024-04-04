import React from 'react';

interface TOCProps {
  headTags: Element[];
}

interface IToc {
  text: string | null;
  level: number;
  index: string;
}

const LEVEL_DEPTH: Record<number, string> = {
  1: 'pl-[0px]',
  2: 'pl-[15px]',
  3: 'pl-[30px]',
};

function convertToTOCNumber(list: number[]) {
  const result: string[] = [];
  let h1Count = 0;
  let h2Count = 0;
  let h3Count = 0;

  list.forEach((num) => {
    switch (num) {
      case 1:
        h1Count += 1;
        h2Count = 0;
        h3Count = 0;
        break;
      case 2:
        h2Count += 1;
        h3Count = 0;
        break;
      case 3:
        h3Count += 1;
        break;
      default:
        break;
    }

    result.push(
      `${h1Count !== 0 ? `${h1Count}` : ''}${h2Count !== 0 ? `.${h2Count}` : ''}${h3Count !== 0 ? `.${h3Count}` : ''}`,
    );
  });

  return result;
}

const TOC = ({ headTags }: TOCProps) => {
  const tocList: IToc[] = [];

  const headTagsToNumber = headTags.map((heading) => parseInt(heading.tagName.substring(1), 10));
  const tocNumber = convertToTOCNumber(headTagsToNumber);

  headTags.forEach((heading) => {
    const text = heading.textContent;
    const level = parseInt(heading.tagName.substring(1), 10);
    tocList.push({ text, level, index: '' });
  });

  return (
    <aside className="flex flex-col gap-2 w-fit px-6 py-4 border rounded-xl border-grayscale-100">
      <h2 className="font-pretendard text-lg font-bold text-grayscale-800">목차</h2>
      <ul>
        {tocList.map((element, index) => (
          <li key={index} className={`font-normal text-sm text-grayscale-800 ${LEVEL_DEPTH[element.level]}`}>
            <span className="text-primary-primary">{tocNumber[index]}</span>
            {` ${element.text}`}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TOC;
