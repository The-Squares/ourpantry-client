import { useState } from "react";

function useBoolean(def) {
  let [state, setState] = useState(def);

  return [
    state,
    () => {
      setState(!state);
    },
  ];
}

export default useBoolean;
