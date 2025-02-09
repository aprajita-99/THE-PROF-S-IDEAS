import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import Title from '../components/Title';
import PaperCard from '../components/PaperCard';

const ResearchPapers = () => {
  const { Papers } = useContext(Context);
  const { Search, setSearch, showsearch, setshowsearch, searchblog ,setsearchblog , searchpapers ,setsearchpapers ,
        searchachiev ,setsearchachiev ,searchconfer ,setsearchconfer,} = useContext(Context);
  const [latestPapers, setLatestPapers] = useState([]);

  const applyFilter = () => {
      let Copy =Papers.slice();
      if (showsearch && searchpapers) {
        Copy = Copy.filter(item => item.name.toLowerCase().includes(searchpapers.toLowerCase()))
      }
      setLatestPapers(Copy)
    }
    useEffect(()=>{
        applyFilter();
    },[searchpapers,showsearch,Papers])

  useEffect(() => {
    if (Papers && Papers.length > 0) {
      setLatestPapers(Papers);
    }
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
      <Title text="Research Papers"/>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

