import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "../api/api";
import { AppContext } from "../state/StateContext";
import "../styles/Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  //Accessing Global State from Context
  const { userData, setuserData, setisLoggedin } = useContext(AppContext);

  const profilePage = async () => {
    try {
      //Calling Profile Api
      const res = await profile();

      const data = await res.json();

      setuserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      } else {
        setisLoggedin(true);
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
      <div className="profile-webpage">
        <div className="profile-container">
          <div className="profile-left">
            <div className="profile-left-body">
              <figure className="profile-image-block">
                <image
                  className="profile-image"
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="profile-image"
                />
              </figure>
              <div className="profile-left-data">
                <h4>{userData.name}</h4>
                <p>{userData.person}</p>
              </div>
            </div>
          </div>
          <div className="profile-right">
            <div className="profile-right-body">
              <div className="profile-row">
                <div className="profile-name">
                  <h4>Full Name</h4>
                </div>
                <div className="profile-data">{userData.name}</div>
              </div>
              <hr />
            </div>
            <div className="profile-right-body">
              <div className="profile-row">
                <div className="profile-name">
                  <h4>I am</h4>
                </div>
                <div className="profile-data">{userData.person}</div>
              </div>
              <hr />
            </div>
            <div className="profile-right-body">
              <div className="profile-row">
                <div className="profile-name">
                  <h4>Email</h4>
                </div>
                <div className="profile-data">{userData.email}</div>
              </div>
              <hr />
            </div>
            <div className="profile-right-body">
              <div className="profile-row">
                <div className="profile-name">
                  <h4>Phone</h4>
                </div>
                <div className="profile-data">{userData.phone}</div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
