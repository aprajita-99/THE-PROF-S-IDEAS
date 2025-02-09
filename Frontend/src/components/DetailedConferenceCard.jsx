
import React from 'react';
import { Link } from 'react-router-dom';

const DetailedConferenceCard = ({ id, videoUrl, title, insights, date }) => {
  return (
    <div onClick={() => scrollTo(0, 0)} className="text-gray-700 cursor-pointer block hover:bg-gray-100 transition-all rounded-lg mb-6 p-4 border-2 border-gray-200 hover:border-blue-500">
      <div className="flex flex-row gap-6">
        <div className="w-2/5">
          <div className="relative w-full h-0" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-between">
          <p className="text-xl font-semibold text-gray-800 hover:text-blue-600">{title}</p>
          <p className="text-sm text-gray-600 mb-3">{insights}</p>
          <div  className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
           {date}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailedConferenceCard;
