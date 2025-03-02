import React, { useEffect, useState } from 'react';
import TestCard from '../home/TestCard';
import Banner from '../../components/home/Banner';
import image1 from '../../assets/baneer.jpg';
import image2 from '../../assets/download.jpg';
import CourseCard from '../../components/home/TestCard';

const Home = () => {
  const [tests, setTests] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await fetch('https://pw-backend-livid.vercel.app/api/v1/testSeries/getTestSeries');
        const data = await response.json();
        setTests(data.testSeries || []);
      } catch (error) {
        console.error("Error fetching test series:", error);
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await fetch('https://pw-backend-livid.vercel.app/api/v1/course/getCourses');
        const data = await response.json();
        setCourses(data.courses || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
    fetchCourses();
  }, []);

  return (
    <div className='py-[8vh] flex flex-col items-center gap-24'>
      <div>
        <Banner images={[image1, image2]} />
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {tests.length > 0 ? (
              tests.map((test) => (
                <TestCard 
                  key={test._id} 
                  Desc={test.description || "No description available"} 
                  Price={test.price || "-"} 
                  Mrp={test.mrp || "-"} 
                  Discount={test.discount || "0%"} 
                />
              ))
            ) : (
              <div>No tests available.</div>
            )}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {courses.length > 0 ? (
              courses.map((course) => (
                <CourseCard 
                  key={course._id} 
                  Desc={course.description || "No description available"} 
                  Price={course.price || "-"} 
                  Mrp={course.mrp || "-"} 
                  Discount={course.discount || "0%"} 
                />
              ))
            ) : (
              <div>No courses available.</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;