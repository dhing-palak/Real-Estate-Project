import React, { useEffect, useContext } from "react";
import "../../styles/Property.css";
import image from "../../images/Property1.jpg";
import superAreaImage from "../../images/square.jpg";
import statusImage from "../../images/status.jpg";
import floorImage from "../../images/floor.jpg";
import { propertydetails } from "../../api/api";
import { AppContext } from "../../state/StateContext";

const Property = () => {
  //Accessing Global data from Context
  const { propertyData, setPropertyData } = useContext(AppContext);

  const getPropertyData = async () => {
    try {
      const res = await propertydetails("All");
      const responseData = await res.json();
      setPropertyData(responseData);
    } catch (err) {
      console.error("Error while fetching ", err.message);
    }
  };

  useEffect(() => {
    getPropertyData();
  }, []);

  return (
    <div className="outer">
      {propertyData.map((detail, id) => {
        return (
          <div key={id} className="inner">
            <div className="picOwner">
              <img className="image" src={image} alt="Palace" />
              <p className="owner">Owner: {detail.name}</p>
            </div>

            <div className="middlePart">
              <div className="realEstate">
                <h6>ONLY ON REALESTATE</h6>
              </div>
              <div className="statusProperty">
                <h5>
                  {detail.rooms} BHK Ready to Occupy {detail.propertytype} for sale{" "}
                  {detail.city}
                </h5>
              </div>
              <div className="detailsProperty">
                <div className="detailsInfo">
                  <img
                    className="detailsImage"
                    src={superAreaImage}
                    alt="superArea"
                  />
                  <span className="detailsHeading">
                    <p className="text">SUPER AREA</p>
                    <p className="value">{detail.area}</p>
                  </span>
                </div>
                <div className="detailsInfo">
                  <span>
                    <img
                      className="detailsImage"
                      src={statusImage}
                      alt="statusImage"
                    />
                  </span>
                  <span className="detailsHeading">
                    <p className="text">STATUS</p>
                    <p className="value">{detail.status}</p>
                  </span>
                </div>

                <div className="detailsInfo">
                  <span>
                    <img
                      className="detailsImage"
                      src={floorImage}
                      alt="floorImage"
                    />
                  </span>
                  <span className="detailsHeading">
                    <p className="text">FLOOR</p>
                    <p className="value">{detail.floors} out of 4</p>
                  </span>
                </div>
              </div>
              <div className="description">{detail.description}</div>
            </div>

            <div className="contactSizePrice">
              <div className="price">₹ {detail.price}</div>
              <div className="pricePerSqft">₹ 6,691 per sqft</div>
              <div className="contactOwner">
                <button className="ownerDetails">Contact Owner</button>
              </div>
              <div className="getPhoneNo">
                <button className="phoneDetails">Get Phone No.</button>
              </div>
              <div>
                <p className="feedback"> Share Feedback</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Property;
