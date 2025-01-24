import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isSignupPage = location.pathname === '/signup';
  const isTestWindow = location.pathname === '/testwindow';
  const isQuiz = location.pathname === '/quiz';

  if (isLoginPage || isSignupPage || isTestWindow || isQuiz) {
    return <>{children}</>;
  }

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