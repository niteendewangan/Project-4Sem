import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='bg-gray-50 shadow-md sticky top-0 z-50'>
      <div className='flex items-center justify-between text-sm py-4 px-6 max-w-screen-xl mx-auto'>

        {/* Logo Section */}
        <div onClick={() => navigate('/')} className='cursor-pointer'>
          <img className='w-40' src={assets.logo} alt='Logo' />
        </div>

        {/* Mobile Menu Toggle - Next to Profile */}
        <div className='md:hidden' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <img className='w-6' src={assets.menu_icon} alt='Menu' />
        </div>

        {/* Navigation Links - Responsive */}
        <div className={`md:flex flex-col md:flex-row gap-3 font-medium text-xl absolute md:static top-16 left-0 w-full bg-gray-50 p-5 md:p-0 md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <NavLink 
            to='/' 
            className={({ isActive }) => (isActive ? 'text-blue-600 py-2 block text-center' : 'text-gray-600 py-2 block text-center hover:text-blue-500')}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to='/doctors' 
            className={({ isActive }) => (isActive ? 'text-blue-600 py-2 block text-center' : 'text-gray-600 py-2 block text-center hover:text-blue-500')}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            All Doctors
          </NavLink>
          <NavLink 
            to='/about' 
            className={({ isActive }) => (isActive ? 'text-blue-600 py-2 block text-center' : 'text-gray-600 py-2 block text-center hover:text-blue-500')}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to='/contact' 
            className={({ isActive }) => (isActive ? 'text-blue-600 py-2 block text-center' : 'text-gray-600 py-2 block text-center hover:text-blue-500')}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>

        {/* Account Button or Profile Section */}
        <div className='flex items-center gap-4 relative'>
          {token ? (
            <div className='flex items-center gap-2 cursor-pointer group' onClick={() => setShowMenu(!showMenu)}>
              <img src={assets.profile_pic} alt='Profile' className='w-10 h-10 rounded-full' />
              <img src={assets.dropdown_icon} alt='Dropdown' className='w-2.5' />
              {/* Dropdown Menu */}
              {showMenu && (
                <div className='absolute top-14 right-0 w-48 bg-white shadow-lg rounded-lg py-2 z-20'>
                  <p className='px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer' onClick={() => { setShowMenu(false); navigate('/my-profile'); }}>My Profile</p>
                  <p className='px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer' onClick={() => { setShowMenu(false); navigate('/my-appointments'); }}>My Appointments</p>
                  <p className='px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer' onClick={() => { setToken(false); setShowMenu(false); navigate('/login'); }}>Logout</p>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => navigate('/login')} className='bg-blue-600 text-white px-8 py-3 rounded-full font-light hover:bg-blue-700 transition-all'>Create Account</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
