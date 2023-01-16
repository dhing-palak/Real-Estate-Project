import React, { useContext, useState} from "react";
import { AppContext } from "../../state/StateContext";
import "../../styles/SearchProperty.css";
import {city} from "../../common/common"
import { searchProperty } from "../../api/api";

const SearchProperty = () => {
  const { setPropertyData } = useContext(AppContext);

  const[searchData, setSearchData] = useState({
    cityname:"",
    propertytype:"",
    price:""
  })

  const handleChange = (event) =>{
    const value = event.target.value;
    const name = event.target.name;

    setSearchData(() => {
      return{
        ...searchData,
        [name]: value}
    })
    // console.log([name] , value);
  }

  const getSearchData = async (city, propertytype, price) => {
    try {
      const res = await searchProperty(city, propertytype, price);
      const responseData = await res.json();
      console.log(responseData);
      setPropertyData(responseData);
    } catch (err) {
      console.error("Error while fetching ", err.message);
    }
  };

  // useEffect(() => {
  //   getSearchData(searchData.cityname, searchData.propertytype, searchData.price);
  // }, []);

  const handleChange1 = () => {
    event.preventDefault();
    getSearchData(searchData.cityname, searchData.propertytype, searchData.price);
  };

  

  return (
    <>
      <div className="search_outer">
        <div className="search_city">
          <span>
            <i className="fontIcon fa fa-map-marker" aria-hidden="true"></i>
          </span>
          <span>
            <select name = "cityname" value={searchData.cityname} onChange={handleChange} required className="drpdwn">
              <option value="" hidden>Enter City </option>
              {city.map((city, index) => {
                return (
                  <option key={index} value={city}>
                    {city}
                  </option>
                );
              })}
            </select>
          </span>
        </div>
        <hr width="1" size="25"></hr>
        <div className="search_flat">
          <span>
            <i className="fontIcon fa fa-home" aria-hidden="true"></i>
          </span>
          <span>
            <select name = "propertytype" value={searchData.propertytype} onChange={handleChange} required className="drpdwn">
              <option value="flat">Flat</option>
              <option value="villa">Villa</option>
            </select>
          </span>
        </div>
        <hr width="1" size="25"></hr>
        <div className="search_budget">
          <span>
            <i className="fontIcon fa fa-inr" aria-hidden="true"></i>
          </span>
          <span>
            <select name = "price" value={searchData.price} onChange={handleChange} required className="drpdwn1">
              <option value="" hidden>
                Budget
              </option>
              <option value="50">50 Lac</option>
              <option value="60">60 Lac</option>
              <option value="70">70 Lac</option>
              <option value="80">80 Lac</option>
              <option value="90">90 Lac</option>
              <option value="100">100 Lac</option>
              <option value="200">200 Lac</option>
            </select>
          </span>
        </div>

        <div className="search_button">
          <span>
            <i className="searchIcon fa fa-search" aria-hidden="true"></i>
          </span>
          <span>
            <button type="button" onClick={handleChange1} className="search">
              Search
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchProperty;
