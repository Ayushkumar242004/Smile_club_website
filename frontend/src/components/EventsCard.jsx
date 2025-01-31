import React from "react";

const events = [
  {
    id: 1,
    title: "Event 1",
    image: "event.jpg",
    link: "https://example.com/phenomenon-labs",
    description: "Join us for an exciting event filled with creativity and inspiration.",
  },
  {
    id: 2,
    title: "Event 2",
    image: "event2.jpg",
    link: "https://example.com/zajno",
    description: "Explore innovative ideas and network with like-minded individuals.",
  },
  {
    id: 3,
    title: "Event 3",
    image: "event.jpg",
    link: "https://example.com/ascended",
    description: "A deep dive into the latest trends and transformative experiences.",
  },
];

const EventPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      {/* Heading for Prominent Events */}
      <h1
        style={{
          color: "#E23D3D",
          fontSize: "30px",
          marginBottom: "5px",
          textAlign: "center",
        }}
        className="text-3xl font-bold text-red-500 mb-2 text-center"
      >
        Our Prominent Events
      </h1>
      <p
        style={{
          color: "black",
          textAlign: "center",
          maxWidth: "600px",
          marginBottom: "20px",
        }}
        className="text-gray-300 text-center max-w-xl mb-6"
      >
        Embark on a journey of inner peace and spiritual growth with our upcoming events.
      </p>

      {/* Grid Layout for Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {events.map((event) => (
          <a
            key={event.id}
            href={event.link}
            className="bg-gray-800 shadow-lg overflow-hidden hover:opacity-80 transition-opacity group"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 text-center">
                <h2 className="text-lg font-semibold">{event.title}</h2>
              </div>
            </div>
            {/* Text Section with Black Background */}
            <div className="bg-black p-4 text-white text-center">
              <p>{event.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
