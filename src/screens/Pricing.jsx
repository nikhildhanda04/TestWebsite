import React from 'react'
import PricingCard from '../components/Pricing/PricingCard'

const Pricing = () => {
  return (
    <div className='flex flex-col items-center gap-7 p-[5vh]'>
        <div className='font-[inter] font-bold text-2xl'>
            Pricing Plans
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <PricingCard />
            <PricingCard />
            <PricingCard />

        </div>
      
    </div>
  )
}

export default Pricing
