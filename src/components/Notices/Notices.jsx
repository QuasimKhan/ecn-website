import { useEffect, useState } from 'react';
import React from 'react';
import { getNotice } from '../Api/notice.js';
import Noticecard from '../NoticeCard/Noticecard.jsx';
import FadeIn from '../FadeIn.jsx';

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    getNotice().then((data) => setNotices(data));
  }, []);

  return (
    <div className="w-full md:w-3/4 flex flex-col gap-4 justify-center items-center mx-auto h-screen bg-gray-100 dark:bg-gray-900 mt-10 rounded-lg overflow-hidden">
      <header className="sticky top-0 bg-gray-100 dark:bg-gray-900 z-10 py-4">
        <FadeIn>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 font-serif">All Notices</h1>
        </FadeIn>
      </header>
      <main className="flex flex-col gap-4 items-center overflow-auto p-4 max-h-[calc(100vh-80px)]" style={{
        scrollbarWidth: 'thin', /* Firefox */
        scrollbarColor: '#90A4AE #CFD8DC', /* Firefox */
      }}>
        {notices.map((e) => (
          <FadeIn key={e.id}>
            <Noticecard date={e.date} title={e.title} link={e.link} />
          </FadeIn>
        ))}
      </main>
    </div>
  );
};

export default Notices;
