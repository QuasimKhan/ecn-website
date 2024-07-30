// src/components/DataFetcher.jsx
import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./imgGallery.json');
        const result = await response.json();
        setData(result);
        console.log("result",result);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Carousel;
