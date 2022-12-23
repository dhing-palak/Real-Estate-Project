import React from "react";
import "../../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="homepage">
        <h1>Hello Homepage</h1>
        <div
          className="button"
          role="presentation"
          onClick={() => navigate("/user/login")}
        >
          Login
        </div>
        <div
          className="button"
          role="presentation"
          onClick={() => navigate("/user/register")}
        >
          Sign Up
        </div>
      </div>
    </>
  );
};

export default Home;
