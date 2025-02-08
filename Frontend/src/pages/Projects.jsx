import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import DetailedProjectCard from '../components/DetailedProjectCard';

const Projects = () => {
  const { projects,search,showSearch} = useContext(Context);
  const [filterprojects,setFilterprojects] = useState([]);

  const applyFilter = () => {

    let projectsCopy =projects.slice();

    if (showSearch && search) {
      projectsCopy = projectsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilterprojects(projectsCopy)

  }

  useEffect(()=>{
      applyFilter();
  },[search,showSearch,projects])

  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='flex-1'>
        {/* Map projects */}
        <div className='gap-4 gap-y-6'>
          {
            filterprojects.map((item,index)=>(
              <DetailedProjectCard key={index} title={item.title} id={item._id} description={item.ldescription} link={item.link} videoUrl = {item.videoUrl}/>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Projects