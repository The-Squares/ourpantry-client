import BigButton from "Components/General/BigButton";
import React from "react";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  let { state } = useLocation();
  let emailRef = useRef();
  let passwordRef = useRef();
  let navigate = useNavigate();
  // @ts-ignore
  let { isShelter = true } = state;

  let handleLogin = async () => {
    // @ts-ignore
    let email = emailRef?.current?.value;
    // @ts-ignore
    let password = passwordRef?.current?.value;
    if (!email || !password) return alert("Missing email or password!");

    let response = await fetch(
      `${process.env.REACT_APP_SERVER_IP}/${
        isShelter ? "shelter" : "donator"
      }/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    );
    if (response.status !== 200) return alert("Error!");
    let data;
    try {
      data = await response.json();
    } catch (e) {
      console.log(e);
      return alert("Failed to find user!");
    }
    if (!data.name) return alert("Failed to find user!");

    localStorage.setItem("isShelter", isShelter);
    localStorage.setItem("userData", JSON.stringify(data));
    navigate(isShelter ? `/shelters` : "/donors");
  };

  return (
    <div className="Login">
      <h1
        onClick={() => navigate("/signup", { state: { isShelter: isShelter } })}
      >
        Signup
      </h1>
      <p>{isShelter ? "Shelter" : "Donor"} Login</p>
      <div className="loginInputs">
        <input
          ref={emailRef}
          type="email"
          id="email"
          placeholder="Email Address..."
        />
        <input ref={passwordRef} type="password" placeholder="Password..." />
      </div>
      <BigButton color="var(--dark-blue)" onclick={handleLogin}>
        Login
      </BigButton>
    </div>
  );
}

export default Login;
