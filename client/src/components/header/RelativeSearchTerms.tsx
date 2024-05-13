import React from 'react';

interface RelativeSearchTermsProps {
  searchTerms: string[];
  onSubmit: (event: React.FormEvent, search?: string) => void;
}

const RelativeSearchTerms = ({ searchTerms, onSubmit }: RelativeSearchTermsProps) => {
  return (
    <>
      {searchTerms.length !== 0 && (
        <aside className="absolute rounded-xl shadow-2xl px-2 py-2 left-0 top-12 w-full bg-white">
          {searchTerms.map((search, index) => (
            <button
              onClick={(event) => {
                onSubmit(event, search);
              }}
              className="w-full px-2 py-2 hover:bg-primary-50 rounded-lg cursor-pointer text-left"
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
