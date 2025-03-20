import React from 'react'
import { Link } from 'react-router-dom'
import {GalleryCards as data} from '../constants/GalleryCards'

export default function GalleryCards() {
  return (
    <div className=''>
      <div className='container mx-auto px-8 md:px-12 py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-content-stretch'>
          {/* Cards */}
          {data.map((item) => (
            <div key={item.id} className='relative overflow-hidden rounded-lg'>
              <Link to={`/gallery/${item.id}`}>
              <img
                src={item.images[0]}
                alt={item.event}
                className='h-full w-full object-cover transition-transform transform hover:scale-110 duration-500'
              />
              <div className='absolute bottom-0 left-0 w-full bg-black bg-gradient-to-t from-[#000000] from-40% to-transparent rounded-b-lg items-center px-8 py-4'>
                <h1 className='text-[#DB4242] text-lg min-[400px]:text-2xl md:text-3xl font-bold'>{item.event}</h1>
              </div>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
