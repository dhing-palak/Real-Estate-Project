/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import { NavLink,Link } from "react-router-dom";
import "../../styles/Header.css";
import "font-awesome/css/font-awesome.min.css";


import { propertydetails } from "../../api/api";
import { AppContext } from "../../state/StateContext";
import { UserContext } from "../../App";



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
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const {state,dispatch}=useContext(UserContext);

  const RenderMenu = ()=>{
    if(state){
      return(
        <>
          
          <li className="nav-item">
            <NavLink
              exact
              to="/user/profile"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
            MyProfile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/postproperty"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
            PostProperty
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/user/logout"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Logout
            </NavLink>
          </li>

        </>
      )
    }else{
      return(
        <>
          <li className="nav-item">
            <NavLink
              exact
              to="/user/register"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/user/login"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
            Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/postproperty"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            ><i className="fas fa-home"></i>
            PostProperty
            </NavLink>
          </li>
        </>
      )
    }

  }
  

  return (
    <>
      <div>
        <div className={click ? "main-container" : ""}  onClick={()=>Close()}/>
        <nav className="navbar" onClick={e => e.stopPropagation()} role="presentation">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              Real-Estate
            </NavLink>
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
              <RenderMenu/>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>

     
      {/* <header className="header-fixed">

        <div className="header-limiter">

          <h1><Link to="/"><span>R</span>eal-<span>E</span>state</Link></h1>

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

          <nav>
            <Link to="/user/register"><i className="fa fa-sign-in"></i>  Register</Link>
            <Link to="/user/login">Login </Link>
            <Link to="/postproperty"><i className="fas fa-home"></i> Postproperty</Link>
          </nav>

        </div>

      </header> */}
      
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