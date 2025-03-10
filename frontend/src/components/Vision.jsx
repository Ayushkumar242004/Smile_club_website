import { Check } from "lucide-react"

export default function Vision() {
  return (
    <div className="container mx-auto lg:px-4 px-16 py-8 md:py-12 lg:py-16 mb-10">
      <div className="relative">
        {/* Main content container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-16 lg:pt-0">
          {/* Left side - Image */}
          <div className="relative max-w-[200px] xs:max-w-[280px] sm:max-w-md mx-auto mb-12 lg:mb-0">
            <div className="aspect-w-4 aspect-h-3 w-full xs:w-10/12 sm:w-3/4 mx-auto relative z-10">
              <img
                src="/vision_images/shiva.jpg" // Update with your actual image path
                alt="Lord Shiva meditation"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 xs:-bottom-6 sm:-bottom-12 -right-8 sm:-right-12 lg:-right-12 w-20 h-20 xs:w-20 xs:h-20 sm:w-40 sm:h-40 lg:w-40 lg:h-40 overflow-hidden rounded-lg shadow-md">
              <img
                src="/vision_images/temple.jpg" // Update with your actual image path
                alt="Temple structure"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -top-6 xs:-top-6 sm:-top-12 -left-12 xs:-left-6 sm:-left-10 lg:-left-8 w-20 h-20 xs:w-16 xs:h-16 sm:w-40 sm:h-40 lg:w-40 lg:h-40 overflow-hidden rounded-lg shadow-md">
              <img
                src="/vision_images/ganesh.jpg" // Update with your actual image path
                alt="Lord Ganesh"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <span className="font-semibold text-lg text-[#8B1D42]">ॐ Celebrating and sharing the joy of Indian culture</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 text-[#E23D3D]">Our Vision</h1>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {["Guiding Principles", "Cultural Celebration", "Social Impact", "Inspire Curiosity"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Check className="w-6 h-6 text-gray-800" />
                  </div>
                  <span className="text-medium font-bold text-[#E23D3D]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="border-l-2 pl-4 space-y-2 border-[#E23D3D]">
              <p className="text-gray-600 text-lg">
              Our principles are our guiding light in crafting our vision statement,it is to celebrate and distribute the joy of the Indian culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

