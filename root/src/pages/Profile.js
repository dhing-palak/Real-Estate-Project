import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "../api/api";
import { AppContext } from "../state/StateContext";
import "../styles/Profile.css";

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
      <div className="profile_webpage">
        <div className="profile_container">
          <div className="profile_left">
            <div className="profile_left_body">
              <figure className="profile_image_block">
                <image
                  className="profile_image"
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="profile-image"
                />
              </figure>
              <div className="profile_left_data">
                <h4>{userData.name}</h4>
                <p>{userData.person}</p>
              </div>
            </div>
          </div>
          <div className="profile_right">
            <div className="profile_right_body">
              <div className="profile_row">
                <div className="profile_name">
                  <h4>Full Name</h4>
                </div>
                <div className="profile_data">{userData.name}</div>
              </div>
              <hr />
            </div>
            <div className="profile_right_body">
              <div className="profile_row">
                <div className="profile_name">
                  <h4>I am</h4>
                </div>
                <div className="profile_data">{userData.person}</div>
              </div>
              <hr />
            </div>
            <div className="profile_right_body">
              <div className="profile_row">
                <div className="profile_name">
                  <h4>Email</h4>
                </div>
                <div className="profile_data">{userData.email}</div>
              </div>
              <hr />
            </div>
            <div className="profile_right_body">
              <div className="profile_row">
                <div className="profile_name">
                  <h4>Phone</h4>
                </div>
                <div className="profile_data">{userData.phone}</div>
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
