import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { doctors } from '../assets/assets';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showSpecialties, setShowSpecialties] = useState(false);  // State to toggle specialties list
  const navigate = useNavigate();

  // Accessing the context doctors if needed
  const { Doctors: contextDoctors } = useContext(AppContext);

  // Get unique specialties from the doctors list
  const specialties = [...new Set(doctors.map((doc) => doc.speciality))];

  // Filter doctors based on specialty
  const applyFilter = (selectedSpeciality = '') => {
    if (selectedSpeciality) {
      setFilterDoc(
        doctors.filter(doc => doc.speciality.trim().toLowerCase() === selectedSpeciality.trim().toLowerCase())
      );
    } else {
      setFilterDoc(doctors); // Show all doctors if no specialty is selected
    }
  };

  useEffect(() => {
    applyFilter(speciality);
  }, [doctors, speciality]);

  console.log("Selected Speciality:", speciality);

  return (
    <div className='flex flex-col md:flex-row p-4 gap-4'>
      {/* Left Sidebar: Specialties */}
      <div className='w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow'>
        <h2 className='text-gray-600 text-xl font-semibold mb-4'>Specialties</h2>

        {/* Filter Button */}
        <button
          className='bg-blue-600 text-white px-3 py-2 rounded-lg w-full mb-3 hover:bg-blue-700 transition'
          onClick={() => setShowSpecialties(!showSpecialties)}
        >
          {showSpecialties ? 'Hide Specialties' : 'Show Specialties'}
        </button>

        {/* Specialties List - Toggle Visibility */}
        {showSpecialties && (
          <div className='flex flex-wrap md:flex-col gap-2'>
            {/* Show All Button */}
            <button
              className={`px-3 py-2 w-full rounded-lg transition ${
                !speciality
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-600 hover:text-white'
              }`}
              onClick={() => {
                navigate('/doctors');
                applyFilter('');
              }}
            >
              Show All
            </button>

            {/* Specialty Buttons */}
            {specialties.map((spec, index) => (
              <button
                key={index}
                className={`px-3 py-2 w-full rounded-lg transition ${
                  speciality?.toLowerCase() === spec.toLowerCase()
                    ? 'bg-green-600 text-white'  // Selected state
                    : 'bg-white text-gray-700 hover:bg-blue-600 hover:text-white'  // Hover state
                }`}
                onClick={() => {
                  navigate(`/doctors/${encodeURIComponent(spec)}`);
                  applyFilter(spec);
                  setShowSpecialties(false);  // Hide list after selecting
                }}
              >
                {spec}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right Side: Doctor Details */}
      <div className='w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filterDoc.length > 0 ? (
          filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointments/${item._id}`)}
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
              key={index}
            >
              <img className='w-full h-60 object-cover' src={item.image} alt={item.name} />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                  <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-600'>No doctors available for the selected speciality.</p>
        )}
      </div>
    </div>
  );
};

export default Doctors;
