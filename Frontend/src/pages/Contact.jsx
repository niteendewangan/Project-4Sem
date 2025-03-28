import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className='bg-gray-50 min-h-screen py-10'>
      <div className='text-center text-4xl font-bold pt-5 text-gray-700'>
        <p>CONTACT <span className='text-blue-600'>US</span></p>
      </div>

      <div className='flex flex-col items-center justify-center my-16 gap-12 px-6 md:flex-row'>
        <div className='w-full md:max-w-md bg-white shadow-xl rounded-2xl p-8'>
          <img className='w-full rounded-lg' src={assets.contact_image} alt='Contact Us' />
        </div>

        <div className='w-full md:max-w-lg bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-6'>
          <p className='font-semibold text-2xl text-gray-800'>OUR OFFICE</p>
          <p className='text-gray-600'>
            1234, Tech Park,<br />
            4th Floor, Tower B,<br />
            Bengaluru, Karnataka - 560001,<br />
            India
          </p>
          <p className='text-gray-600'>
            Tel: +91-9876543210<br />
            Email: support@MedicarePlus.com
          </p>

          <p className='text-xl font-semibold text-gray-800'>CAREERS AT MedicarePlus</p>
          <p className='text-gray-600'>Learn more about our teams and job openings.</p>

          <button className='bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300'>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
