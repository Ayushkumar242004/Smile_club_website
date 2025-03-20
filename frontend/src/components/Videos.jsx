"use client"

import { useState, useEffect } from "react"
import { Play, X } from "lucide-react"

const videoData = [
  {
    id: 9,
    title: "New Hindu Festival Celebration",
    videoId: "HxulHaWC_io",
    date: "2025-02-01",
    description:
      "The SMILE Club proudly presents Me and My Mind, a captivating pantomime performance that delves into the intricate relationship between an individual and their inner thoughts.",
  },
]

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4">
      <div className="bg-black rounded-lg max-w-4xl w-full aspect-video relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300 z-10"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  )
}

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [thumbnails, setThumbnails] = useState({})

  useEffect(() => {
    setThumbnails({
      [videoData[0].id]: `https://img.youtube.com/vi/${videoData[0].videoId}/maxresdefault.jpg`,
    })
  }, [])

  const mainVideo = videoData[0]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 text-maroon-700 mb-4">
          <span className="text-2xl text-[#8B1D42]">🕉</span>
          <span className="uppercase tracking-wide text-[#8B1D42]">Watch Video</span>
          <span className="text-2xl text-[#8B1D42]">🕉</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12">Our Videos</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-16 bg-gray-100 p-4 rounded-lg">
        <div className="w-4/5 lg:w-4/5 xl:w-1/2 mx-auto lg:mx-0">
          <div
            className="relative group cursor-pointer aspect-video overflow-hidden rounded-lg"
            onClick={() => setSelectedVideo(mainVideo.videoId)}
          >
            <img
              src={thumbnails[mainVideo.id] || "/placeholder.svg"}
              alt="Main video thumbnail"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gray-800/40 group-hover:bg-gray-800/60 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-maroon-700 fill-maroon-700" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-4/5 lg:w-4/5 xl:w-1/2 mx-auto lg:mx-0">
          <p className="text-gray-800 mb-2">
            {new Date(mainVideo.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <h2 className="text-3xl font-bold text-orange-500 mb-4">{mainVideo.title}</h2>
          <p className="text-gray-800 mb-6">{mainVideo.description}</p>
          <button
            onClick={() => setSelectedVideo(mainVideo.videoId)}
            className="bg-maroon-700 text-white px-6 py-3 rounded-full w-fit hover:bg-maroon-800 transition-colors"
          >
            WATCH VIDEO
          </button>
        </div>
      </div>

      <Modal isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${selectedVideo}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        />
      </Modal>
    </div>
  )
}

export default Videos
