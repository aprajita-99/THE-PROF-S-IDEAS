import React from 'react'
import Hero from '../components/Hero'
import NewsletterBox from '../components/NewsletterBox'
import TopProjects from '../components/TopProjects'
import TopBlogs from '../components/TopBlogs'

const Home = () => {
  return (
    <div>
      <Hero />
      <TopProjects/>
      <TopBlogs/>
      <NewsletterBox/>
    </div>
  )
}

export default Home