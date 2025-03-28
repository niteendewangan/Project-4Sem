import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-4 md:px-20 lg:px-32 py-10'>
      {/* About Us Section */}
      <div className='text-center text-2xl font-bold text-gray-700 mb-8'>
        <p>ABOUT <span className='text-primary'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 items-center'>
        <img className='w-full md:max-w-[360px] rounded-lg shadow-lg' src={assets.about_image} alt='About Us' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl font-semibold text-gray-700 mb-6'>
        <p>WHY <span className='text-primary'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row gap-6 mb-20'>
        {[
          { title: 'EFFICIENCY', desc: 'Streamlined appointment scheduling that fits into your busy lifestyle.' },
          { title: 'CONVENIENCE', desc: 'Access to a network of trusted healthcare professionals in your area.' },
          { title: 'PERSONALIZATION', desc: 'Tailored recommendations and reminders to help you stay on top of your health.' }
        ].map((item, index) => (
          <div key={index} className='border px-10 py-6 flex flex-col gap-3 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 rounded-lg shadow-md cursor-pointer'>
            <b>{item.title}:</b>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About;
