import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Admin Dashboard</h1>
        <button className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded-lg">
          Toggle Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Navbar;
