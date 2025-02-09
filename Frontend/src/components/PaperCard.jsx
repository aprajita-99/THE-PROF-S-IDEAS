import React from 'react';

const PaperCard = ({ id, name, category, description }) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:shadow-xl p-5">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-sm font-medium text-indigo-600 mt-1">{category}</p>
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default PaperCard;

