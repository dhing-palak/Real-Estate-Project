import React ,{useState } from "react";
import "../styles/Propertydetails.scss";
import image from "../images/Property1.jpg";
import superAreaImage from "../images/superarea.jpg";
import statusImage from "../images/status.jpg";
import floorImage from "../images/floor.jpg";
import Modal from "../components/modal/Modal";
import { useLocation } from "react-router-dom";

function Propertydetails() {
  const location = useLocation();
  const data = location.state.data;
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

  return (
    <>
      <div className="property-outer">
        <div className="property-inner">
          <div className="pic-owner">
            <img className="image" src={image} alt="Palace" />
            <p className="owner">Owner: {data.name}</p>
          </div>

          <div className="middle-part">
            <div className="real-estate">
              <h6>ONLY ON REALESTATE</h6>
            </div>
            <div className="status-property">
              <h5>
                {data.rooms} BHK Ready to Occupy {data.propertytype} for sale{" "}
                {data.city}
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
                  <p className="value">{data.area} sqft</p>
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
                  <p className="value">{data.status}</p>
                </span>
              </div>

              <div className="details-info">
                <span>
                  <img className="details-image" src={floorImage} alt="floorimage" />
                </span>
                <span className="details-heading">
                  <p className="text">FLOOR</p>
                  <p className="value">{data.floors} out of 4</p>
                </span>
              </div>
            </div>
            <div className="description">{data.description}</div>
          </div>

          <div className="contact-size-price">
            <div className="price">₹ {data.price}</div>
            <div className="price-persqft">₹ {data.ratepersqft} per sqft</div>
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
      </div>

      <div className="propertydetails-webpage">
        <div className="propertydetails-left">
          <section className="propertydetails-section">
            <div className="propertydetails-section-title">
              <div className="propertydetails-section-title-text">
                Why buy in this project?
              </div>
            </div>
            <div className="propertydetails-why-proj">
              <ul className="propertydetails-why-proj-list">
                {/* <li className="propertydetails-why-proj-list-item">Malad 2 km | 15 min</li>
                <li className="propertydetails-why-proj-list-item">
                  Goregaon 4 km | 20 min
                </li> */}
                <li className="propertydetails-why-proj-list-item">
                  Western Express... 2 km | 15 min
                </li>
                <li className="propertydetails-why-proj-list-item">
                  Lifeline Multis... 2 km | 15 minView More
                </li>
                {/* <li className="propertydetails-why-proj-list-item">
                  Malad West 3 km | 15 min
                </li>
                <li className="propertydetails-why-proj-list-item">
                  Goregaon West 4 km | 20 minView More
                </li> */}
                <li className="propertydetails-why-proj-list-item">
                  Located off Western Express Highway&nbsp;
                </li>
                <li className="propertydetails-why-proj-list-item">
                  Premium lifestyle amenities
                </li>
              </ul>
            </div>
          </section>

          <section className="propertydetails-section">
            <div className="propertydetails-section-title">
              <div className="propertydetails-section-title-text">More Details</div>
            </div>
            <div className="propertydetails-more-dtl">
              <ul className="propertydetails-more-dtl-list">
                <li className="propertydetails-more-dtl-list--item">
                  <div className="propertydetails-more-dtl-list--label">
                    Price Breakup
                  </div>
                  <div className="propertydetails-more-dtl-list--value">
                    <span className="rupees">₹</span>
                    {data.price}
                  </div>
                </li>
                <li className="propertydetails-more-dtl-list--item">
                  <div className="propertydetails-more-dtl-list--label">Address</div>
                  <div className="propertydetails-more-dtl-list--value">
                    {data.locality}, {data.city}
                  </div>
                </li>
                <li className="propertydetails-more-dtl-list--item">
                  <div className="propertydetails-more-dtl-list--label">
                    Furnishing
                  </div>
                  <div className="propertydetails-more-dtl-list--value">
                    Furnished
                  </div>
                </li>
                <li className="propertydetails-more-dtl-list--item">
                  <div className="propertydetails-more-dtl-list--label">
                    Loan Offered
                  </div>
                  <div className="propertydetails-more-dtl-list--value">
                    Estimated EMI:&nbsp;<span className="rupees">₹</span>82,846
                  </div>
                </li>
                <li className="propertydetails-more-dtl-list--item">
                  <div className="propertydetails-more-dtl-list--label">
                    Overlooking
                  </div>
                  <div className="propertydetails-more-dtl-list--value">
                    Main Road
                  </div>
                </li>
                <li className="propertydetails-more-dtl-list--item">
                  <div className="propertydetails-more-dtl-list--label">
                    Age of Construction
                  </div>
                  <div className="propertydetails-more-dtl-list--value">
                    New Construction
                  </div>
                </li>
                <li className="propertydetails-more-dtl-list--item">
                  <div className="propertydetails-more-dtl-list--label">
                    Description
                  </div>
                  <div className="propertydetails-more-dtl-list--value">
                    {data.description}
                  </div>
                </li>
              </ul>
              <div className="propertydetails-more-dtl-description">
                <span className="propertydetails-more-dtl-description--label">
                  Facilities:
                </span>
                <span className="propertydetails-more-dtl-description--content full show">
                  <p>
                    This is a premium residential apartment which surprises you with
                    a plethora of world-class amenities such as power backup, lifts,
                    rainwater harvesting, swimming pool, gymnasium, reserved parking,
                    intercom facility, waste disposal, premium branded fittings, CCTV
                    surveillance, flower gardens, indoor games room, kids play area,
                    fire fighting equipment, 24 hours borewell & Corporation water
                    supply, and a security guard.
                  </p>
                </span>
              </div>
            </div>
          </section>

          <section className="propertydetails-section">
            <div className="propertydetails-section-title">
              <div className="propertydetails-section-title-text">Amenities</div>
            </div>
            <div className="propertydetails-amenities">
              <ul className="propertydetails-amenities-list">
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="12201"
                >
                  Power Back Up
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="12202"
                >
                  Lift
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="12203"
                >
                  Rain Water Harvesting
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="12205"
                >
                  Swimming Pool
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="12206"
                >
                  Gymnasium
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="12208"
                >
                  Reserved Parking
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="12217"
                >
                  Intercom Facility
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="12219"
                >
                  Waste Disposal
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="12540"
                >
                  Premium branded fittings
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="12547"
                >
                  CCTV Camera
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="1404115"
                >
                  Flower Gardens
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="1404117"
                >
                  Indoor Games Room
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="1404121"
                >
                  Kids Play Area
                </li>
                <li
                  className="propertydetails-amenities-list--item"
                  data-icon="1404143"
                >
                  Fire Fighting Equipment
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Propertydetails;