import React from 'react'
import { CiClock1 as Clock} from "react-icons/ci";
const TestReqCard = ({button, title, desc}) => {
  return (

    <div className='flex flex-col items-end shadow-xl border-l-4 border-red-600 rounded-r-xl p-4 font-[inter]'>
    <div className='flex flex-col items-start gap-5'>
        <div className='font-medium'>
        {title}
        </div>
        <div className='flex flex-row font-light text-gray-400 text-sm items-center gap-3'>
            <div>
                <Clock size={20}/>
            </div>
            <div>
           {desc}
            </div>
        </div>
  
    </div>

    <hr className='border-t-1 border-gray-500 my-4 w-full'/>

    <button className='text-blue-900 border border-blue-900 rounded-lg p-1 px-3 text-sm'>
        {button}
    </button>
    </div>
  )
}

export default TestReqCard
