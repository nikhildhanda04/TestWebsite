import React from 'react'
const FeatureCard = ({img, title, desc}) => {
  return (
    <div className='flex flex-col gap-3 items-center text-center font-[inter]'>
        <div className='bg-purple-200 shadow-lg rounded-full'>
            <img 
            src={img}
            />
        </div>
        <div className='font-semibold text-xl'>
            {title}
        </div>
        <div className='text-gray-700'>
        {desc}
        </div>
      
    </div>
  )
}

export default FeatureCard
