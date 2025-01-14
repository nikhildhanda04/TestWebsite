import React from 'react';
import { FaUserCircle as User} from "react-icons/fa";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex px-[3vw] py-[1vw] items-center justify-between shadow-lg'>
      <Link 
      to='/'
      >
      <div>
        Logo
      </div>
      </Link>
      <div className='flex flex-row gap-3 '>
        <input
          type="text"
          placeholder="Search.."
          className='px-[1vw] py-2 border hidden md:block bg-gray-100 border-gray-300 rounded-full'
        />
        <button className='bg-blue-600 hidden md:block text-white py-3 px-5 rounded-full font-semibold'>
            Signup
        </button>
        <button className='bg-blue-600 hidden md:block text-white py-3 px-5 rounded-full font-semibold'>
            Login
        </button>
        <button className='md:hidden text-blue-700'>
          <User size={40}/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
