"use client"
import { motion } from "framer-motion"
import HomeContainer from "@/components/home-container/HomeContainer"
import RestaurantCard from "@/components/shared/restaurant-Card/RestaurantCard"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { getAiPicks } from "@/lib/apis/queries/get-ai-pics"
import Loading from "@/components/loading/Loading"
import Navbar from "@/components/navbar/Navbar"

const AiPics = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['ai-picks'],
    queryFn: getAiPicks,
    onError: (error) => {
      console.error("useQuery error in AiPics:", error);
      // এখানে আপনি একটি টোস্ট বা এরর মেসেজ দেখাতে পারেন, যেমন:
      // ErrorToast("Failed to load AI Picks.");
    }
  });

  const restaurants = data?.trending_restaurants || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500">
        <p>Error loading AI Picks. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
      <motion.div className="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="py-10">
          <HomeContainer>
            {/* Header with result count*/}
            <motion.div
              className="flex justify-between items-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-black">Showing {restaurants.length} results</div>
              <div className="flex gap-2 text-sm">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/map">
                    <button className="text-black border border-[#C0C0C0] px-7 py-2 rounded flex items-center gap-2 cursor-pointer">
                      Map
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Restaurant grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {restaurants.length > 0 ? (
                restaurants.map((restaurant, index) => (
                  <motion.div
                    key={restaurant.name || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <RestaurantCard path={"ai-picks"} data={restaurant} />
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-600 col-span-full text-center">No AI picks available yet.</p>
              )}
            </motion.div>
          </HomeContainer>
        </div>
      </motion.div>
    </div>
  )
}

export default AiPics;