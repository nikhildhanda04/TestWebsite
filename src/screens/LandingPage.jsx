import React from 'react' 
import TestCard from '../components/landingpage/TestCard'
import Banner from '../components/landingpage/Banner'
import image1 from '../assets/baneer.jpg'
import image2 from '../assets/download.jpg'
const LandingPage = () => {

  return (
    <div className='py-[8vh] flex flex-col items-center gap-24'>
      <div className=''>
        <Banner images={[image1, image2]}/>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <TestCard />
        <TestCard />
        <TestCard />
        
      </div>

      
    </div>
  )
}

export default LandingPage
