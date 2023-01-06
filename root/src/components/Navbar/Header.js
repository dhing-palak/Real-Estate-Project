import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";
import "font-awesome/css/font-awesome.min.css";



const Navbar = () => {
  return (
    <>
      <header className="header-fixed">

        <div className="header-limiter">

          <h1><Link to="/"><span>R</span>eal-<span>E</span>state</Link></h1>
          <span className="span1">Cities <i className="fa fa-angle-down"></i>
          </span>
          <nav>
            <Link to="/user/register"><i className="fa fa-sign-in"></i> Register </Link>
            <Link to="/user/login">Login </Link>
            <Link to="/postproperty"><i className="fas fa-home"></i> Postproperty</Link>
          </nav>

        </div>

      </header>
      
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
            <Link to="/about">Owner Properties</Link>
            <Link to="/about">Verified Properties</Link>
            <Link to="/about">Furnished Homes</Link>
            <Link to="/about">Immediately Homes</Link>

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
            <Link to="/about">Sell Properties</Link>
            <Link to="/about">My Dashboard</Link>
            For Agents & Builder
            <Link to="/about">Sales Enquiry</Link>
            <Link to="/about">My Dashboard</Link>
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
            <Link to="/helpcenter">Help Center</Link>
            <Link to="/privacypolicy">Sales Enquiry</Link>

            {/* <a href="#">Link 3</a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;