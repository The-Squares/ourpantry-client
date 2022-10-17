import React from "react";
import "./Home.css";
import Card from "Components/General/Card";
import Requested from "Components/General/Requested";
import NavBar from "Components/General/NavBar";
import PantryCard from "Components/General/PantryCard";
import Divider from "Components/General/Divider";
import useFoodbanks from "Hooks/useFoodbanks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useUserData from "Hooks/useUserData";

function Home() {
  useUserData();
  let [distance, setDistance] = useState(10);
  let nearbyBanks = useFoodbanks(distance);
  let navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="Home">
        <div className="homeTop">
          <Card
            title={"Donations"}
            time={"13"}
            item="Canned Tomatoes"
            count={12}
            preLocation={"Location"}
            location={"LA Food Shelter"}
            buttonText="Donate"
            to="/donors/pantry"
          ></Card>
          <Requested
            name={"Sova Food Pantry"}
            item={"Green Beans"}
            recommended="Los Angeles Regional Food Bank"
          ></Requested>
        </div>
        <Divider>
          <p>Food Shelters</p>
          <p>
            Searching for food shelters near <span>Los Angeles</span>,{" "}
            <span>CA</span> within{" "}
            <select
              className="distanceSelector"
              defaultValue={"10"}
              onChange={(e) => setDistance(parseInt(e.target.value))}
            >
              <option value="5">5 miles</option>
              <option value="10">10 miles</option>
              <option value="15">15 miles</option>
              <option value="20">20 miles</option>
              <option value="30">30 miles</option>
              <option value="40">40 miles</option>
              <option value="50">50 miles</option>
            </select>
          </p>
        </Divider>
        <div
          className="homePantryList"
          // Put a guard for # of cards (in this case 4) must be less than 6 and greater than 0
          style={{ paddingBottom: `${580 - 105 * (nearbyBanks.length - 1)}px` }}
        >
          {nearbyBanks.map((bank) => (
            <PantryCard
              name={bank.name}
              location="Los Angeles, CA"
              distance={`${bank.distance} ${
                bank.distance === 1 ? "mile" : "miles"
              }`}
              onClick={() => navigate(`/donors/pantry/${bank.id}`)}
              key={bank.name}
            ></PantryCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
