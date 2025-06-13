"use client"
import dynamic from "next/dynamic"

const ViewFullMap = dynamic(() => import("@/components/shared/restaurant-map/ViewFullMap"), { ssr: false })

const ViewMapPage = () => {
  return (
    <div className="w-full h-screen">
      <ViewFullMap />
    </div>
  )
}

export default ViewMapPage
