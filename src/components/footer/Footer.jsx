"use client"
import Link from "next/link"
import {
  MapPin, Phone, Mail,
  Instagram, Youtube, Facebook, Twitter
} from "lucide-react"
import HomeContainer from "../home-container/HomeContainer"
import { motion } from "framer-motion"

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}

const Footer = () => {
  return (
    <footer className="bg-white flex flex-col relative text-[#333333]">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <img src="/image/logo2.png" alt="" className="w-[80%] max-w-6xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <HomeContainer>
          {/* Top Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <Link href='/'><img src="/image/logo2.png" alt="LA Eatery" className="md:h-72" /></Link>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-20">
            {/* Our Address */}
            <motion.div
              custom={0}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold">Our Address</h3>
              <div className="space-y-5 text-sm ">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                  <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0 " />
                  <span>(307) 555-0133</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0 " />
                  <span>debra.holt@example.com</span>
                </div>
              </div>
            </motion.div>

            {/* Company & Legal */}
            <motion.div
              custom={1}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold">Company & Legal</h3>
              <ul className="space-y-4 text-sm ">
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/terms-condition">Terms & Conditions</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </motion.div>

            {/* Help & Contact */}
            <motion.div
              custom={2}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 flex flex-col"
            >
              <h3 className="text-lg font-semibold">Help & Contact</h3>
              <ul className="space-y-4 text-sm ">
                <li><Link href="/FAQs">FAQs</Link></li>
                <li><Link href="/help-support">Help & Support</Link></li>
              </ul>
            </motion.div>
          </div>

          {/* Social Media & Divider */}
          <motion.div
            custom={3}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="border flex-1/2"></div>
              <div className="flex items-center space-x-4">
                {[Instagram, Youtube, Facebook, Twitter].map((Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
              <div className="border flex-1/2"></div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-sm text-center mt-5 text-gray-700"
          >
            © 2025 LAEatery, All right reserved
          </motion.div>
        </HomeContainer>
      </div>
    </footer>
  )
}

export default Footer
