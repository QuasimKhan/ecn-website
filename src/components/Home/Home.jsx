import React from 'react';
import Carousel from './Carousel/Carousel';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 mt-5 rounded-lg">
      <header className="text-center py-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Image Carousel</h1>
      </header>
      <main className="flex justify-center items-center">
        <Carousel />
      </main>
    </div>
  );
};

export default Home;
