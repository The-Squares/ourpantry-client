import { useState } from "react";
import { useEffect } from "react";
import getDistance from "Util/getDistance";
import useGeolocation from "./useGeolocation";

function useFoodbanks(distance) {
  let [lat, long] = useGeolocation();
  let [foodbanks, setFoodbanks] = useState([]);
  useEffect(() => {
    if (!lat || !long || !distance) return;
    let getBanks = async () => {
      let response = await fetch(
        `${process.env.REACT_APP_SERVER_IP}/donator/nearby-shelters?latitude=${lat}&longitude=${long}&distance=${distance}`
      );
      if (response.status !== 200) return;
      let data = await response.json();
      for (let i = 0; i < data.length; i++) {
        data[i].distance = Math.round(
          getDistance(data[i].cords.y, data[i].cords.x, lat, long)
        );
      }
      setFoodbanks(data);
    };
    getBanks();
  }, [lat, long, distance]);

  return foodbanks;
}

export default useFoodbanks;
