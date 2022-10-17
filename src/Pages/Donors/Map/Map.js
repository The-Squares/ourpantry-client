import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import NavBar from "Components/General/NavBar";
import useFoodbanks from "Hooks/useFoodbanks";
import useGeolocation from "Hooks/useGeolocation";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Map.css";

function Map() {
  let [lat, long] = useGeolocation();
  let foodbanks = useFoodbanks(20);
  let navigate = useNavigate();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return <p>"Error"</p>;
  }
  if (!isLoaded) return <p>"Loading..."</p>;

  return (
    <>
      <NavBar />
      <div className="Map">
        <GoogleMap
          id="map"
          mapContainerStyle={{ width: "100%", height: "100%" }}
          zoom={15}
          center={{ lat: lat, lng: long }}
          options={{
            zoomControl: true,
            disableDefaultUI: true,
            gestureHandling: "greedy",
          }}
        >
          {foodbanks.map((bank) => {
            return (
              <Marker
                key={`${bank.name}`}
                position={{
                  lat: bank?.cords?.y,
                  lng: bank?.cords?.x,
                }}
                onClick={() => navigate(`/donors/pantry/${bank.id}`)}
              ></Marker>
            );
          })}
        </GoogleMap>
      </div>
    </>
  );
}

export default Map;
