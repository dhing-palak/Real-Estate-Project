import React, { useEffect, useContext } from "react";
import "../../styles/Home.css";
import { AppContext } from "../../state/StateContext";
import { profile } from "../../api/api";
import Property from "../row/Property";

const Home = () => {
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
      <h5 className="userName">Hello {userData.name} welcome to Real Estate.</h5>
      <Property />
    </>
  );
};

export default Home;
