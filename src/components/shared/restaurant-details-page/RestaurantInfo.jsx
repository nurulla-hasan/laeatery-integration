"use client"
import { motion } from "framer-motion"
import { Star, Heart, Clock, DollarSign } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"
import { staggerContainer, tagVariants } from "./animation-variants"


const bgColors = ["bg-amber-50", "bg-blue-50", "bg-pink-50", "bg-green-50", "bg-purple-50", "bg-yellow-50"]
const textColors = [
  "text-amber-700",
  "text-blue-700",
  "text-pink-700",
  "text-green-700",
  "text-purple-700",
  "text-yellow-700",
]

const RestaurantInfo = ({ restaurant, isFavorite, toggleFavorite, getHashedIndex }) => {
  const [heartAnimating, setHeartAnimating] = useState(false)

  const handleToggleFavorite = () => {
    setHeartAnimating(true)
    toggleFavorite()
    setTimeout(() => setHeartAnimating(false), 500)
  }

  const handleBook = (id) => {
    console.log(id)
    toast.success("Successfully Booked")
  }

  return (
    <>
      {/* Title & Rating */}
      <motion.div
        className="mt-8 flex justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.h1
          className="md:text-4xl text-2xl font-bold text-gray-800 font-poltawski"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {restaurant?.name}
        </motion.h1>
        <div className="flex items-center">
          <motion.div
            className="flex items-center bg-white md:px-3 md:py-2 px-2 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              <Star className="w-5 h-5 text-amber-500 mr-1 fill-amber-500" />
            </motion.div>
            <span className="font-medium text-sm text-black">{restaurant?.rating}/5.0</span>
          </motion.div>
          <motion.button
            onClick={handleToggleFavorite}
            className="ml-3 md:p-1.5 p-1 rounded-full bg-white cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div animate={heartAnimating ? { scale: [1, 1.3, 1] } : { scale: 1 }} transition={{ duration: 0.3 }}>
              <Heart className={`md:w-6 w-5 md:h-6 h-5 ${isFavorite ? "fill-black text-black" : "text-gray-400"}`} />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div className="mt-4 flex flex-wrap gap-2" variants={staggerContainer} initial="hidden" animate="visible">
        {restaurant?.tags?.map((tagObj, index) => {
          const colorIndex = getHashedIndex(tagObj.label, bgColors.length)
          return (
            <motion.div
              key={index}
              custom={index}
              variants={tagVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center gap-1 px-3 py-1 rounded-full ${bgColors[colorIndex]} ${textColors[colorIndex]}`}
            >
              <span className="text-sm">{tagObj.icon}</span>
              <span className="text-sm">{tagObj.label}</span>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Restaurant Info */}
      <motion.div
        className="mt-6 flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div className="flex items-center" whileHover={{ x: 2 }}>
          <span className="text-black mr-2">Neighborhood:</span>
          <span className="font-medium text-[#333333be] text-sm">{restaurant?.neighborhood}</span>
        </motion.div>
        <span className="text-black">|</span>
        <motion.div className="flex items-center" whileHover={{ x: 2 }}>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Clock className="w-4 h-4 text-gray-500 mr-2" />
          </motion.div>
          <span className="text-black mr-2">Hours:</span>
          <span className="font-medium text-[#333333be] text-sm">{restaurant?.hours}</span>
        </motion.div>
        <span className="text-black">|</span>
        <motion.div className="flex items-center" whileHover={{ x: 2 }}>
          <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
            <DollarSign className="w-4 h-4 text-gray-500 mr-2" />
          </motion.div>
          <span className="text-black mr-2">Price Range:</span>
          <span className="font-medium text-[#333333be] text-sm">{restaurant?.priceRange}</span>
        </motion.div>
      </motion.div>

      {/* Popularity */}
      <motion.div
        className="mt-6 flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.div className="flex items-center" whileHover={{ x: 2 }}>
          <span className="text-black mr-2">Trend Score & Popularity:</span>
          <span className="font-medium text-[#333333be] text-sm">{restaurant?.trendScore}</span>
        </motion.div>
        <span className="text-black">|</span>
        <motion.div className="flex items-center" whileHover={{ x: 2 }}>
          <p className="font-medium text-[#333333be] text-sm">
            Booked{" "}
            <motion.span
              className="font-semibold text-black"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              {restaurant?.bookedThisWeek}
            </motion.span>{" "}
            this week
          </p>
        </motion.div>
      </motion.div>

      {/* Book Now */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <motion.button
          onClick={() => handleBook(restaurant.id)}
          className="bg-black text-white text-xs px-6 py-3 rounded-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
          whileHover={{ scale: 1.05, backgroundColor: "#333" }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </motion.div>
    </>
  )
}

export default RestaurantInfo
