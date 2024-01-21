"use client"
import { useState } from 'react';
import Carousel from './components/Carousel';


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  return (
    <div className=" items-center justify-center h-screen">
      <Carousel currentSlide={currentSlide} onChange={handleSlideChange} />
    </div>
  );
}
