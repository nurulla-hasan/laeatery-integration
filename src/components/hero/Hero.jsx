"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0.4)), url('/image/heroBG.png')`,
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex h-full items-center backdrop-blur-xs ">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex justify-center items-center">
                        <motion.div
                            className="relative flex justify-center items-center h-[700px] w-[700px]"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {/* White blurred round background */}
                            <div className="absolute w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-60" />

                            {/* Logo Image */}
                            <Image
                                src="/image/logo2.png"
                                width={1920}
                                height={1080}
                                alt="Logo"
                                className="relative h-auto z-10 drop-shadow-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
