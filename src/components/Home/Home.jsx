import { useEffect, useState } from 'react';
import React from 'react';
import { getNotice } from '../Api/notice.js';
import Noticecard from '../NoticeCard/Noticecard.jsx';

const Home = () => {
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    getNotice().then((notice) => setNotice(notice));
  }, []);

  return (
    <div className="w-11/12 md:w-1/2 flex flex-col gap-4 justify-center items-center mx-auto h-screen bg-gray-100 dark:bg-gray-900 mt-10 rounded-lg overflow-hidden">
      <header className="sticky top-0 bg-gray-100 dark:bg-gray-900 z-0 py-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 font-serif">Notice Board</h1>
      </header>
      <main className="flex flex-col gap-4 items-center overflow-auto p-4 max-h-[calc(100vh-80px)]"  style={{
              scrollbarWidth: 'extra-thin', /* Firefox */
              scrollbarColor: 'blue #f1f1f1', /* Firefox */
            }}>
        {notice ? notice.map((e) => (
          <Noticecard key={e.id} date={e.date} title={e.title} link={e.link} />
        )) : "Loading..."}
      </main>
    </div>
  );
};

export default Home;
