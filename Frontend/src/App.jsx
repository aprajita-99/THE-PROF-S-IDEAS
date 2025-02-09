import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import ResearchPapers from './pages/ResearchPapers'
import Conferences from './pages/Conferences'
import Achievements from './pages/Achievements'
import Login from './pages/Login'
import Blogs from './pages/Blogs'
import Awards from './pages/Awards'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectDetailed from './pages/ProjectDetailed'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/ResearchPapers' element={<ResearchPapers />} />
        <Route path='/Conferences' element={<Conferences />} />
        <Route path='/Achievements' element={<Achievements/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Awards' element={<Awards />} />
        <Route path='/Projects/:id' element = {<ProjectDetailed/>}/>
      </Routes>
      <Footer />
    </div>
  )
}
export default App