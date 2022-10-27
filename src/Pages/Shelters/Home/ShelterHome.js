import Card from "Components/General/Card";
import NavBar from "Components/General/NavBar";
import useUserData from "Hooks/useUserData";
import React from "react";
import "./ShelterHome.css";

function ShelterHome() {
  useUserData();

  return (
    <>
      <NavBar></NavBar>
      <div className="ShelterHome">
        <div className="shelterHomeTitle"></div>
        <div className="shelterHomeCards">
          <Card
            title={"Inventory"}
            time={"13"}
            item="Whole Tomatoes"
            count={2}
            preLocation={"Type"}
            location={"Non-Perishable"}
            buttonText="Update"
            to="/shelters/inventory"
          ></Card>
          <Card
            title={"Request Items"}
            time={"13"}
            item="Veggie all original"
            count={4}
            location={"World Harvest"}
            buttonText="Send Request"
            color="#62BCD3"
            to="/shelters/inventory"
          ></Card>
        </div>
      </div>
    </>
  );
}

export default ShelterHome;
