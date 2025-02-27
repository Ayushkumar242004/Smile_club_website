import {React, useState, useEffect} from 'react';
import Hero2 from './Hero2.jsx';
import {events} from '.././constants/EventCardPage.jsx';
import { blogs } from '../constants/BlogCardPage.jsx';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaCheck } from 'react-icons/fa';

function CardPage({id=3,card=events}) {

  const [view,setView] = useState(0);
  
    const handleNext = () => {
      setView(view + 1);
      if (view === card[id-1].images.length - 1) {
        setView(0);
      }
    };

    useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
        }, 3000);
      
        return () => clearInterval(interval);
      }, [handleNext]);
  
  return (
    <>
    <Hero2 heading={card[id-1].title} />
    <div className='flex md:flex-row flex-col py-10 gap-[4%] md:px-20 px-6'>
        <div className='basis-[68%] rounded-lg shadow-md border border-gray-200 p-4'>
          <div className='flex overflow-hidden transform-flat'> 
            {card[id-1].images.map((image, index) => (
              <img key={index} src={image} alt="event" className="w-full h-auto object-cover transform duration-500 rounded-lg mb-4" 
              style={{transform: `translateX(-${view * 100}%)`}}/>
            ))}
          </div>
          <div className="mb-4 px-8">
            {card[id-1].qna.map((item, index) => (
              <div>
                <div key={index} className="mb-4"></div>
                <h3 className="lg:text-2xl text-lg font-extrabold text-[#DB4242] mb-2">{item.question}</h3>
                <p className="text-[#777777] text-sm lg:text-lg">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="mb-4 px-8">
            <h2 className="lg:text-2xl text-lg font-extrabold text-[#DB4242] mb-2">{card[id-1].points.title}</h2>
            {card[id-1].points.points.map((item, index) => (
              <div>
                <div key={index} className="mb-4"></div>
                <div className="flex items-center space-x-3">
                  <span><FaCheck color='#7E4555' /></span><h6 className="text-md lg:text-lg text-[#DE6342] font-semibold mb-2">{item}</h6>
                </div>
              </div>
            ))}
          </div>
          <div className="my-8 mb-4 px-8">
            {card[id-1].tags.map((tag, index) => (
              <button key={index} className="">
              <span className="inline-block bg-[#EFEFEF] text-[#DB4242] hover:text-white hover:bg-[#7E4555] px-4 py-1 text-sm font-semibold rounded-full mr-2 mb-2">{tag}</span>
              </button>
            ))}
          </div>
        </div>
        <div className='basis-[28%]'>
          <div className="max-w-[300px] bg-white shadow-md border border-gray-200 rounded-lg md:mt-0 mt-4 p-6">
            <h2 className="text-[#DB4242] text-xl font-semibold mb-4">Information</h2>
            <div className="space-y-2">
                <div className="flex justify-between">
                <span className="font-medium text-[#767E88]">Date:</span>
                <span className="text-[#79818B]">25 September, 2018</span>
                </div>
                <div className="flex justify-between">
                <span className="font-medium text-[#767E88]">Time:</span>
                <span className="text-[#79818B]">(8:00 am - 9:00 am)</span>
                </div>
                <div className="flex justify-between">
                <span className="font-medium text-[#767E88]">Event Category:</span>
                <span className="text-[#79818B]">Temple</span>
                </div>
                <div className="flex justify-between">
                <span className="font-medium text-[#767E88]">Organizer:</span>
                <span className="text-[#79818B]">Event Planer</span>
                </div>
                <div className="flex justify-between">
                <span className="font-medium text-[#767E88]">Phone:</span>
                <span className="text-[#79818B]">+02 1565 1236</span>
                </div>
                <div className="flex justify-between">
                <span className="font-medium text-[#767E88]">Email:</span>
                <span className="text-[#79818B]">supportmail@gmail.com</span>
                </div>
            </div>
          </div>
          <div className="max-w-[300px] bg-white shadow-md rounded-lg p-6 my-4 border border-gray-200">
            <h2 className="text-[#DB4242] text-lg font-semibold flex items-center mb-4">
              Never Miss Out
            </h2>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-red-600 hover:bg-red-100"
              >
                <FaFacebook color='#DB4242' />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-red-600 hover:bg-red-100"
              >
                <FaLinkedin color='#DB4242' />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-red-600 hover:bg-red-100"
              >
                <FaTwitter color='#DB4242'/>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-red-600 hover:bg-red-100"
              >
                <FaYoutube color='#DB4242' />
              </a>
            </div>
          </div>
        </div>
        
    </div>
    </>
    
  )
}

export default CardPage