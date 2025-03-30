import React from 'react'
import Hero2 from '../components/Hero2'
import GalleryCards from '../components/GalleryCards'
import Navbar from '../components/Navbar'

export default function Gallery() {
return (
    <div>
        <Navbar />
        <Hero2 title="Gallery" vid="/Hero/shiva4.mp4"/>
        <GalleryCards />
    </div>
)
}
