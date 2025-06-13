"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Search } from "lucide-react"
import MapRestaurantCard from "@/components/shared/restaurant-Card/MapRestaurantCard"
import { allRestaurantData } from "@/lib/data"
import Loading from "@/components/loading/Loading"


const MapPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredRestaurants, setFilteredRestaurants] = useState(allRestaurantData)

  // Dynamically import the map component to avoid SSR issues
  const MultipleRestaurantMap = dynamic(() => import("@/components/shared/restaurant-map/MultipleRestaurantMap"), {
    ssr: false,
    loading: () => (
      <Loading/>
    ),
  })

  // Filter restaurants based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredRestaurants(allRestaurantData)
      return
    }

    const filtered = allRestaurantData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredRestaurants(filtered)
  }, [searchQuery])

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex py-10 ">
      {/* Left sidebar with restaurant list */}
      <div className="w-full absolute lg:top-26 lg:left-40 z-[500] md:w-[600px] h-[calc(100vh-104px)] scrl-hide overflow-auto bg-[#E1E1E1]">
        <div className="p-5 flex flex-col gap-4">
          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search restaurants"
                className="w-full bg-white text-gray-500 rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </form>

          {filteredRestaurants.map((restaurant, index) => (
            <MapRestaurantCard key={index} data={restaurant} path="map" />
          ))}
        </div>
      </div>

      {/* Right side map */}
      <div className="hidden md:block flex-grow relative">
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search in map"
              className="w-full bg-white rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Search className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        <MultipleRestaurantMap restaurants={filteredRestaurants} />
      </div>
    </div>
  )
}

export default MapPage
