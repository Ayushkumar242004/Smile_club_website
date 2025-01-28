import React from "react";

const events = [
  {
    id: 1,
    title: "Event 1",
    image: "event.jpg", // Replace with actual image URL
    link: "https://example.com/phenomenon-labs", // Add a link to the event
  },
  {
    id: 2,
    title: "Event 2",
    image: "event2.jpg", // Replace with actual image URL
    link: "https://example.com/zajno", // Add a link to the event
  },
  {
    id: 3,
    title: "Event 3",
    image: "event.jpg", // Replace with actual image URL
    link: "https://example.com/ascended", // Add a link to the event
  },
  {
    id: 4,
    title: "Event 4",
    image: "event2.jpg", // Replace with actual image URL
    link: "https://example.com/visionary-creations", // Add a link to the event
  },
  {
    id: 5,
    title: "Event 5",
    image: "event.jpg", // Replace with actual image URL
    link: "https://example.com/infinite-design", // Add a link to the event
  },
  {
    id: 6,
    title: "Event 6",
    image: "event2.jpg", // Replace with actual image URL
    link: "https://example.com/creative-sparks", // Add a link to the event
  },
];

const EventPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center" style={{ margin: "30px" }}>
      {/* Heading for Prominent Events */}
      <h1 style={{ color: "#E23D3D", fontSize: "30px", marginBottom: "5px", textAlign: "center" }}>
        <b>Our Prominent Events</b>
      </h1>
      <p style={{ color: "black", textAlign: "center", maxWidth: "600px", marginBottom: "20px" }}>
        Embark on a journey of inner peace and spiritual growth with our upcoming events.
      </p>
      
      {/* Horizontal Scrollable Cards */}
      <div className="w-full overflow-x-auto py-4">
        <div className="flex space-x-8">
          {events.map((event) => (
            <a
              key={event.id}
              href={event.link} // Set the link to each event
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex-shrink-0 max-w-[320px] w-full sm:max-w-[260px] hover:opacity-80 transition-opacity" // Added hover effect for links
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Improve security for opening external links
            >
              {/* Image with background for the title */}
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover opacity-50" // Reduced opacity of the image
                />
                {/* Title overlaid on the image */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 text-center">
                  <h2 className="text-lg font-semibold">{event.title}</h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;