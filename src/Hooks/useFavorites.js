import { useEffect } from "react";
import { useState } from "react";

function useFavorites() {
  let [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let currentFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(currentFavorites);
  }, []);

  return favorites;
}

export default useFavorites;
