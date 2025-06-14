"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Menu, X, UserRound } from "lucide-react"
import NavLink from "./NavLink"

import { useGetMe } from '@/hooks/useGetMe';
import { useChatContext } from "@/contexts/AuthContext"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdown, setIsDropdown] = useState(false)
  const router = useRouter();
  const pathName = usePathname()

  const { data: userProfile, isLoading, isError, refetch } = useGetMe();
  const isLoggedIn = !!userProfile && !isLoading && !isError;
  const user = {
    fullName: userProfile?.name || userProfile?.authId?.name || "Your Name"
  }

  const { setIsChatted, isChatted } = useChatContext();
  const isHiddenRoute = ["/home", "/"]
  const hideLogoBg = isHiddenRoute.includes(pathName)

  const navLinks = [
    { title: "Home", href: "/" },
    ...(isChatted ? [{ title: "AI Picks", href: "/ai-picks" }] : []),
    { title: "About", href: "/about-us" },
    ...(isLoggedIn ? [{ title: "Map", href: "/map" }] : []),
    ...(isLoggedIn ? [{ title: "Saved", href: "/saved" }] : []),
  ];

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    refetch();
    router.push('/');
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDropdown = () => setIsDropdown(!isDropdown)

  return (
    <div className="h-[104px]">
      <nav className={`w-full ${hideLogoBg ? "bg-transparent border-0" : "bg-[#E9E7E3] border-b border-[#C0C0C0]"} py-2 md:py-5 fixed z-[1100]`}>
        <div className="max-w-7xl mx-auto px-4 ">
          <div className={`flex items-center justify-between ${hideLogoBg ? "md:justify-center" : ""}  md:h-16`}>
            {/* Logo */}
            <div className={`flex-1/4 ${hideLogoBg ? "hidden" : ""}`}>
              <div className="w-40">
                <Link href="/">
                  <img
                    src="/image/logo2.png"
                    alt="Logo"
                    className="md:h-20 h-12 w-auto transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  />
                </Link>
              </div>
            </div>

            {/* Navigation Links - Desktop */}
            <div className={`hidden lg:flex ${hideLogoBg ? "" : "flex-3/5"} items-center justify-center gap-10 bg-white py-4 px-8 rounded-3xl`}>
              <div className="flex space-x-8">
                {navLinks.map((link, index) => (
                  <NavLink key={index} href={link.href} title={link.title} />
                ))}
              </div>

              {/* Auth */}
              <div>
                {isLoading ? (
                  <p className="text-sm text-gray-600">Loading...</p>
                ) : isLoggedIn ? (
                  <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center space-x-2 text-gray-800">
                      <div className="flex gap-2 items-center text-sm text-[#333333bb] cursor-pointer">
                        <UserRound color="#333333bb" size={16} />
                        {user?.fullName}
                      </div>

                      {isDropdown && (
                        <div onClick={toggleMenu} className="bg-white text-xs *:cursor-pointer text-gray-600 flex flex-col gap-3 border border-gray-300 px-2 py-3 shadow-md rounded-sm w-full absolute top-10">
                          <Link href='/my-account'> My Account</Link>
                          <div className="border-t border-gray-300"></div>
                          <div onClick={handleLogout}>Logout</div>
                        </div>
                      )}

                      <ChevronDown className={`h-4 w-4 cursor-pointer transition-transform duration-200 ${isDropdown ? "rotate-180" : "rotate-0"}`} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Link
                      href="/auth/login"
                      className="text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-full text-xs font-normal transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-full text-xs font-normal transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Join
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className={`${hideLogoBg ? "" : "flex-1/4 md:hidden xl:block"}`}></div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex justify-between items-center z-[600]">
              <button
                onClick={toggleMenu}
                className="inline-flex cursor-pointer items-center justify-center rounded-full p-2 text-gray-900 border border-gray-500 hover:text-gray-500 bg-[#d3d2d0]"
              >
                {isMenuOpen ? <X className="block h-4 w-4" /> : <Menu className="block h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`absolute ${hideLogoBg ? "top-0" : "md:top-26 top-16"}  z-10 w-full lg:hidden bg-[#d3d2d0] border-y border-[#C0C0C0] p-4`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className=" gap-3 flex flex-col">
                {navLinks.map((link, index) => (
                  <NavLink key={index} href={link.href} title={link.title} onClick={toggleMenu} />
                ))}
              </div>

              {isLoading ? (
                <p className="mt-4 text-sm text-gray-600">Loading...</p>
              ) : !isLoggedIn ? (
                <div className="mt-4 flex gap-3">
                  <Link
                    href="/auth/login"
                    className="block border border-gray-400 px-3 py-1 text-center rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100 w-full"
                    onClick={toggleMenu}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block px-3 py-1 border border-black text-center bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 w-full"
                    onClick={toggleMenu}
                  >
                    Join
                  </Link>
                </div>
              ) : (
                <div className="mt-4">
                  <div className="flex items-center relative">
                    <div onClick={toggleDropdown} className="cursor-pointer">
                      <div className="flex gap-2 items-center text-sm text-[#333333bb]">
                        <UserRound color="#333333bb" size={16} />
                        {user?.fullName}
                      </div>
                      {isDropdown && (
                        <div onClick={toggleMenu} className="mt-2 text-xs *:cursor-pointer text-gray-600 flex flex-col gap-3 border border-gray-300 px-2 py-3 shadow-md rounded-sm">
                          <Link href='/my-account'> My Account</Link>
                          <div className="border-t border-gray-300"></div>
                          <div onClick={handleLogout}>Logout</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}

export default Navbar;
