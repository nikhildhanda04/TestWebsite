import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGraduationCap as Cap, FaBars as HamburgerIcon } from 'react-icons/fa6';
import { FaRegTimesCircle as CloseIcon } from 'react-icons/fa';
import { IoNewspaperOutline as Paper } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const menuItems = [
    { icon: <Cap />, label: 'Live Test', path: '/livetest' },
    { icon: <Paper />, label: 'Free Test', path:'/freetests' },
  ];

  return (
    <>
      <div className="md:hidden fixed z-99 m-5 p-2 rounded-lg bg-gray-300">
        <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
          <HamburgerIcon size={24} />
        </button>
      </div>

      {isSidebarVisible && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="bg-blue-100 z-50 h-screen font-sans flex flex-col px-[3vw] py-[4vw] gap-8 text-gray-600 fixed"
        >
          <div className="flex justify-between items-center">
            <div className="font-bold">MENU</div>
            <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
              <CloseIcon size={19} />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-[3vw]">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="flex flex-wrap items-center gap-4"
                onClick={() => setSidebarVisible(false)}
              >
                {item.icon} {item.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}

      <div className="hidden md:flex bg-blue-100 h-screen font-sans flex-col px-[3vw] py-[4vw] gap-8 text-gray-600">
        <div className="font-bold">MENU</div>
        <div className="flex flex-col gap-6 text-[1.2vw]">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="flex flex-wrap items-center gap-4"
            >
              {item.icon} {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;