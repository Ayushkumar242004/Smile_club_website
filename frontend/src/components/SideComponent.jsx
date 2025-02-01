import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import '../blogs.css'
const RecentPosts = () => {
  const posts = [
    {
      image: "./post.jpg",
      title: "As we've all discovered by now, the world can change",
      date: "May 20, 2024",
    },
    {
      image: "./post.jpg",
      title: "As we've all discovered by now, the world can change",
      date: "May 20, 2024",
    },
    {
      image: "./post.jpg",
      title: "As we've all discovered by now, the world can change",
      date: "May 20, 2024",
    },
  ];

  return (
    <div className="post max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="blog-text text-xl font-bold border-b pb-2 mb-4">Recent Posts</h2>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img src={post.image} alt="Post" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <h3 className="blog-text-cs font-semibold text-sm">{post.title}</h3>
              <p className="blog-text text-xs flex items-center space-x-1">
                <span>📅</span>
                <span className="blog-text-black">{post.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Media Section */}
      
    </div>
  );
};

const SocialMedia = () => {
    return (
        <div className="mt-6 text-center border-t pt-4">
        <h2 className="blog-red text-xl font-bold mb-3">Never Miss Out</h2>
        <div className="flex justify-center space-x-4">
          <FaFacebookF className="blog-red text-2xl cursor-pointer" />
          <FaLinkedinIn className="blog-red text-2xl cursor-pointer" />
          <FaTwitter className="blog-red text-2xl cursor-pointer" />
          <FaYoutube className="blog-red text-2xl cursor-pointer" />
        </div>
      </div>
    )
}

const Courses = () => {
    const posts = [
        {
          image: "./post.jpg",
          title: "As we've all discovered by now, the world can change",
          date: "May 20, 2024",
        },
        {
          image: "./post.jpg",
          title: "As we've all discovered by now, the world can change",
          date: "May 20, 2024",
        },
        {
          image: "./post.jpg",
          title: "As we've all discovered by now, the world can change",
          date: "May 20, 2024",
        },
      ];
    return(
        <div className="post max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="blog-text text-xl font-bold border-b pb-2 mb-4">Our Courses</h2>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img src={post.image} alt="Post" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <h3 className="blog-text-cs font-semibold text-sm">{post.title}</h3>
              <p className="blog-text text-xs flex items-center space-x-1">
                <span>📅</span>
                <span className="blog-text-black">{post.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}
const main_comp = () => {
    return(
        <>
        <RecentPosts/>
        <SocialMedia/>
        <Courses/>
        </>
    )
}

export default main_comp;
