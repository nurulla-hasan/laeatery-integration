// 📍 Helper function for reverse geocoding
export const getLocationFromLatLng = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
      {
        headers: { 
          'User-Agent': 'LAEatery',
        },
      }
    );
    const data = await response.json();
    return (
      data?.address?.city ||
      data?.address?.town ||
      data?.address?.village ||
      data?.address?.state ||
      "Unknown location"
    );
  } catch (error) {
    console.error("Error fetching location:", error);
    return "Unknown location";
  }
};