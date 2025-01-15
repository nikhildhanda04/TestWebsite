import React from 'react'
import Image from '../../../assets/sahil-kajal.jpeg'

const Reviews = () => {
  return (
    <div className='flex flex-col gap-8 items-center py-[20vh]'>
            <div className='font-[inter] font-semibold text-2xl'>
                Happy Students
            </div>
            <div className='flex flex-col items-center md:flex-row gap-4 font-[inter]'>
                <div className='flex flex-col border items-center text-center border-gray-400 rounded-lg p-2'>
                    <div className='rounded-full '>
                        <img 
                        src={Image}
                        className='rounded-full max-w-24'
                        />
                    </div>
                    <div className='font-semibold text-xl'>
                        Sahil Kajal
                    </div>
                    <div className='text-gray-500 font-semibold'>
                        SSC CGL
                    </div>
                    <div className='mt-3'>
                    PracticeMock helped me in improving the marks & also helped me in improving my confidence in writing the real exam.           
                    </div>
                </div>
                <div className='flex flex-col border items-center text-center border-gray-400 rounded-lg p-2'>
                    <div className='rounded-full '>
                        <img 
                        src={Image}
                        className='rounded-full max-w-24'
                        />
                    </div>
                    <div className='font-semibold text-xl'>
                        Sahil Kajal
                    </div>
                    <div className='text-gray-500 font-semibold'>
                        SSC CGL
                    </div>
                    <div className='mt-3'>
                    PracticeMock helped me in improving the marks & also helped me in improving my confidence in writing the real exam.           
                    </div>
                </div>
                <div className='flex flex-col border items-center text-center border-gray-400 rounded-lg p-2'>
                    <div className='rounded-full '>
                        <img 
                        src={Image}
                        className='rounded-full max-w-24'
                        />
                    </div>
                    <div className='font-semibold text-xl'>
                        Sahil Kajal
                    </div>
                    <div className='text-gray-500 font-semibold'>
                        SSC CGL
                    </div>
                    <div className='mt-3'>
                    PracticeMock helped me in improving the marks & also helped me in improving my confidence in writing the real exam.           
                    </div>
                </div>
                <div className='flex flex-col border items-center text-center border-gray-400 rounded-lg p-2'>
                    <div className='rounded-full '>
                        <img 
                        src={Image}
                        className='rounded-full max-w-24'
                        />
                    </div>
                    <div className='font-semibold text-xl'>
                        Sahil Kajal
                    </div>
                    <div className='text-gray-500 font-semibold'>
                        SSC CGL
                    </div>
                    <div className='mt-3'>
                    PracticeMock helped me in improving the marks & also helped me in improving my confidence in writing the real exam.           
                    </div>
                </div>

            </div>
    </div>
  )
}

export default Reviews
