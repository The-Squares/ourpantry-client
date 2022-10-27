import React from "react";
import "./PantryCard.css";
import StarWrapped from "Media/StarWrapped";
import RightIconWrapped from "Media/RightIconWrapped";
import { useState } from "react";
import { Textfit } from "react-textfit";
import { useEffect } from "react";

function PantryCard({
  star = true,
  isStarOn = false,
  arrow = true,
  onClick = () => {},
  color = "#62BCD3",
  name,
  location = "",
  distance = "",
}) {
  let [starOn, setStarOn] = useState(false);
  let favoriteItem = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!starOn) {
      favorites.push(name);
    } else {
      favorites = favorites.filter((favorite) => name !== favorite);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setStarOn(!starOn);
  };

  useEffect(() => {
    setStarOn(isStarOn);
  }, [isStarOn]);

  return (
    <div className="PantryCard">
      <div className="pantryLeft">
        <div style={{ maxHeight: "30px" }}>
          <Textfit mode="single" className="pantryTitle" max={21}>
            {name}
          </Textfit>
        </div>

        <p className="pantryDescrip">
          {location}
          {distance && (
            <>
              <br /> {distance}
            </>
          )}
        </p>
      </div>

      <div className="pantryMiddle">
        {star ? (
          <StarWrapped
            className="pantryStar"
            filled={starOn}
            onClick={favoriteItem}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="pantryRight" onClick={onClick}>
        <RightIconWrapped arrow={arrow} color={color}></RightIconWrapped>
      </div>
    </div>
  );
}

export default PantryCard;
