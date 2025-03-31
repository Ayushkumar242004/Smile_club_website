import React, { useEffect, useState } from "react";
import Hero2 from "../components/Hero2"
import '../blogs.css'
import RecentPosts from "../components/SideComponent";
import CardGridPage from "../components/BlogsCard";





export default function Blogs() {
  
  return (
    <div className="min-h-screen bg-black">
      
      <Hero2 title="Blogs" vid="https://res.cloudinary.com/dqlgqfxi6/video/upload/v1743444280/bells_wpvagc.mp4"/>

      

      <div className="flex flex-col lg:flex-row w-full min-h-screen p-6">
        {/* Recent Posts Section (30% width on large screens) */}
        <div className="lg:w-1/3 w-full">
          <RecentPosts />
        </div>

        {/* Card Grid Section (70% width on large screens) */}
        <div className="lg:w-2/3 w-full mt-6 lg:mt-0">
          <CardGridPage />
        </div>
      </div>
    </div>
  );
}