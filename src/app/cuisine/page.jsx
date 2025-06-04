"use client"
import HomeContainer from "@/components/home-container/HomeContainer"
import FilterCompo from "@/components/shared/filterCompo/FilterCompo";
import RestaurantCard from "@/components/shared/restaurant-Card/RestaurantCard"
import { cuiseneRestaurantData } from '@/lib/data';
import { cuisines } from "@/lib/data"

const CuisinePage = () => {

    return (
        <div className="">
            <HomeContainer>
                <div className="flex flex-col md:flex-row py-10 gap-5">
                    {/* Left sidebar - Filters */}
                    <div className=" w-full md:w-[30%] overflow-y-auto">
                        <h2 className="text-[#333333] text-sm font-medium mb-4">Filter By</h2>

                        {/* Fine Filter Compo Here */}
                        <FilterCompo title="Cuisine" data={cuisines} />
                    </div>

                    {/* Right content - Restaurant listings */}
                    <div className="w-full overflow-y-auto">
                        <div className="text-[#333333] text-sm mb-4">Showing {cuiseneRestaurantData.length} results</div>

                        {/* Restaurant grid */}
                        <div className="h-[100vh] overflow-auto scrl-hide rounded-xl">
                            {/* Card Component Hare */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                                {
                                    cuiseneRestaurantData?.map((restaurant, index) => (
                                        <RestaurantCard key={index} path={"cuisine"} data={restaurant} />
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

export default CuisinePage