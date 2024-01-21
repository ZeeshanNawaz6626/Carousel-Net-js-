// components/CarouselCard.js
import React from 'react';
const CarouselCard = ({ index, isActive, }) => {
  return (
    <div className="flex">
      <div
        className={`h-32 w-full border p-4 ${
          isActive ? 'bg-blue-500 text-white' : 'bg-gray-200'
        } transition duration-300 ease-in-out`}
      >
        <img
        //   src={`https://via.placeholder.com/150/0000${index + 1}/FFFFFF/?text=Image${index + 1}`}
                  src={`scaylar.PNG`}
          alt={`Image ${index + 1}`}
          className="object-cover w-full h-full"
        />
      </div>
     
    </div>
  );
};

export default CarouselCard;
