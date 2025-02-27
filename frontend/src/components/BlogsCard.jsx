import { motion } from "framer-motion";
import { IoIosContact } from "react-icons/io";
import {blogs} from "../constants/BlogsCard.jsx";
import "../blogs.css";

const CardGridPage = () => {
  return (
    <div className="cardgrid min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto"> {/* Added container with max width */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center">
          {blogs.map((blog) => (
            <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Image */}
              <img
                className="w-full h-36 object-cover"
                src={blog.image}
                alt="Green Iguana"
              />

              {/* Card Content */}
              <div className="p-4">
                <h5 className="text-xl font-semibold text-[#E23D3D]">{blog.title}</h5>
                <p className="line-clamp-3 text-gray-600 text-sm mt-2">{blog.description}</p>
              </div>

              {/* Actions */}
              <div className="p-4 border-t flex justify-between">
                <button className="text-blue-500 font-semibold hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGridPage;