import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='font-[inter] flex flex-row justify-between px-[7vw] py-[2vh] bg-blue-800 text-[white] font-bold text-xl'>
        <div>
            LogoGoesHere
        </div>
        <div>
            SBI Clerk 2024
        </div>
        <div>
            Ready to Take the Test? <span className='cursor-pointer'><a href="/quiz" className='text-yellow-300 hover:text-yellow-500'>Start</a></span>
        </div>
      </div>
    </>
  )
}

export default Navbar
