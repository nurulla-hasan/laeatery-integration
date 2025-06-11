// components/auth/SignupForm.jsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from "@/utils/ValidationToast";

import { useMutation } from '@tanstack/react-query';
import { signUp } from "@/lib/apis/auth/auth";

const SignupForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [registerEmail, setRegisterEmail] = useState()
  console.log(registerEmail)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch, 
  } = useForm();

  const signupMutation = useMutation({
    mutationFn: async (formData) => { 
      return await signUp(formData);
    },
    onSuccess: (response) => {
      console.log("after sign up",response)
      if (response.data.success) {
        SuccessToast(response.data.message || 'Registration successful! Please verify your email.');
        reset();
        router.push(`/auth/verify-email?email=${registerEmail}&mode=registration`);
      } else {
        ErrorToast(response.data.message || 'Registration failed.');
      }
    },
    onError: (error) => {
      console.error("Signup error:", error);
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred during registration.';
      ErrorToast(errorMessage);

      if (error.response?.data?.errorMessages && error.response.data.errorMessages.length > 0) {
        error.response.data.errorMessages.forEach(err => {
          ErrorToast(err.message);
        });
      }
    },
  });

  const onSubmit = (data) => {
    setRegisterEmail(data.email)
    if (data.password !== data.confirmPassword) {
      ErrorToast("Passwords do not match.");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("phone_number", data.phone_number);
    formData.append("role", "USER");
    formData.append("address", data.address);

    if (data.profile_image && data.profile_image[0]) {
      formData.append("profile_image", data.profile_image[0]);
    }

    signupMutation.mutate(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-3 text-white">
      <div className="border bg-[#FEFEFEE5] p-14 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-[#333333] mb-2">Create Account</h1>
        <p className="text-center text-[#333333] mb-6 text-sm">Please enter your details to create an account</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-xs font-medium text-[#333333] mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs bg-white rounded-sm ${errors.name ? "border-red-500" : "border-black"
                } focus:outline-none cursor-pointer`}
              {...register("name", { required: "Full name is required" })} 
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-xs font-medium text-[#333333] mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs bg-white rounded-sm ${errors.email ? "border-red-500" : "border-black"
                } focus:outline-none cursor-pointer`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-xs font-medium text-[#333333] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs bg-white rounded-sm ${errors.password ? "border-red-500" : "border-black"
                  } focus:outline-none cursor-pointer`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4 text-black" /> : <Eye className="h-4 w-4 text-black" />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-xs font-medium text-[#333333] mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs bg-white rounded-sm ${errors.confirmPassword ? "border-red-500" : "border-black"
                  } focus:outline-none cursor-pointer`}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4 text-black" /> : <Eye className="h-4 w-4 text-black" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone_number" className="block text-xs font-medium text-[#333333] mb-1">
              Phone Number
            </label>
            <input
              id="phone_number"
              type="text" // অথবা type="tel"
              placeholder="Enter your phone number"
              className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs bg-white rounded-sm ${errors.phone_number ? "border-red-500" : "border-black"
                } focus:outline-none cursor-pointer`}
              {...register("phone_number", { required: "Phone number is required" })}
            />
            {errors.phone_number && <p className="mt-1 text-xs text-red-500">{errors.phone_number.message}</p>}
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-xs font-medium text-[#333333] mb-1">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Enter your address"
              className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs bg-white rounded-sm ${errors.address ? "border-red-500" : "border-black"
                } focus:outline-none cursor-pointer`}
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address.message}</p>}
          </div>

          {/* Profile Image */}
          <div className="mb-6">
            <label htmlFor="profile_image" className="block text-xs font-medium text-[#333333] mb-1">
              Profile Image
            </label>
            <input
              id="profile_image"
              type="file"
              accept="image/*"
              className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs bg-white rounded-sm ${errors.profile_image ? "border-red-500" : "border-black"
                } focus:outline-none cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-black hover:file:bg-gray-300`}
              {...register("profile_image")}
            />
            {errors.profile_image && <p className="mt-1 text-xs text-red-500">{errors.profile_image.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-black border border-gray-400 text-white py-2 text-xs px-4 hover:bg-gray-800 transition duration-200 cursor-pointer rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={signupMutation.isPending}
          >
            {signupMutation.isPending ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-[#333333]">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-[#333333] font-medium hover:underline cursor-pointer">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;