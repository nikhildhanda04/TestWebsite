import React, {useState} from 'react'
import { SiTicktick as Tick } from "react-icons/si";
import Radio from '../ui/Radio';  

const PricingCard = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const options = [
    { value: "option1", label: "12 Months: ₹999" },
    { value: "option2", label: "12 Months: ₹999" },
    { value: "option3", label: "12 Months: ₹999" },
  ];

  return (
    <div className='bg-white rounded-lg font-[inter] shadow-xl flex flex-col p-5 gap-4'>
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
      
        <div className="p-3">
      <h1 className="font-semibold underline text-lg">Choose Your Validity</h1>
      <Radio
        options={options}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
        className="mt-4"
      />
    </div>
        </div>
      <button className='px-4 py-2 bg-green-500 text-white font-semibold rounded-sm'>
        BUY NOW
      </button>
    </div>
  )
}

export default PricingCard
