import React from "react";
import "../../styles/Header.css";
import "font-awesome/css/font-awesome.min.css";

import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
// import { request } from "../../api/api";

const Navbar = () => {
  const city = [
    "Mumbai",
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

          {/* <NavLink to='/about' activestyle='true'>
			About
		</NavLink> */}

          <div>
            <div className="dropdown">
              <button className="dropbtn">
                {" "}
                Cities <i className="fa fa-angle-down"></i>
              </button>

              <div className="dropdown-content">
                {city.map((data, i) => (
                  <React.Fragment key={i}>
                    <span className="dropdown-content3">
                      {data}
                      <br />
                    </span>
                  </React.Fragment>
                ))}

                {/* <p>{text}</p> */}
              </div>
            </div>
          </div>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/user/register">Register</NavBtnLink>
          <NavBtnLink to="/user/login">Login</NavBtnLink>
          <NavBtnLink to="/about">
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
