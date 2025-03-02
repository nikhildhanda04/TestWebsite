import React, { useEffect, useState } from 'react';
import courseImage from "../../assets/download.jpg";

const CourseCard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://pw-backend-livid.vercel.app/api/v1/course/getCourses");
        const data = await response.json();
        setCourses(data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {courses.map((course) => (
        <div key={course._id} className='rounded-2xl flex flex-col gap-4 border border-gray-400'>
          <div>
            <img 
              src={course.image || courseImage} 
              alt={course.name} 
              className='rounded-t-2xl w-full h-48 object-cover' 
            />
          </div>

          <div className='p-4 flex flex-col gap-5'>
            <div className='font-[inter] font-semibold leading-7'>
              {course.name}
            </div>

            <div className='text-gray-600 font-[inter]'>
              {course.description || "No description available."}
            </div>

            <div className='flex flex-row font-[inter] justify-between font-semibold'>
              <div className='flex gap-2'>
                ₹{course.price}
                {course.originalPrice && (
                  <div className='line-through text-gray-400'>
                    ₹{course.originalPrice}
                  </div>
                )}
              </div>
              {course.discount && (
                <div className='text-green-500'>
                  {course.discount}% Off
                </div>
              )}
            </div>

            <button className='bg-blue-500 text-white py-3 rounded-full font-semibold'>
              <a href={`/course/${course._id}`}>View Details</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;