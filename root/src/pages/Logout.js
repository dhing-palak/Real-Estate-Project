import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/api";
import { AppContext } from "../state/StateContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setuserData, setisLoggedin } = useContext(AppContext);

  const logoutPage = async () => {
    try {
      //Calling Logout Api
      const res = await logout();

      const data = await res;
      setisLoggedin(false);

      if (!data.status === 200) {
        const error = new Error(data.error);
        throw error;
      } else {
        setuserData({});
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    logoutPage();
  }, []);
  return <></>;
};

export default Logout;
