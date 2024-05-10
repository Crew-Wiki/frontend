import React from 'react';

interface RelativeSearchTermsProps {
  searchTerms: string[];
  onSubmit: (event: React.FormEvent, search?: string) => void;
}

const RelativeSearchTerms = ({ searchTerms, onSubmit }: RelativeSearchTermsProps) => {
  return (
    <>
      {searchTerms.length !== 0 && (
        <aside className="absolute left-0 top-12 p-2 w-full bg-grayscale-50">
          {searchTerms.map((search, index) => (
            <button
              onClick={(event) => {
                onSubmit(event, search);
              }}
              className="w-full hover:bg-grayscale-200 cursor-pointer text-left"
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
