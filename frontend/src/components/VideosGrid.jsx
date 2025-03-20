"use client"

import { useState, useEffect } from "react"
import { Play, X } from "lucide-react"

// Video Data - Add new videos at the beginning
const videoData = [
  {
    id: 1,
    title: "Bhagwad Gita 6.43 to 6.47",
    videoId: "LHk7EwNP86M",
    date: "2024-08-15",
  },
  {
    id: 2,
    title: "Bhagwad Gita 6.39 to 6.43",
    videoId: "F0LCxtmwl_Q",
    date: "2024-07-20",
  },
  {
    id: 3,
    title: "Bhagwad Gita 6.34 to 6.38",
    videoId: "IWF0XGVDfpk",
    date: "2024-06-10",
  },
  {
    id: 4,
    title: "Bhagwad Gita 6.33 to 6.34",
    videoId: "2PLKmIJJLoM",
    date: "2024-05-05",
  },
  {
    id: 5,
    title: "Bhagwad Gita 6.30 to 6.32",
    videoId: "eB9sFuvL8Sg",
    date: "2024-05-05",
  },
  {
    id: 6,
    title: "Bhagwad Gita 6.24 to 6.29",
    videoId: "zCAMapVuH9E",
    date: "2024-05-05",
  },
  {
    id: 7,
    title: "Bhagwad Gita 6.18 to 6.23",
    videoId: "J0we43LJcl8",
    date: "2024-05-05",
  },
  {
    id: 8,
    title: "The Pantomime Show",
    videoId: "HxulHaWC_io",
    date: "2024-05-05",
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

const VideosGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [thumbnails, setThumbnails] = useState({})

  useEffect(() => {
    const fetchThumbnails = async () => {
      const newThumbnails = {}
      for (const video of videoData) {
        newThumbnails[video.id] = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`
      }
      setThumbnails(newThumbnails)
    }

    fetchThumbnails()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 text-maroon-700 mb-4">
          <span className="text-2xl text-[#8B1D42]">🕉</span>
          <span className="uppercase tracking-wide text-[#8B1D42]">Watch Video</span>
          <span className="text-2xl text-[#8B1D42]">🕉</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12">Our Videos</h1>
      </div>

      {/* Video Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videoData.map((video) => (
          <div key={video.id} className="space-y-3">
            <div
              className="relative group cursor-pointer aspect-video overflow-hidden rounded-lg"
              onClick={() => setSelectedVideo(video.videoId)}
            >
              <img
                src={thumbnails[video.id] || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-800/40 group-hover:bg-gray-800/60 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-maroon-700 fill-maroon-700" />
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg text-orange-500">{video.title}</h3>
          </div>
        ))}
      </div>

      {/* Video Modal */}
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

export default VideosGrid
