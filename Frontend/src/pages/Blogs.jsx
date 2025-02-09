import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import Title from '../components/Title';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const { Blogs } = useContext(Context);
  console.log(Blogs);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const { Search, setSearch, showsearch, setshowsearch, searchblog ,setsearchblog , searchpapers ,setsearchpapers ,
    searchachiev ,setsearchachiev ,searchconfer ,setsearchconfer,} = useContext(Context);

    const applyFilter = () => {
      let Copy =Blogs.slice();
      if (showsearch && searchblog) {
        Copy = Copy.filter(item => item.title.toLowerCase().includes(searchblog.toLowerCase()))
      }
      setLatestBlogs(Copy)
    }
    useEffect(()=>{
        applyFilter();
    },[searchblog,showsearch,Blogs])

  useEffect(() => {
    if (Blogs && Blogs.length > 0) {
      setLatestBlogs(Blogs);
    }
  }, [Blogs]); 

  if (Blogs.length === 0) {
    return (
      <div className="my-10">
        <p className="text-center text-xl text-gray-600">Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="my-10">
      <div className="gap-4 gap-y-6">
        {latestBlogs.map((item, index) => (
          <BlogCard
            key={index}
            id={item._id}
            title={item.title}
            description={item.description}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;