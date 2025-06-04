"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { fadeInUp, staggerContainer } from "./animation-variants"

const OverviewSection = ({ description, extendedDescription }) => {
  const overviewRef = useRef(null)
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      className="mt-10"
      ref={overviewRef}
      initial="hidden"
      animate={overviewInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.h2 className="text-3xl font-bold text-gray-800 mb-4 font-poltawski" variants={fadeInUp}>
        Overview
      </motion.h2>
      <motion.p className="text-gray-700 leading-relaxed" variants={fadeInUp}>
        {description}
      </motion.p>
      <motion.p className="text-gray-700 leading-relaxed mt-4" variants={fadeInUp}>
        {extendedDescription}
      </motion.p>
    </motion.div>
  )
}

export default OverviewSection
