import React from 'react';
import { FaInstagram as Insta, FaLinkedin as LinkedIn, FaYoutube as Youtube } from "react-icons/fa";
import { BsTwitterX as X } from "react-icons/bs";
const Footer = () => {
  const exams = [
    { name: 'Bank Exams', link: '/' },
    { name: 'SSC Exams', link: '/' },
    { name: 'UPSC Exams', link: '/' },
  ];

  const blog = [
    { name: 'Latest Posts', link: '/' },
    { name: 'Study Tips', link: '/' },
    { name: 'Success Stories', link: '/' },
  ];

  const company = [
    { name: 'About Us', link: '/' },
    { name: 'Careers', link: '/' },
    { name: 'Contact Us', link: '/' },
  ];

  return (
    <div className='flex flex-col py-[10vh] px-[10vw]'>
      <div className='flex flex-col items-center text-center md:flex-row justify-between font-[inter] gap-8'>
        <div className='flex flex-col'>
          <div className='font-bold text-lg'>Logo</div>
          <div className='text-gray-600'>
            1st Floor, C-129, Sector - 2, Noida- 201301
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='font-semibold text-lg'>Exams</div>
          <div className='grid grid-cols-1 gap-2 mt-2'>
            {exams.map((exam, index) => (
              <a key={index} href={exam.link} className='text-gray-600 hover:text-blue-500'>
                {exam.name}
              </a>
            ))}
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='font-semibold text-lg'>Blog</div>
          <div className='grid grid-cols-1 gap-2 mt-2'>
            {blog.map((post, index) => (
              <a key={index} href={post.link} className='text-gray-600 hover:text-blue-500'>
                {post.name}
              </a>
            ))}
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='font-semibold text-lg'>Company</div>
          <div className='grid grid-cols-1 gap-2 mt-2'>
            {company.map((item, index) => (
              <a key={index} href={item.link} className='text-gray-600 hover:text-blue-500'>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className='mt-[5vh] mb-[2vh] border-t-2'/>
        <div className='flex flex-row justify-between'>
            <div className='text-[15px]'>
            © All rights reserved Practicemock
            </div>
            <div className='flex flex-row gap-4'>
                <a
                href=""
                >
                    <Insta size={26}/>
                </a>
                <a
                href=""
                >
                    <LinkedIn size={24}/>
                </a>
                <a
                href=""
                >
                    <X size={24}/>
                </a>
                <a
                href=""
                >
                    <Youtube size={24}/>
                </a>
            </div>
        </div>

    </div>
  );
};

export default Footer;