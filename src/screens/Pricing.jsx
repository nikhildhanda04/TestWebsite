import React from 'react'
import PricingCard from '../components/Pricing/PricingCard'

const Pricing = () => {
  return (
    <div className='flex flex-col items-center p-[5vh]'>
        <div className='font-[inter] font-bold text-2xl'>
            Pricing Plans
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4'>
            <PricingCard />

        </div>
      
    </div>
  )
}

export default Pricing
