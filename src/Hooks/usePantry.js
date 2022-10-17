import { useEffect } from "react";
import { useState } from "react";

/**
 * @returns {any}
 */
function usePantry(id) {
  let [data, setData] = useState({});

  useEffect(() => {
    let getData = async () => {
      if (!id) return;
      let response = await fetch(
        `${process.env.REACT_APP_SERVER_IP}/shelter/${id}`
      );
      if (response.status !== 200) return;
      let info = await response.json();
      info.offers = info.offers.filter((offer) => offer.priority > 0);
      setData(info);
    };

    getData();
  }, [id]);
  return data;
}

export default usePantry;
