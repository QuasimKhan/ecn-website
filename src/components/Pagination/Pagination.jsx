// Pagination.js
import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <Link
          key={index + 1}
          to={`/gallery/${index + 1}`}
          className={`px-4 py-2 border rounded ${
            currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
          }`}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
