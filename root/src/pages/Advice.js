import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import "../styles/Advice.css";

const Advice = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    advice: "",
  });

  const callContactPage = async () => {
    try {
      const res = await fetch("/user/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

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

  // storing data in state
  // eslint-disable-next-line no-unused-vars
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuserData({ ...userData, [name]: value });
  };

  // // send data to backend
  // eslint-disable-next-line no-unused-vars
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, city, advice } = userData;

    const res = await fetch("/tools/legaladvice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        city,
        advice,
      }),
    });

    const data = await res.json();

    if (!data) {
      console.log("message not send");
    } else {
      alert("Message Send");
      setuserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="advice-container">
        <div className="advice-heading">All About Legal Title Check</div>
        {/* <div className="contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_form_container py-5">
                  <div className="contact_form_title">Get in Touch</div>
                  <form method="POST" id="contact_form">
                    <div className="contact_form_name d-flex justify-content-between align-item-between">
                      <input
                        type="text"
                        id="contact_form_name"
                        className="contact_form_name input_field"
                        name="name"
                        value={userData.name}
                        onChange={handleInputs}
                        placeholder="Your Name"
                        required="true"
                      />
                      <input
                        type="text"
                        id="contact_form_email"
                        className="contact_form_email input_field"
                        name="email"
                        value={userData.email}
                        onChange={handleInputs}
                        placeholder="Your Email"
                        required="true"
                      />
                      <input
                        type="number"
                        id="contact_form_phone"
                        className="contact_form_phone input_field"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputs}
                        placeholder="Your Phone Number"
                        required="true"
                      />
                      <input
                        type="text"
                        id="contact_form_phone"
                        className="contact_form_phone input_field"
                        name="city"
                        value={userData.city}
                        onChange={handleInputs}
                        placeholder="Your city"
                        required="true"
                      />
                    </div>

                    <div className="contact_form_text mt-5">
                      <textarea
                        className="text_field contact_form_message"
                        name="advice"
                        value={userData.advice}
                        onChange={handleInputs}
                        placeholder="Advce"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>

                    <div className="contact_form_button">
                      <button
                        type="submit"
                        className="button contact_submit_button"
                        onClick={contactForm}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
                <div className="advice-section-form-col-group">
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
                </div>
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
