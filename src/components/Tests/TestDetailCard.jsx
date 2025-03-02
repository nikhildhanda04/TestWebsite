import React, { useEffect, useState } from 'react';
import { CiLock as Lock, CiUnlock as Unlock } from "react-icons/ci";
import { FaRegQuestionCircle as Ques, FaRegClock as Clock } from "react-icons/fa";
import { IoCheckmarkSharp as Tick } from "react-icons/io5";

const TestDetailCard = ({ testId }) => {
  const [testDetails, setTestDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const response = await fetch(`https://pw-backend-livid.vercel.app/api/v1/testSeries/getTestSeries?id=${testId}`);
        const data = await response.json();
        setTestDetails(data.testSeries);
      } catch (error) {
        console.error("Error fetching test series details:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (testId) {
      fetchTestDetails();
    }
  }, [testId]);

  if (loading) return <div>Loading...</div>;
  if (!testDetails) return <div>No test details available.</div>;

  const { Title, Questions, Time, Marks, isLocked } = testDetails;
  const Button = isLocked ? "Unlock Now" : "Start Test";
  const ButtonBorderColor = isLocked ? "#3b82f6" : "#10b981";
  const Icon = isLocked ? Lock : Unlock;

  const openInNewWindow = (url, event) => {
    event.preventDefault();
    window.open(url, 'newwindow', 'width=1200,height=900,menubar=no,toolbar=no,resizable=no');
  };

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
          href="/testwindow"
          className='flex gap-2 items-center border rounded-lg p-1 ml-auto px-3 text-sm'
          style={{ borderColor: ButtonBorderColor, color: ButtonBorderColor }}
          onClick={(event) => openInNewWindow('/testwindow', event)}
        >
          <Icon size={18} style={{ color: ButtonBorderColor }} />
          {Button}
        </a>
      </div>
    </div>
  );
};

export default TestDetailCard;