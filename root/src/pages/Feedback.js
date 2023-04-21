import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../state/StateContext";
import { useNavigate } from "react-router-dom";
import { getData, feedback } from "../api/api";
import "../styles/Feedback.scss";
import Contact from "./Contact";

function Feedback() {
  const navigate = useNavigate();

  //Accessing Global State from Context
  const { setisLoggedin } = useContext(AppContext);

  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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

    const { message } = { ...userData, ...newState };

    if (!message) {
      errors.message = "Feedback is required";
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

  //Sending data to backend
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
    const { name, email, phone, message } = userData;

    //Calling Feedback Api
    const res = await feedback(name, email, phone, message);

    const data = await res.json();

    if (!data) {
      console.log("message not send");
      setErrorMessage("Invalid email or password.");
      setShowdiv(true);
      setTimeout(() => {
        setShowdiv(true);
      }, 2000);
    } else {
      setisLoggedin(true);
      setShowdiv(true);
      setErrorMessage("Feedback Submitted");
      setTimeout(() => {
        setShowdiv(false);
      }, 2000);
      setuserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="feedback-webpage" data-testid="registrationpage">
        <div className="feedback-left">
          <div className="feedback-left-data">
            <h3 className="feedback-left-heading">
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

        <div className="feedback-right">
          <div className="feedback-right-feedback">
            <div className="feedback-container">
              {showdiv && (
                <div className="feedback-message-block">
                  <div className="feedback-message-data">
                    <div className="feedback-message-display">
                      {errorMessage || "Feedback send"}
                    </div>
                  </div>
                </div>
              )}

              <div className="feedback-heading">Feedback</div>
              <div className="feedback-wrapper">
                <form className="feedback-form-wrapper">
                  <div className="feedback-input-name">
                    <input
                      className="feedback-input"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={userData.name}
                      onChange={handleInputs}
                    ></input>
                  </div>
                  <div className="feedback-input-phone">
                    <input
                      className="feedback-input"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      value={userData.phone}
                      onChange={handleInputs}
                    ></input>
                  </div>

                  <div className="feedback-input-email">
                    <input
                      className="feedback-input"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={userData.email}
                      onChange={handleInputs}
                    ></input>
                  </div>

                  <div className="feedback-input-message mb-4">
                    <textarea
                      className="feedback-message"
                      name="message"
                      value={userData.message}
                      onChange={handleInputs}
                      placeholder="Enter Your Feedback"
                    ></textarea>
                    {errors.message && (
                      <div className="error-message">{errors.message}</div>
                    )}
                  </div>

                  <div className="feedback-submit-button">
                    <button
                      className="feedback-form-submit"
                      name="signup"
                      id="signup"
                      value="register"
                      onClick={contactForm}
                    >
                      Send Feedback
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Feedback;
