import React from 'react';
const DetailedConferenceCard = ({ id, videoUrl, title, insights, date }) => {
  return (
    <div 
      onClick={() => scrollTo(0, 0)} 
      className="block p-6 rounded-xl border-2 border-gray-600 bg-gray-800 hover:bg-gray-700 transition-all duration-300 mb-6 shadow-lg"
    >
      <div className="flex flex-row gap-6">
        <div className="w-2/5">
          <div className="relative w-full h-0" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={videoUrl}
              title={title}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-between">
          <p className="text-2xl font-semibold text-white hover:text-blue-400">{title}</p>
          <p className="text-sm text-gray-300 mb-3">{insights}</p>
          <div className="text-blue-400 hover:text-blue-600 text-sm font-semibold">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailedConferenceCard;

