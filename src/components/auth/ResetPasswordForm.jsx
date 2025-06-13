"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { ErrorToast, SuccessToast } from "@/utils/ValidationToast";

import { useMutation } from '@tanstack/react-query';

import { resetPassword as apiResetPassword } from "@/lib/apis/authApis/auth";

const ResetPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get('email');
  const otp = searchParams.get('otp');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  useEffect(() => {
    if (!email || !otp) {
      ErrorToast("Invalid access for password reset. Please go through the forgot password flow.");
      router.push('/auth/forgot-password');
    }
  }, [email, otp, router]);


  const resetPasswordMutation = useMutation({
    mutationFn: (resetData) => apiResetPassword(
      resetData.email,
      resetData.otp,
      { newPassword: resetData.password, confirmPassword: resetData.confirmPassword }
    ),
    onSuccess: (response) => {
      if (response.data.success) {
        SuccessToast(response.data.message || 'Password reset successfully!');
        router.push("/auth/login");
      } else {
        ErrorToast(response.data.message || 'Failed to reset password.');
      }
    },
    onError: (error) => {
      console.error("Reset password error:", error);
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred during password reset.';
      ErrorToast(errorMessage);

      if (error.response?.data?.errorMessages && error.response.data.errorMessages.length > 0) {
        error.response.data.errorMessages.forEach(err => {
          ErrorToast(err.message);
        });
      }
    },
  });

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      ErrorToast("Passwords do not match.");
      return;
    }

    if (!email || !otp) {
      ErrorToast("Missing required information for password reset.");
      return;
    }

    resetPasswordMutation.mutate({
      email: email,
      otp: otp,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  };

  if (!email || !otp) {
    return (
      <div className="flex items-center justify-center min-h-screen text-[#333333]">
        Loading or Invalid Link...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-3 ">
      <div className="border bg-[#FEFEFEE5] p-14 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-[#333333] mb-2">
          Set a New Password
        </h1>
        <p className="text-center text-[#333333] mb-8 text-sm">
          Create a new password. Ensure it differs from previous ones for security
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* New Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-xs font-medium text-[#333333] mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs rounded-sm ${errors.password ? "border-red-500" : "border-black"
                  } focus:outline-none cursor-pointer`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-black" />
                ) : (
                  <Eye className="h-4 w-4 text-black" />
                )}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-8">
            <label htmlFor="confirmPassword" className="block text-xs font-medium text-[#333333] mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full px-3 py-2 border  text-[#5C5C5C] text-xs rounded-sm ${errors.confirmPassword ? "border-red-500" : "border-black"
                  } focus:outline-none cursor-pointer`}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) => value === password || "Passwords do not match",
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-black" />
                ) : (
                  <Eye className="h-4 w-4 text-black" />
                )}
              </button>
            </div>
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            disabled={resetPasswordMutation.isPending}
            className="w-full bg-black border disabled:cursor-not-allowed border-gray-400 text-white py-2 text-xs px-4  hover:bg-gray-800 transition duration-200 cursor-pointer disabled:opacity-70 rounded-sm"
          >
            {resetPasswordMutation.isPending ? "Processing..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;