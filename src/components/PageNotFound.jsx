import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
        <p className="mt-2 text-2xl text-gray-700 dark:text-gray-300">Page Not Found</p>
        <Link to="/" className="mt-4 text-blue-500 dark:text-blue-300 underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
