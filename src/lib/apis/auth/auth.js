import { api } from "./axiosInstance";

// Sign Up
export const signUp = (data) => api.post("/auth/register", data);

// New User Verify OTP
export const newUserVerifyOtp = (data) => api.post("/auth/activate-user", data);

// New User Resend OTP
export const newUserResendOtp = (data) => api.post("/auth/active-resend", data);


// Login
export const login = (data) => api.post("/auth/login", data);

// Forgot Password
export const forgotPassword = (data) => api.post("/auth/forgot-password", data);

// Verify OTP 
export const verifyOtp = (data) => api.post("/auth/verify-otp", data);

// Resend OTP
export const resendOtp = (data) => api.post("/auth/forgot-resend", data);

// Reset Password
export const resetPassword = (email, otp, passwords) => {
    return api.post(`/auth/reset-password?email=${email}&otp=${otp}`, passwords);
};

// Refresh Token
export const refreshToken = (data) => api.post("/auth/refresh-token", data);

// get profile
export const getUserProfile = () => api.get(`auth/profile`);