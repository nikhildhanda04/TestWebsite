import React from 'react'
import GApp from '../../../assets/gapp.png'
const LNavbar = () => {
  return (
    <div className='flex flex-row px-[10vw] py-[4vh] items-center justify-between gap-8'> 
      <div>
        logo
      </div>
        <div className='flex flex-row items-center gap-8'>
            <a
            href=""
            >
                <img 
                src={GApp}
                className='max-w-36'
                />
            </a> 
            <button className='bg-green-500 p-2 rounded-2xl text-white font-[inter] font-semibold'>
                New? Create Account.
            </button>
        </div>
    </div>
  )
}

export default LNavbar
