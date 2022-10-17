import React from "react";
import "./Welcome.css";
import BigButton from "Components/General/BigButton";

function Welcome() {
  return (
    <div className="Welcome">
      <p>
        Our
        <br />
        Pantry
      </p>
      <div className="welcomeButtons">
        <BigButton color="var(--blue)" to="/mode">
          Get Started
        </BigButton>
        <BigButton color="var(--dark-blue)">About Us</BigButton>
      </div>
    </div>
  );
}

export default Welcome;
