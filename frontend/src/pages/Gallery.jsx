import React from 'react'
import Hero2 from '../components/Hero2'
import GalleryCards from '../components/GalleryCards'
import Navbar from '../components/Navbar'
import VideosGrid from '../components/VideosGrid'

export default function Gallery() {
return (
    <div>
        <Navbar />
        <Hero2 title="Gallery" vid="https://res.cloudinary.com/dqlgqfxi6/video/upload/v1743445230/shiva4_skuqec.mp4"/>
        <GalleryCards />
        <VideosGrid/>
    </div>
)
}
