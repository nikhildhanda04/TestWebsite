import React from 'react'
import InsTable from './InsTable'

const Instructions = () => {
  return (
    <>
      <div className='flex flex-col font-[inter] gap-7 px-[4vw] py-[3vw]'>
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
            <div className='font-normal text-lg flex flex-col gap-[5px]'>
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
            <div className='font-normal text-lg flex flex-col gap-[5px]'>
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

            <div className='underline text-xl font-semibold mt-4'>
                Ansering a Question:
            </div>
            <div className='font-normal text-lg flex flex-col gap-[5px]'>
            <div>
                1. To answer a question, do the following:
            </div>
            <div>
                2. To select your answer, click on the button of one of the options.
            </div>
            <div>
                3. To change your chosen answer, click on the button of another option.
            </div>
            <div>
                4. To save your answer, you MUST click on the <span className='font-semibold'>Save & Next</span> button.
            </div>-
            <div>
                5. To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.
            </div>
            <div>
                7. Note that ONLY questions for which answers are saved or marked for review after answering will be considered for evaluation.
            </div>
            </div>
            <div>

            <div className='underline text-xl font-semibold mt-4'>
                    Navigating through sections.
            </div>
                <div className='font-normal text-lg flex flex-col gap-[5px] mt-3'>
                <div>
                    1. Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by clicking on the section name.    
                </div>
                <div>
                    2. After clicking the save and next button on the last question for a section, you will automatically be taken to the first question of the next section.
                </div>
                <div>
                    3. You can shuffle between sections and questions anytime during the examination as per your convenience only during the time stipulated.
                </div>
                <div>
                    4. Candidate shuffle between sections and questions anytime during the examination as per your convenience only during the time stipulated.
                </div>
                <div>
                    5. Candidate can view the corresponding section summary as part of the legend that appears in every section above the question palette.
                </div>
                </div>
            </div>
            <div className='flex justify-center font-semibold text-xl'>
                All The Best!
            </div>

        </div>

      </div>
    </>
  )
}

export default Instructions
