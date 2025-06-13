import { api } from "../authApis/axiosInstance";

// get profile
export const getUserProfile = () => api.get("auth/profile");

// update profile
export const updateProfile = (formData) => api.patch("/auth/edit-profile", formData);


// change password
export const changePassword = (data) => api.patch("/auth/change-password", data);