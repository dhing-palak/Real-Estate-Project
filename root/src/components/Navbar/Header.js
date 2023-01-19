/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import {Link } from "react-router-dom";
import "../../styles/Header.css";
import "font-awesome/css/font-awesome.min.css";
import { propertydetails } from "../../api/api";
import { AppContext } from "../../state/StateContext";
import { cities } from "../../common/common";


const Navbar = () => {
  

  //Accessing Global data from Context
  const { setPropertyData ,isLoggedin} = useContext(AppContext);

  const cityDetails = async (city) => {
    const res = await propertydetails(city);
    const responseData = await res.json();
    setPropertyData(responseData);
  };

  const handleChange = (event) => {
    cityDetails(event.target.value);
  };
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div>
        <div className={click ? "main-container" : ""}  onClick={()=>Close()}/>
        <nav className="navbar" onClick={e => e.stopPropagation()} role="presentation">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              Real-Estate
            </Link>
            <span className="span1">
              <div>
                <select onChange={handleChange}>
                  {cities.map((city, index) => {
                    return (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    );
                  })}
                </select>
              </div> 
            </span>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {!isLoggedin?(
                <>
                  <li className="nav-item">
                    <Link
                      to="/user/register"
                      activeclassname="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/user/login"
                      activeclassname="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                    Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/postproperty"
                      activeclassname="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                    PostProperty
                    </Link>
                  </li>
                </>
                
              ):(
                <>
                  <li className="nav-item">
                    <Link
                      to="/user/profile"
                      activeclassname="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                    MyProfile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/postproperty"
                      activeclassname="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                    PostProperty
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/user/logout"
                      activeclassname="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Logout
                    </Link>
                  </li>
                </>
                
              )} 
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
      <div className="subheader">
        <div className="dropdown1">
          <button className="dropbtn1">
            {" "}
            Buy{" "}
            <i
              className="fa fa-angle-down"
              style={{ color: "#d8282a", fontWeight: "bold" }}
            ></i>
          </button>
          <div className="dropdown-content1">
            <Link to="/about">Ready to Move</Link>
            <Link to="/about">Budget Homes</Link>
            <Link to="/about">Premium Homes</Link>
            <Link to="/about">Newly Launched</Link>
          </div>
        </div>
        <div className="dropdown1">
          <button className="dropbtn1">
            {" "}
            Rent{" "}
            <i
              className="fa fa-angle-down"
              style={{ color: "#d8282a", fontWeight: "bold" }}
            ></i>
          </button>
          <div className="dropdown-content1">
            <Link to="/about">Owner Properties</Link>
            <Link to="/about">Verified Properties</Link>
            <Link to="/about">Furnished Homes</Link>
            <Link to="/about">Immediately Homes</Link>
          </div>
        </div>
        <div className="dropdown1">
          <button className="dropbtn1">
            {" "}
            Sell{" "}
            <i
              className="fa fa-angle-down"
              style={{ color: "#d8282a", fontWeight: "bold" }}
            ></i>
          </button>
          <div className="dropdown-content1">
            For Owner
            <Link to="/about">Sell Properties</Link>
            <Link to="/user/profile">My Dashboard</Link>
            For Agents & Builder
            <Link to="/about">Sales Enquiry</Link>
            <Link to="/user/profile">My Dashboard</Link>
          </div>
        </div>
        <div className="dropdown1">
          <button className="dropbtn1">
            {" "}
            Help{" "}
            <i
              className="fa fa-angle-down"
              style={{ color: "#d8282a", fontWeight: "bold" }}
            ></i>
          </button>
          <div className="dropdown-content1">
            <Link to="/helpcenter">Help Center</Link>
            <Link to="/privacypolicy">Sales Enquiry</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;