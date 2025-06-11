"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Menu, X, UserRound } from "lucide-react"
import NavLink from "./NavLink"

import { useGetMe } from '@/hooks/useGetMe'; 
import { useChatContext } from "@/contexts/AuthContext"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdown, setIsDropdown] = useState(false)
  const router = useRouter();
  const pathName = usePathname()

  const { data: userProfile, isLoading, isError, error, refetch } = useGetMe();
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown)
  }

 // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  const navLinksContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div>
      <motion.nav
        className={`w-full ${hideLogoBg ? "bg-transparent border-0" : "bg-[#E9E7E3] border-b border-[#C0C0C0]"} py-2 md:py-5 fixed z-[1100]`}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <div className="max-w-7xl mx-auto px-4 ">
          <div className={`flex items-center justify-between ${hideLogoBg ? "md:justify-center" : ""}  md:h-16`}>
            {/* Logo */}
            <motion.div className={`flex-1/4 ${hideLogoBg ? "hidden" : ""}`} variants={logoVariants}>
              <div className="w-40">
                <Link href="/">
                  <motion.img
                    src="/image/logo2.png"
                    alt="Logo"
                    className="md:h-20 h-12 w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                </Link>
              </div>
            </motion.div>

            {/* Navigation Links - Desktop */}
            <motion.div
              className={`hidden lg:flex ${hideLogoBg ? "" : "flex-3/5"} items-center justify-center gap-10 bg-white py-4 px-8 rounded-3xl`}
              variants={navLinksContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="flex space-x-8" variants={navLinksContainerVariants}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink href={link.href} title={link.title} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Auth */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                {/* Always render based on isLoading or isLoggedIn */}
                {isLoading ? (
                    <p className="text-sm text-gray-600">Loading...</p>
                ) : isLoggedIn ? (
                  <div className="relative">
                    <motion.button
                      onClick={toggleDropdown}
                      className="flex items-center space-x-2 text-gray-800"
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex gap-2 items-center text-sm text-[#333333bb] cursor-pointer">
                        <UserRound color="#333333bb" size={16} />
                        {user?.fullName}
                      </div>

                      {
                        isDropdown && (
                          <div onClick={toggleMenu} className="bg-white text-xs *:cursor-pointer text-gray-600 flex flex-col gap-3 border border-gray-300 px-2 py-3 shadow-md rounded-sm w-full absolute top-10">
                            <Link href='/my-account'> My Account</Link>
                            <div className="border-t border-gray-300"></div>
                            <div onClick={handleLogout}>Logout</div>
                          </div>
                        )
                      }

                      <motion.div animate={{ rotate: isDropdown ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="h-4 w-4 cursor-pointer" />
                      </motion.div>
                    </motion.button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="/auth/login"
                        className="text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-full text-xs font-normal"
                      >
                        Sign in
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="/auth/signup"
                        className="text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-full text-xs font-normal"
                      >
                        Join
                      </Link>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Right side: Search */}
            <div className={` ${hideLogoBg ? "" : "flex-1/4 md:hidden xl:block"}`}></div>

            {/* Mobile menu button */}
            <motion.div
              className="lg:hidden flex justify-between items-center z-[600]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={toggleMenu}
                className="inline-flex cursor-pointer items-center justify-center rounded-full p-2 text-gray-900 border border-gray-500 hover:text-gray-500 bg-[#d3d2d0] focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Open main menu</span>
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="block h-4 w-4" aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="block h-4 w-4" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Mobile menu with AnimatePresence for smooth enter/exit */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`absolute ${hideLogoBg ? "top-0" : "md:top-26 top-16"}  z-10 w-full lg:hidden bg-[#d3d2d0] border-y border-[#C0C0C0] p-4`}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div className=" gap-3 flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    onClick={toggleMenu}
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    exit={{ opacity: 0, x: -20, transition: { delay: 0 } }}
                  >
                    <NavLink href={link.href} title={link.title} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile auth */}
              {isLoading ? ( // Check isLoading for mobile auth as well
                  <p className="mt-4 text-sm text-gray-600">Loading...</p>
              ) : !isLoggedIn ? (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  exit={{ opacity: 0, y: 20, transition: { delay: 0 } }}
                >
                  <div className="flex gap-3">
                    <motion.div className="w-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="/auth/login"
                        className="block border border-gray-400 px-3 py-1 text-center rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign in
                      </Link>
                    </motion.div>
                    <motion.div className="w-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="/auth/signup"
                        className="block px-3 py-1 border border-black text-center bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Join
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  exit={{ opacity: 0, y: 20, transition: { delay: 0 } }}
                >
                  <div className="flex items-center relative">
                    <motion.div onClick={toggleDropdown} className="" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <div className="flex gap-2 items-center text-sm text-[#333333bb] cursor-pointer">
                        <UserRound color="#333333bb" size={16} />
                        {user?.fullName}
                      </div>

                      {
                        isDropdown && (
                          <div onClick={toggleMenu} className="mt-2 text-xs *:cursor-pointer text-gray-600 flex flex-col gap-3 border border-gray-300 px-2 py-3 shadow-md rounded-sm">
                            <Link href='/my-account'> My Account</Link>
                            <div className="border-t border-gray-300"></div>
                            <div onClick={handleLogout}>Logout</div>
                          </div>
                        )
                      }
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}