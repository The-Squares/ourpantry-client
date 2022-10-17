import React from "react";
import "./PantryCardCentered.css";
import StarWrapped from "Media/StarWrapped";
import RightIconWrapped from "Media/RightIconWrapped";
import { useState } from "react";

function PantryCardCentered({
  star = true,
  arrow = true,
  onClick = () => {},
  color = "#62BCD3",
  text,
}) {
  let [starOn, setStarOn] = useState(false);

  return (
    <div className="PantryCard" onClick={onClick}>
      <div className="pantryLeft pantryCenteredLeft">
        <p>{text}</p>
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

export default PantryCardCentered;
