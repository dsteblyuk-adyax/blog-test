import React, { useState, useEffect } from 'react';
import { func, number } from 'prop-types';

const Pagination = ({ onSetPage, pages, page }) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const onClickPrev = (e, number) => {
    e.preventDefault();
    const page = number < 0 ? 0 : number;
    setCurrentPage(page);
    onSetPage(page);
  }
  const onClickNext = (e, number) => {
    e.preventDefault();
    const page = number >= pages ? pages -1 : number;
    setCurrentPage(page);
    onSetPage(page);
  }

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          <li>
            <button
              disabled={currentPage === 0}
              type="button"
              className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border
              border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
              dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
              onClick={(e) => onClickPrev(e, currentPage - 1)}
               >
              Previous
            </button>
          </li>
          <li>
            <button
              disabled={currentPage === pages - 1}
              onClick={(e) => onClickNext(e, currentPage + 1)}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border
              border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
              dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
            >
              Next
            </button>
          </li>
          <li className="pl-3 pt-1.5">
            Page: {currentPage + 1} / {pages}
          </li>
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  onSetPage: func.isRequired,
  pages: number.isRequired,
  page: number.isRequired,
};

export default Pagination;