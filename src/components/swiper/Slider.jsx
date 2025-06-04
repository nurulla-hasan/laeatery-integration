"use client"
import React, { useState } from 'react'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import placeholder_image from '../../../public/image/placeholder-image.png'
import toast from 'react-hot-toast'


const Slider = ({ data, toggleFavorite: customToggle }) => {
  const [imgError, setImgError] = useState(false)


  const [favorites, setFavorites] = useState([]);
  console.log(favorites);

  const handleToggle = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
      toast.success('Removed from favorites');
    } else {
      setFavorites([...favorites, id]);
      toast.success('Added to favorites');
    }
  };

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: '.slider-next-button',
          prevEl: '.slider-prev-button',
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="nearby-restaurants-slider"
      >
        {data.map((restaurant) => (
          <SwiperSlide key={restaurant.id}>
            <div className="bg-white overflow-hidden transition-transform hover:scale-[1.02] duration-300 rounded-xl">
              <div className="relative w-full h-[200px]">
                <Image
                  src={imgError ? placeholder_image : restaurant?.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover rounded-t-xl"
                  onError={() => (setImgError(true))}
                />
                <button
                  onClick={() => handleToggle(restaurant.id)}
                  className="absolute top-3 right-3 p-2 rounded-full cursor-pointer transition-all duration-300 bg-white/50 text-black backdrop-blur-sm"
                  aria-label={favorites.includes(restaurant.id) ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(restaurant.id) ? "fill-black" : ""}`} />
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-md text-[#333333] font-medium mb-3">{restaurant.name}</h3>

                {/* Rating and tags */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#333333] text-xs mb-2">
                  {/* Rating */}
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span>{restaurant?.rating}</span>
                    <span className="ml-1">({restaurant?.reviews})</span>
                  </div>

                  {/* Dot separator */}

                  {/* Tags */}
                  {Array.isArray(restaurant?.tags) && (
                    <div className="flex items-center gap-0.5 text-gray-700 text-xs">
                      {restaurant.tags.map((tag, index) => {
                        if (index > 1) return null;
                        return (
                          <React.Fragment key={index}>
                            {index !== 0 && <span></span>}
                            <span>{tag.label}</span>
                          </React.Fragment>
                        )
                      })}

                      {restaurant.tags.length > 2 && (
                        <>
                          <span>...</span>
                          <span className='text-xs cursor-pointer' title={restaurant.tags.map(tag => tag.label).join(', ')}>
                            +{restaurant.tags.length - 2} more
                          </span>
                        </>
                      )}
                    </div>
                  )}

                </div>


                <div className="flex items-center text-[#333333] text-xs mb-2">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {restaurant.location}
                </div>

                <div className="flex items-center text-[#333333] text-xs mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Open: {restaurant.hours}
                </div>

                <button className="w-full text-sm py-2 bg-black text-white font-medium rounded hover:bg-gray-700 transition-colors cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
