import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-800 text-white font-bold text-xl flex flex-row justify-between px-8 py-5'>
      <div className='flex flex-row gap-6'>
        <div>
            LogoGoesHere
        </div>
        <div>
            SBI Clerk 2024
        </div>
      </div>
      <div className='flex flex-row gap-6'>
        <div>
            TimerGoesHere
        </div>
        <div className='text-yellow-300 hover:text-yellow-500 cursor-pointer'>
            <a
            href="/tests"
            >
            Pause Test
            </a>
        </div>
      </div>

    </div>
  )
}

export default Navbar
