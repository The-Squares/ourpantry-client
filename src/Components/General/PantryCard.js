import React from "react";
import "./PantryCard.css";
import StarWrapped from "Media/StarWrapped";
import RightIconWrapped from "Media/RightIconWrapped";
import { useState } from "react";
import { Textfit } from "react-textfit";

function PantryCard({
  star = true,
  arrow = true,
  onClick = () => {},
  color = "#62BCD3",
  name,
  location = "",
  distance = "",
}) {
  let [starOn, setStarOn] = useState(false);
  return (
    <div className="PantryCard" onClick={onClick}>
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
            onClick={() => setStarOn(!starOn)}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="pantryRight">
        <RightIconWrapped arrow={arrow} color={color}></RightIconWrapped>
      </div>
    </div>
  );
}

export default PantryCard;
