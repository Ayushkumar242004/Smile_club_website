import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Dynamically create the link tag for Font Awesome
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";

    // Append the link tag to the head of the document
    document.head.appendChild(link);

    // Cleanup function to remove the link tag when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <footer className="bg-[#770707] mt-auto">
      <div className="flex flex-col sm:flex-row space-y-7 sm:space-y-0 justify-center items-center text-center sm:justify-around sm:items-start lg:py-14 px-7 md:p-10 sm:py-10 sm:px-4 pb-7">
        
        {/* First box */}
        <div className="lg:w-[25%] sm:w-[28%] sm:text-center hidden sm:flex sm:flex-col">
          <div className="mb-4">
            <img
              className="md:h-24 md:w-24 w-20 h-20 mx-auto"
              src="https://res.cloudinary.com/dqlgqfxi6/image/upload/v1743440898/App_logo_nxixer.png"
              alt="Smile Club Logo"
            />
          </div>
          <div className="text-white lg:text-lg md:text-base text-sm">
            <p>
              Experience the joy of Bharatiya culture with SMILE Club, where tradition meets enthusiasm!
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="sm:w-[15%]">
          <div className="text-white font-semibold lg:text-xl md:text-lg text-base sm:mb-4 mb-2">
            QUICK LINKS
          </div>
          <ul className="text-gray-200 lg:text-lg text-base">
            <li className="mb-2 transition-transform transform hover:scale-110 hover:text-gray-300">
              <a href="/" className="">
                Home
              </a>
            </li>
            <li className="mb-2 transition-transform transform hover:scale-110 hover:text-gray-300">
              <a href="/blogs" className="">
                Blogs
              </a>
            </li>
           
          </ul>
        </div>

        {/* Other Links */}
        <div className="sm:w-[15%]">
          <div className="text-white font-semibold  lg:text-xl md:text-lg text-base sm:mb-4 mb-2">
            OTHER LINKS
          </div>
          <ul className="text-gray-200 lg:text-lg text-base ">
            <li className="mb-2 transition-transform transform hover:scale-110 hover:text-gray-300">
              <a href="/teams" className="">
                Team
              </a>
            </li>
            <li className="mb-2 transition-transform transform hover:scale-110 hover:text-gray-300">
              <a href="/events" className="">
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="lg:w-[16%] sm:w-[20%] w-[65%] text-white sm:text-start text-center">
          <div className="text-white font-semibold lg:text-xl md:text-lg text-base sm:mb-4 mb-2">
            CONTACT
          </div>
          <p className="mb-6 lg:text-lg text-base">
            NITK Surathkal, NH 66, Srinivasnagar, Surathkal, Mangalore, Karnataka 575025
          </p>
          <div className="flex sm:justify-start justify-center md:gap-5 gap-6">
            <a
              href="https://www.instagram.com/smile._.club_nitk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl transition-transform transform hover:scale-125 hover:text-gray-300"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/smile-club-nitk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl transition-transform transform hover:scale-125 hover:text-gray-300"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://youtube.com/@SMILEClub_NITK?si=qk-v-oJZi8M7igKn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl transition-transform transform hover:scale-125 hover:text-gray-300"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a 
             href="https://mail.google.com/mail/?view=cm&fs=1&to=smileclun@nitk.edu.in.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-xl transition duration-300 hover:text-maroon-200"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-white sm:text-md text-[0.8em] py-3 sm:px-0 px-3 text-wrap bg-[#550b0bac]">
        <p>&copy; 2025 All rights reserved | Made with ❤️ by SMILE Club</p>
      </div>
    </footer>
  );
};

export default Footer;
