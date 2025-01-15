import React from 'react' 
import TestCard from '../components/home/TestCard'
import Banner from '../components/home/Banner'
import image1 from '../assets/baneer.jpg'
import image2 from '../assets/download.jpg'
const Home = () => {

  return (
    <div className='py-[8vh] flex flex-col items-center gap-24'>
      <div className=''>
        <Banner images={[image1, image2]}/>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <TestCard  Desc="Description about the Test" Price="99" Mrp="399" Discount="70%"/>
        <TestCard  Desc="Description about the Test" Price="99" Mrp="399" Discount="70%"/>
        <TestCard  Desc="Description about the Test" Price="99" Mrp="399" Discount="70%"/>
        
      </div>

      
    </div>
  )
}

export default Home
