import React from 'react'
import { CiLock as Lock } from "react-icons/ci";
const TestDetailCard = () => {
  return (
    <div className='flex flex-col w-full shadow-xl border-l-4 border-blue-600 rounded-r-xl p-4 font-[inter]'>
    <div className='flex flex-col gap-5'>
        <div className='font-medium'>
        Introduction of the interview course
        </div>
    </div>

    <hr className='border-t-1 border-gray-500 my-4 w-full'/>

    <div className='flex flex-row '>

    <a 
    className='flex gap-2 items-center text-orange-500 border border-orange-500 rounded-lg p-1 ml-auto px-3 text-sm'
    href="/pricing"
    >
      <Lock size={18}/>
      Unlock Now
    </a>
    </div>
    </div>
  )
}

export default TestDetailCard
