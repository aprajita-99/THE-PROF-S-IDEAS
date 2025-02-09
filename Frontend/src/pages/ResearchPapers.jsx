import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import Title from '../components/Title';
import PaperCard from '../components/PaperCard';

const ResearchPapers = () => {
  const { Papers } = useContext(Context);
  console.log(Papers);
  const [latestPapers, setLatestPapers] = useState([]);

  useEffect(() => {
    if (Papers && Papers.length > 0) {
      setLatestPapers(Papers);    }
  }, [Papers]);

  if (Papers.length === 0) {
    return (
      <div className="my-10">
        <p className="text-center text-xl text-gray-600">Loading research papers...</p>
      </div>
    );
  }

  return (
    <div className="my-10">
      <Title text="Research Papers" />
      <div className="gap-4 gap-y-6">
        {latestPapers.map((paper, index) => (
          <PaperCard
            key={index}
            id={paper._id}
            name={paper.name}
            category={paper.category}
            description={paper.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchPapers;
