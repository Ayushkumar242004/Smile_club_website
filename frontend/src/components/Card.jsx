import { motion } from "framer-motion";
import { IoIosContact } from "react-icons/io";
import "../blogs.css";

const Card = () => {
  return (
    <div className="pic-blog bg-white shadow-lg rounded-lg overflow-hidden">
      <motion.div
        className="overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/blog.jpg" // Updated to absolute path
          alt="Mahashivratri Temple"
          className="w-full h-64 object-cover"
        />
      </motion.div>
      <div className="p-4">
        <div className="blog-text text-red-600 text-sm font-semibold flex items-center space-x-2">
          <span className="text-xl">🕉️</span>
          <span className="blog-text">Temple</span>
          <span className="text-gray-500">·</span>
          <span className="text-gray-500">May 20, 2024</span>
        </div>
        <h2 className="blog-text text-xl font-bold mt-2">Mahashivratri Temple</h2>
        <div className="flex items-center mt-3">
          <IoIosContact className="w-8 h-8 blog-text mr-2" />
          <span className="blog-text text-gray-700 font-medium">
            By <span className="blog-text text-red-500">Yesh Chopra</span>
          </span>
        </div>
      </div>
    </div>
  );
};

const CardGridPage = () => {
  return (
    <div className="cardgrid min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto"> {/* Added container with max width */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardGridPage;