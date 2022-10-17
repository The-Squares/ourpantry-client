import { useEffect, useState } from "react";

function useGeolocation() {
  let [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    let setPosition = async () => {
      try {
        let position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, (error) => {
            // alert(`Location services failed, error code: ${error.code}`);
            reject();
          });
        });
        setCoordinates([position.coords.latitude, position.coords.longitude]);
      } catch (e) {
        setCoordinates([34.059059, -118.4038912]);
      }
    };
    setPosition();
  }, []);

  return coordinates;
}

export default useGeolocation;
