import React, { useState, useEffect } from 'react';
import CarouselCard from './CarouselCard';

const Carousel = ({ currentSlide, onChange }) => {
  const totalSlides = 5;
  const [content, setContent] = useState(''); // State to manage content changes

  useEffect(() => {
    // Update content when currentSlide changes
    setContent(`Content for Slide ${currentSlide + 1}`);
  }, [currentSlide]);

  const handlePrev = () => {
    const newIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    onChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentSlide + 1) % totalSlides;
    onChange(newIndex);
  };

  const handleContentClick = () => {
    // Handle content click here
    // You can update content or perform any other action
    setContent(`Updated Content for Slide ${currentSlide + 1}`);
  };

  return (
    <>
  <div className="flex  space-x-10">
  <div className=" flex space-x-2">
  {/* Dots */}
  {[...Array(totalSlides).keys()].map((index) => (
    <span
      key={index}
      className={`block w-4 h-4 bg-gray-500 rounded-full bg-blue-500 ${
        index === currentSlide ? 'bg-indigo-500 ' : ''
      }`}
      
      onClick={() => onChange(index)}
    ></span>
  ))}
</div>
<div className=" top-0 right-0">
        <button className="bg-blue-500 text-white px-2 py-1 mr-2" onClick={handlePrev}>
          Prev
        </button>
        <button className="bg-blue-500 text-white px-2 py-1" onClick={handleNext}>
          Next
        </button>
      </div>
  </div>
    
    


        <div>
      <div className="flex items-center">
        <div className="w-full">
          <CarouselCard
            key={currentSlide}
            index={currentSlide}
            isActive={true}
            onContentClick={handleContentClick}
          />
        </div>
        <div className="w-1/2">
          {/* Content on the right side */}
          <div className="bg-gray-200 p-4">
            <h2 className="text-xl font-bold mb-4">Card Content</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
       
      </div>
    </div>
    </>
  );
};

export default Carousel;
