import React from 'react';
import { ProfileCard } from './ProfileCard/ProfileCard';
import { useNavigate } from 'react-router-dom';
import FadeIn from '../AboutECN/FadeIn';

const profileData = [
  {
    imgSrc: "/ProfileImg/quasimkhan.jpg",
    name: "Quasim Khan",
    title: "President",
    link: "/about/arkaaneshura/quasim-khan", // Route to navigate to
  },
  {
    imgSrc: "https://docs.material-tailwind.com/img/team-4.jpg",
    name: "John Doe",
    title: "CTO",
    link: "/john-doe", // Route to navigate to
  },
  {
    imgSrc: "https://docs.material-tailwind.com/img/team-2.jpg",
    name: "Jane Smith",
    title: "CFO",
    link: "/jane-smith", // Route to navigate to
  },
  // Add more profiles here if needed
];

const ArkaaneShura = () => {
  const navigate = useNavigate();

  const handleButtonClick = (link) => {
    navigate(link);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 text-gray-900 dark:text-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-4">Arkaan e Shura</h1>
      <FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {profileData.map((profile, index) => (
          <ProfileCard
            key={index}
            imgSrc={profile.imgSrc}
            name={profile.name}
            title={profile.title}
            onButtonClick={() => handleButtonClick(profile.link)}
          />
        ))}
      </div>
      </FadeIn>
    </div>
  );
}

export default ArkaaneShura;
