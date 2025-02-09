import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, description, author }) => {
  return (
    <Link onClick={() => scrollTo(0, 0)} className="text-gray-700 cursor-pointer block hover:bg-gray-50 transition-all rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 mb-6">
      <div className="flex flex-col space-y-4">
        <p className="text-3xl font-semibold text-gray-800 hover:text-blue-600">{title}</p>
        <p className="text-lg text-gray-700">{description}</p>
        <p className="text-sm font-bold text-gray-500">Written by: <span className="text-blue-600">{author}</span></p>
      </div>
    </Link>
  );
};

export default BlogCard;

