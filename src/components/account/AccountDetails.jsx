"use client"

import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"

const AccountDetails = ({ userData, onEditClick, onChangePasswordClick }) => {
  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div key="details" initial="initial" animate="animate" exit="exit" variants={pageVariants}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Account Details</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onEditClick}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
          >
            Edit Account
          </motion.button>
        </div>

        <div className="space-y-6">
          <div className="md:flex md:gap-19">
            <h3 className="text-sm mb-4 font-medium">Login Details:</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm">Full Name</p>
                <p className="font-medium">{userData?.name || userData?.authId?.name || "Your Name"}</p>
              </div>
              <div>
                <p className="text-sm">Email</p>
                <p className="font-medium">{userData?.email || userData?.authId?.email || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm">Phone Number</p>
                <p className="font-medium">{userData?.phone_number || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <div className="md:flex justify-between items-center">
              <h3 className="text-sm font-medium mb-4">Password:</h3>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm">Current Password</p>
                  <p className="font-medium">{"••••••••"}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onChangePasswordClick}
                  className="md:hidden px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
                >
                  Change Password
                </motion.button>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onChangePasswordClick}
                className="hidden md:block px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
              >
                Change Password
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AccountDetails