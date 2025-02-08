import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink } from 'react-router-dom'
import {Context} from '../context/Context';

const Navbar = () => {
    const [visible,setVisible] = useState(false);
    const { search, setSearch, showSearch, setShowSearch,navigate, backendUrl,setToken, token} = useContext(Context);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
    }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/Projects' className='flex flex-col items-center gap-1'>
            <p>PROJECTS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/ResearchPapers' className='flex flex-col items-center gap-1'>
            <p>RESEARCH PAPERS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/Conferences' className='flex flex-col items-center gap-1'>
            <p>CONFERENCES</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/Achievements' className='flex flex-col items-center gap-1'>
            <p>ACHIEVEMENTS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/Blogs' className='flex flex-col items-center gap-1'>
            <p>BLOGS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/Awards' className='flex flex-col items-center gap-1'>
            <p>AWARDS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
            {/* <img onClick={()=> { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" /> */}
            <div className='group relative'>
                <img onClick={()=> token ? null : navigate('/login') } className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                {/* Dropdown Menu */}
                {token && 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>}
            </div> 
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" /> 
      </div>

        {/* Sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/Projects'>PROJECTS</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/ResearchPapers'>RESEARCH PAPERS</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/Conferences'>CONFERENCES</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/Achievements'>ACHIEVEMENTS</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/Blogs'>BLOGS</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                </div>
        </div>

    </div>
  )
}
export default Navbar
