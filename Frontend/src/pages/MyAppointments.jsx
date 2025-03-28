import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className="p-6">
      <p className="text-2xl font-semibold text-gray-700 mb-4">My Appointments</p>
      <div className="flex flex-col gap-4">
        {doctors.slice(0, 3).map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-4 flex items-center gap-6 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Doctor's Image */}
            <div className="flex-shrink-0">
              <img 
                src={item.image} 
                alt="" 
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>

            {/* Doctor's Details */}
            <div className="flex-grow">
              <p className="text-xl font-semibold text-gray-800">{item.name}</p>
              <p className="text-gray-600 mb-1">{item.speciality}</p>
              <p className="text-gray-500">Address:</p>
              <p className="text-gray-700">{item.address.line1}</p>
              <p className="text-gray-700">{item.address.line2}</p>
              <p className="text-gray-500 mt-2">
                <span className="font-semibold">Date & Time:</span> 20, July, 2025 | 12:30 PM
              </p>
            </div>

{/* Action Buttons */}
<div className="flex flex-col gap-2">
  <button 
    className="bg-gray-400 text-white py-1 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-600"
  >
    Pay Now
  </button>
  <button 
    className="bg-gray-400 text-white py-1 px-4 rounded-lg transition-colors duration-300 hover:bg-red-600"
  >
    Cancel Appointment
  </button>
</div>



          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
