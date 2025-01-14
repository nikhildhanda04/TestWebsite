import React from 'react';
import {NavLink} from 'react-router-dom'
import { FaGraduationCap as Cap, FaRegFilePdf as Pdf, FaBookBookmark as Book } from "react-icons/fa6";
import { IoNewspaperOutline as Paper } from "react-icons/io5";
   
const Sidebar = () => {
  const menuItems = [
    { icon: <Cap />, label: 'Live Test', path:'/livetest' },
    { icon: <Paper />, label: 'Free Test' },
    { icon: <Cap />, label: 'Youtube Classes' },
  ];

  return (
    <div className='bg-blue-100 h-screen font-sans flex flex-col px-[3vw] py-[4vw] gap-8 text-gray-600'>
      <div className="font-bold">MENU</div>
      <div className='flex flex-col gap-6 text-[1.2vw]'>
        {menuItems.map((item, index) => (
          <NavLink 
          key={index} 
          to={item.path}
          className='flex flex-wrap items-center gap-4'>
          {item.icon} {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;