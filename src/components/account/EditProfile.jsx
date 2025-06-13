"use client"

import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { useMutation } from '@tanstack/react-query'
import { updateProfile } from "@/lib/apis/profileApis/profile"
import { ErrorToast, SuccessToast } from "@/utils/ValidationToast"

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
    reset,
  } = useForm({
    defaultValues: {
      fullName: userData.name || userData.authId?.name || "",
      email: userData.email || userData.authId?.email || "",
      phone: userData.phone_number || "",
    },
  })

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: (response) => {
      if (response.data.success) {
        SuccessToast(response.data.message || 'Profile updated successfully!')
        onUpdate(response.data.data)
        reset({
          fullName: response.data.data.name || response.data.data.authId?.name,
          email: response.data.data.email || response.data.data.authId?.email,
          phone: response.data.data.phone_number,
        })
      } else {
        ErrorToast(response.data.message || 'Failed to update profile.')
      }
    },
    onError: (error) => {
      console.error("Profile update error:", error)
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred during profile update.'
      ErrorToast(errorMessage)
    },
  })

  const onSubmit = (data) => {
    const formData = new FormData()
    formData.append('name', data.fullName)
    formData.append('phone_number', data.phone)

    if (data.profile_image && data.profile_image[0]) {
      formData.append('profile_image', data.profile_image[0])
    }
    updateProfileMutation.mutate(formData)
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div key="edit" initial="initial" animate="animate" exit="exit" variants={pageVariants}>
        <h2 className="text-xl font-semibold mb-6">Edit Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
              <input
                id="fullName"
                className={`w-full p-3 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-ringColor`}
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && <p className="mt-1 text-red-500 text-xs">{errors.fullName.message}</p>}
            </div>

            {/* Email (Read-only) */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                readOnly
                className="w-full p-3 border border-gray-300 bg-gray-100 text-gray-500 rounded-md cursor-not-allowed"
                {...register("email")}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                id="phone"
                className={`w-full p-3 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-ringColor`}
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && <p className="mt-1 text-red-500 text-xs">{errors.phone.message}</p>}
            </div>

            {/* Profile Image */}
            <div>
              <label htmlFor="profile_image" className="block text-sm font-medium mb-1">Profile Image</label>
              <input
                id="profile_image"
                type="file"
                accept="image/*"
                className={`w-full p-3 border ${errors.profile_image ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-ringColor`}
                {...register("profile_image")}
              />
              {errors.profile_image && <p className="mt-1 text-red-500 text-xs">{errors.profile_image.message}</p>}
            </div>

            {/* Buttons */}
            <div className="pt-4 flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={updateProfileMutation.isPending}
                className="flex-1 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
              >
                {updateProfileMutation.isPending ? "Updating..." : "Update"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onCancel}
                disabled={updateProfileMutation.isPending}
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