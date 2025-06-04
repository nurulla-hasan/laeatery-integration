"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { icon } from "@/lib/leaflet-icon"

const MultipleRestaurantMap = ({ restaurants }) => {
  const defaultPosition = [23.8103, 90.4125] // Dhaka default

  return (
    <div className="w-full h-[83vh] overflow-hidden">
      <MapContainer center={defaultPosition} zoom={12} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {restaurants.map((restaurant) => {
          const { id, name, coordinates, contactInfo } = restaurant

          return (
            <Marker key={id} position={[coordinates.lat, coordinates.lng]} icon={icon}>
              <Popup>
                <strong>{name}</strong>
                <br />
                {contactInfo?.address}
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export default MultipleRestaurantMap
