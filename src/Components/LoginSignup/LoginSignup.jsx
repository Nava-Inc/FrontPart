import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import Axios from "axios";
import axios from "axios";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const url = "https://29079ee6c05c7a.lhr.life/api/auth/signup";
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setFormData({ ...FormData, [event.target.name]: event.target.value });
    // console.log(FormData);
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(url, { FormData })
      .then((Response) => console.log(Response))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit} className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              onChange={handleInput}
              name="name"
              value={FormData.name}
              type="text"
              placeholder="Name"
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            onChange={handleInput}
            name="email"
            value={FormData.email}
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            onChange={handleInput}
            name="password"
            value={FormData.password}
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="button1">Submit</button>
      </form>

      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            action === "Login" ? setAction("Sign Up") : handleSubmit();
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
