/* eslint-disable no-undef */
import React from "react";
import "../../styles/SearchProperty.css"

const SearchProperty = () => {
  return (
    <>
      <div className="search_outer">
        <div className="search_city">
          <span><i className="fontIcon fa fa-map-marker" aria-hidden="true"></i> </span>
          <span>
            <input
              className="search_placeholdertext"
              // value={searchSelectedCity}
              placeholder="Enter City"
            // onChange={handleSelectedCity}
            />
          </span>
        </div>
        {/* <div className="minus"><i className="minusIcon fa fa-minus"></i></div> */}
        <div className="search_flat">
          <span><i className="fontIcon fa fa-home" aria-hidden="true"></i></span>
          <span>
            <input
              className="search_placeholdertext"
              placeholder="Flat"
            />
            {/* <select>
              <option value="Flat">Flat</option>
              <option value="Villa">Villa</option>
            </select> */}
          </span>
          <span><i className="drpdwn fa fa-angle-down" aria-hidden="true"></i></span>
        </div>

        {/* <div className="minus"><i className="minusIcon fa fa-minus"></i></div> */}
        <div className="search_budget">
          <span><i className="fontIcon fa fa-inr" aria-hidden="true"></i></span>
          <span>
            <input
              className="search_placeholdertext"
              placeholder="Budget"
            />
          </span>
          <span><i className="drpdwn fa fa-angle-down" aria-hidden="true"></i></span>
        </div>
       
        <div className="search_button">
          <span><i className="searchIcon fa fa-search" aria-hidden="true"></i> </span>
          <span><button className="search">Search</button>    </span>
        </div>
        
      </div>
    </>
    
  );
};

export default SearchProperty;
