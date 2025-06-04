"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { fadeInUp, staggerContainer } from "./animation-variants"

const SignatureDishes = ({ dishes }) => {
  const dishesRef = useRef(null)
  const dishesInView = useInView(dishesRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      className="mt-20"
      ref={dishesRef}
      initial="hidden"
      animate={dishesInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.h2
        className="md:text-4xl text-3xl font-bold text-gray-800 font-poltawski text-center"
        variants={fadeInUp}
      >
        Signature Dishes
      </motion.h2>
      <motion.div variants={staggerContainer}>
        <div className="space-y-16 md:mt-10 mt-6">
          {dishes?.map((dish, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
              initial={{ opacity: 0, y: 50 }}
              animate={dishesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {index % 2 === 0 ? (
                // Even index (0, 2, 4...) - Text left, Image right
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={dishesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <h3 className="md:text-3xl text-xl font-semibold mb-3 font-poltawski text-[#333333]">
                      {dish.title}
                    </h3>
                    <p className="text-[#333333] leading-relaxed text-sm md:text-[16px]">{dish.description}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={dishesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.title}
                      className="w-full md:h-96 object-cover rounded-md"
                    />
                  </motion.div>
                </>
              ) : (
                // Odd index (1, 3, 5...) - Image left, Text right
                <>
                  <motion.div
                    className="order-2 md:order-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={dishesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.title}
                      className="w-full md:h-96 object-cover rounded-md"
                    />
                  </motion.div>
                  <motion.div
                    className="order-1 md:order-2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={dishesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <h3 className="md:text-3xl text-xl font-semibold mb-3 font-poltawski text-[#333333]">
                      {dish.title}
                    </h3>
                    <p className="text-[#333333] leading-relaxed text-sm md:text-[16px]">{dish.description}</p>
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SignatureDishes
