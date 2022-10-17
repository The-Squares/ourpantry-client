import React from "react";
import "./Requested.css";
import { ReactComponent as SideIcon } from "Media/sideicon.svg";
import StarWrapped from "Media/StarWrapped";
import SmallButton from "./SmallButton";
import { useNavigate } from "react-router-dom";

function Requested({ name, item, recommended, to = "" }) {
  let navigate = useNavigate();

  return (
    <div className="Requested">
      <div className="requestedBlue" onClick={() => navigate("/donors/map")}>
        <SideIcon />
      </div>
      <div className="requestedText">
        <div className="requestedTop">
          <div className="requestedWords">
            <p className="requestedItems">{name}</p>
            <div className="starBox">
              <p>Sova Food Pantry</p>
              <StarWrapped className="requestedStar" />
            </div>
          </div>
          <p className="requestedFood">{item}</p>
        </div>
        <div className="requestedBottom">
          <p>Suggested:</p>
          <p className="requestedBank">{recommended}</p>
          <SmallButton
            color="var(--cyan)"
            fontSize={17}
            width={200}
            onClick={() =>
              document
                .querySelector(".Divider")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Find More Shelters
          </SmallButton>
        </div>
      </div>
    </div>
  );
}

export default Requested;
