import React from "react";
import { ReactComponent as Hamburger } from "Media/hamburger.svg";
import "./NavBar.css";
import SideBar from "./SideBar";
import { useState } from "react";

function NavBar() {
  let [enabled, setEnabled] = useState(false);

  return (
    <div className="NavBar" style={{ backgroundColor: "#063677" }}>
      <Hamburger className="navHam" onClick={() => setEnabled(!enabled)} />
      <SideBar
        enabled={enabled}
        setEnabled={() => setEnabled(!enabled)}
        isDonor={localStorage.getItem("isShelter") === "false"}
      />
      <p className="navTitle">Our Pantry</p>
      <div className="emptySpacer"></div>
    </div>
  );
}

export default NavBar;
