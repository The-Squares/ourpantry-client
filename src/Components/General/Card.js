import React from "react";
import "./Card.css";
import SmallButton from "./SmallButton";

function Card({
  title,
  time,
  item,
  count,
  preLocation = "Location",
  location,
  buttonText,
  color = "#AACA9B",
  to = "",
}) {
  return (
    <div className="Card">
      <div className="cardTop" style={{ backgroundColor: color }}>
        <p className="cardDonations">{title}</p>
        <p className="cardUploaded">Updated {time} minutes ago</p>
      </div>
      <div className="cardMid">
        <p>{item}</p>
        <p className="cardDescript">
          Count: <span className="cardUnderlined">{count}</span> {preLocation}:{" "}
          <span className="cardUnderlined">{location}</span>
        </p>
      </div>
      <div className="cardBot">
        <SmallButton color={color} to={to}>
          {buttonText}
        </SmallButton>
      </div>
    </div>
  );
}

export default Card;
