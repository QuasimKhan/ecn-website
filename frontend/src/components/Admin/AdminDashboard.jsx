import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import DashboardContent from './DashboardContent';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 mt-12">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-4">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
