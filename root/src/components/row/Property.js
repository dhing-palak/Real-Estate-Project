import React, { useEffect, useContext, useState } from "react";
import "../../styles/Property.scss";
import image from "../../images/Property1.jpg";
import superAreaImage from "../../images/superarea.jpg";
import statusImage from "../../images/status.jpg";
import floorImage from "../../images/floor.jpg";
import { propertydetails } from "../../api/api";
import { AppContext } from "../../state/StateContext";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";

const Property = () => {
  //Accessing Global data from Context
  const { propertyData, setPropertyData } = useContext(AppContext);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setContactModalOpen(false);
  };

  const handleOpenPhoneModal = () => {
    setPhoneModalOpen(true);
  };

  const handleClosePhoneModal = () => {
    setPhoneModalOpen(false);
  };

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
    <div className="property-outer">
      {propertyData.map((detail, id) => {
        return (
          <div
            // to="/propertydetails"
            // state={{ data: detail }}
            key={id}
            className="property-inner"
          >
            <div className="pic-owner">
              <img className="image" src={image} alt="Palace" />
              <p className="owner">Owner: {detail.name}</p>
            </div>

            <Link
              to="/propertydetails"
              state={{ data: detail }}
              className="middle-part"
            >
              <div className="real-estate">
                <h6>ONLY ON REALESTATE</h6>
              </div>
              <div className="status-property">
                <h5>
                  {detail.rooms} BHK {detail.furnished} Ready to Occupy{" "}
                  {detail.propertytype} for sale {detail.city}
                </h5>
              </div>
              <div className="details-property">
                <div className="details-info">
                  <img
                    className="details-image"
                    src={superAreaImage}
                    alt="superarea"
                  />
                  <span className="details-heading">
                    <p className="text">SUPER AREA</p>
                    <p className="value">{detail.area} sqft</p>
                  </span>
                </div>
                <div className="details-info">
                  <span>
                    <img
                      className="details-image"
                      src={statusImage}
                      alt="statusimage"
                    />
                  </span>
                  <span className="details-heading">
                    <p className="text">STATUS</p>
                    <p className="value">{detail.status}</p>
                  </span>
                </div>

                <div className="details-info">
                  <span>
                    <img
                      className="details-image"
                      src={floorImage}
                      alt="floorimage"
                    />
                  </span>
                  <span className="details-heading">
                    <p className="text">FLOOR</p>
                    <p className="value">{detail.floors} out of 4</p>
                  </span>
                </div>
              </div>
              <div className="description">{detail.description}</div>
            </Link>

            <div className="contact-size-price">
              <div className="price">₹ {detail.price}</div>
              <div className="price-persqft">₹ {detail.ratepersqft} per sqft</div>
              <div className="contact-owner">
                <button className="owner-details" onClick={handleOpenContactModal}>
                  Contact Owner
                </button>
                <Modal
                  isOpen={contactModalOpen}
                  handleClose={handleCloseContactModal}
                />
              </div>
              <div className="get-phoneno">
                <button className="phone-details" onClick={handleOpenPhoneModal}>
                  Get Phone No.
                </button>
                <Modal isOpen={phoneModalOpen} handleClose={handleClosePhoneModal} />
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
