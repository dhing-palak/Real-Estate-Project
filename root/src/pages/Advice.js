import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import "../styles/Advice.css";
import { getData, postAdvice } from "../api/api";

const Advice = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    advice: "",
  });

  // storing data in state
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserData({ ...userData, [name]: value });
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callContactPage();
  }, []);

  // // send data to backend
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, city, advice } = userData;

    //Calling Advice Api
    const res = await postAdvice(name, email, phone, city, advice);

    const data = await res.json();

    if (!data) {
      console.log("message not send");
    } else {
      alert("Message Send");
      setuserData({ ...userData, city: "", advice: "" });
    }
  };

  return (
    <>
      <div className="advice-container">
        <div className="advice-heading">All About Legal Title Check</div>
        <div className="advice-inside-container">
          <section className="advice-section">
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
      </div>
      <Contact />
    </>
  );
};

export default Advice;
