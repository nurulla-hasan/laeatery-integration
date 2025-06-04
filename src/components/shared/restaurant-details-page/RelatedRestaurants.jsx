"use client"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"
import Slider from "@/components/swiper/Slider"
import { fadeInUp, staggerContainer } from "./animation-variants"


const RelatedRestaurants = ({ restaurants }) => {
  const relatedRef = useRef(null)
  const relatedInView = useInView(relatedRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={relatedRef}
      initial="hidden"
      animate={relatedInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.div
        className="flex gap-2 flex-col md:flex-row justify-between md:items-center mb-4 md:mb-8 mt-20"
        variants={fadeInUp}
      >
        <motion.h2 className="text-3xl font-medium font-poltawski text-[#0A0A0A]" variants={fadeInUp}>
          You Might Also Like
        </motion.h2>
        <div className="flex justify-between items-end gap-4">
          <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <Link href="/nearby-restaurants" className="text-[#0A0A0A] text-sm hover:text-gray-700 transition-colors">
              See All
            </Link>
          </motion.div>
          <div className="flex gap-2">
            <motion.button
              className="slider-prev-button w-8 h-8 text-gray-400 hover:text-black flex items-end justify-center cursor-pointer"
              aria-label="Previous slide"
              whileHover={{ scale: 1.2, x: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Previous</span>
              <GrPrevious size={16} />
            </motion.button>
            <motion.button
              className="slider-next-button w-8 h-8 text-gray-400 hover:text-black flex items-end justify-center cursor-pointer"
              aria-label="Next slide"
              whileHover={{ scale: 1.2, x: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Next</span>
              <GrNext size={16} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}>
        <Slider data={restaurants} />
      </motion.div>
    </motion.div>
  )
}

export default RelatedRestaurants
