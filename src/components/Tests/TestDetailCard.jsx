import React from 'react';
import { CiLock as Lock, CiUnlock as Unlock } from "react-icons/ci";
import { FaRegQuestionCircle as Ques, FaRegClock as Clock } from "react-icons/fa";
import { IoCheckmarkSharp as Tick } from "react-icons/io5";

const TestDetailCard = ({ Title, Questions, Time, Marks, Button, ButtonBorderColor = "#3b82f6" }) => {
  const Icon = Button === "Unlock Now" ? Lock : Unlock;

  return (
    <div className='flex flex-col w-full shadow-xl border-l-4 border-blue-600 rounded-r-xl p-4 font-[inter]'>
      <div className='flex flex-col gap-5'>
        <div className='font-medium'>{Title}</div>
        <div className='flex p-3 flex-row gap-2 items-center'>
          <Ques size={13} />
          <div className='text-gray-500 font-extralight text-xs'>{Questions} Questions</div>
          <Clock size={13} />
          <div className='text-gray-500 font-extralight text-xs'>{Time}</div>
          <Tick size={13} />
          <div className='text-gray-500 font-extralight text-xs'>{Marks} Marks</div>
        </div>
      </div>

      <hr className='border-t-1 border-gray-500 my-4 w-full' />

      <div className='flex flex-row'>
        <a
          className='flex gap-2 items-center border rounded-lg p-1 ml-auto px-3 text-sm'
          style={{ borderColor: ButtonBorderColor, color: ButtonBorderColor }}
          href="/testwindow"
        >
          <Icon size={18} style={{ color: ButtonBorderColor }} />
          {Button}
        </a>
      </div>
    </div>
  );
};

export default TestDetailCard;