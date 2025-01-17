import React from 'react'
import LNavbar from '../components/auth/Login/LNavbar'
import Courses from '../components/auth/Login/Courses';
import { FaArrowRightLong as RArrow } from "react-icons/fa6";
import Stats from '../components/auth/Login/Stats';
import Reviews from '../components/auth/Login/Reviews';
import Features from '../components/auth/Login/Features/Features';
import Footer from '../components/auth/Login/Footer';
import LoginDialog from '../components/auth/Login/LoginDialog';

const Login = () => {
  return (
    <div>
      <LNavbar />

      <div className='flex flex-col text-center justify-center items-center md:flex-row gap-5 py-[13vh] px-[10vw]'>
        <div className='flex flex-col gap-8 '>
            <div className='font-[impact] text-5xl '>
            Practice | Analyse | Excel
            </div>
            <div className='font-[inter] text-xl'>
            Join the best and most affordable online platform for your banking and government exam preparation needs
            </div>
            <div className='font-[inter] flex flex-row items-center gap-3'>
                Start Now
                <RArrow size={30}/>
            </div>
        </div>

        <div className='bg-gray-100 flex flex-col gap-7 py-10 px-7 rounded-lg items-center'>
                <div className='text-center font-[inter]'>
                Join our hands to make your journey to success easier
                </div>
                <div className='font-[inter] font-bold text-xl'>
                Try our free test!
                </div>
                <div>
                    google
                </div>
                
                <div className='w-full'>
                    <input 
                    placeholder='email id'
                    className='w-full rounded-lg text-lg font-[inter] px-5 p-1 border-2 border-orange-400'
                    />    
                </div>        

                <div className='w-full'>
                  <a
                  href="/home"
                  >
                    <button className='bg-green-400 text-white font-[inter] text-lg font-semibold p-2 rounded-lg w-full'>
                        Get Started 
                    </button>
                  </a>
                </div>        
        </div>
      </div>
      <Courses />

      <div className='px-[6vw]'>
      <Stats />
      </div>
      <div className='px-[10vw]'>
        <Reviews />
      </div>
      <div>
        <Features />
      </div>
      <Footer />
    </div>
  )
}

export default Login
