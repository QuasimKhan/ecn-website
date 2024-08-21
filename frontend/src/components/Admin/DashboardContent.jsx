import React from 'react';

const DashboardContent = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Users</h3>
          <p className="text-gray-600 dark:text-gray-300">1,234</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">New Signups</h3>
          <p className="text-gray-600 dark:text-gray-300">123</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active Sessions</h3>
          <p className="text-gray-600 dark:text-gray-300">89</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Server Status</h3>
          <p className="text-gray-600 dark:text-gray-300">Online</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
