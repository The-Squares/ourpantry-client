import BigButton from "Components/General/BigButton";
import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  let { state } = useLocation();
  let formRef = useRef();
  let navigate = useNavigate();
  // @ts-ignore
  let { isShelter = true } = state;

  let signup = async (data) => {
    let response = await fetch(
      `${process.env.REACT_APP_SERVER_IP}/${isShelter ? "shelter" : "donator"}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.status !== 200) return alert("Failed to signup");

    let user;
    try {
      user = await response.json();
    } catch (e) {
      console.log(e);
      return alert("Failed to find user!");
    }
    if (!user.name) return alert("Failed to find user!");

    localStorage.setItem("isShelter", isShelter);
    localStorage.setItem("userData", JSON.stringify(user));
    navigate(isShelter ? `/shelters` : "/donors");
  };

  let handleSignup = async () => {
    let form = new FormData(formRef.current);
    let object = {};
    form.forEach((value, key) => (object[key] = value));
    let { email, password, name, address } = object;
    if (isShelter) return await signup({ email, password, name, address });

    await signup({ email, password, name });
  };

  return (
    <div className="Signup Login">
      <h1
        onClick={() => navigate("/login", { state: { isShelter: isShelter } })}
      >
        Login
      </h1>
      <p>{isShelter ? "Shelter" : "Donor"} Signup</p>
      <form className="loginInputs" ref={formRef}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address..."
        />
        <input type="password" name="password" placeholder="Password..." />
        <input
          type="text"
          name="name"
          placeholder={`${isShelter ? "Shelter" : "Donator"} name...`}
        />
        {isShelter && (
          <input type="text" name="address" placeholder="Address..." />
        )}
      </form>
      <BigButton color="var(--dark-blue)" onclick={handleSignup}>
        Signup
      </BigButton>
    </div>
  );
}

export default Signup;
