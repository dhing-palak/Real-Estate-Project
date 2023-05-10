/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/Header.scss";
import "font-awesome/css/font-awesome.min.css";
import { propertydetails, statusdetails } from "../../api/api";
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

  const statusDetails = async (status) => {
    const res = await statusdetails(status);
    const responseData = await res.json();
    setPropertyData(responseData);
  };

  const navigate = useNavigate();
  const handleNavigate = (event) => {
    navigate(event.target.value);
  };
  const handleStatus = (event) => {
    statusDetails(event.target.value);
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
                    className="nav-links2"
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
                    className="nav-links2"
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
          <select className="form-select header-select" onChange={handleStatus}>
            <option value="Buy"> Buy</option>
            <option value="Ready to move">Ready to move</option>
            <option value="Under Construction">Under Construction</option>
          </select>
        </div>

        <div className="sub-dropdown">
          <select className="form-select header-select" onChange={handleNavigate}>
            <option value="/">Sell</option>
            <option value="/postproperty">Sell Properties</option>
            <option value="/user/profile">My Dashboard</option>
          </select>
        </div>
        <div className="sub-dropdown">
          <select className="form-select header-select" onChange={handleNavigate}>
            <option value="/">Help</option>
            <option value="/helpcenter">Help Center</option>
            <option value="/privacypolicy">Privacy Policy</option>
            <option value="/terms">Terms & Conditions</option>
            <option value="/user/feedback">Feedback</option>
          </select>
        </div>

        <div className="sub-dropdown">
          <select className="form-select header-select" onChange={handleNavigate}>
            <option value="/"> Tools</option>
            <option value="/tools/calculator">EMI Calculator</option>
            <option value="/tools/convertor">Unit Convertor</option>
            <option value="/tools/advice">Legal Advice</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
