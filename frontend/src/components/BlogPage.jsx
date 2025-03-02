import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero2 from "./Hero2.jsx";
import { blogs } from "../constants/BlogCardPage";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function BlogPage() {
  const [view, setView] = useState(0);
  const { id } = useParams();
  const blogId = parseInt(id, 10);
  const blog = blogs[blogId - 1];

  useEffect(() => {
    if (!blog || !blog.images.length) return;

    const interval = setInterval(() => {
      setView((prevView) => (prevView + 1) % blog.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [blog?.images.length]);

  if (!blog) {
    return <div className="text-center text-xl py-10">Blog not found</div>;
  }

  return (
    <>
      <Hero2 heading={blog.title} />
      <div className="flex md:flex-row flex-col py-10 gap-[4%] md:px-20 px-6">
        <div className="basis-[68%] rounded-lg shadow-md border border-gray-200 p-4">
          
          {/* Slideshow Wrapper */}
          <div className="relative overflow-hidden rounded-lg mb-4">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${view * 100}%)` }}
            >
              {blog.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={blog.title}
                  className="w-full h-auto object-cover flex-shrink-0"
                  style={{ minWidth: "100%" }}
                />
              ))}
            </div>
          </div>

          {/* Blog Content */}
          <h2 className="lg:text-3xl text-2lg font-extrabold text-[#DB4242] mb-2">
            {blog.title}
          </h2>
          <p className="text-[#777777] text-sm lg:text-lg">{blog.qna[0].answer}</p>

          {/* Q&A Section */}
          <div className="mt-4">
            <h3 className="lg:text-2xl text-lg font-extrabold text-[#DB4242] mb-2">
              Questions & Answers:
            </h3>
            {blog.qna.map((item, index) => (
              <div key={index} className="mt-3">
                <h4 className="lg:text-xl text-lg font-extrabold text-[#DB4242] mb-2">
                  {item.question}
                </h4>
                <p className="text-[#777777] text-sm lg:text-lg">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="basis-[28%]">
          {/* Event Information */}
          <div className="max-w-[300px] bg-white shadow-md border border-gray-200 rounded-lg md:mt-0 mt-4 p-6">
            <h2 className="text-[#DB4242] text-xl font-semibold mb-4">Information</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-[#767E88]">Date:</span>
                <span className="text-[#79818B]">{blog.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#767E88]">Author:</span>
                <span className="text-[#79818B]">{blog.organizer}</span>
              </div>
              <div>
                <span className="font-medium text-[#767E88]">Tags:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#E23D3D] text-white text-sm px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social media links */}
          <div className="max-w-[300px] bg-white shadow-md rounded-lg p-6 my-4 border border-gray-200">
            <h2 className="text-[#DB4242] text-lg font-semibold flex items-center mb-4">
              Never Miss Out
            </h2>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/smile._.club_nitk/"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-red-600 hover:bg-red-100"
              >
                <FaInstagram color="#DB4242" />
              </a>
              <a
                href="https://www.linkedin.com/company/smile-club-nitk/"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-red-600 hover:bg-red-100"
              >
                <FaLinkedin color="#DB4242" />
              </a>
              <a
                href="https://www.youtube.com/@SMILEClub_NITK"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-red-600 hover:bg-red-100"
              >
                <FaYoutube color="#DB4242" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
