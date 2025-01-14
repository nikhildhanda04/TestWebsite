import React from 'react';

const Navbar = () => {
  return (
    <div className='flex px-[3vw] py-[1vw] items-center justify-between shadow-lg'>
      <div>
        Logo
      </div>
      <div className='flex flex-row gap-3 '>
        <input
          type="text"
          placeholder="Search.."
          className='px-4 py-2 border bg-gray-100 border-gray-300 rounded-full'
        />
        <button className='bg-blue-600 text-white py-3 px-5 rounded-full font-semibold'>
            Signup
        </button>
        <button className='bg-blue-600 text-white py-3 px-5 rounded-full font-semibold'>
            Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
