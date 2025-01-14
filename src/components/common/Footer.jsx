import React from 'react'
import { FaInstagram as Instagram, FaTelegramPlane as Telegram, FaFacebookF as Facebook, FaYoutube as Youtube} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='px-[6vw] py-[4vh] bg-blue-100 flex flex-row justify-between rounded-t-3xl'>
      
      <div>

      </div>

      <div className='flex flex-col gap-1 font-[inter]'>
          <div className='font-semibold mb-5 text-xl'>
            Quick Links
          </div>
          <a
          className='underline text-blue-700 hover:text-blue-900'
          href = ""
          >
            Terms and Condition
          </a>
          <a
          className='underline text-blue-700 hover:text-blue-900'
          href = ""
          >
            Privacy Policy
          </a>
          <a
          className='underline text-blue-700 hover:text-blue-900'
          href = ""
          >
            Refund Policy
          </a>
      </div>

      <div className='flex flex-col'>
        <div className='font-semibold mb-3 text-xl'>
          Download App
        </div>

        <a
        href = ""
        className='underline text-blue-700 hover:text-blue-900'
        >
          Get App
        </a>

        <div className='font-semibold my-3'>
          Follow Us
        </div>
        <div className='flex flex-row gap-3 text-xl'>
          <a
          href = ""
          >
          <Instagram />
          </a>
          <a
          href = ""
          >
          <Facebook />
          </a>
          <a
          href = ""
          >
          <Youtube />
          </a>
          <a
          href = ""
          >
          <Telegram />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
