"use client"
import { useState, useEffect } from "react" // useEffect added
import { motion } from "framer-motion"
import HomeContainer from "@/components/home-container/HomeContainer"
import ContactInfo from "@/components/account/ContactInfo"
import AccountBanner from "@/components/account/AccountBanner"
import AccountDetails from "@/components/account/AccountDetails"
import EditProfile from "@/components/account/EditProfile"
import ChangePassword from "@/components/account/ChangePassword"
// import { useSelector } from "react-redux" // REMOVED
import { useGetMe } from "@/hooks/useGetMe" // Import the useGetMe hook
import Loading from "@/components/loading/Loading" // Assuming you have a Loading component


const AccountPage = () => {
  const [activeView, setActiveView] = useState("details")

  // Use useGetMe hook to fetch user data
  const { data: userProfile, isLoading, isError } = useGetMe();

  const [userData, setUserData] = useState({
    fullName: "Your Name", 
    email: "email@example.com",
    phone: "(208) 555-0112", 
    password: "••••••••", 
  })

  useEffect(() => {
    if (userProfile) {
      setUserData((prevData) => ({
        ...prevData,
        fullName: userProfile.name || userProfile.authId?.name || "Your Name",
        email: userProfile.email || "email@example.com",
      }));
    }
  }, [userProfile]);


  const updateUserData = (newData) => {
    setUserData({
      ...userData,
      ...newData,
    })
    setActiveView("details")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#E6F8F7]">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 bg-[#E6F8F7]">
        <p>Error loading account data. Please try again.</p>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600 bg-[#E6F8F7]">
        <p>User data not available. Please ensure you are logged in.</p>
      </div>
    );
  }


  return (
    <div className="min-h-screen py-8 text-[#333333] ">
      <HomeContainer>
        {/* Banner with user info */}
        <AccountBanner fullName={userData.fullName} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left column - Welcome and contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <ContactInfo />
          </motion.div>

          {/* Right column - Account details/edit form/change password */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="rounded-lg p-6">
              {activeView === "details" && (
                <AccountDetails
                  userData={userData}
                  onEditClick={() => setActiveView("edit")}
                  onChangePasswordClick={() => setActiveView("password")}
                />
              )}

              {activeView === "edit" && (
                <EditProfile userData={userData} onUpdate={updateUserData} onCancel={() => setActiveView("details")} />
              )}

              {activeView === "password" && (
                <ChangePassword
                  onPasswordChange={() => setActiveView("details")}
                  onCancel={() => setActiveView("details")}
                />
              )}
            </div>
          </motion.div>
        </div>
      </HomeContainer>
    </div>
  )
}

export default AccountPage