import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "../blogs.css";
import { posts } from "../constants/SideComponent.jsx";
import {courses} from "../constants/Courses.jsx"
const RecentPosts = () => {
  return (
    <div className="post max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="blog-text text-xl font-bold border-b pb-2 mb-4">Recent Posts</h2>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <a href={post.link} key={index} className="flex items-center space-x-4">
            <img src={post.image} alt="Post" className="w-28 h-28 object-cover" />
            <div>
              <h3 className="blog-text-cs font-semibold text-sm">{post.title}</h3>
              <p className="blog-text text-xs flex items-center space-x-1">
                <span>📅</span>
                <span className="blog-text-black">{post.date}</span>
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="mt-6 text-center border-t pt-4">
      <h2 className="blog-red text-xl font-bold mb-3">Never Miss Out</h2>
      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/company/smile-club-nitk/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="blog-red text-2xl cursor-pointer" />
        </a>
        <a href="https://www.youtube.com/@SMILEClub_NITK" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="blog-red text-2xl cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/smile._.club_nitk/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="blog-red text-2xl cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <div className="post max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="blog-text text-xl font-bold border-b pb-2 mb-4">Our Courses</h2>
      <div className="space-y-4">
        {courses.map((post, index) => (
          <a href={post.link} key={index} className="flex items-center space-x-4">
            <img src={post.image} alt="Course" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <h3 className="blog-text-cs font-semibold text-sm">{post.title}</h3>
              <p className="blog-text text-xs flex items-center space-x-1">
                <span>📅</span>
                <span className="blog-text-black">{post.date}</span>
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const MainComp = () => {
  return (
    <>
      <RecentPosts />
      <SocialMedia />
      <Courses />
    </>
  );
};

export default MainComp;
