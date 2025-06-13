"use client"
import { motion } from "framer-motion"
import HomeContainer from "@/components/home-container/HomeContainer"
// import FilterCompo from "@/components/shared/filterCompo/FilterCompo"
import RestaurantCard from "@/components/shared/restaurant-Card/RestaurantCard"
import { allRestaurantData } from "@/lib/data"
// import { FilterIcon, X } from "lucide-react"
import Link from "next/link"
// import { useState } from "react"
// import toast from "react-hot-toast"

const AiPics = () => {
  // const [showFilterModal, setShowFilterModal] = useState(false)

  // const handleFilterApply = () => {
  //   setShowFilterModal(false)
  //   toast.success("Your Filtered Items")
  // }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  return (
    <motion.div className="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="py-10">
        <HomeContainer>
          {/* Header with result count and filter button */}
          <motion.div
            className="flex justify-between items-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-black">Showing {allRestaurantData.length} results</div>
            <div className="flex gap-2 text-sm">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/map">
                  <button className="text-black border border-[#C0C0C0] px-7 py-2 rounded flex items-center gap-2 cursor-pointer">
                    Map
                  </button>
                </Link>
              </motion.div>
              {/* <motion.button
                onClick={() => setShowFilterModal(true)}
                className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FilterIcon size={16} />
                Filter
              </motion.button> */}
            </div>
          </motion.div>

          {/* Restaurant grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {allRestaurantData?.map((restaurant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <RestaurantCard path={"ai-picks"} data={restaurant} />
              </motion.div>
            ))}
          </motion.div>
        </HomeContainer>

        {/* Filter Modal with AnimatePresence for smooth enter/exit */}
        {/* <AnimatePresence>
          {showFilterModal && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/30 backdrop-blur-xs z-[1200] flex justify-end"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setShowFilterModal(false)}
              >
                <motion.div
                  className="bg-white w-full max-w-xs h-full overflow-y-auto scrl-hide rounded-l-lg"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.div
                    className="p-4 flex justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-black text-lg font-medium">Filter</h2>
                    <motion.button
                      onClick={() => setShowFilterModal(false)}
                      className="text-black hover:text-black/50 cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={20} />
                    </motion.button>
                  </motion.div>

                  <motion.div
                    className="h-[82vh] overflow-auto scrl-hide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <FilterCompo title="Neighborhood" data={neighborhoods} />

                    <FilterCompo title="Cuisine" data={cuisines} />

                    <FilterCompo title="Vibe" data={vibes} />
                  </motion.div>

                  <motion.div
                    className="p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.button
                      onClick={handleFilterApply}
                      className="w-full py-2 text-sm bg-black text-white font-medium rounded hover:bg-gray-900 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Apply
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence> */}
      </div>
    </motion.div>
  )
}

export default AiPics
