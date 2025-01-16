import React from 'react';
import { FaUserCircle as User} from "react-icons/fa";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex px-[3vw] py-[1vw] items-center justify-between shadow-lg'>
      <Link 
      to='/home'
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
      
        <button className='text-blue-700'>
          <User size={40}/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
