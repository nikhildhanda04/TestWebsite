import React from 'react'

const NavigationRules = () => {
  return (
    <div className='flex flex-wrap gap-4'>
    <div className='flex flex-row items-center gap-2'>
      <div className='text-white bg-green-500 px-3 py-1 rounded-t-full'>
        0
      </div>
      <div className='text-gray-500 '>
        Answered
      </div>
    </div>
    <div className='flex flex-row items-center gap-2'>
      <div className='text-white bg-purple-600 px-4 py-1 rounded-full'>
        0
      </div>
      <div className='text-gray-500 '>
        Marked
      </div>
    </div>
    <div className='flex flex-row items-center gap-2'>
      <div className='text-black border border-slate-400 px-3 py-1'>
        31
      </div>
      <div className='text-gray-500 '>
        Not Visited
      </div>
    </div>
    <div className='flex flex-row items-center gap-2'>
      <div className='text-white bg-cyan-600 rounded-t-full border-slate-400 px-3 py-1'>
        0
      </div>
      <div className='text-gray-500 '>
        Marked & Answered
      </div>
    </div>
    <div className='flex flex-row items-center gap-2'>
      <div className='text-white bg-red-600 rounded-b-full border-slate-400 px-3 py-1'>
        9
      </div>
      <div className='text-gray-500 '>
        Not Answered
      </div>
    </div>

  </div>
  )
}

export default NavigationRules
