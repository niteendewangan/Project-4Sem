import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Anil Sharma',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sharma is dedicated to providing comprehensive medical care with a focus on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '17th Cross, MG Road',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya Singh',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Singh specializes in women’s health, providing compassionate and thorough care.',
        fees: 600,
        address: {
            line1: '27th Cross, Aundh',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Rajesh Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Patel is committed to delivering advanced skincare and cosmetic treatments with a patient-centered approach.',
        fees: 300,
        address: {
            line1: '37th Cross, Marine Drive',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Rohan Deshmukh',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Deshmukh has a passion for pediatric care and provides comprehensive healthcare services for children.',
        fees: 400,
        address: {
            line1: '47th Cross, Anna Nagar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Neha Verma',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Verma specializes in diagnosing and treating neurological disorders with utmost dedication.',
        fees: 500,
        address: {
            line1: '57th Cross, Park Street',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Arjun Kumar',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kumar is known for his expertise in neurological treatments and compassionate care.',
        fees: 500,
        address: {
            line1: '57th Cross, Hazratganj',
            line2: 'Lucknow, Uttar Pradesh'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Deepak Mehra',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Mehra is dedicated to providing comprehensive care and patient education on preventive healthcare.',
        fees: 500,
        address: {
            line1: '17th Cross, Boring Road',
            line2: 'Patna, Bihar'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Suresh Gupta',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Gupta offers expert care in women’s health with a focus on patient comfort and well-being.',
        fees: 600,
        address: {
            line1: '27th Cross, Civil Lines',
            line2: 'Delhi'
        }
    
    
    },
    {
        _id: 'doc9',
        name: 'Dr. Kavya Reddy',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Reddy provides advanced skincare solutions tailored to individual needs.',
        fees: 300,
        address: {
            line1: '37th Cross, Banjara Hills',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Ankit Joshi',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Joshi specializes in child healthcare and developmental monitoring.',
        fees: 400,
        address: {
            line1: '47th Cross, Viman Nagar',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Richa Aggarwal',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Aggarwal focuses on providing accurate diagnosis and effective treatment of neurological conditions.',
        fees: 500,
        address: {
            line1: '57th Cross, Sector 18',
            line2: 'Noida, Uttar Pradesh'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Rajesh Mehta',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Mehta is well-versed in treating complex neurological disorders.',
        fees: 500,
        address: {
            line1: '57th Cross, Gandhi Nagar',
            line2: 'Bangalore, Karnataka'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Sameera Khan',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Khan is dedicated to promoting patient wellness through preventive care and treatment.',
        fees: 500,
        address: {
            line1: '17th Cross, Rajinder Nagar',
            line2: 'Delhi'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Pawan Yadav',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Yadav specializes in maternal and reproductive health with personalized care.',
        fees: 600,
        address: {
            line1: '27th Cross, Jubilee Hills',
            line2: 'Hyderabad, Telangana'
        }
    }
    ,
    {
        _id: 'doc15',
        name: 'Dr. Meera Sinha',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Sinha offers specialized care for skin and hair problems with the latest medical practices.',
        fees: 300,
        address: {
            line1: '37th Cross, Alkapuri',
            line2: 'Vadodara, Gujarat'
        }
    }
    ,
];
