import React from 'react'
import InsTable from './InsTable'

const Instructions = () => {
  return (
    <>
      <div className='flex flex-col font-[inter] gap-7 p-5'>
        <div className='font-semibold flex justify-center text-xl'>
            Please Read the Instructions Carefully
        </div>
        <div className='text-left font-semibold text-lg'>
            Total Number of Questions:
            <span className='font-light ml-2'>100</span>
        </div>
        <div className='text-left font-semibold text-lg'>
            Total Time Available:
            <span className='font-light ml-2'>2 Hours</span>
        </div>
        <div>
            <InsTable/>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='underline text-xl font-semibold mt-3'>
                General Instructions:
            </div>
            <div className='font-normal text-lg'>
            <div>
                1. All questions are compulsory.
            </div>
            <div>
                2. The clock will be set at the server. You can see the countdown timer at the top right corner of the screen. When the timer reaches zero, the exam will end by itself.
            </div>
            <div>
                3. The question palette at the right of the screen will show the status of each question using one of the following symbols:
            </div>
            <div>
                <img />
            </div>
            <div>
                4. The questions marked for review will be <span className='text-red-500 font-semibold'> considered for evaluation. </span>
            </div>
            </div>

            <div className='underline text-xl font-semibold mt-4'>
                Navigating to a question:
            </div>
            <div>
                <div>
                    <div>
                        1. Click on the question number in the question palette to go to that question directly. Note that using this option does NOT save your answer to the current question.
                    </div>
                    <div>
                        2. To deselect a chosen answer, click on the chosen option again or click on the <span className='font-semibold'>Clear Response button.</span>
                    </div>
                    <div>
                        3. To change your answer to a question, click on the another option.    
                    </div>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Instructions
