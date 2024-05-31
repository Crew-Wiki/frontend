import React from 'react';

interface RelativeSearchTermsProps {
  style?: React.CSSProperties;
  searchTerms: string[];
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, search?: string) => void;
}

const RelativeSearchTerms = ({ style, searchTerms, onClick }: RelativeSearchTermsProps) => {
  // console.log(onClick);
  return (
    <>
      {searchTerms.length !== 0 && (
        <aside
          id="asd"
          style={style}
          className="absolute rounded-xl shadow-2xl px-2 py-2 left-0 top-12 w-full bg-white"
        >
          {searchTerms.map((search, index) => (
            <button
              onClick={(event) => {
                console.log('클릭');
                onClick(event, search);
              }}
              className="w-full px-2 py-2 hover:bg-primary-50 rounded-lg cursor-pointer text-left font-pretendard text-base font-normal text-grayscale-800"
              key={index}
            >
              {search}
            </button>
          ))}
        </aside>
      )}
    </>
  );
};

export default RelativeSearchTerms;
