"use client"
import { motion } from "framer-motion"
import HomeContainer from "@/components/home-container/HomeContainer"
import { allRestaurantData } from "@/lib/data"
import HeaderSection from "./HeaderSection"
import OverviewSection from "./OverviewSection"
import PhotoGallery from "./PhotoGallery"
import RelatedRestaurants from "./RelatedRestaurants"
import RestaurantInfo from "./RestaurantInfo"
import SignatureDishes from "./SignatureDishes"

const RestaurantDetailsCard = ({
  getHashedIndex,
  toggleFavorite,
  restaurant,
  isFavorite,
}) => {
  return (
    <HomeContainer>
      <motion.div className="mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {/* Header Section with Image and Map */}
        <HeaderSection restaurant={restaurant} />

        {/* Restaurant Info Section */}
        <RestaurantInfo
          restaurant={restaurant}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
          getHashedIndex={getHashedIndex}
        />

        {/* Overview Section */}
        <OverviewSection description={restaurant?.description} extendedDescription={restaurant?.extendedDescription} />

        {/* Photo Gallery Section */}
        <PhotoGallery gallery={restaurant?.gallery || []} />

        {/* Signature Dishes Section */}
        <SignatureDishes dishes={restaurant?.dishes || []} />

        {/* Related Restaurants Section */}
        <RelatedRestaurants restaurants={allRestaurantData} />
      </motion.div>
    </HomeContainer>
  )
}

export default RestaurantDetailsCard
