import { api } from "../authApis/axiosInstance";

// get profile
export const getUserProfile = () => api.get("auth/profile");

// update profile
export const updateProfile = () => api.patch("/auth/edit-profile")