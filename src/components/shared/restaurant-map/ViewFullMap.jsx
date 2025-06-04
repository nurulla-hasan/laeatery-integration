"use client"

import dynamic from "next/dynamic"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { icon } from "@/lib/leaflet-icon"
import { Skeleton } from "@mui/material"

const MapContainer = dynamic(() => import("react-leaflet").then((m) => m.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), { ssr: false })

const ViewFullMap = () => {
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)

  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
    address: "",
    name: "",
  })

  useEffect(() => {
    // Get parameters from URL
    const lat = Number.parseFloat(searchParams.get("lat") || "23.8103")
    const lng = Number.parseFloat(searchParams.get("lng") || "90.4125")
    const address = searchParams.get("address") || "Dhaka"
    const name = searchParams.get("name") || "Restaurant"

    // Update location state
    setLocation({ lat, lng, address, name })
      setIsLoading(false)
  }, [searchParams])

  if (isLoading) {
    return <div className="h-full w-full flex items-center justify-center">
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        width={1550}
        height={730}
      />
    </div>
  }


  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
      key={`${location.lat}-${location.lng}`} // Force re-render when coordinates change
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[location.lat, location.lng]} icon={icon}>
        <Popup>
          <strong>{location.name}</strong>
          <br />
          {location.address}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default ViewFullMap
