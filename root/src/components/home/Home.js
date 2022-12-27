import React, { useEffect, useContext } from "react";
import "../../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../state/StateContext";
import { profile } from "../../api/api";

const Home = () => {
  const navigate = useNavigate();

  //Accessing Global State from Context
  const { userData, setuserData } = useContext(AppContext);

  const homePage = async () => {
    try {
      //Calling Profile Api
      const res = await profile();

      const data = await res.json();
      setuserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    homePage();
  }, []);

  return (
    <>
      <div className="homepage">
        <h1>Hello {userData.name} welcome to Real Estate.</h1>
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
        <div
          className="button"
          role="presentation"
          onClick={() => navigate("/user/profile")}
        >
          Profile
        </div>
        <div
          className="button"
          role="presentation"
          onClick={() => navigate("/user/logout")}
        >
          Logout
        </div>
      </div>
    </>
  );
};

export default Home;
