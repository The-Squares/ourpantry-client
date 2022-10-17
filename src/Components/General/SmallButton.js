import React from "react";
import { useNavigate } from "react-router-dom";
import "./SmallButton.css";

function SmallButton({
  children,
  color,
  width = 180,
  fontSize = 21,
  to = "",
  onClick = () => {},
}) {
  let navigate = useNavigate();

  return (
    <div
      className="SmallButton"
      style={{
        backgroundColor: color,
        width: `${width}px`,
        fontSize: `${fontSize}px`,
      }}
      onClick={() => {
        onClick();
        return to ? navigate(to) : "";
      }}
    >
      <p>{children}</p>
    </div>
  );
}

export default SmallButton;
