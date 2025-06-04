"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

const ContactInfo = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Welcome to your account!</h2>
      <p className="mb-6">Update your account details, change password and keep your account secure.</p>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">If you need any help contact us:</h3>
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center"
          >
            <Phone className="h-5 w-5 mr-3" />
            <span>839949950252</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center"
          >
            <Mail className="h-5 w-5 mr-3" />
            <span>infocompany@gmail.com</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-start"
          >
            <MapPin className="h-5 w-5 mr-3 mt-0.5" />
            <span>
              2118 Thornridge Cir. Syracuse,
              <br />
              Connecticut 35624
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
