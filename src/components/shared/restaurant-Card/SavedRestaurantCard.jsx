"use client"

import { motion } from "framer-motion"
import { Heart, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import placeholder_image from "../../../../public/image/placeholder-image.png"
import { getLocationFromLatLng } from "@/utils/getLocationFromLatLng"

// `onRemoveFavorite` prop যোগ করা হয়েছে
const SavedRestaurantCard = ({ data, path, onRemoveFavorite }) => {
  const [imgError, setImgError] = useState(false)
  const [locationName, setLocationName] = useState("")

  useEffect(() => {
    if (data?.location) {
      const [lat, lng] = data.location.split(",").map(coord => parseFloat(coord.trim()))
      getLocationFromLatLng(lat, lng)
        .then(name => {
          setLocationName(name);
          if (name === "Location not found" || name === "Location N/A") {
            // console.warn("Could not determine location for:", data.name);
          }
        })
        .catch(error => {
          console.error("Error fetching location name:", error);
          setLocationName("Location N/A");
        });
    }
  }, [data?.location]);

  const heartVariants = {
    initial: { scale: 1 },
    tap: {
      scale: [1, 1.3, 1],
      transition: { duration: 0.3 },
    },
  }

  const formattedCategories =
    Array.isArray(data?.categories)
      ? data.categories.map(category => ({
          label: typeof category === "string" ? category : category.label,
        }))
      : typeof data?.categories === "string"
        ? data.categories.split(",").map(c => ({ label: c.trim() }))
        : []

  const handleRemove = () => {
    if (onRemoveFavorite) {
      onRemoveFavorite(data);
    }
  };

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
          onClick={handleRemove}
          className="absolute top-3 right-3 p-2 rounded-full cursor-pointer transition-all duration-300 bg-white/50 text-black backdrop-blur-sm"
          aria-label="Remove from saved"
          variants={heartVariants}
          initial="initial"
          whileTap="tap"
          whileHover={{ scale: 1.1 }}
        >
          <Heart className="h-5 w-5 fill-black" />
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
                {formattedCategories.length > 1 && (
                  <span
                    className="cursor-pointer"
                    title={formattedCategories.map(tag => tag.label).join(", ")}
                  >
                    • +{formattedCategories.length - 1} more
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center text-[#333333] text-xs mt-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{locationName || "Loading location..."}</span>
          </div>
        </div>

        <div className="mt-auto">
          <button
            onClick={handleRemove}
            className="w-full py-1.5 bg-gray-700 text-white text-xs font-medium rounded cursor-pointer hover:bg-gray-800 transition-colors"
          >
            Remove from Saved
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default SavedRestaurantCard;