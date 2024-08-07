import React, { useEffect, useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import FadeIn from "../FadeIn";
import Pagination from "../Pagination/Pagination";
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress
import { BreadcrumbsWithIcon } from '../Breadcrumbs/BreadCrumbs.jsx';

export function GalleryWithTab() {
  const { page } = useParams();
  const currentPage = parseInt(page, 10) || 1;
  const imagesPerPage = 30;
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [loadingImages, setLoadingImages] = useState({}); // Track loading state of each image
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/json/galleryData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setData(data);
          setActiveTab(data[0].value); // Set the first tab as active
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  const breadcrumbItems = [
    { link: "/gallery", name: "Gallery" },
    { link: `/gallery/${currentPage}`, name: `${currentPage}` },
  ];

  const handleImageLoad = (value, index) => {
    setLoadingImages((prev) => ({
      ...prev,
      [`${value}-${index}`]: false, // Hide spinner when image is loaded
    }));
  };

  const handleImageError = (value, index) => {
    setLoadingImages((prev) => ({
      ...prev,
      [`${value}-${index}`]: false, // Hide spinner if there is an error loading the image
    }));
  };

  const handleImageLoadStart = (value, index) => {
    setLoadingImages((prev) => ({
      ...prev,
      [`${value}-${index}`]: true, // Show spinner when image starts loading
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full border-b border-gray-300 pb-4">
        <CircularProgress /> {/* Full page spinner */}
      </div>
    );
  }

  const paginatedData = data.map(({ label, value, images }) => ({
    label,
    value,
    images: images.slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage),
  }));

  const totalImages = data.flatMap(({ images }) => images).length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  return (
    <div className='w-full mt-12'>
      <div className="border-b border-gray-300 pb-4">
        <div className='mt-12 mx-9'>
          <BreadcrumbsWithIcon items={breadcrumbItems} />
        </div>

        <Tabs value={activeTab} onChange={(value) => setActiveTab(value)} className="mt-12">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="grid grid-cols-1 gap-4">
            {paginatedData.map(({ value, images }) => (
              <FadeIn key={value} show={activeTab === value || activeTab === ""}>
                <TabPanel className="grid grid-cols-2 gap-4 md:grid-cols-3" value={value}>
                  {images?.map(({ imageLink }, index) => (
                    <div key={index} className="relative h-60 w-full">
                      {loadingImages[`${value}-${index}`] !== false && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <CircularProgress /> {/* Individual image spinner */}
                        </div>
                      )}
                      <img
                        className={`h-60 w-full max-w-full rounded-lg object-cover object-center transition-opacity ${
                          loadingImages[`${value}-${index}`] ? "opacity-0" : "opacity-100"
                        }`}
                        src={imageLink}
                        alt={`image-${index}`}
                        onLoad={() => handleImageLoad(value, index)}
                        onError={() => handleImageError(value, index)}
                        onLoadStart={() => handleImageLoadStart(value, index)}
                      />
                    </div>
                  ))}
                </TabPanel>
              </FadeIn>
            ))}
          </TabsBody>
        </Tabs>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
