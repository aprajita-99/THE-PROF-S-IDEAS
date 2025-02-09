import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import Title from './Title';
import ProjectCard from './ProjectCard';

const TopProjects =()=>{
    const {Projects} = useContext(Context);
    const [TopProjects,setTopProjects] = useState([]);
    useEffect(()=>{
        setTopProjects(Projects.slice(0,5));
    },[Projects])
    
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1={'TOP'} text2={'PROJECTS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
           Here are some of my best Projects.
          </p>
      </div>

      {/* Rendering Projects */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          TopProjects.map((item,index)=>(
            <ProjectCard key={index} id={item._id} image={item.imageUrl} title={item.title} description={item.description} />
          ))
        }
      </div>
    </div>
  )
}

export default TopProjects