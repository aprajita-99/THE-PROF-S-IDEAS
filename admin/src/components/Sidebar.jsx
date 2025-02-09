import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen bg-white text-black border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink 
              className='flex items-center gap-3 border border-gray-500 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-700 transition-all'
              to="/addBlogs"
            >
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Blogs</p>
            </NavLink>
            <NavLink 
              className='flex items-center gap-3 border border-gray-500 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-700 transition-all'
              to="/listblogs"
            >
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Blogs List</p>
            </NavLink>
            <NavLink 
              className='flex items-center gap-3 border border-gray-500 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-700 transition-all'
              to="/addProjects"
            >
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Projects</p>
            </NavLink>
            <NavLink 
              className='flex items-center gap-3 border border-gray-500 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-700 transition-all'
              to="/ListProjects"
            >
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>List Projects</p>
            </NavLink>
            <NavLink 
              className='flex items-center gap-3 border border-gray-500 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-700 transition-all'
              to="/addResearchPapers"
            >
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Research Papers</p>
            </NavLink>
            <NavLink 
              className='flex items-center gap-3 border border-gray-500 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-700 transition-all'
              to="/listResearchPapers"
            >
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>List Research Papers</p>
            </NavLink>
            <NavLink 
              className='flex items-center gap-3 border border-gray-500 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-700 transition-all'
              to="/addConferences"
            >
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Conferences</p>
            </NavLink>
            <NavLink 
              className='flex items-center gap-3 border border-gray-500 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-700 transition-all'
              to="/ListConferences"
            >
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>List Conferences</p>
            </NavLink>
            <NavLink 
              className='flex items-center gap-3 border border-gray-500 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-700 transition-all'
              to="/AddAchievements"
            >
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Achievements</p>
            </NavLink>
            <NavLink 
              className='flex items-center gap-3 border border-gray-500 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-700 transition-all'
              to="/ListAchievements"
            >
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Achievements List</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
