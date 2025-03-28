import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // Function to generate time slots with a 30-minute interval
  const generateTimeSlots = (startTime, endTime) => {
    const slots = [];
    let currentTime = new Date();
    currentTime.setHours(...startTime.split(':').map(Number), 0, 0);

    const [endHour, endMinute] = endTime.split(':').map(Number);

    while (
      currentTime.getHours() < endHour ||
      (currentTime.getHours() === endHour && currentTime.getMinutes() <= endMinute)
    ) {
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const ampm = currentTime.getHours() >= 12 ? 'pm' : 'am';

      const formattedTime = `${hours % 12 || 12}:${minutes} ${ampm}`;
      slots.push(formattedTime);

      // Increment by 30 minutes
      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }

    return slots;
  };

  // Fetch doctor information
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  // Generate available day slots for the next 7 days
  const getAvailableSlots = async () => {
    const slots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const dayName = daysOfWeek[currentDate.getDay()];
      const date = currentDate.getDate();
      const timeSlots = generateTimeSlots('10:00', '19:00'); // 10:00 am to 7:00 pm

      slots.push({
        day: dayName,
        date: date,
        datetime: currentDate,
        timeSlots: timeSlots,
      });
    }

    setDocSlots(slots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  return docInfo && (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row gap-8 items-start bg-white rounded-lg shadow-md p-6 border border-gray-300">
        <div className="flex-shrink-0 w-full sm:w-60 bg-blue-500 rounded-lg p-2">
          <img className="w-full h-60 object-cover rounded-lg" src={docInfo.image} alt={docInfo.name} />
        </div>

        <div className="flex flex-col justify-between w-full">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-bold text-gray-800">{docInfo.name}</h2>
            {assets.verified_icon && <img src={assets.verified_icon} alt="Verified" className="w-6 h-6" />}
          </div>
          <p className="text-gray-700 text-lg">{docInfo.degree} - {docInfo.speciality}</p>
          <p className="text-gray-600 mb-4">Experience: {docInfo.experience}</p>

          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">About
              {assets.info_icon && <img src={assets.info_icon} alt="Info" className="w-5 h-5" />}
            </h3>
            <p className="text-gray-600">{docInfo.about}</p>
          </div>

          <p className="text-gray-500 font-medium mt-4">Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>

          
        </div>
      </div>

      {/* --- Booking Slots --- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 p-2'>
          {docSlots.length > 0 && docSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedSlotIndex(index)}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${selectedSlotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}
            >
              <p>{item.day}</p>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Time Slots --- */}
      <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 p-2'>
        {docSlots[selectedSlotIndex]?.timeSlots.map((time, index) => (
          <p
            key={index}
            onClick={() => setSelectedTimeSlot(time)}
            className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${time === selectedTimeSlot ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`}
          >
            {time}
          </p>
        ))}
      </div>
      <div className="mt-4">
            <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">Book an Appointment</button>
          </div>

          {/*  --- listing Related Doctors*/}
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointments;
