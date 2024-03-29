import React from 'react';
import { string, func } from 'prop-types';

const Search = ({ setQuery, value }) => {
  return (
    <>
      <label htmlFor="search"
             className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
               stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="outline-0 block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300
          rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="Search..."
          required
          value={value}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
};

Search.propTypes = {
  value: string.isRequired,
  setQuery: func.isRequired,
};

export default Search;
