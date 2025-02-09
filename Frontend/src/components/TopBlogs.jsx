import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import Title from './Title';
import BlogCard from './BlogCard';

const TopBlogs = () => {
  const { Blogs } = useContext(Context);
  console.log(Blogs);
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    if (Blogs && Blogs.length > 0) {
      setLatestBlogs(Blogs.slice(0, 2));
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
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'BLOGS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Here are some of my Latest Blogs...
        </p>
      </div>
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
export default TopBlogs;

