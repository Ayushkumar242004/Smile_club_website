export default function Mission() {
    return (
      <section className="w-full max-w-[1500px] mx-auto px-8 sm:px-8 lg:px-16 pt-20 pb-10"> {/* Fixed margins */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          
          {/* Left Content - Fixed Width */}
          <div className="space-y-8 text-left w-full pl-6 sm:pl-12 lg:pl-16 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl"> {/* Fixed left width for different screen sizes */}
            <header className="space-y-3">
              <h2 className="flex items-center gap-2 text-[#9A3412] font-bold text-4xl">
                <span className="text-[#9A3412]">ॐ</span> Our Mission
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#E94E3C] leading-tight">
                Our mission is to share the Good of Hinduism
              </h1>
            </header>
  
            <div className="space-y-4 border-l-4 border-[#E94E3C] pl-4">
              <p className="text-[#8B1D42]">
                We are Hindus who believe in Lord Rama and Vishnu Deva and follow their teachings.
              </p>
            </div>
  
            <p className="text-[#000000] leading-relaxed">
              Our mission is to spread the goodness of Hinduism through love, faith, and service. Many people seek
              answers about Hinduism. The temple is a sacred place where we worship Bhagwan Ram, Shiva, Vishnu,
              Krishna, and others. 
            </p>
          </div>
  
          {/* Right Image - Adjusted Size */}
          <div className="flex justify-center w-full md:w-auto">
            <img
              src="/mission.jpg"
              alt="Puja thali with flowers, diya, and incense sticks used in Hindu rituals"
              className="w-full max-w-[400px] sm:max-w-[400px] md:max-w-[650px] lg:max-w-[800px] xl:max-w-[800px] aspect-[4/3] object-cover rounded-lg" // Increased image size
            />
          </div>
  
        </div>
      </section>
    );
  }
  