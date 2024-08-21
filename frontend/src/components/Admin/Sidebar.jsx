import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Admin Dashboard</h2>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-2">
            <a href="#" className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              Users
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
