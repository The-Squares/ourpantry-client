import Divider from "Components/General/Divider";
import NavBar from "Components/General/NavBar";
import PantryCardCentered from "Components/General/PantryCardCentered";
import usePantry from "Hooks/usePantry";
import React from "react";
import { useParams } from "react-router-dom";
import { Textfit } from "react-textfit";
import "./Pantry.css";

function Pantry() {
  let { pantryid } = useParams();
  let pantryData = usePantry(pantryid);
  return (
    <>
      <NavBar />
      <div className="Pantry">
        <Divider>
          <Textfit mode="single" className="pantryDataTitle">
            {pantryData?.name}
          </Textfit>
          <p>{pantryData?.address}</p>
        </Divider>
        <div className="pantryRequests">
          {pantryData?.offers?.map((offer) => (
            <PantryCardCentered
              text={offer.name}
              arrow={false}
              star={false}
              key={offer.name}
            ></PantryCardCentered>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pantry;
