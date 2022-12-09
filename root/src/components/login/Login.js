import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    const res = await fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credientials");
    } else {
      window.alert("Login Successful");
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="login-app-wrapper">
        <div>
          <h2 className="login-title">Login</h2>
        </div>
        <form className="login-form-wrapper" method="POST" id="login-form">
          <div className="login-input-email">
            <input
              className="login-input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="login-input-password">
            <input
              className="login-input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            ></input>
          </div>
          <div className="login-submit-button">
            <button
              className="login-form-submit"
              name="signin"
              id="signin"
              value="log in"
              onClick={loginUser}
            >
              Log In
            </button>
          </div>
          <div className="login-signup-text">
            New to Real Estate?{" "}
            <span
              className="login-signup-btn"
              onClick={() => navigate("/user/register")}
            >
              Sign Up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
