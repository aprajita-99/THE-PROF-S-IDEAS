import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, description, author }) => {
  return (
    <Link 
      onClick={() => scrollTo(0, 0)} 
      className="block p-6 rounded-lg border-2 border-gray-600 bg-gray-800 hover:bg-gray-700 transition-all duration-300 mb-6"
    >
      <div className="flex flex-col space-y-4">
        <p className="text-3xl font-semibold text-white hover:text-blue-400">{title}</p>
        <p className="text-lg text-gray-300">{description}</p>
        <p className="text-sm font-bold text-gray-400">
          Written by: <span className="text-blue-400">{author}</span>
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;


