import React, { useEffect, useContext } from "react";
import "../../styles/Home.css";
import { AppContext } from "../../state/StateContext";
import { profile } from "../../api/api";
import Property from "../row/Property";
import SearchProperty from "../searchProperty/SearchProperty";

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
      <div>
        <h5 className="username">Hello {userData.name} Welcome to Real Estate.</h5>
      </div>
      <SearchProperty />
      <Property />
    </>
  );
};

export default Home;
