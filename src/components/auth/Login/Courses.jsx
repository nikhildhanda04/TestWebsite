import React, {useState} from 'react'


const Courses = () => {

      const [selectedCategory, setSelectedCategory] = useState('Banking');

    const categories = [
        { name: 'Banking' },
        { name: 'Mains Course - Complete Test Series' },
        { name: 'Complete Maths Test Series' },
        { name: 'Complete Test ' },
        { name: 'GK Series' },
      ];

  return (
    <div className='flex flex-col items-center justify-center py-[12vh]'>
      <div className='font-[inter] text-2xl font-semibold'>
        Explore our range of Courses
      </div>
      <div className='font-[inter] text-gray-500'>
      Select your exam below and give an immediate push to your preparation 
      </div>

      <div className='flex flex-wrap justify-center gap-3 mt-[5vh]'>
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
    </div>
  )
}

export default Courses
