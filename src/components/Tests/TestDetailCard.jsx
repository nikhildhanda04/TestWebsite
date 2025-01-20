import React from 'react'
import { CiLock as Lock } from "react-icons/ci";
import { FaRegQuestionCircle as Ques, FaRegClock as Clock} from "react-icons/fa";
import { IoCheckmarkSharp as Tick } from "react-icons/io5";

const TestDetailCard = () => {
  return (
    <div className='flex flex-col w-full shadow-xl border-l-4 border-blue-600 rounded-r-xl p-4 font-[inter]'>
    <div className='flex flex-col gap-5'>
        <div className='font-medium'>
        Bank Clerk 1
        </div>
        <div className='flex p-3 flex-row gap-2 items-center'>
          <div className=''>
            <Ques size={13}/>
          </div>
          <div className='text-gray-500 font-extralight text-xs flex flex-wrap pr-1'>
            200 Questions
          </div>
          <div>
            <Clock size={13}/>
          </div>
          <div className='text-gray-500 font-extralight text-xs flex flex-wrap pr-1'>
            2 Hours 15 Mins
          </div>
          <div>
            <Tick size={13}/>
          </div>
          <div className='text-gray-500 font-extralight text-xs flex flex-wrap pr-1'>
            50 Marks
          </div>
        </div>
    </div>

    <hr className='border-t-1 border-gray-500 my-4 w-full'/>

    <div className='flex flex-row '>

    <a 
    className='flex gap-2 items-center text-blue-500 border border-blue-500 rounded-lg p-1 ml-auto px-3 text-sm'
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
