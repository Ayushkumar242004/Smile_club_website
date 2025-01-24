import React from "react";

export default function About() {
  return (
    <div className="mx-6 my-6 py-16 bg-white">
      {/* Main Content */}
      <div className="grid grid-cols-2 gap-6 items-center">
        {/* Left Column - Images Grid */}
        <div className=" lg:gap-5 md:gap-0 gap-2 flex justify-center ">
            <div className=" flex flex-col lg:gap-5 md:gap-0 gap-2 relative top-[-3em]">
          <div className="relative h-full overflow-hidden">
            <img
              src="about1.jpg"
              alt="Hindu ceremony"
              className="object-cover lg:size-[100%] md:size-[89%] sm:size-[85%]"
            />
          </div>
          <div className="relative h-full overflow-hidden">
            <img
              src="about3.jpg"
              alt="Diya ceremony"
              className="object-cover lg:size-[100%] md:size-[89%] sm:size-[85%]"
            />
          </div>
          </div>
          <div className="flex lg:gap-5 md:gap-0 gap-2 flex-col">
          <div className="relative h-full overflow-hidden">
            <img
              src="about2.jpg"
              alt="Nataraja statue"
              className="object-cover lg:size-[100%] md:size-[89%] sm:size-[85%]"
            />
          </div>
          
          <div className="relative h-full overflow-hidden">
            <img
              src="about4.jpg"
              alt="Ganesha idol"
              className="object-cover lg:size-[100%] md:size-[89%] sm:size-[85%]"
            />
          </div>
          </div>
        </div>

        {/* Right Column - Content  */}
        <div className=" lg:space-y-2 ">
          <div className="flex items-center gap-2 font-semibold text-[#8B1D42]">
            <span className="lg:text-2xl md:text-lg">ॐ</span>
            <h2 className="lg:text-lg md:text-base">ABOUT US</h2>
          </div>

          <h1 className="md:text-3xl lg:text-5xl font-bold text-[#E23D3D] leading-tight">
            About Us
          </h1>

          <div className="flex items-start gap-3">
            {/* Left vertical lines */}
            <div className="mx-3 lg:mt-[-2em] mt-[-1em]">
              {/* Lines */}
              <div className="relative lg:top-[4.2em] top-[3.5em] w-0.5 lg:h-10 h-8 ml-[-1em] bg-[#8e2727]"></div>
              <div className="w-0.5 lg:h-[6em] h-[5em] ml-[-.5em] bg-[#8e2727]"></div>
              <div className="relative lg:bottom-[4.3em] bottom-[3.5em] w-0.5 lg:h-10 h-8 bg-[#8e2727]"></div>
            </div>

            {/* Text */}
            <p className="text-gray-800 lg:text-base text-sm leading-relaxed mt-5">
              We are a Hindu that believes in Lord Rama and Vishnu Deva the followers,
              and we are a Hindu that believes in Lord Rama and Vishnu Deva.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col lg:gap-12 gap-8">
            {/* Temple Feature */}
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center">
                <img src="om.png" alt="om" />
              </div>
              <div>
                <h3 className="lg:text-xl text-lg font-semibold text-[#E23D3D] mb-2">
                  Temple
                </h3>
                <p className="text-gray-600 lg:text-base text-sm">
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </p>
              </div>
            </div>

            {/* Puja Feature */}
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center">
                <img src="temple.png" alt="temple" />
              </div>
              <div>
                <h3 className="lg:text-xl text-lg font-semibold text-[#E23D3D] mb-2">
                  Puja
                </h3>
                <p className="text-gray-600 lg:text-base text-sm">
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
