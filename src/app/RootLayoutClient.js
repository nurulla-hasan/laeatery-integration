"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PrivateRoute from "@/components/privet-route/PrivetRoute";
import { AuthProvider, ChatProvider } from "@/contexts/AuthContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname } from "next/navigation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function RootLayoutClient({ children }) {
  const pathName = usePathname();
  const publicRoutes = [
    "/",
    "/auth/login",
    "/auth/signup",
    "/auth/forgot-password",
    "/auth/verify-email",
    "/auth/reset-password",
    "/about-us",
  ];
  const noPaddingRoutes = ["/home", '/auth/login', '/auth/signup', '/auth/forgot-password', '/auth/verify-email', '/auth/reset-password'];
  const hidePadding = noPaddingRoutes.includes(pathName);
  const noNavbarRoutes = ["/auth", "/admin", "/404"];
  const hideNavbar = noNavbarRoutes.some((route) =>
    pathName.startsWith(route)
  );
  const hideFooter = pathName === "/";
  const isPublicRoute = publicRoutes.includes(pathName) || noNavbarRoutes.some((route) => pathName.startsWith(route));


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {!hideNavbar && (
            <Navbar />
          )}
          <div className={`relative min-h-[calc(100vh-88px)] bg-[#E9E7E3]`}>
            {
              pathName === "/" && (
                <div className="absolute inset-0">
                  <Image
                    src="/image/heroBG.png"
                    alt="Background"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-[#E9E7E3]/90"></div>
                </div>
              )
            }
            {/* Content Wrapper */}
            <div className={`relative container mx-auto max-w-full ${hidePadding ? "pt-[0px]" : "md:pt-[104px] pt-[65px]"}`}>
              {isPublicRoute ? (
                children
              ) : (
                <PrivateRoute>
                  {children}
                </PrivateRoute>
              )}
            </div>
          </div>
          {(!hideNavbar && !hideFooter) && (
            <Footer />
          )}
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}