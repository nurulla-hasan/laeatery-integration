"use client"
import { use, useMemo, useState } from "react"
import { allRestaurantData } from "@/lib/data"
import RestaurantDetailsCard from "@/components/shared/restaurant-details-page/RestaurantDetailsCard"
import Loading from "@/components/loading/Loading"

function getHashedIndex(str, length) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash) % length
}

const AIPicsDetails = ({ params }) => {

  const { id } = use(params)
  console.log(id);
  const [isFavorite, setIsFavorite] = useState(false)

  const restaurant = useMemo(() => {
    return allRestaurantData.find((r) => r.id === id)
  }, [id])

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev)
  }

  if (!restaurant) return <Loading/>

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

export default AIPicsDetails