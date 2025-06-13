import { useMutation } from '@tanstack/react-query';
import { login } from "@/lib/apis/authApis/auth";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { ErrorToast, SuccessToast } from '@/utils/ValidationToast';

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/home";
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const saveAuthDataToLocalStorage = ( accessToken, refreshToken) => {
    try {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    } catch (error) {
      console.error("Failed to save auth data to local storage:", error);
      ErrorToast("Failed to save user session. Please try again.");
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const user = localStorage.getItem('user');
    if (accessToken && user) { 
      try {
        const parsedUser = JSON.parse(user);
        router.push(redirect);
      } catch (e) {
        console.error("Error parsing user data from localStorage:", e);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken'); 
        localStorage.removeItem('user');
      }
    }
  }, [router, redirect]);


  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      console.log(response)
      if (response.data.success) {
        SuccessToast(response.data.message || 'Login successful!');
        saveAuthDataToLocalStorage(
          response.data?.data?.accessToken,
          response.data?.data?.refreshToken,
        );
        reset();
        router.push(redirect);
      } else {
        ErrorToast(response.data?.message || 'Login failed. Please check your credentials.');
      }
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred during login.';
      ErrorToast(errorMessage);
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-3 text-white">
      <div className="border bg-[#FEFEFEE5] p-14 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-[#333333] mb-2">Login to Account</h1>
        <p className="text-center text-[#333333] mb-6 text-sm">Please enter your email and password to continue</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ... email field ... */}
          <div className="mb-8">
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

          {/* ... password field ... */}
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

          {/* ... forgot password link ... */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center"></div>
            <Link href="/auth/forgot-password" className="text-xs text-[#333333] hover:underline cursor-pointer">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-black border border-gray-400 text-white py-2 text-xs px-4 hover:bg-gray-800 transition duration-200 cursor-pointer rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-[#333333]">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-[#333333] font-medium hover:underline cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;