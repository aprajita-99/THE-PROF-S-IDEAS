import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { Search, setSearch, showsearch, setshowsearch, searchblog ,setsearchblog , searchpapers ,setsearchpapers ,
      searchachiev ,setsearchachiev ,searchconfer ,setsearchconfer,} = useContext(Context);
    const [visible,setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname!='/') {
            setVisible(true);
        }
        else {
            setVisible(false)
        }
    },[location])
    
  return showsearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={Search} onChange={(e)=>{setSearch(e.target.value),setsearchblog(e.target.value) ,setsearchpapers(e.target.value) ,
      setsearchachiev(e.target.value) ,setsearchconfer(e.target.value)}} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search'/>
        <img className='w-4' src={assets.search_icon} alt="" />
      </div>
      <img onClick={()=>setshowsearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar