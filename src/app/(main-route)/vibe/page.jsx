"use client"
import HomeContainer from "@/components/home-container/HomeContainer"
import FilterCompo from "@/components/shared/filterCompo/FilterCompo";
import RestaurantCard from "@/components/shared/restaurant-Card/RestaurantCard"
import { vibeRestaurantData, vibes } from "@/lib/data"


const VibePage = () => {

    return (
        <div className="">
            <HomeContainer>
                <div className="flex flex-col md:flex-row py-10 gap-5">
                    {/* Left sidebar - Filters */}
                    <div className=" w-full md:w-[30%] overflow-y-auto">
                        <h2 className="text-[#333333] text-sm font-medium mb-4">Filter By</h2>

                        {/* Fine Filter Compo Here */}
                        <FilterCompo title="Vibe" data={vibes} />
                    </div>

                    {/* Right content - Restaurant listings */}
                    <div className="w-full overflow-y-auto">
                        <div className="text-[#333333] text-sm mb-4">Showing {vibeRestaurantData.length} results</div>

                        {/* Restaurant grid */}
                        <div className="h-[100vh] overflow-auto scrl-hide rounded-xl">
                            {/* Card Component Hare */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                                {
                                    vibeRestaurantData?.map((restaurant, index) => (
                                        <RestaurantCard key={index} path={"vibe"} data={restaurant} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </HomeContainer>
        </div>
    )
}

export default VibePage