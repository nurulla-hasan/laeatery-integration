"use client"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SingleDataMap from "../restaurant-map/RestaurantMapWrapper"
import { fadeInUp, imageZoom, staggerContainer } from "./animation-variants"


const HeaderSection = ({ restaurant }) => {
  return (
    <motion.div
      className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="lg:col-span-2" variants={imageZoom}>
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          <Image
            width={1920}
            height={1080}
            src={restaurant?.locationImage || "/placeholder.svg"}
            alt={restaurant?.name}
            priority
            className="w-full md:h-[550px] object-cover rounded-2xl"
          />
        </motion.div>
      </motion.div>

      <motion.div className="bg-white rounded-2xl shadow-sm overflow-hidden relative" variants={fadeInUp}>
        <SingleDataMap
          address={restaurant?.contactInfo?.address}
          lat={restaurant?.coordinates?.lat}
          lng={restaurant?.coordinates?.lng}
          name={restaurant?.name}
        />
        <div>
          <Link
            href={`/view-map?lat=${restaurant?.coordinates?.lat}&lng=${restaurant?.coordinates?.lng}&address=${encodeURIComponent(restaurant?.contactInfo?.address)}&name=${encodeURIComponent(restaurant?.name)}`}
            className="text-blue-500 text-xs absolute top-2 left-2 rounded-lg z-[500] bg-white p-2"
          >
            View Larger Map
          </Link>
        </div>
        <motion.div className="p-7" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h3 className="font-semibold text-lg mb-4 text-[#333333]" variants={fadeInUp}>
            Contact Info
          </motion.h3>
          <motion.div className="space-y-5 text-sm" variants={staggerContainer}>
            <motion.div className="flex items-start" variants={fadeInUp}>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <MapPin className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
              </motion.div>
              <span className="text-[#333333]">{restaurant?.contactInfo?.address}</span>
            </motion.div>
            <motion.div className="flex items-center" variants={fadeInUp}>
              <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.2 }}>
                <Phone className="w-5 h-5 text-black mr-3 flex-shrink-0" />
              </motion.div>
              <span className="text-[#0064DA]">{restaurant?.contactInfo?.phone}</span>
            </motion.div>
            <motion.div className="flex items-center" variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                <Mail className="w-5 h-5 text-black mr-3 flex-shrink-0" />
              </motion.div>
              <span className="text-[#0064DA]">{restaurant?.contactInfo?.email}</span>
            </motion.div>
            <motion.div className="flex items-center" variants={fadeInUp}>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Globe className="w-5 h-5 text-black mr-3 flex-shrink-0" />
              </motion.div>
              <motion.a
                href={restaurant?.contactInfo?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0064DA] hover:underline"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {restaurant?.contactInfo?.website}
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default HeaderSection
