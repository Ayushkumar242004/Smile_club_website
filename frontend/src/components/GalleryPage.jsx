import React from 'react'
import { useParams } from 'react-router-dom';
import Hero2 from './Hero2.jsx';
import { GalleryCards as data } from '.././constants/GalleryCards.jsx';
import Navbar from './Navbar.jsx';

export default function GalleryPage() {
    const { id } = useParams();

  return (
    <>
    <Navbar />
    <Hero2 title={data[id-1].event} />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-10 justify-items-center px-8 md:px-12">
        {data[id-1].images.map((image, index) => (
            <img key={index} src={image} alt="gallery" className="w-full h-full object-cover rounded-lg shadow-md"/>
        ))}
    </div>
    </>
)
}
