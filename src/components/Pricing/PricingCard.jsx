import React from 'react'
import { SiTicktick as Tick } from "react-icons/si";

const PricingCard = () => {
  return (
    <div className='bg-white rounded-lg font-[inter] shadow-xl flex flex-col p-6 gap-4'>
        <div className=' text-lg'>
        PM Premium (Banking + SSC)
        </div>
        <div className='text-xl font-semibold'>
        Use code LOHRI to get 20% off.
        </div>
        <div className='flex flex-col gap-4'>
            <div className='text-sm text-gray-500'>
            Access to tests for all Major Banking, Insurance, Government and SSC exams for 12 months (365 days). Exams included
            </div>
            <div className='flex flex-row gap-2'>
                <Tick />
                <div className='text-xs'>
                SBI PO, SBI Clerk, SBI CBO
                </div>
            </div>
        
        <div className='font-semibold underline text-lg '>
         Choose Your Validity
        </div>

        </div>
      
    </div>
  )
}

export default PricingCard
