"use client"

import React, { useState } from "react"
import { X, FilterIcon } from "lucide-react"
import HomeContainer from "@/components/home-container/HomeContainer"
import { cuisines, neighborhoods, allRestaurantData, vibes, vibeRestaurantData } from "@/lib/data"
import toast from "react-hot-toast"
import RestaurantCard from "@/components/shared/restaurant-Card/RestaurantCard"
import FilterCompo from "@/components/shared/filterCompo/FilterCompo"


const NearbyRestaurant = () => { 
   

    // State for filter modal
    const [showFilterModal, setShowFilterModal] = useState(false)

     // State for favorites
     const [favorites, setFavorites] = useState(["restaurant-2"])
    // Toggle favorite status
    const toggleFavorite = (id) => {
        setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    }

    const handleFilterApply = () => {
        setShowFilterModal(false)
        toast.success("Your Filtered Items")
    }

    return (
        <>
            <div className="mt-10 pb-20">
                <HomeContainer>
                    {/* Header with result count and filter button */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-black">Showing {allRestaurantData.length} results</div>
                        <button
                            onClick={() => setShowFilterModal(true)}
                            className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 cursor-pointer"
                        >
                            <FilterIcon size={16} />
                            Filter
                        </button>
                    </div>

                    {/* Restaurant grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                        {
                            allRestaurantData?.map((restaurant, index) => (
                                <RestaurantCard key={index} path={"nearby-restaurants"} data={restaurant}/>
                            ))
                        }
                    </div>
                </HomeContainer>

                {/* Filter Modal */}
                {showFilterModal && (
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-xs z-[1200] flex justify-end ">
                        <div className="bg-white w-full max-w-xs h-full overflow-y-auto scrl-hide rounded-l-lg">
                            <div className="p-4 flex justify-between items-center">
                                <h2 className="text-black text-lg font-medium">Filter</h2>
                                <button onClick={() => setShowFilterModal(false)} className="text-black hover:text-black/50 cursor-pointer">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className=" h-[82vh] overflow-auto scrl-hide">
                                {/* Neighborhood filter */}
                                <FilterCompo title="Neighborhood" data={neighborhoods} />

                                {/* Cuisine filter */}
                                <FilterCompo title="Cuisine" data={cuisines} />

                                {/* Vibe filter */}
                                <FilterCompo title="Vibe" data={vibes} />

                                {/* Apply button */}

                            </div>
                            <div className="p-4">
                                <button onClick={handleFilterApply} className="w-full py-2 text-sm bg-black text-white font-medium rounded hover:bg-gray-900 transition-colors cursor-pointer">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default NearbyRestaurant
