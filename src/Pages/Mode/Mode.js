import BigButton from "Components/General/BigButton";
import React from "react";
import { useState } from "react";
import "./Mode.css";

function Mode() {
  let [shelterMode, setMode] = useState(true);

  return (
    <div className="Mode">
      <p>
        Our
        <br />
        Pantry
      </p>
      <div className="modeButtons welcomeButtons">
        <BigButton
          color="var(--blue)"
          to="/login"
          state={{ state: { isShelter: shelterMode } }}
        >
          Login
        </BigButton>
        <BigButton
          color="var(--dark-blue)"
          onclick={() => setMode(!shelterMode)}
        >
          Switch to {shelterMode ? "Donor" : "Shelter"} Mode
        </BigButton>
      </div>
    </div>
  );
}

export default Mode;
