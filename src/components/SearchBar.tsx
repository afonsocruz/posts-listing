import React, { ChangeEventHandler } from 'react';

interface SearchBarProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  return (
    <form className="flex items-center justify-center pb-10">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          className="block w-full p-4 pl-10 text-lg text-white border rounded-lg bg-transparent outline-none border-fluorescent"
          placeholder="Search for titles..."
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </form>
  );
};

export default SearchBar;
