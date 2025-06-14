"use client"

import { motion } from "framer-motion"
import { Heart, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import placeholder_image from "../../../../public/image/placeholder-image.png"
import { SuccessToast } from "@/utils/ValidationToast"
// import { getLocationFromLatLng } from "@/utils/getLocationFromLatLng"

const RestaurantCard = ({ data, path }) => {
  const [imgError, setImgError] = useState(false)
  const [locationName, setLocationName] = useState("")
  const [localFavorite, setLocalFavorite] = useState(false)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedRestaurants") || "[]")
    const isSaved = saved.some((item) => item.id === data.id)
    setLocalFavorite(isSaved)
  }, [data.id])

  // useEffect(() => {
  //   if (data?.location) {
  //     const [lat, lng] = data.location.split(',').map(coord => parseFloat(coord.trim()))
  //     getLocationFromLatLng(lat, lng).then(setLocationName)
  //   }
  // }, [data?.location])

  const handleToggle = () => {
    const saved = JSON.parse(localStorage.getItem("savedRestaurants") || "[]")

    if (localFavorite) {
      const updated = saved.filter((item) => item.id !== data.id)
      localStorage.setItem("savedRestaurants", JSON.stringify(updated))
      setLocalFavorite(false)
      SuccessToast("Removed from favorites")
    } else {
      saved.push(data)
      localStorage.setItem("savedRestaurants", JSON.stringify(saved))
      setLocalFavorite(true)
      SuccessToast("Added to favorites")
    }
  }

  const handleBook = () => {
    SuccessToast("Booking functionality is not yet implemented for this restaurant.")
  }

  const heartVariants = {
    initial: { scale: 1 },
    tap: {
      scale: [1, 1.3, 1],
      transition: { duration: 0.3 },
    },
    favorite: {
      scale: [1, 1.2, 1],
      transition: { duration: 0.3 },
    },
  }

  const formattedCategories =
    Array.isArray(data?.categories)
      ? data.categories.map((category) => ({
          label: typeof category === "string" ? category : category.label,
        }))
      : typeof data?.categories === "string"
      ? data.categories.split(",").map((c) => ({ label: c.trim() }))
      : []

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col h-[350px]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-[200px] cursor-pointer">
        <Link href={`/${path}/${data?.name ? encodeURIComponent(data.name) : "unknown"}`}>
          <Image
            src={imgError ? placeholder_image : data?.image_url || placeholder_image}
            alt={data?.name || "Restaurant image"}
            fill
            className="object-cover rounded-t-xl"
            onError={() => setImgError(true)}
          />
        </Link>
        <motion.button
          onClick={handleToggle}
          className="absolute top-3 right-3 p-2 rounded-full cursor-pointer transition-all duration-300 bg-white/50 text-black backdrop-blur-sm"
          aria-label={localFavorite ? "Remove from favorites" : "Add to favorites"}
          variants={heartVariants}
          initial="initial"
          whileTap="tap"
          animate={localFavorite ? "favorite" : "initial"}
        >
          <Heart className={`h-5 w-5 ${localFavorite ? "fill-black" : ""}`} />
        </motion.button>
      </div>

      <div className="p-3 flex flex-col justify-between flex-grow space-y-3">
        <div>
          <Link href={`/${path}/${data?.name ? encodeURIComponent(data.name) : "unknown"}`}>
            <h3 className="text-md font-medium text-[#333333]">{data?.name}</h3>
          </Link>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center text-[#333333] text-xs">
              <Star className="w-4 h-4 text-yellow-400 mr-1 fill-yellow-400" />
              <span>{data?.rating}</span>
              <span className="ml-1">({data?.review_count})</span>
            </div>

            {formattedCategories.length > 0 && (
              <div className="flex flex-wrap gap-1 text-xs text-gray-600">
                {formattedCategories.slice(0, 1).map((tag, index) => (
                  <span key={index}>• {tag.label}</span>
                ))}
                {formattedCategories.length > 2 && (
                  <span
                    className="cursor-pointer"
                    title={formattedCategories.map((tag) => tag.label).join(", ")}
                  >
                    • +{formattedCategories.length - 2} more
                  </span>
                )}
              </div>
            )}
          </div>

          {/* <div className="flex items-center text-[#333333] text-xs mt-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{locationName || "Loading location..."}</span>
          </div> */}
        </div>

        <div className="mt-auto">
          <button
            onClick={handleBook}
            className="w-full py-1.5 bg-black text-white text-xs font-medium rounded cursor-pointer hover:bg-[#111]"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default RestaurantCard;
