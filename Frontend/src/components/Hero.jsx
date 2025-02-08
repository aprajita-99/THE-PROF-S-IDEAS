import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
       <img className='w-full sm:w-[50%]' src={assets.prof_img_1} alt="" />
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Albert Einstein</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>"Curiosity-driven, transformative, relentless."</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Hero