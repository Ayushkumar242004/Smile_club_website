import { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../constants/BlogsCard.jsx";
import BlogTagFilter from "./blog-tag-filter.jsx"; // Import the new TagFilter component
import "../blogs.css";

const CardGridPage = () => {
  // Add state for filtered blogs
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  // Add filter handler function
  const handleFilterChange = (selectedTags) => {
    if (selectedTags.length === 0) {
      // If no tags selected, show all blogs
      setFilteredBlogs(blogs);
    } else {
      // Filter blogs that have at least one of the selected tags
      const filtered = blogs.filter(blog => 
        blog.tags.some(tag => selectedTags.includes(tag))
      );
      setFilteredBlogs(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add the TagFilter component here */}
      <BlogTagFilter onFilterChange={handleFilterChange} />
      
      <div className="cardgrid p-6">
        <div className="max-w-7xl mx-auto">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">No blogs match the selected tags.</p>
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center">
              {/* Change blogs.map to filteredBlogs.map */}
              {filteredBlogs.map((blog) => (
                <div key={blog.id} className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-[550px]">
                  {/* Image Section with Dynamic Height */}
                  <div className="flex-grow w-full overflow-hidden">
                    <img className="w-full h-full object-cover" src={blog.image || "/placeholder.svg"} alt={blog.title} />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 flex flex-col justify-end">
                    <h5 className="text-xl font-semibold text-[#E23D3D]">{blog.title}</h5>
                    <p className="line-clamp-3 text-gray-600 text-sm mt-2">{blog.description}</p>
                    
                    {/* Tags Section */}
                    <div className="mt-4 flex flex-wrap gap-2">
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

                  {/* Footer */}
                  <div className="p-4 border-t flex justify-between">
                    <Link to={`/blog/${blog.id}`} className="text-blue-500 font-semibold hover:underline">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardGridPage;