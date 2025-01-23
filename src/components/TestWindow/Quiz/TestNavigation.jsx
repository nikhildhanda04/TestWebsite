import React from 'react';
import NavigationRules from './NavigationRules';
const TestNavigation = () => {
  return (
    <div className="flex flex-col font-[inter] p-6 bg-gray-100 min-h-screen">
    
      <div className="bg-white p-4 shadow-md ">
        <div className="text-lg font-semibold mb-4">Hello, nikhildhanda84</div>
        <NavigationRules />
      </div>

      <div className="bg-white p-4 shadow-md">
        <div className="text-lg font-semibold">Section: English Language</div>
      </div>

      <div className="bg-white p-4 shadow-md ">
        <div className="grid grid-cols-8 gap-2 ">
          {Array.from({ length: 35 }, (_, i) => (
            <div
              key={i + 1}
              className="p-3 text-center border border-gray-300 hover:bg-gray-100 cursor-pointer"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 shadow-md">
        <div className="flex justify-between gap-3">
          <button className="bg-gray-500 text-white px-2 py-1 rounded-lg hover:bg-gray-600">
            PREVIOUS SECTION
          </button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600">
            NEXT SECTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestNavigation;