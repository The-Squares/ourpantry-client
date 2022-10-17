import { useEffect } from "react";
import { useState } from "react";

function useInventory(id) {
  let [inventory, setInventory] = useState([]);
  useEffect(() => {
    let setupInventory = async () => {
      if (!id) return;
      let response = await fetch(
        `${process.env.REACT_APP_SERVER_IP}/shelter/${id}/item?password=password`
      );
      let data = await response.json();
      setInventory(data);
    };
    setupInventory();
  }, [id]);

  return inventory;
}

export default useInventory;
