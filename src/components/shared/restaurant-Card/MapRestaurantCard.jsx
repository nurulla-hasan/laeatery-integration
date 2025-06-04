"use client"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import placeholder_image from "../../../../public/image/placeholder-image.png"
import toast from "react-hot-toast"

const RestaurantCardExact = ({ data, path, toggleFavorite: customToggle }) => {
  const [imgError, setImgError] = useState(false)


  const [favorites, setFavorites] = useState([])
  const [localFavorite, setLocalFavorite] = useState(data.favorite);
  // Toggle favorite status
  const handleToggle = () => {
    if (customToggle) {
      customToggle(data.id);
    } else {
      const updated = !localFavorite;
      setLocalFavorite(updated);
      toast.success(updated ? 'Added to favorites' : 'Removed from favorites');
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-3 sm:p-4">
      {/* Mobile layout (stacked) */}
      <div className="flex flex-col sm:hidden">
        {/* Top section with image and favorite button */}
        <div className="flex justify-between items-start mb-3">
          <div className="w-full h-24 relative">
            <Link href={`/${path}/${data?.id}`}>
              <Image
                src={imgError ? placeholder_image : data?.image}
                alt={data?.name || "Restaurant image"}
                fill
                className="object-cover rounded-lg"
                onError={() => setImgError(true)}
              />
            </Link>
          </div>

        </div>

        {/* Restaurant name */}
        <div className="flex items-center justify-between">
          <Link href={`/${path}/${data?.id}`} className="text-lg font-medium text-gray-800 mb-1">
            {data?.name}
          </Link>
          <button
            onClick={handleToggle}
            aria-label={favorites.includes(data.id) ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={`h-6 w-6 cursor-pointer ${data.favorite || localFavorite ? "fill-black text-black" : "text-black"}`}
            />
          </button>
        </div>

        {/* Rating and tags */}
        <div className="flex items-center flex-wrap mb-2">
          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="ml-1 font-medium text-gray-800 text-sm">{data?.rating}</span>
          <span className="text-gray-500 text-xs ml-1">({data?.reviews})</span>

          {/* Tags */}
          {Array.isArray(data?.tags) && (
            <div className="ml-2 flex items-center gap-0.5 text-gray-700 text-xs">
              {data.tags.map((tag, index) => {
                if (index > 1) return null
                return (
                  <React.Fragment key={index}>
                    <span>•</span>
                    <span className="mr-1">{tag.label}</span>
                  </React.Fragment>
                )
              })}

              {data.tags.length > 2 && (
                <>
                  <span>•</span>
                  <span className="text-xs cursor-pointer ml-1" title={data.tags.map((tag) => tag.label).join(", ")}>
                    +{data.tags.length - 2} more
                  </span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-700 mb-2">
          <svg className="h-4 w-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="ml-2 text-xs truncate">{data?.location}</span>
        </div>

        {/* Hours */}
        <div className="flex items-center text-gray-700 mb-3">
          <svg className="h-4 w-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="ml-2 text-xs">Open: {data?.hours}</span>
        </div>

        {/* Book now button */}
        <button className="w-full py-2 bg-black text-xs text-white font-medium rounded-sm hover:bg-gray-800 transition-colors">
          Book Now
        </button>
      </div>

      {/* Desktop/tablet layout (side by side) */}
      <div className="hidden sm:flex gap-4">
        {/* Restaurant image */}
        <div className="w-28 h-28 relative flex-shrink-0">
          <Link href={`/${path}/${data?.id}`}>
            <Image
              src={imgError ? placeholder_image : data?.image}
              alt={data?.name || "Restaurant image"}
              fill
              className="object-cover rounded-lg"
              onError={() => setImgError(true)}
            />
          </Link>
        </div>

        {/* Restaurant details */}
        <div className="flex-grow flex flex-col justify-between">
          {/* Restaurant name */}
          <div className="flex justify-between">
            <Link href={`/${path}/${data?.id}`} className="text-lg font-medium text-gray-800">
              {data?.name}
            </Link>
            {/* Favorite button */}
            <button
              onClick={handleToggle}
              className="p-2 rounded-full cursor-pointer transition-all duration-300 bg-white/50 text-black backdrop-blur-sm"
              aria-label={data.favorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart className={`h-5 w-5 ${data.favorite || localFavorite ? "fill-black" : ""}`} />
            </button>
          </div>

          {/* Rating and tags */}
          <div className="flex items-center">
            {/* Star icon */}
            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>

            {/* Rating */}
            <span className="ml-2 font-medium text-gray-800">{data?.rating}</span>
            <span className="text-gray-500 text-sm ml-1">({data?.reviews})</span>

            {/* Tags */}
            {Array.isArray(data?.tags) && (
              <div className="ml-2 flex items-center gap-0.5 text-gray-700 text-xs">
                {data.tags.map((tag, index) => {
                  if (index > 1) return null
                  return (
                    <React.Fragment key={index}>
                      <span>•</span>
                      <span className="mr-2">{tag.label}</span>
                    </React.Fragment>
                  )
                })}

                {data.tags.length > 2 && (
                  <>
                    <span>•</span>
                    <span className="text-xs cursor-pointer ml-2" title={data.tags.map((tag) => tag.label).join(", ")}>
                      +{data.tags.length - 2} more
                    </span>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-700">
            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2 text-xs">{data?.location}</span>
          </div>

          {/* Hours */}
          <div className="md:flex justify-between text-gray-700">
            <div className="flex items-center text-xs">
              <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-2">Open: {data?.hours}</span>
            </div>
            <button className="px-4 py-2 mt-5 cursor-pointer bg-black text-xs text-white font-medium rounded-sm hover:bg-gray-800 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCardExact
