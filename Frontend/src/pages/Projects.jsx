import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { Projects,Search,showsearch} = useContext(Context);
  const [filterprojects,setFilterprojects] = useState([]);

  const applyFilter = () => {

    let projectsCopy =Projects.slice();

    if (showsearch && Search) {
      projectsCopy = projectsCopy.filter(item => item.title.toLowerCase().includes(Search.toLowerCase()))
    }
    setFilterprojects(projectsCopy)
  }

  useEffect(()=>{
      applyFilter();
  },[Search,showsearch,Projects])

  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='flex-1'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 gap-y-6'>
        {
          filterprojects.map((item,index)=>(
            <ProjectCard key={index} id={item._id} image={item.imageUrl} title={item.title} description={item.description} />
          ))
        }
      </div>
      </div>

    </div>
  )
}
export default Projects