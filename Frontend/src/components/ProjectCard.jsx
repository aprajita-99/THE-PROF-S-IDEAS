import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, image, title, description }) => {
  return (
    <Link to={`/Projects/${id}`} onClick={() => scrollTo(0, 0)} className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden w-full h-[300px]'>
        {/* This div is the card's image container */}
        <img 
          className='w-full h-full object-cover hover:scale-110 transition ease-in-out' 
          src={image} 
          alt={title} 
        />
      </div>
      <p className='pt-3 pb-1 text-lg font-semibold'>{title}</p>
      <p className='text-sm text-gray-600'>{description}</p>
    </Link>
  );
};

export default ProjectCard;

