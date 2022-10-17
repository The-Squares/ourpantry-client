import useOutsideAlerter from "Hooks/useOutsideClick";
import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { donorText, sheltersText } from "Util/SidebarText";
import "./SideBar.css";

function SideBar({ enabled, setEnabled, isDonor = true }) {
  let navigate = useNavigate();
  let donorRef = useRef();
  let alerter = () => {
    setEnabled(false);
  };
  useOutsideAlerter(donorRef, enabled, alerter);
  let text = isDonor ? donorText : sheltersText;

  return (
    <div
      className={`SideBar ${enabled ? "sidebarEnabled" : "sidebarDisabled"}`}
      ref={donorRef}
    >
      <div className="sideTop">
        <p>Our Pantry</p>
      </div>
      <div className="sideMidTop">
        <p onClick={() => navigate(text[0].link)}>{text[0].text}</p>
        <p onClick={() => navigate(text[1].link)}>{text[1].text}</p>
        <p onClick={() => navigate(text[2].link)}>{text[2].text}</p>
      </div>
      <div className="sideMidBot">
        <p onClick={() => navigate(text[3].link)}>{text[3].text}</p>
        <p onClick={() => navigate(text[4].link)}>{text[4].text}</p>
      </div>
      <div className="sideBot">
        <p onClick={() => navigate(text[5].link)}>{text[5].text}</p>
        <p onClick={() => navigate(text[6].link)}>{text[6].text}</p>
      </div>
    </div>
  );
}

export default SideBar;
