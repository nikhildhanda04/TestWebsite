import React from 'react'
import bankImage from '../../../assets/bank.png'

const CourseCard = ({title}) => {
  return (
    <div className='flex flex-col gap-2 shadow-2xl items-center p-4 rounded-xl'>
    <div className='rounded-full max-w-10 bg-gray-300'>
      <img 
      src={bankImage}
      />
    </div>
    <div className='font-[inter] text-gray-800'>
      {title}
    </div>
</div>
  )
}

export default CourseCard
