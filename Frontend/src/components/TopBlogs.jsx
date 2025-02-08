import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import Title from './Title';
import BlogCard from './BlogCard';

const TopBlogs =()=>{
    const { Blogs } = useContext(Context);
    const [latestBlogs,setLatestBlogs] = useState([]);
    useEffect(()=>{
        setLatestBlogs(Blogs.slice(0,2));
    },[Blogs])
    
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'BLOGS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
           Here are some of my Latest Blogs...
          </p>
      </div>

      {/* Rendering Blogs */}
      <div className=' gap-4 gap-y-6'>
        {
          latestBlogs.map((item,index)=>(
            <BlogCard key={index} id={item._id} title={item.title} description={item.description} author={item.author}/>
          ))
        }
      </div>
    </div>
  )
}

export default TopBlogs