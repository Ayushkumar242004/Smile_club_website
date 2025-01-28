import React from "react";

const Sig = () => {
  const services = [
    {
      title: "About Temple",
      description: "Temple is a place where Hindu worship consectetur adipiscing elit, sed do",
      icon: "num1.png",
      bgColor: "bg-[#7e4555]",
      margin: "md:mt-[2em]"
    },
    {
      title: "Our Pandit",
      description: "Temple is a place where Hindu worship consectetur adipiscing elit, sed do",
      icon: "num2.png",
      bgColor: "bg-[#db4242]",
      margin: "md:mt-[-0.5em]"
    },
    {
      title: "Prayers",
      description: "Temple is a place where Hindu worship consectetur adipiscing elit, sed do",
      icon: "num3.png",
      bgColor: "bg-[#fff]",
      textColor: "text-[#7e4555]",
      margin: "md:mt-[-3em]"
    },
  ];

  return (
    <div
      className="bg-orange-100 flex flex-col md:h-screen md:py-0 py-16 w-full lg:px-28 md:px-16 sm:px-20 px-10 md:items-start content-center justify-center self-center text-[#fff]"
      style={{
        backgroundImage: "url('bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-start mb-10 ">
        <p className="uppercase md:text-2xl text-xl">ॐ</p>
        <h2 className="lg:text-6xl text-4xl font-bold">Our SIGs</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:gap-6 md:gap-4 gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bgColor} ${service.textColor || "text-white"} lg:p-9 p-5 md:h-[19em] h-[16em] rounded-lg shadow-2xl relative transform transition-transform duration-500 hover:-translate-y-1 ${service.margin}`}
          >
            <div className="absolute top-0 left-0 w-[60%] h-[0.05em]  bg-gradient-to-r from-[#ffffff52] via-[#ffffffc1] to-transparent animate-move-light rounded-2xl"></div>
            <div className="relative items-start mb-6">
              <img src={service.icon} alt="icon" className="lg:h-16 lg:w-16 h-12 w-12" />
            </div>
            <h3 className="lg:text-4xl text-3xl font-bold mb-4">{service.title}</h3>
            <p className=" text-sm">{service.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sig;
