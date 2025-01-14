import React from 'react';
import Navbar from './Navbar'; 
import Sidebar from './Sidebar'; 
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen font-sans">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto px-[6vw]">
          {children}

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;