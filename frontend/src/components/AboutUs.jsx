import React from "react";

export default function About() {
  return (
    <div className="mx-14 my-6 py-16 bg-white">
      {/* Main Content */}
      <div className="grid md:grid-cols-2 lg:gap-8 gap-3 items-center">
        {/* Left Column - Images Grid */}
        <div className="flex lg:gap-4 md:gap-0  md:flex justify-center ">
            <div className=" flex flex-col lg:gap-5 md:gap-0  relative top-[-3em]">
          <div className="relative h-full overflow-hidden ">
            <img
              src="about1.jpg"
              alt="Hindu ceremony"
              className="object-cover lg:size-[100%] md:size-[89%] size-[85%]"
            />
          </div>
          <div className="relative h-full overflow-hidden ">
            <img
              src="about3.jpg"
              alt="Diya ceremony"
              className="object-cover lg:size-[100%] md:size-[89%] size-[85%]"
            />
          </div>
          </div>
          <div className="flex lg:gap-5 md:gap-0  flex-col">
          <div className="relative h-full overflow-hidden ">
            <img
              src="about2.jpg"
              alt="Nataraja statue"
              className="object-cover lg:size-[100%] md:size-[89%] size-[85%]"
            />
          </div>
          
          <div className="relative h-full overflow-hidden ">
            <img
              src="about4.jpg"
              alt="Ganesha idol"
              className="object-cover lg:size-[100%] md:size-[89%] size-[85%]"
            />
          </div>
          </div>
        </div>

        {/* Right Column - Content  */}
        <div className=" lg:space-y-2 ">
          <div className="flex items-center gap-2 font-semibold text-[#8B1D42]">
            <span className="lg:text-2xl text-lg">ॐ</span>
            <h2 className="lg:text-lg md:text-sm text-base">Celebrating Indian Culture with Joy and Pride</h2>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#E23D3D] leading-tight">
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
            <p className="text-[#000] lg:text-base text-justify text-sm leading-relaxed lg:mt-3 mt-3 my-4"> 
            SMILE stands for Ancient Science and Technology for Modern India, Life, and Enlightenment. We are a student initiative spreading the richness of Indian culture through engaging programs. 
          </p>
          </div>

          {/* Features */}
          <div className="flex flex-col lg:gap-12 gap-8">
            {/* Temple Feature */}
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center">
                <img src="om.png" alt="om"/>
              </div>
              <div>
                <h3 className="lg:text-xl text-lg font-semibold text-[#E23D3D] mb-2">
                Our Approach
                </h3>
                <p className="text-gray-800 text-justify lg:text-base text-sm">
                We offer a blend of scientific, cultural, and traditional programs that present Indian culture in a way that resonates with both modern and traditional mindsets.
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
                Cultural Engagement
                </h3>
                <p className="text-gray-800 text-justify lg:text-base text-sm">
                Through events like dramas, workshops, and competitions, we provide students the opportunity to showcase their talents and connect with Indian traditions in meaningful ways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
