import React from 'react';
import LNavbar from '../components/auth/Login/LNavbar';
import Courses from '../components/auth/Login/Courses';
import { FaArrowRightLong as RArrow } from "react-icons/fa6";
import Stats from '../components/auth/Login/Stats';
import Reviews from '../components/auth/Login/Reviews';
import Features from '../components/auth/Login/Features/Features';
import Footer from '../components/auth/Login/Footer';
import Herobg from '../assets/herobg.png';

const Login = () => {
  return (
    <div className="relative">
      <img
        src={Herobg}
        alt="Hero Background"
        className="w-full h-auto object-cover opacity-90"
        style={{ minHeight: '100vh' }}
      />
      <div className="absolute inset-0">
        <LNavbar />
        <div className="flex flex-col text-center text-white justify-center items-center md:flex-row gap-5 py-[12vh] px-[10vw]">
          <div className="flex flex-col items-center gap-8">
            <div className="font-[impact] text-5xl">
              Practice | Analyse | Excel
            </div>
            <div className="font-[inter] text-xl">
              Join the best and most affordable online platform for your banking and government exam preparation needs
            </div>
            <div className="font-[inter] font-bold flex flex-row items-center gap-3">
              Start Now
              <RArrow size={30} />
            </div>
          </div>

          <div className="bg-gray-100 text-black flex flex-col gap-7 py-10 px-7 rounded-lg items-center">
            <div className="text-center font-[inter]">
              Join our hands to make your journey to success easier
            </div>
            <div className="font-[inter] font-bold text-xl">
              Try our free test!
            </div>
            <div>
              google
            </div>

            <div className="w-full">
              <input
                placeholder="email id"
                className="w-full rounded-lg text-lg font-[inter] px-5 p-1 border-2 border-orange-400"
              />
            </div>

            <div className="w-full">
              <a href="/home">
                <button className="bg-green-400 text-white font-[inter] text-lg font-semibold p-2 rounded-lg w-full">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='py-[4vh]'> 
        <Courses />
        </div>
        <div className="px-[6vw]">
          <Stats />
        </div>
        <div className="px-[10vw]">
          <Reviews />
        </div>
        <div>
          <Features />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;