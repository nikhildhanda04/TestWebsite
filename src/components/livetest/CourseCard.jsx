import React from 'react'
import courseImage from "../../assets/download.jpg"
const CourseCard = () => {
  return (
    <div className='rounded-2xl flex flex-col gap-4 border border-gray-400 '>
        <div className=''>
            <img 
            src={courseImage}
            alt="Course image"
            className='rounded-t-2xl'
            />
        </div>

        <div className='p-4 flex flex-col gap-5'>
        <div className='font-[inter] font-semibold leading-7'>
        Complete Speed Maths PDF Course For Bank Exam 2024 ( Simplifications + Approximations + Number Series + Quadratic )
        </div>

        <div className='text-gray-600 font-[inter] '>
        If you are looking for an edge in the upcoming bank exams..
        </div>
        <div className='flex flex-row font-[inter] justify-between font-semibold '>
            <div className='flex gap-2'>
            ₹99
            <div className='line-through text-gray-400'>
             399
            </div>

            </div>
            <div className='text-green-500'>
                76% Off
            </div>
        </div>

        <button className='bg-blue-500 text-white py-3 rounded-full font-semibold'>
            <a
            href="/tests"
            >
            View Details
            </a>
        </button>
        </div>
    </div>
  )
}

export default CourseCard
