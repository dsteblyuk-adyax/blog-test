import React from 'react';
import { arrayOf, func } from 'prop-types';
import { categoryPropTypes } from '../../../proptypes/category';

const Filter = ({ options, setFilter }) => {
  return (
    <>
      <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Select an category
      </label>
      <select
        onChange={(e) => setFilter(e.target.value)}
        id="categories"
        className="outline-0 bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
        dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value='all'>Choose...</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

Filter.propTypes = {
  options: arrayOf(categoryPropTypes).isRequired,
  setFilter: func.isRequired,
};

export default Filter;