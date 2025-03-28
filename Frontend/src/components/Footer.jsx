import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:flex-row gap-14 my-10 mt-40 text-sm'>

        {/* --- left section --- */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt=""/>
            <p className='w-full md:w-2/3 text-gray-600 leading -6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>
        {/* --- mid section --- */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy</li>
            </ul>
        </div>

        {/*  --- right section ---*/}
        <div>
            <p className='text-xl font-medium mb-5'>Contact Us</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-9876543210</li>
                <li>support@MedicarePlus.com</li>
            </ul>
        </div>
      </div>

      {/*   ------ copy right Text ------*/}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2025 @ MedicarePlus.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
