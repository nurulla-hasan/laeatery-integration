"use client" 

import HomeContainer from "@/components/home-container/HomeContainer";
import RestaurantCard from "@/components/shared/restaurant-Card/RestaurantCard";
import { allRestaurantData } from "@/lib/data";
import { useState } from "react";
import toast from 'react-hot-toast';

const SavePage = () => {
    const [restaurantList, setRestaurantList] = useState(allRestaurantData);

    const wishes = restaurantList.filter(item => item.favorite);

    const toggleFavorite = (id) => {
        const updatedList = restaurantList.map(item =>
            item.id === id ? { ...item, favorite: !item.favorite } : item
        );

        setRestaurantList(updatedList);

        const toggledItem = updatedList.find(item => item.id === id);
        toast.success(toggledItem.favorite ? 'Added to favorites' : 'Removed from favorites');
    };

    return (
        <div className="">
            <div className="pt-10 pb-20">
                <HomeContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                        {
                            wishes.length > 0 ? wishes.map((restaurant, index) => (
                                <RestaurantCard
                                    key={index}
                                    path="saved"
                                    data={restaurant}
                                    toggleFavorite={toggleFavorite}
                                />
                            )) : (
                                <p className="text-center col-span-full text-gray-500">No saved restaurants found.</p>
                            )
                        }
                    </div>
                </HomeContainer>
            </div>
        </div>
    );
};

export default SavePage;
