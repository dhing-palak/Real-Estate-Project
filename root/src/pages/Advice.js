/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useContext } from "react";
import Contact from "./Contact";
import { AppContext } from "../state/StateContext";
import { useNavigate } from "react-router-dom";
import "../styles/Advice.scss";
import { getData, postAdvice } from "../api/api";

const Advice = () => {
  const navigate = useNavigate();

  //Accessing Global State from Context
  const { setisLoggedin } = useContext(AppContext);

  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    advice: "",
  });

  const [showdiv, setShowdiv] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  // storing data in state
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserData({ ...userData, [name]: value });
    validateInput({ [e.target.name]: e.target.value });
  };

  //Checking validation
  const validateInput = (newState) => {
    let isValid = true;
    const errors = {};

    const { city, advice } = { ...userData, ...newState };

    if (!city) {
      errors.city = "City is required";
      isValid = false;
    }

    if (!advice) {
      errors.advice = "Field is required";
      isValid = false;
    }
    setErrorMessage("Please fill the details mention below");
    setErrors(errors);
    return isValid;
  };

  //Checking authentication
  const callContactPage = async () => {
    try {
      //Calling getData Api
      const res = await getData();

      const data = await res.json();
      // console.log(data);
      setuserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      } else {
        setisLoggedin(true);
      }
    } catch (error) {
      console.log(error);
      navigate("/user/login");
    }
  };

  useEffect(() => {
    callContactPage();
  }, []);

  // // send data to backend
  const contactForm = async (e) => {
    e.preventDefault();

    if (!validateInput()) {
      setErrorMessage("Please fill the details mention below");
      setShowdiv(true);
      setTimeout(() => {
        setShowdiv(true);
      }, 2000);
      return;
    }

    const { name, email, phone, city, advice } = userData;

    //Calling Advice Api
    const res = await postAdvice(name, email, phone, city, advice);

    const data = await res.json();

    if (!data) {
      console.log("message not send");
      setErrorMessage("Invalid email or password.");
      setShowdiv(true);
      setTimeout(() => {
        setShowdiv(true);
      }, 2000);
    } else {
      // alert("Message Send");
      setisLoggedin(true);
      setShowdiv(true);
      setErrorMessage("Question Submitted");
      setTimeout(() => {
        setShowdiv(false);
      }, 2000);
      setuserData({ ...userData, city: "", advice: "" });
    }
  };

  return (
    <>
      <div className="advice-container">
        <div className="advice-heading">All About Legal Title Check</div>
        <div className="advice-inside-container">
          <section className="advice-section">
            {showdiv && (
              <div className="feedback-message-block">
                <div className="feedback-message-data">
                  <div className="feedback-message-display">
                    {errorMessage || "Feedback send"}
                  </div>
                </div>
              </div>
            )}
            <div className="advice-section-container">
              <div className="advice-section-top">
                <div className="advice-section-heading">
                  Get <span className="heading-green">Free Advice </span>
                  on your Legal Title Check requirement
                </div>
                <div className="advice-section-subheading">
                  Send your queries now & let us respond within 24 hrs.
                </div>
              </div>

              <div className="advice-section-form">
                <div className="advice-form-col-group">
                  <div className="advice-form-col">
                    <div className="advice-section-form-row">
                      <input
                        type="text"
                        id="contact_form_name"
                        className="advice-input"
                        name="name"
                        value={userData.name}
                        onChange={handleInputs}
                        placeholder="Your Name"
                        required="true"
                      />
                    </div>
                  </div>

                  <div className="advice-form-col">
                    <div className="advice-section-form-row">
                      <input
                        type="text"
                        id="contact_form_email"
                        className="advice-input"
                        name="email"
                        value={userData.email}
                        onChange={handleInputs}
                        placeholder="Your Email"
                        required="true"
                      />
                    </div>
                  </div>

                  <div className="advice-form-col">
                    <div className="advice-section-form-row">
                      <input
                        type="number"
                        id="contact_form_phone"
                        className="advice-input"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputs}
                        placeholder="Your Mobile Number"
                        required="true"
                      />
                    </div>
                  </div>

                  <div className="advice-form-col">
                    <div className="advice-section-form-row">
                      <input
                        type="text"
                        id="contact_form_city"
                        className="advice-input"
                        name="city"
                        value={userData.city}
                        onChange={handleInputs}
                        placeholder="City"
                        required="true"
                      />
                    </div>
                    {errors.city && (
                      <div className="error-message">{errors.city}</div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  className="advice-section-message"
                  name="advice"
                  value={userData.advice}
                  onChange={handleInputs}
                  placeholder="Write Your Free Question"
                ></textarea>
                {errors.advice && (
                  <div className="error-message">{errors.advice}</div>
                )}
              </div>
              <div className="advice-terms-container">
                <div className="advice-terms">
                  By Continuing, I agree to Real Estate{" "}
                  <span className="advice-terms-span"> Terms, Privacy Policy</span> &{" "}
                  <span className="advice-terms-span">Cookie Policy</span>
                </div>
              </div>

              <div className="">
                <button
                  className="advice-submit-button"
                  type="submit"
                  onClick={contactForm}
                >
                  Ask a Free Question
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="advice-benifit-container">
          <section className="advice-benifit-section">
            <div className="advice-benifit">
              <div className="advice-benifit-heading">
                Let's make your Property Buying Journey Smooth
              </div>
              <div className="advice-benifit-subheading">
                Property title check service ensures that your property is free from
                any kind of legal tussles & provides protection from fraudulent
                transactions
              </div>
              <div className="advice-benifit-title">Benefits for Buyers</div>
              <div className="advice-list-container">
                <ul className="advice-benifit-list">
                  <li className="advice-benifit-listitem">
                    Legal Assistance on Title Check, Litigations & Govt. Approvals
                  </li>

                  <li className="advice-benifit-listitem">
                    Protection against fake & fraudulent documents
                  </li>
                  <li className="advice-benifit-listitem">
                    Get Property Lawyers & Home Loan assistance at one place
                  </li>
                  <li className="advice-benifit-listitem">
                    An Attorney will guide you through all your legal queries
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Advice;
