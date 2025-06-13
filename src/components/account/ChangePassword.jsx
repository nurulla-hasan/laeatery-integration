"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, EyeOff } from "lucide-react"
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "@/lib/apis/profileApis/profile"
import { ErrorToast, SuccessToast } from "@/utils/ValidationToast"

const ChangePassword = ({ onPasswordChange, onCancel }) => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  })

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      SuccessToast(data.message || "Password changed successfully!");
      onPasswordChange();
      reset();
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message || "Failed to change password. Please try again.";
      ErrorToast(errorMessage);
    },
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field],
    })
  }

  const onSubmit = (data) => {
    const payload = {
      oldPassword: data.currentPassword,
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
    };
    mutate(payload);
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div key="password" initial="initial" animate="animate" exit="exit" variants={pageVariants}>
        <h2 className="text-xl font-semibold mb-6">Change Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showPassword.current ? "text" : "password"}
                  id="currentPassword"
                  className={`w-full p-3 border ${errors.currentPassword ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 pr-10`}
                  {...register("currentPassword", {
                    required: "Current password is required",
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => togglePasswordVisibility("current")}
                >
                  {showPassword.current ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.currentPassword && <p className="mt-1 text-red-500 text-xs">{errors.currentPassword.message}</p>}
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword.new ? "text" : "password"}
                  id="newPassword"
                  className={`w-full p-3 border ${errors.newPassword ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 pr-10`}
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => togglePasswordVisibility("new")}
                >
                  {showPassword.new ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.newPassword && <p className="mt-1 text-red-500 text-xs">{errors.newPassword.message}</p>}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword.confirm ? "text" : "password"}
                  id="confirmPassword"
                  className={`w-full p-3 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 pr-10`}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === watch("newPassword") || "Passwords do not match",
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => togglePasswordVisibility("confirm")}
                >
                  {showPassword.confirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-red-500 text-xs">{errors.confirmPassword.message}</p>}
            </div>
            <div className="pt-4 flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex-1 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Changing..." : "Change Password"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onCancel}
                className="px-4 py-3 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
                disabled={isLoading}
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

export default ChangePassword