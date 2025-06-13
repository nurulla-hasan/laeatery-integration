"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const AccountBanner = ({ fullName }) => {
  return ( 
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full rounded-lg overflow-hidden mb-8"
    >
      <Image
        src="/image/profile-bg.png"
        width={1920}
        height={1080}
        alt="Account Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 to-transparent flex items-center">
        <div className="p-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-xl font-medium font-poltawski"
          >
            {fullName}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-4xl font-bold mt-2 font-poltawski"
          >
            My Account
          </motion.h1>
        </div>
      </div>
    </motion.div>
  )
}

export default AccountBanner
