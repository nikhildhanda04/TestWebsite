import React from 'react'
import courseImage from "../../assets/download.jpg"
import {Link} from 'react-router-dom'

const TestCard = ({Desc, Price, Mrp, Discount}, ) => {
  return (
        <div className='rounded-2xl flex flex-col gap-4 border border-gray-400 '>
            <div className=''>
                <img 
                src={courseImage}
                alt="Course image"
                className='rounded-t-xl'
                />
            </div>
    
            <div className='p-4 flex flex-col gap-12'>
            <div className='font-[inter] font-semibold leading-7'>
            {Desc}
            </div>
    
        
            <div className='flex flex-row font-[inter] justify-between font-semibold '>
                <div className='flex gap-2'>
                ₹{Price}
                <div className='line-through text-gray-400'>
                ₹{Mrp}
                </div>
    
                </div>
                <div className='text-green-500'>
                    {Discount} Off
                </div>
            </div>
    
            <a 
            className='bg-blue-500 text-center text-white py-3 rounded-full font-semibold'
            href="/tests"
            >
                View Details
            </a>
            
            </div>
        </div>
  )
}

export default TestCard
