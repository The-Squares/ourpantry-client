import React from "react";
import "./InventoryCard.css";
import { useState } from "react";
import { Textfit } from "react-textfit";
import RightIconNumbers from "Media/RightIconNumbers";

function InventoryCard({
  color = "#62BCD3",
  name,
  initalCount = "",
  shelterid,
  password,
}) {
  let [count, setCount] = useState(initalCount);

  let addOrSub = async (value) => {
    let baseurl = `${process.env.REACT_APP_SERVER_IP}/shelter/${shelterid}/item/${name}/`;
    baseurl += value > 0 ? "add" : "sub";

    let newCount = parseInt(count) + value;
    if (newCount < 0) return;
    setCount(newCount);
    let response = await fetch(baseurl, {
      method: "PUT",
      headers: { "Content-Type": "text/plain" },
      body: password,
    });
    if (response.status !== 200) {
      setCount(count);
      return alert("Error changing amount");
    }
  };

  return (
    <div className="PantryCard InventoryCard">
      <div className="pantryLeft">
        <div style={{ maxHeight: "30px" }}>
          <Textfit mode="single" className="pantryTitle" max={21}>
            {name}
          </Textfit>
        </div>

        <p className="pantryDescrip">
          {count !== null && <>{`Count: ${count}`}</>}
        </p>
      </div>

      <div className="pantryMiddle"></div>
      <div className="pantryRight">
        <RightIconNumbers color={color} addOrSub={addOrSub}></RightIconNumbers>
      </div>
    </div>
  );
}

export default InventoryCard;
