"use client"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { fadeInUp, staggerContainer } from "./animation-variants"


const PhotoGallery = ({ gallery }) => {
  const galleryRef = useRef(null)
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      className="mt-10"
      ref={galleryRef}
      initial="hidden"
      animate={galleryInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.h2 className="text-3xl font-bold text-gray-800 font-poltawski" variants={fadeInUp}>
        Photo Gallery
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:mt-6 mt-4"
        variants={staggerContainer}
      >
        {gallery?.map((img, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            custom={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img || "/placeholder.svg"}
              alt={`Gallery Image ${index + 1}`}
              height={1080}
              width={1920}
              className="rounded-lg object-cover w-full h-auto"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default PhotoGallery
