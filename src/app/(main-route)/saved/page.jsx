// app/saved/page.jsx
"use client"

import HomeContainer from "@/components/home-container/HomeContainer";
import SavedRestaurantCard from "@/components/shared/restaurant-Card/SavedRestaurantCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SavePage = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  // Helper function to create a unique identifier from restaurant data
  // Assuming name and location together are unique enough
  const createUniqueId = (restaurant) => {
    // Make sure name and location exist before concatenating
    return `${restaurant?.name || 'unknown'}-${restaurant?.location || 'unknown'}`;
  };

  // localStorage থেকে ডেটা লোড করার জন্য একটি ফাংশন
  const loadSavedRestaurants = () => {
    try {
      if (typeof window !== 'undefined') {
        const saved = JSON.parse(localStorage.getItem("savedRestaurants") || "[]");
        // Optional: If you want to add the uniqueId to existing saved items
        // saved.forEach(item => {
        //     if (!item._uniqueId) { // Check if it already has the uniqueId
        //         item._uniqueId = createUniqueId(item);
        //     }
        // });
        setRestaurantList(saved);
      }
    } catch (error) {
      console.error("Failed to load saved restaurants from localStorage:", error);
      setRestaurantList([]);
    }
  };

  useEffect(() => {
    loadSavedRestaurants();
  }, []);

  // এই ফাংশনটি কেবল সেভ করা রেস্টুরেন্ট লিস্ট থেকে একটি নির্দিষ্ট রেস্টুরেন্ট সরাবে
  // এখন `idToRemove` এর পরিবর্তে `uniqueIdToRemove` ব্যবহার করবে
  const removeRestaurant = (uniqueIdToRemove) => {
    console.log("Attempting to remove unique ID:", uniqueIdToRemove);
    console.log("Current restaurantList BEFORE filter:", restaurantList);

    const updatedList = restaurantList.filter((item) => {
        // Generate unique ID for the current item in the list and compare
        const itemUniqueId = createUniqueId(item);
        const isMatch = itemUniqueId === uniqueIdToRemove;
        console.log(`Checking item unique ID: ${itemUniqueId}, Match: ${isMatch}`);
        return !isMatch; // Only keep items that do NOT match the unique ID to remove
    });

    console.log("Updated List AFTER filter:", updatedList);


    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem("savedRestaurants", JSON.stringify(updatedList));
        console.log("localStorage updated with:", JSON.stringify(updatedList));
      }
      setRestaurantList(updatedList); // স্টেট আপডেট করা হয়েছে
      toast.success("Removed from saved!"); // সাফল্যের বার্তা
    } catch (error) {
      console.error("Failed to remove restaurant from localStorage:", error);
      toast.error("Failed to remove restaurant."); // এরর বার্তা
    }
  };

  return (
    <div className="min-h-[calc(100vh-105px)]">
      <div className="pt-10 pb-20">
        <HomeContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {restaurantList.length > 0 ? (
              restaurantList.map((restaurant) => (
                <SavedRestaurantCard
                  // key হিসেবে তৈরি করা unique ID ব্যবহার করুন
                  key={createUniqueId(restaurant)} // <-- গুরুত্বপূর্ণ: ইউনিক `id` তৈরি করে `key` হিসেবে ব্যবহার করুন
                  path="saved"
                  data={restaurant}
                  onRemoveFavorite={createUniqueId} // <-- createUniqueId ফাংশনটি onRemoveFavorite এ পাস করা হয়েছে, এটি idToRemove হিসেবে কাজ করবে।
                />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No saved restaurants found.
              </p>
            )}
          </div>
        </HomeContainer>
      </div>
    </div>
  );
};

export default SavePage;