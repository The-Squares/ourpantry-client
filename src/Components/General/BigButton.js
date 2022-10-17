import React from "react";
import { useNavigate } from "react-router-dom";
import "./BigButton.css";

function BigButton({
  children,
  color,
  to = "",
  onclick = () => {},
  state = {},
}) {
  let navigate = useNavigate();

  return (
    <div
      className="BigButton"
      style={{ backgroundColor: color }}
      onClick={() => {
        onclick();
        return to ? navigate(to, state) : "";
      }}
    >
      <p>{children}</p>
    </div>
  );
}

export default BigButton;
