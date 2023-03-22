import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Postproperty.scss";
import { postproperty } from "../../api/api";
import validate from "../../validation/validate";
import { city } from "../../common/common";
import PropertyInput from "../postproperty/PropertyInput";

const Postproperty = () => {
  const navigate = useNavigate();
  const [showdiv, setshowdiv] = useState(false);
  const [peopleInfo, setPeopleInfo] = useState({});
  let [property, setProperty] = useState({
    iam: "",
    name: "",
    email: "",
    phone: "",
    propertyfor: "",
    city: "",
    locality: "",
    rooms: "",
    propertytype: "",
    area: "",
    floors: "",
    price: "",
    ratepersqft: "",
    status: "",
    description: "",
    amenitiesData: {},
  });

  const [formErrors, setFormErrors] = useState({});
  console.log(showdiv);

  const amenities = [
    { id: 1, value: "Swimming Pool" },
    { id: 2, value: "Power Back Up" },
    { id: 3, value: "Lift" },
    { id: 4, value: "Gymnasium" },
    { id: 5, value: "Rain Water Harvesting" },
    { id: 6, value: "Reserved Parking" },
    { id: 7, value: "Intercom Facility" },
    { id: 8, value: "Waste Disposal" },
    { id: 9, value: "CCTV Camera" },
    { id: 10, value: "Flower Gardens" },
  ];
  const toggleHandler = (item) => () => {
    setPeopleInfo((state) => ({
      ...state,
      [item.id]: state[item.id] ? null : { id: item.id, value: item.value },
    }));
  };
  useEffect(() => {
    // for (var key in peopleInfo) {
    //   console.log(peopleInfo[key]);
    //   setProperty((prevState) => ({ ...prevState, [amenities]: peopleInfo[key] }));
    // }
    setProperty({ ...property, amenitiesData: peopleInfo });
  }, [peopleInfo]);
  // const handleAmenities = (peopleInfo) => {
  //   setProperty((prevState) => ({ ...prevState, [amenities]: peopleInfo }));
  // };
  console.log("piru", property);

  city.map((e) => {
    console.log(e);
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setProperty((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errors = validate({ ...property, [name]: value });
    setFormErrors((prevState) => ({ ...prevState, [name]: errors[name] }));
  };
  const handleChange = (event) => {
    if (event.target.value) {
      setProperty({ ...property, city: event.target.value });
    }
  };

  const PostData = async (e) => {
    console.log(property);
    e.preventDefault();
    const errors = validate(property);
    setFormErrors(errors);
    setshowdiv(true);

    const {
      iam,
      name,
      email,
      phone,
      propertyfor,
      city,
      locality,
      rooms,
      propertytype,
      area,
      floors,
      price,
      ratepersqft,
      status,
      description,
      amenitiesData,
    } = property;

    //calling postproperty api
    const res = await postproperty(
      iam,
      name,
      email,
      phone,
      propertyfor,
      city,
      locality,
      rooms,
      propertytype,
      area,
      floors,
      price,
      ratepersqft,
      status,
      description,
      amenitiesData,
    );

    if (Object.keys(errors).length === 0) {
      const data = await res.json();

      if (res.status === 422 || !data) {
        console.log("Invalid Property");
      } else {
        console.log(" Successfully Added Property");
        setshowdiv(true);
        setTimeout(() => {
          setshowdiv(false);
          navigate("/");
        }, 2000);
      }
    }
  };

  return (
    <>
      <div className="postproperty-webpage" data-testid="postpropertypage">
        <div className="postproperty-left">
          <div className="postproperty-left-data">
            <h3 className="postproperty-left-heading">
              Things you Can Do with <br />
              Real Estate Account
            </h3>
            <ul>
              <li>Post one Single Property for Free</li>
              <li>Set property alerts for your requirements</li>
              <li>Get accessed by over 1 Lakh buyers</li>
              <li>Showcase your property as Rental, PG or for Sale</li>
              <li>Get instant queries over Phone, Email ans SMS</li>
              <li>Performance in search & Track responses & views online</li>
              <li>
                Add detailed property information & multiple photos per listing
              </li>
            </ul>
          </div>
        </div>

        <div className="postproperty-right">
          <div className="postproperty-right-container">
            <div className="postproperty-container">
              <div className="postproperty-heading">
                <span>
                  <h1 className="highlight">Sell or Rent your Property</h1>
                  <h6> We have over 15 Lac buyers and tenants for you!</h6>
                </span>
              </div>
              <div className="postproperty-offer-block">
                <div className="postproperty-offer-data">
                  <div className="postproperty-offer-heading">
                    You are posting this property for{" "}
                    <span className="postproperty-offer-free">FREE!</span>
                  </div>
                  <div className="postproperty-offer-list">
                    <div className="postproperty-offer-listitems">
                      <span className="postproperty-offer-bold">Free</span>{" "}
                      Professional Photoshoot
                    </div>
                    <div className="postproperty-offer-listitems">
                      Get Contact Details of upto{" "}
                      <span className="postproperty-offer-bold">5</span> Responses
                    </div>
                    <div className="postproperty-offer-listitems">
                      Access to{" "}
                      <span className="postproperty-offer-bold">15 Lac</span> Buyers
                      &amp; Tenants
                    </div>
                  </div>
                </div>
              </div>
              {showdiv ? (
                <div className="postproperty-message-block">
                  <div className="postproperty-message-data">
                    <div className="postproperty-message-display">
                      {formErrors.iam ||
                      formErrors.name ||
                      formErrors.email ||
                      formErrors.phone ||
                      formErrors.city ||
                      formErrors.locality ||
                      formErrors.rooms ||
                      formErrors.propertytype ||
                      formErrors.area ||
                      formErrors.floors ||
                      formErrors.price ||
                      formErrors.ratepersqft ||
                      formErrors.status ||
                      formErrors.description ||
                      formErrors.propertyfor ||
                      formErrors.amenitiesData
                        ? "Please fill the details mention below: "
                        : "Your Property details added Sucesssfully"}
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              <div className="postproperty-wrapper">
                <form className="postproperty-form-wrapper">
                  <div className="sec-Heading">Personal Details</div>

                  <div className="postproperty-formElement">
                    <div className="postproperty-formLabel">I am</div>
                    <div className="postproperty-formValue">
                      <div className="postproperty-input-iam">
                        <input
                          type="radio"
                          name="iam"
                          value="owner"
                          id="dot-1"
                          onChange={handleInput}
                          onBlur={handleBlur}
                        />
                        <input
                          type="radio"
                          name="iam"
                          value="agent"
                          id="dot-2"
                          onChange={handleInput}
                          onBlur={handleBlur}
                        />
                        <input
                          type="radio"
                          name="iam"
                          value="builder"
                          id="dot-3"
                          onChange={handleInput}
                          onBlur={handleBlur}
                        />

                        <div className="postproperty-category">
                          <label htmlFor="dot-1">
                            <span className="dot one"></span>
                            <span className="postproperty-iam">Owner</span>
                          </label>
                          <label htmlFor="dot-2">
                            <span className="dot two"></span>
                            <span className="postproperty-iam">Agent</span>
                          </label>
                          <label htmlFor="dot-3">
                            <span className="dot three"></span>
                            <span className="postproperty-iam">Builder</span>
                          </label>
                        </div>
                        <span className="postproperty-error-data">
                          {formErrors.iam}
                        </span>
                      </div>
                    </div>
                  </div>

                  <PropertyInput
                    className="postproperty-input-name"
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Enter your Name"
                    value={property.name}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    spanClassName="postproperty-error-data"
                    formErrors={formErrors.name}
                  />

                  <PropertyInput
                    className="postproperty-input-email"
                    name="email"
                    type="text"
                    id="email"
                    placeholder="Enter your email-id"
                    value={property.email}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    spanClassName="postproperty-error-data"
                    formErrors={formErrors.email}
                  />

                  <PropertyInput
                    className="postproperty-input-phone"
                    name="phone"
                    type="text"
                    id="phone"
                    placeholder="Enter your phone Number"
                    value={property.phone}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    spanClassName="postproperty-error-data"
                    formErrors={formErrors.phone}
                  />

                  <div className="postproperty-formElement">
                    <div className="postproperty-formLabel">For</div>
                    <div className="postproperty-formValue">
                      <div className="postproperty-input-propertyfor">
                        <input
                          type="radio"
                          name="propertyfor"
                          value="sale"
                          id="dot-4"
                          onChange={handleInput}
                          onBlur={handleBlur}
                        />
                        <input
                          type="radio"
                          name="propertyfor"
                          value="rent"
                          id="dot-5"
                          onChange={handleInput}
                          onBlur={handleBlur}
                        />
                        <input
                          type="radio"
                          name="propertyfor"
                          value="hostel"
                          id="dot-6"
                          onChange={handleInput}
                          onBlur={handleBlur}
                        />
                        <div className="postproperty-category">
                          <label htmlFor="dot-4">
                            <span className="dot four"></span>
                            <span className="postproperty-propertyfor">Sale</span>
                          </label>
                          <label htmlFor="dot-5">
                            <span className="dot five"></span>
                            <span className="postproperty-propertyfor">Rent</span>
                          </label>
                          <label htmlFor="dot-6">
                            <span className="dot six"></span>
                            <span className="postproperty-propertyfor">Hostel</span>
                          </label>
                        </div>
                        <span className="postproperty-error-data">
                          {formErrors.propertyfor}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="postproperty-input-city">
                    <select
                      className="citydropdown"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option key="property.city" disabled selected hidden>
                        Select City
                      </option>
                      {city.map((allcities) => {
                        return <option key={allcities}>{allcities}</option>;
                      })}
                    </select>
                    <span className="postproperty-error-data">
                      {formErrors.city}
                    </span>
                  </div>

                  <PropertyInput
                    className="postproperty-input-locality"
                    name="locality"
                    type="text"
                    id="locality"
                    placeholder="Enter your locality"
                    value={property.locality}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    spanClassName="postproperty-error-data"
                    formErrors={formErrors.locality}
                  />

                  <PropertyInput
                    className="postproperty-input-rooms"
                    name="rooms"
                    type="text"
                    id="rooms"
                    placeholder="Enter the number of BHK Rooms"
                    value={property.rooms}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    spanClassName="postproperty-error-data"
                    formErrors={formErrors.rooms}
                  />

                  <PropertyInput
                    className="postproperty-input-propertytype"
                    name="propertytype"
                    type="text"
                    id="propertytype"
                    placeholder="Enter your type of property"
                    value={property.propertytype}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    spanClassName="postproperty-error-data"
                    formErrors={formErrors.propertytype}
                  />

                  <PropertyInput
                    className="postproperty-input-area"
                    name="area"
                    type="text"
                    id="area"
                    placeholder="Enter the area in Sqft"
                    value={property.area}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    spanClassName="postproperty-error-data"
                    formErrors={formErrors.area}
                  />

                  <PropertyInput
                    className="postproperty-input-floors"
                    name="floors"
                    type="text"
                    id="floors"
                    placeholder="Enter number of floors"
                    value={property.floors}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    spanClassName="postproperty-error-data"
                    formErrors={formErrors.floors}
                  />

                  <PropertyInput
                    className="postproperty-input-price"
                    name="price"
                    type="text"
                    id="price"
                    placeholder="Enter the price"
                    value={property.price}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    spanClassName="postproperty-error-data"
                    formErrors={formErrors.price}
                  />

                  <PropertyInput
                    className="postproperty-input-ratepersqft"
                    name="ratepersqft"
                    type="text"
                    id="ratepersqft"
                    placeholder="Enter rate per sqft"
                    value={property.ratepersqft}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    spanClassName="postproperty-error-data"
                    formErrors={formErrors.ratepersqft}
                  />

                  <PropertyInput
                    className="postproperty-input-status"
                    name="status"
                    type="text"
                    id="status"
                    placeholder="Enter status"
                    value={property.status}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    spanClassName="postproperty-error-data"
                    formErrors={formErrors.status}
                  />

                  <PropertyInput
                    className="postproperty-input-description"
                    name="description"
                    type="text"
                    id="description"
                    placeholder="Enter description"
                    value={property.description}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    spanClassName="postproperty-error-data"
                    formErrors={formErrors.description}
                  />

                  <div className="amenities-checkbox">
                    Select your amenties:
                    <div className="amenities-options">
                      {" "}
                      <table>
                        {" "}
                        <tr>
                          {" "}
                          {amenities.map((item) => {
                            return (
                              <div
                                key={item.id}
                                style={{ display: "flex", width: "150px" }}
                              >
                                {" "}
                                <input
                                  onChange={toggleHandler(item)}
                                  checked={peopleInfo[item.id]}
                                  style={{ margin: "3px" }}
                                  type="checkbox"
                                />{" "}
                                <td style={{ margin: "3px" }}>{item.value}</td>
                              </div>
                            );
                          })}{" "}
                        </tr>{" "}
                      </table>{" "}
                    </div>
                    <span className="postproperty-error-data">
                      {formErrors.amenitiesData}
                    </span>
                  </div>

                  <div className="postproperty-submit-button">
                    <button
                      className="postproperty-form-submit"
                      name="postproperty"
                      id="postproperty"
                      value="postproperty"
                      onClick={PostData}
                    >
                      Add Property
                    </button>
                  </div>
                  <div className="postproperty-heading">
                    <span>
                      <h3 className="highlight">
                        Looking to Sell or Rent your Flat?{" "}
                      </h3>
                      <p>
                        {" "}
                        Do you want to Sell your flat or put your house on rent?
                        RealEstate has the right solution for you.Your advertisement
                        will be viewed by millions of buyers and tenants in India.
                        RealEstate provides you the best classified for your
                        requirement.
                      </p>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postproperty;
