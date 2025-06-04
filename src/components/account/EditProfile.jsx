"use client"

import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"

const EditProfile = ({ userData, onUpdate, onCancel }) => {
  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: userData.fullName,
      email: userData.email,
      phone: userData.phone,
    },
  })

  const onSubmit = (data) => {
    onUpdate(data)
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div key="edit" initial="initial" animate="animate" exit="exit" variants={pageVariants}>
        <h2 className="text-xl font-semibold mb-6">Edit Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                className={`w-full p-3 border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200`}
                {...register("fullName", {
                  required: "Full name is required",
                })}
              />
              {errors.fullName && <p className="mt-1 text-red-500 text-xs">{errors.fullName.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                className={`w-full p-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                className={`w-full p-3 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200`}
                {...register("phone", {
                  required: "Phone number is required",
                })}
              />
              {errors.phone && <p className="mt-1 text-red-500 text-xs">{errors.phone.message}</p>}
            </div>
            <div className="pt-4 flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex-1 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
              >
                Update
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onCancel}
                className="px-4 py-3 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
              >
                Cancel
              </motion.button>
            </div>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  )
}

export default EditProfile
