import React, { useState } from 'react'; 
import CourseCard from '../components/livetest/CourseCard';

const LiveTest = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All' },
    { name: 'Mains Course - Complete Test Series' },
    { name: 'Complete Maths Test Series' },
    { name: 'Complete Test ' },
    { name: 'GK Series' },
  ];

  return (
    <div className='p-[2vw]'>
      <div className='flex flex-wrap justify-center gap-3'>
        {categories.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(item.name)} 
            className={`rounded-full px-4 py-2 font-[inter] transition-colors duration-200 ${
              selectedCategory === item.name
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-100 text-gray-700 hover:bg-gray-300' 
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 justify-between">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default LiveTest;