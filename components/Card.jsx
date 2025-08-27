import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, description, imageUrl }) => {
  return (
    <Link to={`/recipes/${id}`}>
      <div className='rounded-md overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
        <img className='w-full h-60 object-cover' src={imageUrl} alt={title} />
        <div className='px-6 py-4'>
          <h2 className='font-bold text-xl mb-2'>{title}</h2>
          <p className='text-gray-700 text-base'>
            {description}
          </p>
        </div>
        <div className='px-6 py-4 flex items-center justify-between'>
          <span className='text-gray-600 text-sm'>#สุขภาพดี</span>
          <span className='text-black hover:text-gray-700'>อ่านเพิ่มเติม</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;

