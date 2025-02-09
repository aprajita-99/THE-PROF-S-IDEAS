import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import Title from '../components/Title';
import DetailedConferenceCard from '../components/DetailedConferenceCard';

const Conferences = () => {
  const { Conferences } = useContext(Context);
  console.log(Conferences); 
  const [latestConferences, setLatestConferences] = useState([]);
  const { Search, setSearch, showsearch, setshowsearch, searchblog ,setsearchblog , searchpapers ,setsearchpapers ,
    searchachiev ,setsearchachiev ,searchconfer ,setsearchconfer,} = useContext(Context);

    const applyFilter = () => {
      let Copy =Conferences.slice();
      if (showsearch && searchconfer) {
        Copy = Copy.filter(item => item.topic.toLowerCase().includes(searchconfer.toLowerCase()))
      }
      setLatestConferences(Copy)
    }
    useEffect(()=>{
        applyFilter();
    },[searchconfer,showsearch,Conferences])

  useEffect(() => {
    if (Conferences && Conferences.length > 0) {
      setLatestConferences(Conferences);    }
  }, [Conferences]);

  if (Conferences?.length === 0) {
    return (
      <div className="my-10">
        <p className="text-center text-xl text-gray-600">Loading conferences...</p>
      </div>
    );
  }

  return (
    <div className="my-10">
      <Title text="Conferences" />
      <div className="gap-4 gap-y-6">
        {latestConferences.map((conf, index) => (
          <DetailedConferenceCard
            key={index}
            id={conf._id}
            videoUrl={conf.videoUrl}
            title={conf.topic}
            insights={conf.insights}
            date={conf.date}
          />
        ))}
      </div>
    </div>
  );
};
export default Conferences;
