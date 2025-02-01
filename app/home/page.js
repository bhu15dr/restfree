"use client";

import { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function LocationMap() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [map, setMap] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          setError("Failed to get location. Please allow location access.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (location) {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["places"],
      });

      loader.load().then((google) => {
        const newMap = new google.maps.Map(document.getElementById("map"), {
          center: location,
          zoom: 15,
        });
        setMap(newMap);

        new google.maps.Marker({
          position: location,
          map: newMap,
          title: "Your Location",
        });
      });
    }
  }, [location]);

  const searchNearbyPlaces = (type) => {
    if (!map) return;

    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: location,
      radius: 1000,
      type: [type],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results);
        results.forEach((place) => {
          new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
          });
        });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Nearby Places</h1>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <>
          <div className="flex justify-center space-x-4 mb-4">
            <Button onClick={() => searchNearbyPlaces("restaurant")}>
              Restaurants
            </Button>
            <Button onClick={() => searchNearbyPlaces("restroom")}>
              Restrooms
            </Button>
          </div>
          <div id="map" className="w-full h-[500px] rounded-lg shadow-lg" />
          {places.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">Nearby Places:</h2>
              <ul className="space-y-2">
                {places.map((place) => (
                  <li
                    key={place.place_id}
                    className="bg-gray-100 p-3 rounded-md hover:bg-gray-200 cursor-pointer"
                    onClick={() => setSelectedPlace(place)}
                  >
                    {place.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedPlace && (
            <div className="mt-6 bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{selectedPlace.name}</h3>
              <p>{selectedPlace.vicinity}</p>
              <p>Rating: {selectedPlace.rating} / 5</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
