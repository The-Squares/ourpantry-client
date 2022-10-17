import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * @returns {any}
 */
function useUserData() {
  let [userData, setUserData] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    if (!navigate) return;
    let userString = localStorage.getItem("userData");
    if (!userString) return navigate("/logout");
    let data = JSON.parse(userString);
    setUserData(data);
  }, [navigate]);
  return userData;
}

export default useUserData;
