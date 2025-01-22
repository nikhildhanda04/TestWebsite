import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row bg-blue-100 shadow-inner px-5 py-2 justify-center items-center'>
      <div className='bg-green-500 font-[inter] text-white text-lg font-semibold p-3 rounded-md cursor-pointer hover:bg-green-600'>
        <a 
        href='/quiz'
        >
        Resume Exam
        </a>
      </div>
    </div>
  )
}

export default Footer
