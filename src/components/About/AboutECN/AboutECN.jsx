import React from 'react';
import FadeIn from './FadeIn';// Make sure to import the FadeIn component
import { BreadcrumbsWithIcon } from '../../Breadcrumbs/BreadCrumbs';

const AboutECN = () => {


  const breadcrumbItems = [
    { link: "/aboutECN", name: "About ECN" },
  ];


  return (
    <>
    <div className='mt-12 mx-9'>
          <BreadcrumbsWithIcon items={breadcrumbItems} />
        </div>
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen p-6 mt-12">
      
      {/* Cover Photo */}
      <div className="relative">
        <img
          src='/CarouselImages/Banner.jpg'
          alt="Cover"
          className="w-full h-64 object-cover rounded-lg shadow-md border-4 border-gray-300 dark:border-gray-700"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-70 rounded-t-lg">
          <h1 className="text-3xl font-bold">About ECN</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        {/* Aim Section */}
        <FadeIn>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Committee's Journey</h2>
            <p className="text-gray-700 dark:text-gray-300">
            The Educational Committee of Naseerpur (ECN) has been a cornerstone of the Naseerpur community for several years. Established with the mission of spreading education and awareness, ECN has been dedicated to improving the educational landscape in Naseerpur by offering support and resources to learners of all ages.
            </p>
          </section>
        </FadeIn>

        {/* Additional Sections */}
        <FadeIn>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300">
            At ECN, our primary goal is to promote education and provide opportunities for individuals to enhance their knowledge and skills. We envision a future where education is accessible to all members of the community, regardless of their background or socioeconomic status. Our purpose is to empower individuals through education and create a more knowledgeable and informed society. 
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Excellence</li>
              <li>Collaboration</li>
            </ul>
          </section>
        </FadeIn>
      </div>
    </div>
    </>
  );
};

export default AboutECN;
