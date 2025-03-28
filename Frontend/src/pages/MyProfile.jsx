import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'User',
    image: assets.profile_pic,
    email: 'user@gmail.com',
    phone: '+91-1234567890',
    address: {
      line1: '1234, Shanti Nagar, Near st.Xavier school',
      line2: 'Bhilai, Chhattisgarh - 490023, India'
    },
    gender: 'Male',
    dob: '20-02-2004'
  });

  const [isEdit, setIsEdit] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false); // State to control image modal

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      {/* Profile Image */}
      <div className="flex flex-col items-center gap-4">
        <img
          className="w-32 h-32 rounded-full shadow-lg border-4 border-gray-300 cursor-pointer hover:scale-105 transition-transform"
          src={userData.image}
          alt=""
          onClick={() => setIsImageOpen(true)} // Open modal on click
        />

        {/* Image Modal */}
        {isImageOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            onClick={() => setIsImageOpen(false)} // Close modal on click outside
          >
            <div className="relative">
              <span
                className="absolute top-2 right-2 text-white text-2xl cursor-pointer"
                onClick={() => setIsImageOpen(false)}
              >
                &times;
              </span>
              <img
                className="w-96 h-96 rounded-lg shadow-2xl"
                src={userData.image}
                alt=""
              />
            </div>
          </div>
        )}

        {isEdit ? (
          <input
            className="bg-gray-100 text-3xl font-semibold text-center py-2 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={userData.name}
            onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
          />
        ) : (
          <p className="font-semibold text-3xl text-gray-800">{userData.name}</p>
        )}
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Contact Information */}
      <div>
        <p className="text-gray-600 text-lg font-semibold underline mb-3">Contact Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 text-gray-700">
          <p>Email ID:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 py-1 px-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              value={userData.phone}
              onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <div className="flex flex-col gap-2">
              <input
                className="bg-gray-100 py-1 px-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <input
                className="bg-gray-100 py-1 px-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </div>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Basic Information */}
      <div>
        <p className="text-gray-600 text-lg font-semibold underline mb-3">Basic Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-3 text-gray-700">
          <p>Gender:</p>
          {isEdit ? (
            <select
              className="bg-gray-100 py-1 px-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p>Date of Birth:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 py-1 px-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
              value={userData.dob}
              type="date"
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      {/* Edit/Save Button */}
      <div className="flex justify-center mt-6">
        <button
          className={`py-2 px-6 text-white rounded-lg ${
            isEdit ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
          } transition duration-300`}
          onClick={() => setIsEdit((prev) => !prev)}
        >
          {isEdit ? 'Save Information' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
