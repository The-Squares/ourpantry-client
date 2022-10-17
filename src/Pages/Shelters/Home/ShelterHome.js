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
            item="Canned Tomatoes"
            count={12}
            preLocation={"Type"}
            location={"Non-Perishable"}
            buttonText="Update"
            to="/shelters/inventory"
          ></Card>
          <Card
            title={"Request Items"}
            time={"13"}
            item="Green Beans"
            count={12}
            location={"LA Food Shelter"}
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
