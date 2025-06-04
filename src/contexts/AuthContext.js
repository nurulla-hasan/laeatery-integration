// "use client";
// import { createContext, useContext, useState } from 'react';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import Loading from '@/components/loading/Loading';

// import {
//     login,
//     signUp,
//     getUserProfile,
// } from '@/lib/apis/auth/auth';
// const AuthContext = createContext(null);

// const useAuthLogic = () => {
//     const queryClient = useQueryClient();
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const { data: user, isLoading, error, refetch } = useQuery({
//         queryKey: ['currentUser'],
//         queryFn: async () => {
//             const accessToken = localStorage.getItem('accessToken');
//             if (!accessToken) {
//                 return null;
//             }
//             try {
//                 const response = await getUserProfile();
//                 if (response.data && response.data.success && response.data.data) {
//                     const { authId, ...userData } = response.data.data;
//                     return userData;
//                 }
//                 localStorage.removeItem('accessToken');
//                 localStorage.removeItem('refreshToken');
//                 return null;
//             } catch (err) {
//                 console.error("Failed to fetch user:", err);
//                 throw err;
//             }
//         },
//         staleTime: 1000 * 60 * 5,
//         refetchOnWindowFocus: false,
//         retry: 1,
//         onError: (err) => {
//             console.error("useQuery (currentUser) error:", err);
//             setIsLoggedIn(false);
//         },
//         onSuccess: (data) => {
//             setIsLoggedIn(!!data);
//         }
//     });

//     const loginMutation = useMutation({
//         mutationFn: async (credentials) => {
//             const response = await login(credentials);
//             if (response.data && response.data.success && response.data.data) {
//                 const { accessToken, refreshToken } = response.data.data;
//                 localStorage.setItem('accessToken', accessToken);
//                 localStorage.setItem('refreshToken', refreshToken);
//                 return response.data;
//             }
//             throw new Error(response.data?.message || "Login failed due to unexpected response.");
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ['currentUser'] });
//         },
//         onError: (err) => {
//             console.error("Login mutation error:", err);
//             let errorMessage = "An unexpected error occurred during login.";
//             if (err.response && err.response.data) {
//                 if (err.response.data.message) {
//                     errorMessage = err.response.data.message;
//                 } else if (err.response.data.errorMessages && err.response.data.errorMessages.length > 0) {
//                     errorMessage = err.response.data.errorMessages[0].message;
//                 }
//             }
//             throw new Error(errorMessage);
//         },
//     });

//     const registerMutation = useMutation({
//         mutationFn: async (userData) => {
//             const formData = new FormData();
//             for (const key in userData) {
//                 if (userData[key] instanceof File) {
//                     formData.append(key, userData[key], userData[key].name);
//                 } else if (userData[key] !== undefined) {
//                     formData.append(key, userData[key]);
//                 }
//             }
//             const response = await signUp(formData);
//             if (response.data && response.data.success) {
//                 return response.data;
//             }
//             throw new Error(response.data?.message || "Registration failed due to unexpected response.");
//         },
//         onSuccess: (data) => {
//             console.log("Registration successful:", data.message);
//         },
//         onError: (err) => {
//             console.error("Register mutation error:", err);
//             let errorMessage = "An unexpected error occurred during registration.";
//             if (err.response && err.response.data) {
//                 if (err.response.data.message) {
//                     errorMessage = err.response.data.message;
//                 } else if (err.response.data.errorMessages && err.response.data.errorMessages.length > 0) {
//                     errorMessage = err.response.data.errorMessages[0].message;
//                 }
//             }
//             throw new Error(errorMessage);
//         },
//     });

//     const logoutMutation = useMutation({
//         mutationFn: async () => {
//             localStorage.removeItem('accessToken');
//             localStorage.removeItem('refreshToken');
//             return { success: true, message: "Logged out locally." };
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ['currentUser'] });
//         },
//         onError: (err) => {
//             console.error("Logout mutation error:", err);
//             throw new Error(err.message || "Logout failed.");
//         },
//     });

//     return {
//         user,
//         isLoggedIn,
//         isLoading: isLoading || loginMutation.isPending || registerMutation.isPending || logoutMutation.isPending,
//         error: error || loginMutation.error || registerMutation.error || logoutMutation.error,
//         login: loginMutation.mutateAsync,
//         logout: logoutMutation.mutateAsync,
//         register: registerMutation.mutateAsync,
//         fetchCurrentUser: refetch
//     };
// };

// export const AuthProvider = ({ children }) => {
//     const auth = useAuthLogic();

//     return (
//         <AuthContext.Provider value={auth}>
//             {auth.isLoading ? (
//                 <Loading/>
//             ) : (
//                 children
//             )}
//         </AuthContext.Provider>
//     );
// };

// export const useAuthContext = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuthContext must be used within an AuthProvider');
//     }
//     return context;
// };

"use client";
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isChatted, setIsChatted] = useState(false);

  return (
    <AuthContext.Provider value={{ isChatted, setIsChatted }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useChatContext = () => useContext(AuthContext);