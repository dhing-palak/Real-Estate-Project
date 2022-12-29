import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "../api/api";
import { AppContext } from "../state/StateContext";

const Profile = () => {
  const navigate = useNavigate();

  //Accessing Global State from Context
  const { userData, setuserData } = useContext(AppContext);

  const profilePage = async () => {
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
      navigate("/user/login");
    }
  };

  useEffect(() => {
    profilePage();
  }, []);

  return (
    <>
      <div>
        <p>{userData.person}</p>
        <p>{userData.name}</p>
        <p>{userData.email}</p>
        <p>{userData.phone}</p>
      </div>
    </>
  );
};

export default Profile;
