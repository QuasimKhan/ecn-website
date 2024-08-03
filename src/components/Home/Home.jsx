import { useEffect, useState } from 'react';
import React from 'react';
import { getNotice } from '../Api/notice.js';
import Noticecard from '../NoticeCard/Noticecard.jsx';
import FadeIn from '../FadeIn.jsx';
import { Link } from 'react-router-dom';
import { GalleryWithCarousel } from '../Carousel/GalleryWithCarousel.jsx';

const Home = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    getNotice().then((data) => setNotices(data));
  }, []);

<<<<<<< HEAD
  

  if (loading) {
    return (
      <div className="w-11/12 md:w-1/2 flex flex-col justify-center items-center mx-auto h-screen bg-gray-100 dark:bg-gray-900 mt-10 rounded-lg overflow-hidden">
        <header className="sticky top-0 bg-gray-100 dark:bg-gray-900 z-10 py-4">
          <FadeIn>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 font-serif">Notice Board</h1>
          </FadeIn>
        </header>
        <main className="flex flex-col justify-center items-center p-4">
          <p className="text-gray-900 dark:text-gray-100">Loading...</p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-11/12 md:w-1/2 flex flex-col justify-center items-center mx-auto h-screen bg-gray-100 dark:bg-gray-900 mt-10 rounded-lg overflow-hidden">
        <header className="sticky top-0 bg-gray-100 dark:bg-gray-900 z-10 py-4">
          <FadeIn>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 font-serif">Notice Board</h1>
          </FadeIn>
        </header>
        <main className="flex flex-col justify-center items-center p-4">
          <p className="text-red-500 dark:text-red-400">Failed to load notices. Please try again later.</p>
        </main>
      </div>
    );
  }

=======
>>>>>>> parent of 6a80f21 (Updated loading state)
  return (
    <>
    <div className='w-full mt-10'>
    <GalleryWithCarousel/>
    <div className="w-11/12 md:w-1/2 flex flex-col gap-4 justify-center items-center mx-auto h-screen bg-gray-100 dark:bg-c-blue-900 mt-10 rounded-lg overflow-hidden">
      <header className="sticky top-0 bg-gray-100 dark:bg-c-blue-900 z-10 p-4 rounded-lg">
        <FadeIn>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 font-serif">Notice Board</h1>
        </FadeIn>
      </header>
      <main className="flex flex-col gap-4 items-center overflow-auto p-4 max-h-[calc(100vh-80px)]" style={{
        scrollbarWidth: 'thin', /* Firefox */
        scrollbarColor: '#90A4AE #CFD8DC', /* Firefox */
      }}>
        {notices.slice(0, 7).map((e) => (
          <FadeIn key={e.id}>
            <Noticecard date={e.date} title={e.title} link={e.link} />
          </FadeIn>
        ))}
        {notices.length > 7 && <Link to="/notices" className="text-blue-500 hover:underline mt-4">Read More</Link>}
      </main>
    </div>
    </div>
    </>
  );
};

export default Home;
