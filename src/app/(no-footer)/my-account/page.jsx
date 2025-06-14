"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import HomeContainer from "@/components/home-container/HomeContainer"
import ContactInfo from "@/components/account/ContactInfo"
import AccountBanner from "@/components/account/AccountBanner"
import AccountDetails from "@/components/account/AccountDetails"
import EditProfile from "@/components/account/EditProfile"
import ChangePassword from "@/components/account/ChangePassword"
import { useGetMe } from "@/hooks/useGetMe"
import Loading from "@/components/loading/Loading"
import { ErrorToast, SuccessToast } from "@/utils/ValidationToast"
import { useQueryClient } from "@tanstack/react-query"


const AccountPage = () => {
  const [activeView, setActiveView] = useState("details")
  // Use useGetMe hook to fetch user data
  const { data: userProfile, isLoading, isError, refetch } = useGetMe();
  const queryClient = useQueryClient();

  const handleUpdateSuccess = () => {
    queryClient.invalidateQueries(["me"]);
    setActiveView("details");
  };

  const handlePasswordChangeSuccess = () => {
    queryClient.invalidateQueries(["me"]);
    setActiveView("details");
  }



  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#E6F8F7]">
        <Loading />
      </div>
    );
  }

  if (isError) {
    ErrorToast("Failed to load user data.");
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
    <div className="min-h-[calc(100vh-104px)] py-8 text-[#333333] ">
      <HomeContainer>
        {/* Banner with user info */}
        <AccountBanner fullName={userProfile.name || userProfile.authId?.name || "Your Name"} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left column - Welcome and contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <ContactInfo userData={userProfile} />
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
                  userData={userProfile}
                  onEditClick={() => setActiveView("edit")}
                  onChangePasswordClick={() => setActiveView("password")}
                />
              )}

              {activeView === "edit" && (
                <EditProfile
                  userData={userProfile}
                  onUpdate={handleUpdateSuccess}
                  onCancel={() => setActiveView("details")} />
              )}

              {activeView === "password" && (
                <ChangePassword
                  onPasswordChange={handlePasswordChangeSuccess}
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