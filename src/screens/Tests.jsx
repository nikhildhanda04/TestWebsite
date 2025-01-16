import React from 'react'
import Banner from '../components/home/Banner'
import image1 from '../assets/baneer.jpg'
import image2 from '../assets/download.jpg'
import TestReqCard from '../components/Tests/TestReqCard'
import TestDetailCard from '../components/Tests/TestDetailCard'

const Tests = () => {
  return (
    <div className='py-[8vh] flex flex-col gap-20'>
      <div className=''>
        <Banner images={[image1, image2]}/>
      </div>
      
      <div className='flex flex-col gap-7'>
      <div className="font-[inter] font-semibold text-xl">
      IBPS PO 2024 Interview Course
      </div>
      <div className='grid grid-col-1 md:grid-cols-3 gap-7'>
      <TestReqCard title="Upload Bio-Data" desc="Must be uploaded immediately after booking" button="Upload"/>
      <TestReqCard title="Upload Bio-Data" desc="Must be uploaded immediately after booking" button="Upload"/>
      <TestReqCard title="Upload Bio-Data" desc="Must be uploaded immediately after booking" button="Upload"/>
      </div>
      </div>

      <div className='flex flex-col gap-7'>
      <div className="font-[inter] font-semibold text-xl">
      Banking Awareness
      </div>
      <div className='grid grid-col-1 md:grid-cols-3 gap-7'>
      <TestDetailCard />
      <TestDetailCard />
      <TestDetailCard />
      <TestDetailCard />
      <TestDetailCard />
      <TestDetailCard />
      </div>
      </div>
    </div>
  )
}

export default Tests
