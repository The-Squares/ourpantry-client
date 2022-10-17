import { useState } from "react";

/**
 * Use popup for shelter inventory
 * @returns {Array<any>}
 */
function usePopup() {
  let [isPoped, setPoped] = useState(false);

  let updatePop = () => {
    setPoped(!isPoped);
  };

  return [
    isPoped ? "shelterShowMenu" : "",
    isPoped ? "shelterMinItems" : "",
    updatePop,
  ];
}

export default usePopup;
