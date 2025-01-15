import React from 'react'
import { FaRegStar as Star } from "react-icons/fa";
import { IoPhonePortraitOutline as Phone, IoDocumentTextOutline as Paper } from "react-icons/io5";

const Stats = () => {
  return (
<div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
        <div className=' bg-[#006D5B] md:col-span-4 flex flex-col py-5 gap-2 items-center justify-center text-4xl text-white font-[inter] font-semibold px-22 rounded-lg'>
          <div className='text-5xl'>
            <Star />
          </div>
          <div> 
            4.55/5
          </div>
          <div className='font-medium text-2xl'>
            Play Store Rating
          </div>

        </div>
        <div className=' bg-[#006D5B] md:col-span-4 flex flex-col py-5 gap-2 items-center justify-center text-4xl text-white font-[inter] font-semibold  px-28 rounded-lg'>
          <div className='text-5xl'>
            <Phone />
          </div>
          <div> 
            1M +
          </div>
          <div className='font-medium text-2xl'>
            Downloads
          </div>

        </div>
        <div className=' bg-[#006D5B] md:col-span-4 flex flex-col py-5 gap-2 items-center justify-center text-4xl text-white font-[inter] font-semibold px-28 rounded-lg'>
          <div className='text-5xl'>
            <Paper />
          </div>
          <div> 
            50M +
          </div>
          <div className='font-medium text-2xl'>
            Mocks Taken
          </div>
        </div>
      </div>

  )
}

export default Stats
