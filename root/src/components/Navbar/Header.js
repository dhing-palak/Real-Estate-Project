/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";
import "font-awesome/css/font-awesome.min.css";
import { propertydetails } from "../../api/api";
import { AppContext } from "../../state/StateContext";
import { cities } from "../../common/common";
import realestate from "../../images/realestate.png";

const Navbar = () => {
  //Accessing Global data from Context

  const { setPropertyData, isLoggedin } = useContext(AppContext);

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
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav
        className="navbar"
        onClick={(e) => e.stopPropagation()}
        role="presentation"
        data-test-id="navbar"
      >
        <div className="nav-container">
          <Link data-testid="nav-logo" to="/" className="nav-logo">
            <img src={realestate} alt="logo" />
            &nbsp;Real-Estate
          </Link>
          <span className="nav-span">
            <div>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleChange}
              >
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
            {!isLoggedin ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/user/register"
                    activeclassname="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                    data-testid="nav-register"
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
                    data-testid="nav-login"
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
                    data-testid="nav-post"
                  >
                    PostProperty
                  </Link>
                </li>
              </>
            ) : (
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

      <div className="subheader">
        <div className="sub-dropdown">
          <button className="sub-dropbtn">
            {" "}
            Buy{" "}
            <i
              className="fa fa-angle-down"
              style={{ color: "#d8282a", fontWeight: "bold" }}
            ></i>
          </button>
          <div className="sub-dropdowncontent">
            <Link to="/about">Ready to Move</Link>
            <Link to="/about">Budget Homes</Link>
            <Link to="/about">Premium Homes</Link>
            <Link to="/about">Newly Launched</Link>
          </div>
        </div>
        <div className="sub-dropdown">
          <button className="sub-dropbtn">
            {" "}
            Rent{" "}
            <i
              className="fa fa-angle-down"
              style={{ color: "#d8282a", fontWeight: "bold" }}
            ></i>
          </button>
          <div className="sub-dropdowncontent">
            <Link to="/about">Owner Properties</Link>
            <Link to="/about">Verified Properties</Link>
            <Link to="/about">Furnished Homes</Link>
            <Link to="/about">Immediately Homes</Link>
          </div>
        </div>
        <div className="sub-dropdown">
          <button className="sub-dropbtn">
            {" "}
            Sell{" "}
            <i
              className="fa fa-angle-down"
              style={{ color: "#d8282a", fontWeight: "bold" }}
            ></i>
          </button>
          <div className="sub-dropdowncontent">
            &nbsp; <b>For Owner</b>
            <Link to="/about">Sell Properties</Link>
            <Link to="/user/profile">My Dashboard</Link>
            &nbsp; <b>For Agents & Builder</b>&nbsp;
            <Link to="/about">Sales Enquiry</Link>
            <Link to="/user/profile">My Dashboard</Link>
          </div>
        </div>
        <div className="sub-dropdown">
          <button className="sub-dropbtn">
            {" "}
            Help{" "}
            <i
              className="fa fa-angle-down"
              style={{ color: "#d8282a", fontWeight: "bold" }}
            ></i>
          </button>
          <div className="sub-dropdowncontent">
            <Link to="/helpcenter">Help Center</Link>
            <Link to="/privacypolicy">Sales Enquiry</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
