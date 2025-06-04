"use client"

import dynamic from "next/dynamic";

// dynamically import leaflet map component
const SingleDataMap = dynamic(() => import("@/components/shared/restaurant-map/SingleDataMap"), {
  ssr: false,
  loading: () => <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
});

export default SingleDataMap;