"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { ErrorToast, SuccessToast } from "@/utils/ValidationToast";
import { useMutation } from '@tanstack/react-query';
import {
  verifyOtp as apiVerifyOtp,
  resendOtp as apiResendOtp,
  newUserVerifyOtp as apiNewUserVerifyOtp,
} from "@/lib/apis/authApis/auth";

const VerifyEmailForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialEmail = searchParams.get('email');
  const mode = searchParams.get('mode');

  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      email: initialEmail || "",
    },
  });

  const resendMutation = useMutation({
    mutationFn: apiResendOtp,
    onSuccess: (response) => {
      if (response.data.success) {
        SuccessToast(response.data.message || "OTP resent successfully!");
        setResendTimer(60);
        setCanResend(false);
      } else {
        ErrorToast(response.data.message || "Failed to resend OTP.");
      }
    },
    onError: (error) => {
      console.error("Resend OTP error:", error);
      const errorMessage = error.response?.data?.message || "An unexpected error occurred while resending OTP.";
      ErrorToast(errorMessage);
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: async (data) => {
      if (mode === 'registration') {
        return await apiNewUserVerifyOtp(data);
      } else if (mode === 'forgot-password') {
        return await apiVerifyOtp(data);
      } else {
        throw new Error('Invalid verification mode');
      }
    },
    onSuccess: (response) => {
      if (response.data.success) {
        SuccessToast(response.data.message || 'OTP verified successfully!');
        if (mode === 'registration') {
          router.push('/auth/login');
        } else if (mode === 'forgot-password') {
          router.push(`/auth/reset-password?email=${initialEmail}&otp=${getValues("otp")}`);
        }
      } else {
        ErrorToast(response.data.message || 'OTP verification failed.');
      }
    },
    onError: (error) => {
      console.log("OTP verification error:", error);
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred during OTP verification.';
      ErrorToast(errorMessage);
    },
  });

  useEffect(() => {
    let timerId;
    if (resendTimer > 0 && !canResend) {
      timerId = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(timerId);
  }, [resendTimer, canResend]);

  const handleResendOtp = () => {
    const emailToResend = getValues("email");
    if (emailToResend) {
      resendMutation.mutate({ email: emailToResend });
    } else {
      ErrorToast("Email not found for resending OTP.");
    }
  };

  const onSubmit = (data) => {
    localStorage.removeItem("forgotPassEmail")
    if (mode === 'registration') {
      verifyOtpMutation.mutate({ userEmail: data.email, activation_code: data.otp });
    } else if (mode === 'forgot-password') {
      verifyOtpMutation.mutate({ code: data.otp, email: data.email });
    } else {
      ErrorToast('Invalid verification mode. Cannot submit OTP.');
    }
  };

  if (!initialEmail || !mode) {
    return (
      <div className="flex items-center justify-center min-h-screen text-[#333333]">
        Invalid verification link. Please go through the correct flow.
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-3 ">
      <div className="border bg-[#FEFEFEE5] p-14 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-[#333333] mb-2">Verify Email</h1>
        <p className="text-center text-[#333333] mb-6 text-sm">
          Please enter the 6-digit OTP sent to your email{" "}
          <span className="font-semibold">{initialEmail}</span>
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field (hidden or disabled if already populated) */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-xs font-medium text-[#333333] mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              readOnly
              className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs bg-gray-100 rounded-sm ${
                errors.email ? "border-red-500" : "border-black"
              } focus:outline-none`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>

          {/* OTP Field */}
          <div className="mb-6">
            <label htmlFor="otp" className="block text-xs font-medium text-[#333333] mb-1">
              OTP
            </label>
            <input
              id="otp"
              type="text"
              placeholder="Enter 6-digit OTP"
              className={`w-full px-3 py-2 border text-[#5C5C5C] text-xs bg-white rounded-sm ${
                errors.otp ? "border-red-500" : "border-black"
              } focus:outline-none cursor-pointer`}
              {...register("otp", {
                required: "OTP is required",
                pattern: {
                  value: /^\d{6}$/,
                  message: "OTP must be a 6-digit number",
                },
              })}
            />
            {errors.otp && <p className="mt-1 text-xs text-red-500">{errors.otp.message}</p>}
          </div>

          <div className="flex justify-between items-center mb-8">
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={!canResend || resendMutation.isPending}
              className="text-xs text-[#333333] hover:underline cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resendMutation.isPending ? "Sending..." : `Resend OTP ${resendTimer > 0 ? `(${resendTimer}s)` : ""}`}
            </button>
          </div>

          <button
            type="submit"
            disabled={verifyOtpMutation.isPending}
            className="w-full bg-black border disabled:cursor-not-allowed border-gray-400 text-white py-2 text-xs px-4  hover:bg-gray-800 transition duration-200 cursor-pointer disabled:opacity-70 rounded-sm"
          >
            {verifyOtpMutation.isPending ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmailForm;