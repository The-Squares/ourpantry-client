import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isShelter", "");
    localStorage.setItem("userData", "");
    navigate("/");
  }, [navigate]);

  return <p>Loging out...</p>;
}

export default Logout;
