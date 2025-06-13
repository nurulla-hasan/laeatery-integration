"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from "@/utils/ValidationToast";

import { useMutation } from '@tanstack/react-query';

import { forgotPassword as apiForgotPassword } from "@/lib/apis/authApis/auth";

const ForgotPasswordForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 



  const forgotPasswordMutation = useMutation({
    mutationFn: apiForgotPassword, 
    onSuccess: (response) => {
      console.log(response)
      if (response.data.success) {
        SuccessToast(response.data.message || 'Password reset email sent! Please check your email.');
        router.push(`/auth/verify-email?email=${localStorage.getItem('forgotPassEmail')}&mode=forgot-password`);
      } else {
        ErrorToast(response.data.message || 'Failed to send password reset email.');
      }
    },
    onError: (error) => {
      console.log("Forgot password error:", error);
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred.';
      if(errorMessage === "Cannot read properties of null (reading 'email')"){
        ErrorToast("Email not found");
      }
    },
  });

  const onSubmit = (data) => {
    console.log(data)
    localStorage.setItem('forgotPassEmail', data.email)
    forgotPasswordMutation.mutate({ email: data.email });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-3 text-white">
      <div className="border bg-[#FEFEFEE5] p-14 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-[#333333] mb-2">Forgot Password?</h1>
        <p className="text-center text-[#333333] mb-6 text-sm">
          Please enter your email to get verification code
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-xs font-medium text-[#333333] mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs bg-white rounded-sm ${
                errors.email ? "border-red-500" : "border-black"
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={forgotPasswordMutation.isPending}
            className="w-full bg-black border border-gray-400 text-white py-2 text-xs px-4  hover:bg-gray-800 transition duration-200 cursor-pointer disabled:opacity-70"
          >
            {forgotPasswordMutation.isPending ? "Sending..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;