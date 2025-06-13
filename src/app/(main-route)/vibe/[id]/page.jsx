"use client"
import { use, useMemo, useState } from "react"
import { vibeRestaurantData } from "@/lib/data"
import RestaurantDetailsCard from "@/components/shared/restaurant-details-page/RestaurantDetailsCard"

function getHashedIndex(str, length) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash) % length
}

const VibeRestaurantDetails = ({ params }) => {


  const { id } = use(params)
  const [isFavorite, setIsFavorite] = useState(false)

  const restaurant = useMemo(() => {
    return vibeRestaurantData.find((r) => r.id === id)
  }, [id])

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev)
  }

  if (!restaurant) return <div>Loading...</div>

  return (
    <div className="min-h-screen py-8 ">
      <RestaurantDetailsCard
        isFavorite={isFavorite}
        restaurant={restaurant}
        getHashedIndex={getHashedIndex}
        toggleFavorite={toggleFavorite}
      />
    </div>
  )
}

export default VibeRestaurantDetails
