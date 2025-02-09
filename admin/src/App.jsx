import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddBlogs from './pages/AddBlogs'
import ListBlogs from './pages/ListBlogs'
import AddAwards from './pages/AddAwards'
import AddConferences from './pages/AddConferences'
import AddProjects from './pages/AddProjects'
import AddResearchPapers from './pages/AddResearchPapers'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListResearchPapers from './pages/ListResearchPapers'
import ListConferences from './pages/ListConferences'
import AddAchievements from './pages/AddAchievements'
import ListAchievements from './pages/ListAchievements'


export const backendUrl = import.meta.env.VITE_BACKEND_URL
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');
  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === ""
        ? <Login setToken={setToken} />
        : <>
          <Navbar setToken={setToken} />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/addBlogs' element={<AddBlogs token={token}/>} />
                <Route path='/listblogs' element={<ListBlogs token={token}/>} />
                <Route path='/addProjects' element={<AddProjects token={token}/>} />
                <Route path='/addResearchPapers' element={<AddResearchPapers token={token}/>} />
                <Route path='/listResearchPapers' element={<ListResearchPapers token={token}/>} />
                <Route path='/addConferences' element={<AddConferences token={token}/>} />
                <Route path='/ListConferences' element={<ListConferences token={token}/>} />
                <Route path='/addAwards' element={<AddAwards token={token} />}/>
                <Route path='/AddAchievements' element = {<AddAchievements/>}/>
                <Route path='/ListAchievements' element = {<ListAchievements/>}/>
              </Routes>
            </div>
          </div>
        </>
      }
    </div>
  )
}
export default App