import React from 'react';
import TestNavigation from './TestNavigation';

const Hero = () => {
  return (
    <div className="flex font-[inter] p-6 bg-gray-100 min-h-screen">
      <div className="flex-[2] mr-6">
        <div className="flex flex-col items-start">
          <div className="bg-slate-100 p-3 border border-slate-300 text-white font-semibold w-full">
            <div className="bg-slate-600 max-w-[10vw] p-3 rounded-full text-center">
              SectionName
            </div>
          </div>
          <div className="border border-slate-300 p-3 w-full">
            <div className="flex flex-row justify-between">
              <div>Question No. <span className='font-bold'>10</span></div>
              <div className="flex flex-col items-center gap-4">
                <div className='font-semibold'>Marks:</div>
                <div className="flex flex-row gap-3">
                  <div className="bg-green-600 text-white rounded-full p-1">
                    PositiveMarks
                  </div>
                  <div className="bg-red-600 text-white rounded-full p-1">
                    NegativeMarks
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-4 py-6">
              <div className="text-lg">
                In the following question, a sentence has been given in Active/Passive voice. Out of the four alternatives suggested, select the one which best expresses the same sentence in Passive/Active voice.
              </div>
              <div className="flex flex-col gap-3">
                <label className="flex flex-row gap-3 items-center mt-5 text-lg">
                  <input type="radio" name="option" className="w-5 h-5" />
                  Option1
                </label>
                <label className="flex flex-row gap-3 items-center text-lg">
                  <input type="radio" name="option" className="w-5 h-5" />
                  Option2
                </label>
                <label className="flex flex-row gap-3 items-center text-lg">
                  <input type="radio" name="option" className="w-5 h-5" />
                  Option3
                </label>
                <label className="flex flex-row gap-3 items-center text-lg">
                  <input type="radio" name="option" className="w-5 h-5" />
                  Option4
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between bg-slate-200 p-3 w-full">
            <div className="flex flex-row gap-3">
              <button className="bg-cyan-500 text-white p-2 rounded-lg">
                MARK FOR REVIEW & NEXT
              </button>
              <button className="bg-gray-500 text-white p-2 rounded-lg">
                CLEAR RESPONSE
              </button>
            </div>
            <div>
              <button className="bg-green-500 text-white p-2 rounded-lg">
                SAVE & NEXT
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <TestNavigation />
      </div>
    </div>
  );
};

export default Hero;