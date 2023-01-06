/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import "../../styles/Header.css";
import "font-awesome/css/font-awesome.min.css";
import { propertydetails } from "../../api/api";
import { AppContext } from "../../state/StateContext";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
  const cities = [
    "All",
    "Mumbai",
    "Delhi",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Chennai",
    "Patna",
    "Bangalore",
    "Lucknow",
    "Noida",
    "Kerala",
  ];

  //Accessing Global data from Context
  const { setPropertyData } = useContext(AppContext);

  const cityDetails = async (city) => {
    const res = await propertydetails(city);
    const responseData = await res.json();
    setPropertyData(responseData);
  };

  const handleChange = (event) => {
    cityDetails(event.target.value);
  };

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <div className="logo">
            <h2>
              <NavLink to="/" activestyle="true">
                <span>R</span>eal-
                <span>E</span>state
              </NavLink>
            </h2>
          </div>
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
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/user/register">Register</NavBtnLink>
          <NavBtnLink to="/user/login">Login</NavBtnLink>
          <NavBtnLink to="/postproperty">
            <i className="fas fa-home"></i> Post Property{" "}
          </NavBtnLink>
        </NavBtn>
      </Nav>
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
            <a href="/about">Ready to Move</a>
            <a href="/about">Budget Homes</a>
            <a href="/about">Premium Homes</a>
            <a href="/about">Newly Launched</a>

            {/* <a href="#">Link 3</a> */}
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
            <a href="/about">Owner Properties</a>
            <a href="/about">Verified Properties</a>
            <a href="/about">Furnished Homes</a>
            <a href="/about">Immediately Homes</a>

            {/* <a href="#">Link 3</a> */}
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
            <a href="/about">Sell Properties</a>
            <a href="/about">My Dashboard</a>
            For Agents & Builder
            <a href="/about">Sales Enquiry</a>
            <a href="/about">My Dashboard</a>
            {/* <a href="#">Link 3</a> */}
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
            <a href="/about">Help Center</a>
            <a href="/about">Sales Enquiry</a>

            {/* <a href="#">Link 3</a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
